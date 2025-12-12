import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";
import { getTransporter, getSender } from "@/lib/email";

// This route is called by Vercel Cron
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // 1. Calculate "Tomorrow's" date
    // Note: Server time is usually UTC. We need to be careful with timezones.
    // Assuming we want to remind people 1 day before.
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dateString = tomorrow.toISOString().split("T")[0]; // YYYY-MM-DD

    console.log(`Checking reminders for: ${dateString}`);

    // Cleanup: Delete expired bookings (yesterday)
    // San Jose is UTC-8 (Standard) or UTC-7 (Daylight). 
    // If this runs at 12:00 AM PST, "yesterday" is the day before.
    // We can just delete the key for "yesterday".
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split("T")[0];
    const cleanupKey = `cpr:schedule:${yesterdayString}`;
    
    try {
      await redis.del(cleanupKey);
      console.log(`Cleaned up expired bookings for: ${yesterdayString}`);
    } catch (cleanupError) {
      console.error("Cleanup error:", cleanupError);
    }

    // 2. Fetch bookings for tomorrow from Redis
    // Key format: cpr:schedule:{YYYY-MM-DD}
    const key = `cpr:schedule:${dateString}`;
    const rawBookings = await redis.lrange(key, 0, -1);

    if (!rawBookings || rawBookings.length === 0) {
      return NextResponse.json({ message: "No bookings found for tomorrow." });
    }

    console.log(`Found ${rawBookings.length} bookings to remind.`);

    // 3. Send emails
    const results = await Promise.all(
      rawBookings.map(async (rawBooking: string) => {
        let booking;
        try {
          booking = JSON.parse(rawBooking);
        } catch (e) {
          console.error("Failed to parse booking JSON", e);
          return { status: "failed", error: "Invalid JSON" };
        }

        const { fullName, email, courseType, locale, preferredDate, organization } = booking;
        
        // Determine sender based on organization (Daycare vs Waymaker)
        const isDaycare = organization && organization !== "Waymaker CPR";
        const emailType = isDaycare ? "daycare" : "waymaker";
        const transporter = getTransporter(emailType);
        const sender = getSender(emailType);

        const subject = locale === "en" 
          ? `Reminder: Upcoming Event Tomorrow - ${courseType}`
          : `提醒：明日活動 - ${courseType}`;

        const htmlContent = locale === "en" ? `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2F4858;">Event Reminder</h2>
            <p>Dear ${fullName},</p>
            <p>This is a friendly reminder that your event is scheduled for tomorrow.</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Event:</strong> ${courseType}</p>
              <p><strong>Date:</strong> ${preferredDate.replace("T", " ")}</p>
              <p><strong>Location:</strong> ${organization || "Waymaker CPR"}</p>
            </div>

            <p>We look forward to seeing you!</p>
            <p>Waymaker CPR Team</p>
          </div>
        ` : `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2F4858;">活動提醒</h2>
            <p>親愛的 ${fullName} 您好，</p>
            <p>溫馨提醒您，您的預約活動將於明日舉行。</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>活動：</strong> ${courseType}</p>
              <p><strong>時間：</strong> ${preferredDate.replace("T", " ")}</p>
              <p><strong>地點：</strong> ${organization || "Waymaker CPR"}</p>
            </div>

            <p>期待與您相見！</p>
            <p>Waymaker CPR 團隊</p>
          </div>
        `;

        try {
          await transporter.sendMail({
            from: `"Waymaker CPR Reminder" <${sender}>`,
            to: email,
            subject: subject,
            html: htmlContent,
          });
          return { email, status: "sent" };
        } catch (err) {
          console.error(`Failed to send reminder to ${email}`, err);
          return { email, status: "failed" };
        }
      })
    );

    return NextResponse.json({ 
      success: true, 
      date: dateString,
      results 
    });

  } catch (error) {
    console.error("Cron job failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

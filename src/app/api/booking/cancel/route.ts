import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";
import { getTransporter, getSender } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, date } = body;

    if (!id || !date) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const key = `cpr:schedule:${date}`;
    const rawBookings = await redis.lrange(key, 0, -1);

    if (!rawBookings || rawBookings.length === 0) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    let bookingToRemove = null;
    let rawBookingToRemove = "";

    for (const rawBooking of rawBookings) {
      try {
        const booking = JSON.parse(rawBooking);
        if (booking.id === id) {
          bookingToRemove = booking;
          rawBookingToRemove = rawBooking;
          break;
        }
      } catch (e) {
        console.error("Error parsing booking JSON", e);
      }
    }

    if (!bookingToRemove) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    // Remove from Redis
    await redis.lrem(key, 1, rawBookingToRemove);
    console.log(`Cancelled booking ${id} for date ${date}`);

    // Send cancellation email to Admin
    const isDaycare = bookingToRemove.organization && bookingToRemove.organization !== "Waymaker CPR";
    const emailType = isDaycare ? "daycare" : "waymaker";
    const targetEmail = "info@waymakerbiz.com";
    const transporter = getTransporter(emailType);
    const sender = getSender(emailType);

    const adminSubject = `❌ Booking Cancelled - ${bookingToRemove.fullName}`;
    const adminContent = `
      Booking Cancelled
      =================
      Name: ${bookingToRemove.fullName}
      Date: ${bookingToRemove.preferredDate}
      Course: ${bookingToRemove.courseType}
      Email: ${bookingToRemove.email}
      Phone: ${bookingToRemove.phone}
      Reason: User cancelled via email link.
    `;

    await transporter.sendMail({
      from: `"Waymaker System" <${sender}>`,
      to: targetEmail,
      cc: isDaycare ? "daycare@waymakerbiz.com" : undefined,
      subject: adminSubject,
      text: adminContent,
    });

    // Send confirmation to User
    const userSubject = bookingToRemove.locale === "en" 
      ? "Booking Cancellation Confirmed" 
      : "預約取消確認";
    
    const userContent = bookingToRemove.locale === "en"
      ? `Dear ${bookingToRemove.fullName},\n\nYour booking for ${bookingToRemove.courseType} on ${bookingToRemove.preferredDate} has been successfully cancelled.\n\nPlease note: If you have added this event to your calendar, please remember to remove it manually.\n\nIf this was a mistake, please book again on our website.`
      : `親愛的 ${bookingToRemove.fullName} 您好，\n\n您預約的 ${bookingToRemove.courseType} (${bookingToRemove.preferredDate}) 已成功取消。\n\n提醒您：如果您之前已將此活動加入行事曆，請記得手動移除。\n\n如果這是誤操作，請重新至網站預約。`;

    await transporter.sendMail({
      from: `"Waymaker CPR" <${sender}>`,
      to: bookingToRemove.email,
      subject: userSubject,
      text: userContent,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Cancellation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

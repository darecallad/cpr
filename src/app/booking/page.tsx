export default function BookingPage() {
  return (
    <section className="px-8 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Booking</h1>
      <p className="text-lg leading-relaxed mb-8">
        Schedule your CPR or first aid training session today. Our classes are interactive, hands-on,
        and tailored to meet the needs of childcare providers.
      </p>

      <div className="p-6 bg-gray-100 rounded-lg">
        <p className="mb-4">Please contact us directly to reserve your spot:</p>
        <ul className="space-y-2">
          <li><strong>Email:</strong> info@waymaker.com</li>
          <li><strong>Phone:</strong> +1 (123) 456-7890</li>
        </ul>
      </div>
    </section>
  );
}

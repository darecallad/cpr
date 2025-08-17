// src/app/contact/page.tsx
"use client";

import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
  <section className="bg-[#e6f4f1] px-8 py-16 min-h-screen">
    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-10 text-primary">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Info */}
        <div className="space-y-6 text-base text-gray-800">
          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1" />
            <span>(123) 456-7990</span>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1" />
            <span>info@waymaker.com</span>
          </div>

          <div className="flex items-start gap-4">
            {/* 模擬 LINE icon */}
            <Image src="/line-icon.png" alt="LINE" width={24} height={24} className="mt-1" />
            <span>@waymaker</span>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1" />
            <span>
              25386 Seaboard Ave<br />
              San Jose, CA 95131
            </span>
          </div>
        </div>

        {/* Right: Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=2586%20Seaboard%20Ave%2C%20San%20Jose%2C%20CA%2095131&output=embed"
            allowFullScreen
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h2>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-3 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-md p-3 w-full"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="border border-gray-300 rounded-md p-3 w-full"
          />

          <button
            type="submit"
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}

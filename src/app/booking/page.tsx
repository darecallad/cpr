"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 2)); // March 2024
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Convert Sunday = 0 to Monday = 0
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  return (
    <section className="bg-gray-50 px-8 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#2C5F5A] text-center">Booking</h1>
        <p className="text-center text-gray-700 mb-8">
          Please fill out the form below to book a course. We will confirm<br />
          the date and send payment details as soon as possible.
        </p>

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name (required)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone (required)
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address (required)
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Organization and Calendar Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedDate ? `${currentMonth.getMonth() + 1}/${selectedDate}/${currentMonth.getFullYear()}` : ''}
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requests
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Attendees
              </label>
              {/* Calendar Component */}
              <div className="border border-gray-300 rounded-md p-4 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={() => navigateMonth('prev')}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <h3 className="font-medium">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    type="button"
                    onClick={() => navigateMonth('next')}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentMonth).map((day, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => day && setSelectedDate(day)}
                      className={`p-2 text-sm rounded hover:bg-gray-100 transition-colors ${
                        day === null 
                          ? 'invisible' 
                          : selectedDate === day 
                            ? 'bg-green-500 text-white hover:bg-green-600' 
                            : 'text-gray-700'
                      }`}
                      disabled={day === null}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#4CAF50] text-white font-bold py-3 px-8 rounded-md hover:bg-[#45a049] transition-colors"
            >
              SUBMIT
            </button>
          </div>

          {/* Payment Info */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              We accept credit card payment through our secure online system.<br />
              Your information is protected by encryption.
            </p>
            
            {/* Space for Visa/Mastercard icons */}
            <div className="flex justify-center items-center space-x-4">
              <div className="w-12 h-8 bg-gray-200 rounded border flex items-center justify-center">
                <span className="text-xs text-gray-500">VISA</span>
              </div>
              <div className="w-12 h-8 bg-gray-200 rounded border flex items-center justify-center">
                <span className="text-xs text-gray-500">MC</span>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              We're accept → [Payment Icons Space]
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

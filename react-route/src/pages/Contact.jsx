import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h1>

        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold">📍 Address:</span>
            <br />
            MMMXMAJNJKFNWKFNJE
          </p>

          <p>
            <span className="font-semibold">📞 Phone:</span>
            <br />
            +91 98765 43210
          </p>

          <p>
            <span className="font-semibold">✉️ Email:</span>
            <br />
            contact@example.com
          </p>

          <p>
            <span className="font-semibold">🕒 Working Hours:</span>
            <br />
            Monday - Friday: 9:00 AM - 6:00 PM
          </p>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Get In Touch
        </button>
      </div>
    </div>
  );
}

export default Contact;
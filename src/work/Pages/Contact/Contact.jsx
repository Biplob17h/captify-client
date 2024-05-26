// src/ContactUs.js

import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="hidden lg:block bg-black text-white p-8 rounded-lg shadow-lg ml-4 -mt-20">
        <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
        <p className="mb-4">
          <strong>Email:</strong> captify@example.com
        </p>
        <p className="mb-4">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Address:</strong> 123 Demo Street, Demo City, Country
        </p>
      </div>
      <div className="bg-[#242323] text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 ml-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="customBtn1 w-full"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

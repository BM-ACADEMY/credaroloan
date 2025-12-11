import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EnquiryForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    location: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // --- 1. SPECIAL VALIDATION FOR MOBILE ---
    if (name === "mobile") {
      // Only allow if the value is Numbers (0-9) AND length is <= 10
      if (/^\d*$/.test(value) && value.length <= 10) {
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Google Web App URL
    const googleScriptURL = "https://script.google.com/macros/s/AKfycbyPROrkOyUgBd3-5RjPfmSdxzNbfM4YvaNpNtO_d4fHhhvY8km9VBGWzX9r-zpL7qyk/exec";

    try {
      // 1. Manually stringify the JSON payload
      const requestBody = JSON.stringify(form);

      // 2. Send as "text/plain" to avoid the CORS Preflight (OPTIONS) check
      await axios.post(googleScriptURL, requestBody, {
        headers: { "Content-Type": "text/plain;charset=utf-8" },
      });

      toast.success("Enquiry sent successfully!");

      setForm({
        name: "",
        email: "",
        company: "",
        industry: "",
        location: "",
        mobile: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md px-4">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-xl font-bold"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Enquiry Form
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter 10-digit mobile number"
                value={form.mobile}
                onChange={handleChange}
                required
                maxLength="10"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Enter company name"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Industry */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Industry <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="industry"
                placeholder="e.g. Manufacturing, IT, Retail"
                value={form.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="City or State"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Message (if any)
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#192d51] hover:bg-[#192d51]/90 text-white font-bold rounded-md transition duration-300 shadow-md"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
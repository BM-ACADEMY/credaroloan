import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EnquiryForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "", // new field
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://loanguruweb.onrender.com/send-email", form);
      toast.success(res.data.message);
      setForm({ name: "", phone: "", email: "", address: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-4">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative">
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
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Write your message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

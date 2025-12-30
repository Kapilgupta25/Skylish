import React, { useState } from "react";
import bgImage from "./assets/bgSkylish.jpeg";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbytG2WquvOYp2LNBeYn9k0P47A91_SjK6r2ev5fs-_1JeRSmGziR4dx4QQyb4WeR5CH/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(form),
        }
      );

      alert("Data submitted successfully!");
      setForm({ name: "", mobile: "", email: "" });
    } catch {
      alert("Submission failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CARD */}
      <div className="relative z-10 max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-600 to-gray-700 rounded-2xl shadow-2xl p-8">

        {/* TITLE */}
        <h1 className="text-3xl text-center font-bold text-white mb-2">
          Skylish for You
        </h1>

        <p className="text-center text-gray-300 mb-6">
          We'd love to hear from you
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-gray-900 text-white
              border border-gray-600
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-gray-900 text-white
              border border-gray-600
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-gray-900 text-white
              border border-gray-600
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-xl text-lg font-semibold text-white
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              hover:opacity-90 hover:scale-[1.02]
              transition-all
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

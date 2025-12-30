import React, { useState } from "react";

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
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      
      {/* COLORFUL CARD */}
      <div className="
        w-full max-w-md
        bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400
        rounded-3xl shadow-2xl p-8
      ">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Get in Touch
        </h1>

        <p className="text-white/80 text-center mb-8">
          We'd love to hear from you
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              hover:scale-[1.02] transition-transform
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

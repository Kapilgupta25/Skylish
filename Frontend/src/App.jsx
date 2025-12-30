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

      {/* CARD */}
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900 via-gray-600 to-gray-700 rounded-2xl shadow-2xl p-8">

        {/* TITLE */}
        <h1 className="text-3xl text-center font-bold text-white mb-2">
          Skylish for you
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl text-white p-8 space-y-5"
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
              w-full py-3 rounded-xl text-xl text-white font-semibold
              bg-blue-500
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

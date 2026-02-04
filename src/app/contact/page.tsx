"use client";

import { Mail, Instagram, Youtube, Globe, Phone, Send, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // FUTURE: connect /api/contact route
    console.log("Submitted:", form);

    alert("Your message has been received. The Magik Prince will get back to you shortly.");

    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white pt-32 pb-20 px-6">
      {/* =======================
           PAGE HEADER
      ======================== */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-6xl md:text-7xl font-black mb-4">
          <span className="text-white">GET IN</span>{" "}
          <span className="text-red-600">TOUCH</span>
        </h1>

        <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto mb-6" />

        <p className="text-gray-400 text-lg">
          For bookings, collaborations, consulting, or creative partnerships —
          let’s build something unforgettable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* =======================
             FORM SECTION
        ======================== */}
        <div className="bg-white/5 border border-red-600/20 rounded-3xl p-10 backdrop-blur-sm">
          <h2 className="text-3xl font-black mb-8">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white outline-none
                focus:border-red-600 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white outline-none
                focus:border-red-600 transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">Phone (Kenya / Intl.)</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+254 700 000000"
                className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white outline-none
                focus:border-red-600 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your event, brand, idea, or collaboration..."
                className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white outline-none resize-none
                focus:border-red-600 transition-all"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-5 rounded-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600
              font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-600/30"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            <p className="text-xs text-gray-500 mt-2">
              For faster booking responses, include:  
              <span className="text-red-400 font-semibold"> date, venue, city, audience size</span>.
            </p>
          </form>
        </div>

        {/* =======================
             CONTACT OPTIONS
        ======================== */}
        <div className="space-y-6">

          {/* Email */}
          <a
            href="mailto:info@magik.co.ke"
            className="block bg-white/5 border border-white/10 hover:border-red-600 rounded-2xl p-8 transition-all"
          >
            <Mail className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-black mb-1">Email</h3>
            <p className="text-gray-400">info@magik.co.ke</p>
          </a>

          {/* Phone / WhatsApp */}
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            className="block bg-white/5 border border-white/10 hover:border-red-600 rounded-2xl p-8 transition-all"
          >
            <Phone className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-black mb-1">Phone / WhatsApp</h3>
            <p className="text-gray-400">+254 793 595290</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/its.magik__/"
            target="_blank"
            className="block bg-white/5 border border-white/10 hover:border-red-600 rounded-2xl p-8 transition-all"
          >
            <Instagram className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-black mb-1">Instagram</h3>
            <p className="text-gray-400">its.magik__</p>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@djmagik254"
            target="_blank"
            className="block bg-white/5 border border-white/10 hover:border-red-600 rounded-2xl p-8 transition-all"
          >
            <Youtube className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-black mb-1">YouTube</h3>
            <p className="text-gray-400">DJ MAGIK TV </p>
          </a>

          {/* Website */}
          <a
            href="https://www.magik.co.ke/"
            target="_blank"
            className="block bg-white/5 border border-white/10 hover:border-red-600 rounded-2xl p-8 transition-all"
          >
            <Globe className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-black mb-1">Website</h3>
            <p className="text-gray-400">www.magik.co.ke</p>
          </a>

        </div>
      </div>
    </div>
  );
}

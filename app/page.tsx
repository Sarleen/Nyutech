'use client';

import React, { useState } from 'react';

export default function NyutechHome() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const products = [
    {
      category: 'Digital Signage',
      items: [
        'Store Front Hanging Screen',
        'Digital Signage (Commercial Screens)',
        'Stretched Display',
        'Floor‑Standing Video Wall',
        'Custom Digital Window Displays',
      ],
    },
    {
      category: 'LED Modules & Walls',
      items: [
        'High Brightness Customized LED Displays',
        'Indoor Fine‑Pitch LED Panels',
        'Outdoor High‑Reliability Screens',
        'Curved and Corner‑Edge LED Walls',
      ],
    },
    {
      category: 'Digital Standee & Kiosks',
      items: [
        'T‑Type Digital Standee (Indoor & Outdoor)',
        'A‑Type Digital Standee (Indoor & Outdoor)',
        'Touch‑Screen Info Kiosks',
        'AI‑Powered Interactive Displays',
      ],
    },
  ];

  return (
    // -------------------------------------------------------
    // 1. LUXURY BLACK THEME BASE
    // -------------------------------------------------------
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 font-sans overflow-x-hidden relative">
      {/* FULL‑PAGE FROSTED GLASS OVERLAY */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-3xl
                   bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_60%)]
                   pointer-events-none"
      />

      {/* WRAPPER FOR ALL CONTENT */}
      <div className="relative z-10">

        {/* HEADER – Dark luxury black bar */}
        <header className="border-b border-white/10 py-6 px-8 flex justify-between items-center bg-gradient-to-r from-black to-slate-900/90 text-white shadow-lg">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-normal">
              NYU<span className="text-blue-400">tech</span>
            </h1>
            <p className="text-xs tracking-[0.3em] text-slate-400 uppercase mt-0.5">
              Premium AV & Digital Media
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <a
              href="mailto:nyutech@hotmail.com"
              className="text-sm font-bold hover:text-blue-300 transition-colors"
            >
              nyutech@hotmail.com
            </a>
            <button
              onClick={() => {
                setShowEnquiry(true);
                setSubmitted(false);
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-6 py-2 rounded-full font-bold tracking-wider uppercase shadow-md"
            >
              Project Enquiry
            </button>
          </div>
        </header>

        {/* HERO – black + blue gradient with frosted‑glass feel */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-28 md:py-36 px-6 text-center relative overflow-hidden">
          {/* Subtle radial glow overlay */}
          <div
            className="absolute inset-0 opacity-30
                       bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.25),transparent_80%)]
                       backdrop-blur-md pointer-events-none"
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block text-blue-300 text-sm tracking-widest mb-1 uppercase font-semibold">
              Elevate Your Brand
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight mb-3">
              Digital Signage{' '}
              <span className="text-blue-400">That Shines</span>
            </h2>
            <p className="text-xl text-slate-300 italic mb-8 max-w-2xl mx-auto">
              Premium screens, advanced LED modules, and interactive displays for retail, corporate, and events.
            </p>
            <button
              onClick={() => {
                setShowEnquiry(true);
                setSubmitted(false);
              }}
              className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-blue-500/20 transform hover:scale-105 transition-all duration-200"
            >
              Book a FREE Consultation
            </button>
          </div>
        </section>

        {/* PRODUCT LIST – black‑luxury card grid */}
        <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
              Our Products
            </h3>
            <p className="text-slate-400 text-lg mt-3 max-w-2xl mx-auto">
              High‑brightness commercial displays and modular LED walls trusted by premium retail and experiential brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-slate-900/70 backdrop-blur-sm border border-white/10 rounded-2xl p-6
                           hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-1
                           transition-all duration-300"
              >
                <h4 className="text-xl font-extrabold mb-4 uppercase text-blue-400">
                  {product.category}
                </h4>

                <ul className="space-y-2 text-slate-200">
                  {product.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 border-l-4 border-blue-500/50 pl-4 py-0.5"
                    >
                      <span className="text-sm leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* WHY DIGITAL STANDEE – consultative black luxury */}
        <section className="bg-gradient-to-r from-slate-950/90 to-slate-900/80 text-slate-100 py-20 px-6 md:px-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-blue-300 text-sm tracking-widest mb-2 uppercase font-bold">
                Our Edge
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase">
                Why Digital Standee?
              </h3>
              <p className="text-blue-200 text-lg italic mb-6">
                Smart, premium advertising for luxury retail and experiential spaces.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Premium digital standees and kiosks deliver cinematic content and interactive experiences that attract attention, enhance brand prestige, and increase engagement in high‑traffic environments.
              </p>
              <button
                onClick={() => {
                  setShowEnquiry(true);
                  setSubmitted(false);
                }}
                className="mt-2 bg-transparent border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-full font-bold text-xs tracking-wider transition-colors"
              >
                Get a FREE Media Audit
              </button>
            </div>

            <ul className="grid gap-3">
              {[
                'Cinematic visual impact',
                'Instant content updates from anywhere',
                'Elevates brand image',
                'Boosts customer engagement',
                'Ideal for luxury retail & events',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 py-1 text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                  <span className="text-sm leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FOOTER – ultra‑dark */}
        <footer className="bg-slate-950 text-slate-400 text-center py-8 text-xs tracking-wider">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="text-blue-300">NYU<span className="text-white">tech</span></span>{' '}
            Digital Media |{' '}
            <a
              href="https://www.nyutech.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-300 transition-colors"
            >
              www.nyutech.ca
            </a>
          </p>
        </footer>

        {/* ENQUIRY POPUP – luxury black‑glass card */}
        {showEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div
              className="bg-gradient-to-br from-slate-950/95 to-slate-900/90
                         w-full max-w-md rounded-2xl p-7 shadow-2xl shadow-blue-500/10
                         relative border border-white/10"
            >
              <button
                onClick={() => setShowEnquiry(false)}
                className="absolute top-3 right-3 text-xl text-slate-400 hover:text-slate-200 transition-colors"
              >
                ✕
              </button>

              {!submitted ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Project Enquiry
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Tell us about your project, and we’ll suggest the right digital signage setup.
                    </p>
                  </div>
                  <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const payload = {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        message: formData.get('message'),
                      };

                      const res = await fetch('/api/enquiry', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload),
                      });

                      if (res.ok) {
                        setSubmitted(true);
                      }
                    }}
                  >
                    <input
                      name="name"
                      required
                      placeholder="Full Name"
                      className="w-full bg-slate-800 border border-white/20 px-4 py-3 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full bg-slate-800 border border-white/20 px-4 py-3 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full bg-slate-800 border border-white/20 px-4 py-3 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                      name="message"
                      required
                      placeholder="Tell us about your project (location, screen types, budget range)"
                      rows={4}
                      className="w-full bg-slate-800 border border-white/20 px-4 py-3 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-3 rounded-lg font-bold uppercase text-sm tracking-wider shadow-md transform hover:scale-105 transition-all duration-200"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-400 text-sm">
                    We’ve received your enquiry and will contact you within one business day.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

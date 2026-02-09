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
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      {/* HEADER – Dark, sleek, and premium */}
      <header className="border-b border-slate-800/30 py-6 px-8 flex justify-between items-center bg-gradient-to-r from-black to-slate-900 text-white shadow-md">
        <div>
          <h1 className=" text-2xl md:text-3xl font-bold tracking-normal">
            NYU<span className="text-blue-400">tech</span>
          </h1>
          <p className="text-xs tracking-[0.3em] text-slate-400 uppercase mt-0.5">
            Premium AV & Digital Media
          </p>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2 text-right">
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
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-6 py-2 rounded-full font-bold tracking-wider uppercase shadow-md"
          >
            Project Enquiry
          </button>
        </div>
      </header>

      {/* HERO – more luxurious, “high‑end electronics” feel */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-28 md:py-36 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block text-blue-300 text-sm tracking-widest mb-1 uppercase font-semibold">
            Elevate Your Brand
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight mb-3">
            Digital Signage{' '}
            <span className="text-blue-300">That Shines</span>
          </h2>
          <p className="text-xl text-slate-300 italic mb-8 max-w-2xl mx-auto">
            Premium screens, advanced LED modules, and interactive displays for retail, corporate, and events.
          </p>
          <button
            onClick={() => {
              setShowEnquiry(true);
              setSubmitted(false);
            }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg transform hover:scale-105 duration-200"
          >
            Book a FREE Consultation
          </button>
        </div>
      </section>

      {/* PRODUCT LIST – grid cards with micro‑shadow and softer colors */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Our Products
          </h3>
          <p className="text-slate-500 text-lg mt-3 max-w-2xl mx-auto">
            High‑brightness commercial displays and modular LED walls trusted by premium retail and experiential brands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              <h4 className="text-xl font-extrabold mb-4 uppercase text-blue-600">
                {product.category}
              </h4>

              <ul className="space-y-2 text-slate-700">
                {product.items.map((item, i) => (
                  <li
                    key={i}
                    className="border-l-4 border-blue-400 pl-4 py-0.5"
                  >
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DIGITAL STANDEE – more elegant and “consultative” */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-10">
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

      {/* FOOTER – cleaner, more corporate/luxury feel */}
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

      {/* ENQUIRY POPUP – more polished and “client‑friendly” */}
      {showEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl p-7 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-3 right-3 text-xl text-slate-500 hover:text-slate-700 transition-colors"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    Project Enquiry
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
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
                    className="w-full border border-slate-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full border border-slate-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full border border-slate-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your project (location, screen types, budget range)"
                    rows={4}
                    className="w-full border border-slate-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold uppercase text-sm tracking-wider shadow-md transform hover:scale-105 transition-all"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
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
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-600 text-sm">
                  We’ve received your enquiry and will contact you within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';

export default function NyutechHome() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const products = [
    // ... your products as before
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black relative">
      {/* Full‑page “frosted glass” overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl pointer-events-none"></div>

      {/* Your existing layout */}
      <div className="relative z-10 bg-transparent text-slate-900 font-sans overflow-x-hidden">
        {/* HEADER */}
        <header className="border-b border-slate-800/30 py-6 px-8 flex justify-between items-center bg-gradient-to-r from-black to-slate-900 text-white shadow-md">
          {/* ... same as your header */}
        </header>

        {/* HERO (rest is the same) */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-28 md:py-36 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* ... your hero content */}
          </div>
        </section>

        {/* PRODUCT LIST */}
        <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
          {/* same product grid */}
        </section>

        {/* WHY DIGITAL STANDEE */}
        <section className="bg-slate-900 text-white py-20 px-6 md:px-10">
          {/* same section */}
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-950 text-slate-400 text-center py-8 text-xs tracking-wider">
          {/* same footer */}
        </footer>

        {/* ENQUIRY POPUP */}
        {showEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            {/* same modal */}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';
import React, { useState } from 'react';

export default function NyutechHome() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const products = [
    {
      category: 'Digital Signage',
      items: [
        { name: 'Store Front Hanging Screen', price: 'From $1,499' },
        { name: 'Digital Signage (Commercial Screens)', price: 'From $480' },
        { name: 'Stretched Display', price: 'From $890' },
        { name: 'Digital Menu Boards', price: 'From $650' },
        { name: 'LCD Wall', price: 'From $2,100' },
      ],
    },
    {
      category: 'LED Modules & Walls',
      items: [
        { name: 'High Brightness Customized LED Displays', price: 'From $1,500' },
        { name: 'Indoor Fine‑Pitch LED Panels', price: 'From $2,450' },
      ],
    },
    {
      category: 'Digital Standee & Kiosks',
      items: [
        { name: 'T‑Type Digital Standee (Indoor & Outdoor)', price: 'From $1,190' },
        { name: 'A‑Type Digital Standee (Indoor & Outdoor)', price: 'From $599' },
        { name: 'Touch‑Screen Info Kiosks', price: 'From $2,480' },
        { name: 'AI‑Powered Interactive Displays', price: 'From $1,980' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 font-sans overflow-x-hidden relative">
      {/* Frosted overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none"
      />

      <div className="relative z-10">
        {/* HEADER */}
        <header className="border-b border-white/10 py-6 px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gradient-to-r from-black to-slate-900/90 text-white shadow-lg">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              NYU<span className="text-blue-400">tech</span>
            </h1>
            <p className="text-xs tracking-[0.3em] text-slate-400 uppercase mt-1">
              Premium Commercial Screens
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-3">
            <a
              href="mailto:nyutech@hotmail.com"
              className="text-sm font-semibold hover:text-blue-300 transition-colors"
            >
              nyutech@hotmail.com
            </a>
            <button
              onClick={() => {
                setShowEnquiry(true);
                setSubmitted(false);
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-7 py-2.5 rounded-full font-bold uppercase tracking-wider shadow-md transition-all"
            >
              Project Enquiry
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-24 sm:py-32 md:py-40 px-6 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.25),transparent_80%)] backdrop-blur-md pointer-events-none"
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block text-blue-300 text-sm md:text-base tracking-widest mb-2 uppercase font-semibold">
              Elevate Your Brand
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight mb-4 md:mb-6">
              Digital Signage <span className="text-blue-400">That Shines</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 italic mb-8 max-w-3xl mx-auto">
              Premium screens, advanced LED modules, and interactive displays for retail, corporate, and events.
            </p>
            <button
              onClick={() => {
                setShowEnquiry(true);
                setSubmitted(false);
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl shadow-blue-600/20 hover:scale-105 transition-all duration-300"
            >
              Book a FREE Consultation
            </button>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-16 sm:py-20 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Our Products
            </h3>
            <p className="text-slate-400 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
              High-brightness commercial displays and modular LED solutions trusted by premium brands.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {products.map((category, catIndex) => (
              <div key={catIndex}>
                <h4 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center md:text-left">
                  {category.category}
                </h4>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((product, idx) => (
                    <div
                      key={idx}
                      className="group bg-slate-900/70 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 flex flex-col"
                    >
                      {/* Placeholder image */}
                      <div className="w-full aspect-[4/3] md:aspect-video bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl md:rounded-2xl mb-6 overflow-hidden group-hover:scale-[1.03] transition-transform duration-400">
                        <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm font-medium">
                          [Product Image – {product.name}]
                        </div>
                      </div>

                      <div className="flex justify-between items-start mb-5 flex-grow">
                        <h5 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                          {product.name}
                        </h5>
                        <div className="text-right shrink-0 ml-4">
                          <div className="text-xl md:text-2xl font-bold text-green-400">
                            {product.price}
                          </div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">
                            per unit
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setShowEnquiry(true);
                          setSubmitted(false);
                        }}
                        className="mt-auto bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white py-3 px-6 rounded-xl font-semibold text-sm uppercase tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                      >
                        Get Quote
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT US */}
        <section className="py-16 sm:py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-slate-800/50">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
              About Us
            </h3>
            <p className="text-slate-400 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
              Delivering cutting-edge digital display solutions across Canada
            </p>
          </div>

          <div className="prose prose-slate prose-invert max-w-none text-slate-300 text-lg leading-relaxed space-y-6">
            <p>
              NYUtech is a Vancouver-based provider of premium commercial digital signage, LED displays, and interactive kiosk solutions. 
              We specialize in high-brightness screens and custom LED walls designed for retail environments, corporate lobbies, restaurants, 
              event spaces, and outdoor applications.
            </p>

            <p>
              With years of experience in the visual communication industry, we help businesses elevate their brand presence through 
              reliable, high-performance display technology. From single menu boards to large-scale video walls, every project receives 
              personalized attention — from initial consultation through to installation and ongoing support.
            </p>

            <p>
              Our mission is simple: deliver displays that perform exceptionally in demanding commercial environments while offering 
              outstanding value and responsive service to every client.
            </p>

            {/* You can add more paragraphs, bullet points, or even a team photo placeholder here */}
            {/* <p className="mt-8">...</p> */}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-950 text-slate-500 text-center py-10 text-sm border-t border-slate-800/50">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="text-blue-400 font-medium">NYUtech</span> Digital Media Solutions
          </p>
          <p className="mt-2">
            <a
              href="https://www.nyutech.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              www.nyutech.ca
            </a>
            {' '}•{' '}
            <a href="mailto:nyutech@hotmail.com" className="hover:text-blue-300 transition-colors">
              nyutech@hotmail.com
            </a>
          </p>
        </footer>

        {/* ENQUIRY MODAL */}
        {showEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
            <div
              className="bg-gradient-to-br from-slate-950/95 to-slate-900/90 w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-900/20 border border-white/10 relative"
            >
              <button
                onClick={() => setShowEnquiry(false)}
                className="absolute top-4 right-5 text-2xl text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              {!submitted ? (
                <>
                  <div className="text-center mb-7">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Project Enquiry
                    </h3>
                    <p className="text-slate-400 mt-2 text-sm sm:text-base">
                      Describe your project — we’ll recommend the perfect solution.
                    </p>
                  </div>

                  <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      // ← Add your real form submission logic here (fetch / Formspree / etc.)
                      setSubmitted(true);
                    }}
                  >
                    <input
                      name="name"
                      required
                      placeholder="Full Name"
                      className="w-full bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <textarea
                      name="message"
                      required
                      placeholder="Project details (location, display types, approximate budget, quantity...)"
                      rows={4}
                      className="w-full bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 py-3.5 rounded-xl font-bold uppercase tracking-wide shadow-lg mt-2 transition-all"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/15 mb-5">
                    <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-3">Thank You!</h3>
                  <p className="text-slate-300">We’ll get back to you within one business day.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

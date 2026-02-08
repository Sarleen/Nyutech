'use client';

import React, { useState } from 'react';

export default function NyutechHome() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const products = [
    {
      category: "Digital Signage",
      items: [
        "Store Front Hanging Screen",
        "Digital Signage (Commercial Screens)",
        "Stretched Display"
      ]
    },
    {
      category: "LED Modules",
      items: [
        "High Brightness Customized LED Displays"
      ]
    },
    {
      category: "Digital Standee",
      items: [
        "T-Type (Indoor & Outdoor)",
        "A-Type (Indoor & Outdoor)"
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-900">

      {/* HEADER */}
      <header className="border-b py-6 px-8 flex justify-between items-center bg-black text-white">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">NYUtech</h1>
          <p className="text-xs tracking-[0.4em] text-blue-400">DIGITAL MEDIA</p>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2">
          <a
            href="mailto:nyutech@hotmail.com"
            className="text-sm font-bold hover:text-blue-400"
          >
            nyutech@hotmail.com
          </a>

          <button
            onClick={() => {
              setShowEnquiry(true);
              setSubmitted(false);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-widest"
          >
            Enquiry
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-50 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4 uppercase">
          Boost Your Business
        </h2>
        <p className="text-2xl text-blue-600 italic">
          with Digital Display Solutions
        </p>
      </section>

      {/* PRODUCT LIST */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center underline decoration-blue-500 underline-offset-8">
          OUR PRODUCTS
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-extrabold mb-4 uppercase text-blue-600">
                {product.category}
              </h4>

              <ul className="space-y-3 text-slate-700">
                {product.items.map((item, i) => (
                  <li
                    key={i}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DIGITAL STANDEE */}
      <section className="bg-black text-white py-20 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-extrabold mb-4 uppercase">
              Why Digital Standee?
            </h3>
            <p className="text-blue-400 text-lg italic mb-6">
              Smart advertising for modern businesses
            </p>
            <p className="text-slate-300 leading-relaxed">
              Digital standees offer a powerful way to showcase dynamic content,
              promotions, and branding messages that attract attention and
              improve customer engagement instantly.
            </p>
          </div>

          <ul className="grid gap-4">
            {[
              "Eye-catching visual impact",
              "Instant content updates",
              "Enhances brand image",
              "Increases customer engagement",
              "Cost-effective marketing tool",
              "Ideal for retail, malls & events"
            ].map((item, i) => (
              <li
                key={i}
                className="border-l-4 border-blue-500 pl-4 py-2 text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-10 text-center text-xs tracking-widest">
        © {new Date().getFullYear()} NYUTECH DIGITAL MEDIA | www.nyutech.ca
      </footer>

      {/* ENQUIRY POPUP */}
      {showEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold mb-4">Enquiry</h3>

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
                  <input name="name" required placeholder="Your Name" className="w-full border px-3 py-2 rounded" />
                  <input name="email" type="email" required placeholder="Your Email" className="w-full border px-3 py-2 rounded" />
                  <input name="phone" type="tel" required placeholder="Phone Number" className="w-full border px-3 py-2 rounded" />
                  <textarea name="message" required placeholder="Message" rows={4} className="w-full border px-3 py-2 rounded" />

                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold uppercase"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Thank you!
                </h3>
                <p className="text-slate-600">
                  Our team will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

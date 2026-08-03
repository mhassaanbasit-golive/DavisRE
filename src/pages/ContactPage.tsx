import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Lock, Building2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isAccredited: 'Yes',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black font-sans pb-20">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Contact Our Dallas Headquarters.
          </h1>
          <p className="text-base text-gray-600 font-sans">
            Reach out to our executive acquisitions and investor relations team.
          </p>
        </div>
      </section>

      {/* 50/50 Editorial Split Layout */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Clean White Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#52B768]">
                  Investor Communication
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black mt-1">
                  Send a Confidential Inquiry
                </h3>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Stacey"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Davis"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sdavis@davis-re.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(214) 979-0400"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                      Are you an accredited investor?
                    </label>
                    <div className="flex items-center gap-6 pt-1">
                      {['Yes', 'No'].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer font-sans text-sm">
                          <input
                            type="radio"
                            name="accreditedToggle"
                            value={opt}
                            checked={formData.isAccredited === opt}
                            onChange={(e) => setFormData({ ...formData, isAccredited: e.target.value })}
                            className="accent-[#52B768] w-4 h-4"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1">
                      Message / Investment Criteria
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify asset class interest, capital allocation goals, or general inquiry..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#52B768]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#52B768] hover:bg-[#409753] text-white font-sans text-sm font-semibold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center font-sans flex items-center justify-center gap-1 mt-2">
                    <Lock className="w-3 h-3 text-[#52B768]" />
                    Confidential communications. davisRE Dallas Headquarters.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#52B768]/15 text-[#52B768] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-black">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-gray-600 font-sans max-w-sm mx-auto leading-relaxed">
                    Thank you. A member of our executive leadership team at 3000 San Jacinto St will review your inquiry and follow up promptly.
                  </p>
                </div>
              )}
            </div>

            {/* Right Side: Address Map and Contact Details */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-black">
                    Dallas Corporate Offices
                  </h3>
                  <p className="text-xs text-gray-500 font-sans uppercase tracking-wider mt-0.5">
                    davisRE Executive Leadership
                  </p>
                </div>

                <div className="space-y-4 text-sm font-sans text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#52B768] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black font-semibold">Office Address:</strong>
                      3000 San Jacinto St, Dallas, TX 75204, USA
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#52B768] shrink-0" />
                    <div>
                      <strong className="block text-black font-semibold">Direct Phone:</strong>
                      <a href="tel:2149790400" className="hover:text-[#52B768] transition-colors">
                        (214) 979-0400
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#52B768] shrink-0" />
                    <div>
                      <strong className="block text-black font-semibold">Executive Email:</strong>
                      <a href="mailto:sdavis@davis-re.com" className="hover:text-[#52B768] transition-colors">
                        sdavis@davis-re.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#52B768] shrink-0" />
                    <div>
                      <strong className="block text-black font-semibold">Business Hours:</strong>
                      Monday – Friday: 8:00 AM – 5:00 PM CST
                    </div>
                  </div>
                </div>
              </div>

              {/* Styled Clean Google Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-md h-72 relative bg-gray-100">
                <iframe
                  title="davisRE Headquarters Map"
                  src="https://maps.google.com/maps?q=3000%20San%20Jacinto%20St,%20Dallas,%20TX%2075204&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

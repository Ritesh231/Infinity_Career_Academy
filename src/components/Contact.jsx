import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' });
  const [sent, setSent] = useState(false);

  const courses = ['NDA Coaching', 'Police Bharti', 'CDS / Military', 'MPSC / Competitive', 'Physical Training', 'SSB Interview', 'Other'];

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Infinity Career Academy!\n\nName: ${form.name}\nPhone: ${form.phone}\nCourse Interested: ${form.course}\nMessage: ${form.message}\n\nSent from: infinitycareeracademy.in`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Light soft blue-cream background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEF2FF] to-[#FFFBF2]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2B6B]/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A2B6B]/8 border border-[#1A2B6B]/20 text-[#1A2B6B] text-xs font-bold tracking-[4px] uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1A2B6B] mb-4">
            Start Your <span className="bg-gradient-to-r from-[#C8941A] to-[#E05F00] bg-clip-text text-transparent">Defence Journey</span>
          </h2>
          <p className="text-[#1A2B6B]/60 max-w-xl mx-auto">
            आजच आमच्याशी संपर्क साधा — Reach out today and take the first step toward your dream career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E0D5C0] shadow-sm">
              <h3 className="text-2xl font-black text-[#1A2B6B] mb-6">Academy Details</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: '📍',
                    label: 'Address',
                    labelMr: 'पत्ता',
                    value: 'In front of Starlight, Bajajnagar, Waluj MIDC, Tal Gangapur',
                    sub: 'Dist. Chh. Sambhajinagar, Aurangabad, Maharashtra — 431136',
                  },
                  {
                    icon: '👤',
                    label: 'Director',
                    labelMr: 'संचालक',
                    value: 'Major Arun Suroshe (Retd.)',
                    sub: 'Indian Army Veteran',
                  },
                  {
                    icon: '📲',
                    label: 'Telegram',
                    labelMr: 'टेलिग्राम',
                    value: 't.me/infinityacademy121212',
                    link: 'https://t.me/infinityacademy121212',
                  },
                  {
                    icon: '📸',
                    label: 'Instagram',
                    labelMr: 'इंस्टाग्राम',
                    value: '@infinity_career_academy',
                    link: 'https://www.instagram.com/infinity_career_academy',
                  },
                  {
                    icon: '𝕏',
                    label: 'X (Twitter)',
                    labelMr: 'एक्स',
                    value: '@infinity_career_academy',
                    link: 'https://x.com/InfinityAcade11',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8941A]/15 to-[#E05F00]/15 border border-[#C8941A]/25 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#C8941A] uppercase tracking-wider">{item.label}</span>
                        <span className="text-xs text-[#C8941A]/50">/ {item.labelMr}</span>
                      </div>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer" className="text-[#1A2B6B] font-semibold hover:text-[#C8941A] transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[#1A2B6B] font-semibold text-sm">{item.value}</div>
                      )}
                      {item.sub && <div className="text-[#1A2B6B]/50 text-xs mt-0.5">{item.sub}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <a href="https://t.me/infinityacademy121212" target="_blank" rel="noreferrer"
                id="contact-telegram-btn"
                className="flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs sm:text-sm hover:bg-blue-100 hover:scale-105 transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                Telegram
              </a>
              <a href="https://www.instagram.com/infinity_career_academy" target="_blank" rel="noreferrer"
                id="contact-instagram-btn"
                className="flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl bg-pink-50 border border-pink-200 text-pink-700 font-bold text-xs sm:text-sm hover:bg-pink-100 hover:scale-105 transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a href="https://x.com/InfinityAcade11" target="_blank" rel="noreferrer"
                id="contact-x-btn"
                className="flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X (Twitter)
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="p-8 rounded-2xl bg-white border border-[#E0D5C0] shadow-sm">
            <h3 className="text-2xl font-black text-[#1A2B6B] mb-6">Send an Enquiry</h3>

            {sent && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-300 text-green-700 font-semibold text-sm flex items-center gap-2">
                <span>✅</span>
                Opening WhatsApp with your details...
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#C8941A] uppercase tracking-wider mb-1.5">
                  Full Name / पूर्ण नाव *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFBF2] border border-[#E0D5C0] text-[#1A2B6B] placeholder-[#1A2B6B]/35 focus:outline-none focus:border-[#C8941A] focus:ring-2 focus:ring-[#C8941A]/15 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#C8941A] uppercase tracking-wider mb-1.5">
                  Phone Number / फोन नंबर *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFBF2] border border-[#E0D5C0] text-[#1A2B6B] placeholder-[#1A2B6B]/35 focus:outline-none focus:border-[#C8941A] focus:ring-2 focus:ring-[#C8941A]/15 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#C8941A] uppercase tracking-wider mb-1.5">
                  Course Interested / अभ्यासक्रम
                </label>
                <select
                  id="contact-course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFBF2] border border-[#E0D5C0] text-[#1A2B6B] focus:outline-none focus:border-[#C8941A] focus:ring-2 focus:ring-[#C8941A]/15 transition-all text-sm"
                >
                  <option value="">Select a course...</option>
                  {courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#C8941A] uppercase tracking-wider mb-1.5">
                  Message / संदेश
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any questions or details about your preparation..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFBF2] border border-[#E0D5C0] text-[#1A2B6B] placeholder-[#1A2B6B]/35 focus:outline-none focus:border-[#C8941A] focus:ring-2 focus:ring-[#C8941A]/15 transition-all text-sm resize-none"
                />
              </div>
              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-extrabold text-base hover:shadow-xl hover:shadow-green-500/25 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import majorImg from '../assets/major_arun.png';

const values = [
  { icon: '🎯', title: 'Expert Guidance', mr: 'तज्ञ मार्गदर्शन', desc: 'Led by a retired Army Major with hands-on defence experience.' },
  { icon: '💪', title: 'Physical Fitness', mr: 'शारीरिक तंदुरुस्ती', desc: 'Daily PT drills tailored to police and defence physical standards.' },
  { icon: '📖', title: 'Academic Excellence', mr: 'शैक्षणिक उत्कृष्टता', desc: 'Strong academic coaching for written exams with study material.' },
  { icon: '🤝', title: 'Personal Mentorship', mr: 'वैयक्तिक मार्गदर्शन', desc: 'Every student gets personal attention and career counselling.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft blue-tinted section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEF2FF] via-[#F5F0E8] to-[#EEF2FF]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2B6B]/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A2B6B]/8 border border-[#1A2B6B]/20 text-[#1A2B6B] text-xs font-bold tracking-[4px] uppercase mb-4">
            About The Academy
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1A2B6B]">
            Led by <span className="bg-gradient-to-r from-[#C8941A] to-[#E05F00] bg-clip-text text-transparent">Courage and Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image side */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#C8941A] to-[#E05F00] blur-sm opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden border border-[#E0D5C0] shadow-xl">
              <img
                src={majorImg}
                alt="Major Arun Suroshe guiding students at Infinity Career Academy"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#C8941A] to-[#E05F00] flex items-center justify-center text-xl flex-shrink-0">
                    🎖️
                  </div>
                  <div>
                    <div className="text-[#1A2B6B] font-black text-lg leading-tight">Major Arun Suroshe (Retd.)</div>
                    <div className="text-[#C8941A] text-sm font-semibold">संचालक — Infinity Career Academy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-300 text-green-700 text-sm font-bold">
              🇮🇳 Indian Army Veteran — Serving the Nation Through Education
            </div>

            <h3 className="text-3xl font-black text-[#1A2B6B] leading-tight">
              Turning Aspirants Into<br />
              <span className="text-[#C8941A]">Officers of the Nation</span>
            </h3>

            <p className="text-[#1A2B6B]/65 leading-relaxed">
              Infinity Career Academy was founded by <strong className="text-[#1A2B6B]">Major Arun Suroshe (Retd.)</strong>, a
              decorated officer of the Indian Army, to provide world-class coaching to students aspiring to serve the nation
              through the Armed Forces and Police.
            </p>
            <p className="text-[#1A2B6B]/65 leading-relaxed">
              Located in <strong className="text-[#1A2B6B]">Bajajnagar, Waluj MIDC, Chh. Sambhajinagar</strong>, our academy
              combines rigorous physical training with thorough academic preparation — giving students the complete edge they
              need to succeed in NDA, CDS, Police Bharti and competitive exams.
            </p>
            <p className="text-[#E05F00] font-semibold italic">
              "बजाजनगर, छ. संभाजीनगर मधील स्पर्धा परीक्षा मार्गदर्शन केंद्र"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C8941A] to-[#E05F00] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#C8941A]/30 hover:scale-105 transition-all duration-300 text-center">
                Start Your Journey
              </a>
              <a href="https://t.me/infinityacademy121212" target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-full border-2 border-[#1A2B6B]/30 text-[#1A2B6B] font-bold text-sm hover:bg-[#1A2B6B]/8 hover:border-[#1A2B6B]/60 hover:scale-105 transition-all duration-300 text-center">
                Join Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div id="physical" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#E0D5C0] hover:border-[#C8941A]/40 hover:shadow-lg hover:shadow-[#C8941A]/10 transition-all duration-300 group text-center shadow-sm">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
              <div className="text-[#1A2B6B] font-black text-base mb-0.5">{v.title}</div>
              <div className="text-[#C8941A]/80 text-xs font-semibold mb-3">{v.mr}</div>
              <p className="text-[#1A2B6B]/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

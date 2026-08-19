const galleryItems = [
  { emoji: '🏃', title: 'Morning PT Drill', desc: 'Daily 5 AM physical training sessions', bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', accent: '#E05F00' },
  { emoji: '📚', title: 'Classroom Coaching', desc: 'Expert academic coaching sessions', bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', accent: '#1A56DB' },
  { emoji: '🎖️', title: 'Selection Ceremony', desc: 'Cadets selected in NDA / Police', bg: 'from-amber-50 to-yellow-50', border: 'border-amber-200', accent: '#C8941A' },
  { emoji: '🤸', title: 'Obstacle Training', desc: 'Advanced obstacle course drills', bg: 'from-green-50 to-emerald-50', border: 'border-green-200', accent: '#059669' },
  { emoji: '🇮🇳', title: 'Republic Day Parade', desc: 'Our cadets at National events', bg: 'from-orange-50 to-green-50', border: 'border-orange-200', accent: '#E05F00' },
  { emoji: '🏆', title: 'Award Functions', desc: 'Celebrating student achievements', bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', accent: '#7C3AED' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Alternating light background */}
      <div className="absolute inset-0 bg-[#F5F0E8]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8941A]/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C8941A]/10 border border-[#C8941A]/30 text-[#C8941A] text-xs font-bold tracking-[4px] uppercase mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1A2B6B]">
            Life at <span className="bg-gradient-to-r from-[#C8941A] to-[#E05F00] bg-clip-text text-transparent">Infinity Academy</span>
          </h2>
          <p className="text-[#1A2B6B]/60 mt-4 max-w-lg mx-auto">
            आमच्या अकादमीतील जीवन — From early morning drills to proud moments of success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, i) => (
            <div key={i}
              id={`gallery-item-${i}`}
              className={`group relative rounded-2xl overflow-hidden border ${item.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default bg-gradient-to-br ${item.bg}`}>

              <div className="relative z-10 p-8 text-center min-h-48 flex flex-col items-center justify-center gap-3">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <h3 className="text-lg font-black text-[#1A2B6B]">{item.title}</h3>
                <p className="text-[#1A2B6B]/60 text-sm">{item.desc}</p>
                {/* Coloured accent line */}
                <div className="w-10 h-1 rounded-full mt-1" style={{ background: item.accent }} />
              </div>

              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/infinity_career_academy"
            target="_blank"
            rel="noreferrer"
            id="instagram-link"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold text-base hover:shadow-xl hover:shadow-pink-400/30 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow us @infinity_career_academy
          </a>
        </div>
      </div>
    </section>
  );
}

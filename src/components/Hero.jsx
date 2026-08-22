import heroBg from '../assets/hero_bg.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image with light overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Infinity Career Academy Training" className="w-full h-full object-cover" />
        {/* Light warm overlay — lets image show but reduces darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#FFFBF2]/55 to-[#FFFBF2]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF2]/10 via-transparent to-[#FFFBF2]/10" />
      </div>
         
      {/* Soft decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#C8941A]/12 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1A2B6B]/10 rounded-full blur-3xl animate-pulse z-0" style={{animationDelay: '1s'}} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#C8941A]/40 text-[#C8941A] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm shadow-sm">
          <span className="w-2 h-2 bg-[#E05F00] rounded-full animate-ping" />
          Bajajnagar, Chh. Sambhajinagar, Maharashtra
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1A2B6B] leading-tight mb-4 drop-shadow-sm">
          <span className="block">Forge Your</span>
          <span className="block bg-gradient-to-r from-[#C8941A] via-[#E05F00] to-[#1A2B6B] bg-clip-text text-transparent">
            Defence Career
          </span>
        </h1>

        {/* Marathi tagline */}
        <p className="text-xl sm:text-2xl font-bold text-[#E05F00] mb-2">
          🇮🇳 स्पर्धा परीक्षा मार्गदर्शन केंद्र
        </p>

        <p className="text-[#1A2B6B]/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Expert coaching for <strong className="text-[#1A2B6B]">NDA, CDS, Police Bharti &amp; MPSC</strong> by&nbsp;
          <strong className="text-[#C8941A]">Major Arun Suroshe (Retd.)</strong> — turning aspirants into officers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="https://clpamy.page.link/YPQc" target="_blank" rel="noreferrer"
            id="hero-enroll-btn"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C8941A] to-[#E05F00] text-white font-extrabold text-base hover:shadow-xl hover:shadow-[#E05F00]/30 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto text-center">
            📝 Online Test Series / ऑनलाईन टेस्ट सिरीज
          </a>
          <a href="https://t.me/infinityacademy121212" target="_blank" rel="noreferrer"
            id="hero-telegram-btn"
            className="px-8 py-4 rounded-full border-2 border-[#1A2B6B]/40 text-[#1A2B6B] font-bold text-base bg-white/70 hover:border-[#1A2B6B] hover:bg-[#1A2B6B]/8 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm">
            📲 Join Telegram Channel
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
          {[
            { value: '160+', label: 'Posts & Content', mr: 'पोस्ट' },
            { value: '3.4K+', label: 'Followers', mr: 'अनुयायी' },
            { value: '100%', label: 'Success Focus', mr: 'यश' },
          ].map(stat => (
            <div key={stat.value} className="text-center p-3 rounded-xl bg-white/75 backdrop-blur-sm border border-[#E0D5C0] shadow-sm">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#C8941A] to-[#E05F00] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-[#1A2B6B]/70 font-semibold mt-0.5">{stat.label}</div>
              <div className="text-[10px] text-[#C8941A]/70">{stat.mr}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#1A2B6B]/50">
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-[#1A2B6B]/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#C8941A] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

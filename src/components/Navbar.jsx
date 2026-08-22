import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', mr: 'मुख्यपृष्ठ' },
    { label: 'About', href: '#about', mr: 'आमच्याबद्दल' },
    { label: 'Courses', href: '#courses', mr: 'अभ्यासक्रम' },
    { label: 'Gallery', href: '#gallery', mr: 'गॅलरी' },
    { label: 'Contact', href: '#contact', mr: 'संपर्क' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'py-3 bg-white/20 backdrop-blur-md border-b border-[#E0D5C0] shadow-md shadow-[#1A2B6B]/8'
      : 'py-5 bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-md shadow-[#E05F00]/25 group-hover:scale-110 transition-transform border border-[#C8941A]/20 bg-white">
              <img
                src="/InfinityAcademyLogo.jpeg"
                alt="Infinity Career Academy Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-black text-[#1A2B6B] text-lg tracking-wider leading-none">INFINITY</div>
              <div className="text-[10px] text-[#C8941A] font-bold tracking-[4px] uppercase">Career Academy</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                className="relative text-[#1A2B6B]/70 hover:text-[#C8941A] text-sm font-semibold tracking-wide transition-colors group">
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#C8941A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="https://clpamy.page.link/YPQc" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1A2B6B] to-[#2D3F8A] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#1A2B6B]/30 hover:scale-105 active:scale-95 transition-all duration-300">
              Online Tests
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            id="navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1A2B6B] hover:text-[#C8941A] transition-colors"
            aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white/97 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-[#1A2B6B] hover:text-[#C8941A]"
          aria-label="Close menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {navItems.map(item => (
          <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-center group">
            <div className="text-2xl font-black text-[#1A2B6B] group-hover:text-[#C8941A] transition-colors">{item.label}</div>
            <div className="text-sm text-[#E05F00] font-semibold mt-1">{item.mr}</div>
          </a>
        ))}
        <a href="https://clpamy.page.link/YPQc" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1A2B6B] to-[#2D3F8A] text-white font-extrabold text-base shadow-xl">
          Online Tests / ऑनलाईन टेस्ट
        </a>
      </div>
    </nav>
  );
}

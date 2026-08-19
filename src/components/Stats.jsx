import { useEffect, useRef, useState } from 'react';

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        const start = performance.now();
        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { value: 160, suffix: '+', label: 'Content Posts', sublabel: 'एकूण पोस्ट', icon: '📋' },
    { value: 3400, suffix: '+', label: 'Students Reached', sublabel: 'विद्यार्थी', icon: '🎓' },
    { value: 10, suffix: '+', label: 'Years of Service', sublabel: 'वर्षांचा अनुभव', icon: '⭐' },
    { value: 500, suffix: '+', label: 'Success Stories', sublabel: 'यशोगाथा', icon: '🏆' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Light warm background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF2] via-[#F5F0E8] to-[#FFFBF2]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8941A]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8941A]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#C8941A] text-xs font-bold tracking-[4px] uppercase">Our Impact</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A2B6B] mt-2">
            Numbers That <span className="text-[#C8941A]">Speak Louder</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-[#E0D5C0] hover:border-[#C8941A]/50 hover:shadow-xl hover:shadow-[#C8941A]/10 transition-all duration-300 text-center hover:-translate-y-1 shadow-sm">
              {/* Subtle warm gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8941A]/5 to-[#E05F00]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#C8941A] to-[#E05F00] bg-clip-text text-transparent mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#1A2B6B] font-bold text-sm sm:text-base">{stat.label}</div>
              <div className="text-[#C8941A]/80 text-xs font-semibold mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

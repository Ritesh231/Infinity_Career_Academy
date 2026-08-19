const courses = [
  {
    id: 'nda',
    icon: '🪖',
    title: 'NDA Coaching',
    titleMr: 'राष्ट्रीय संरक्षण अकादमी',
    description: 'Complete preparation for National Defence Academy entrance — Mathematics, GAT, Physical Training and SSB interview coaching.',
    tags: ['Written Exam', 'SSB Prep', 'Physical Test'],
    accentFrom: '#C8941A',
    accentTo: '#E05F00',
    featured: true,
  },
  {
    id: 'police',
    icon: '👮',
    title: 'Police Bharti',
    titleMr: 'पोलीस भरती',
    description: 'Maharashtra state Police Bharti preparation — full physical and written exam training under expert mentors.',
    tags: ['Physical Training', 'Written Test', 'PSI / Constable'],
    accentFrom: '#1A56DB',
    accentTo: '#1E40AF',
    featured: false,
  },
  {
    id: 'cds',
    icon: '⚔️',
    title: 'CDS / Military',
    titleMr: 'सीडीएस / सशस्त्र दले',
    description: 'Combined Defence Services examination coaching for Army, Navy and Air Force officer entry to IMA, OTA and more.',
    tags: ['Army OTA', 'Navy', 'Air Force'],
    accentFrom: '#059669',
    accentTo: '#065F46',
    featured: false,
  },
  {
    id: 'mpsc',
    icon: '📚',
    title: 'MPSC / Competitive',
    titleMr: 'एमपीएससी / स्पर्धा परीक्षा',
    description: 'Maharashtra Public Service Commission and other competitive exam coaching with study material and test series.',
    tags: ['MPSC', 'General Studies', 'Test Series'],
    accentFrom: '#7C3AED',
    accentTo: '#5B21B6',
    featured: false,
  },
  {
    id: 'physical',
    icon: '🏃',
    title: 'Physical Training',
    titleMr: 'शारीरिक प्रशिक्षण',
    description: 'Dedicated physical fitness training program tailored for defence and police physical standards — running, pull-ups, push-ups.',
    tags: ['Daily PT', '1.6 km Run', 'Fitness Standards'],
    accentFrom: '#E05F00',
    accentTo: '#B91C1C',
    featured: false,
  },
  {
    id: 'ssb',
    icon: '🎖️',
    title: 'SSB Interview',
    titleMr: 'एसएसबी मुलाखत',
    description: 'Services Selection Board interview preparation — OIR tests, PPDT, GTO, psychology tests and personal interview training.',
    tags: ['Psychology', 'GTO', 'Personal Interview'],
    accentFrom: '#1A2B6B',
    accentTo: '#374151',
    featured: false,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* Light cream background */}
      <div className="absolute inset-0 bg-[#FFFBF2]" />
      {/* Decorative soft orbs */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#C8941A]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#1A2B6B]/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C8941A]/10 border border-[#C8941A]/30 text-[#C8941A] text-xs font-bold tracking-[4px] uppercase mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1A2B6B] mb-4">
            Courses <span className="bg-gradient-to-r from-[#C8941A] to-[#E05F00] bg-clip-text text-transparent">We Offer</span>
          </h2>
          <p className="text-[#1A2B6B]/60 max-w-xl mx-auto text-base">
            आम्ही ऑफर करतो ते अभ्यासक्रम — Tailored training programs to shape future defenders of India.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              id={`course-${course.id}`}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default bg-white ${
                course.featured
                  ? 'border-[#C8941A]/50 shadow-lg shadow-[#C8941A]/10'
                  : 'border-[#E0D5C0] hover:border-[#C8941A]/30 shadow-sm hover:shadow-[#C8941A]/10'
              }`}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(to right, ${course.accentFrom}, ${course.accentTo})` }}
              />

              {/* Featured badge */}
              {course.featured && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-white text-[10px] font-black tracking-widest uppercase z-10"
                  style={{ background: `linear-gradient(to right, ${course.accentFrom}, ${course.accentTo})` }}>
                  ★ Featured
                </div>
              )}

              <div className="relative z-10 p-6 sm:p-8">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-3xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${course.accentFrom}22, ${course.accentTo}22)`, border: `1.5px solid ${course.accentFrom}40` }}
                >
                  {course.icon}
                </div>
                <h3 className="text-xl font-black text-[#1A2B6B] mb-1">{course.title}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: course.accentFrom }}>{course.titleMr}</p>
                <p className="text-[#1A2B6B]/60 text-sm leading-relaxed mb-5">{course.description}</p>

                <div className="flex flex-wrap gap-2">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-[#F5F0E8] border border-[#E0D5C0] text-[#1A2B6B]/70 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1A2B6B] to-[#2D3F8A] text-white font-black text-base hover:shadow-xl hover:shadow-[#1A2B6B]/25 hover:scale-105 transition-all duration-300">
            Enquire About Admission
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-neutral-100 font-sans selection:bg-[#a8b832] selection:text-white overflow-x-hidden">
      
      {/* 1. HEADER */}
      <header className="bg-[#0a0a0a]/95 backdrop-blur-md text-white py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 border-b border-neutral-800">
        
        {/* Left Side: RSJK Logo */}
        <div className="flex flex-col items-start mt-4 mb-4 md:mb-0 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="flex flex-col relative mb-1">
            <h1 
              className="text-4xl md:text-5xl text-[#a8b832] uppercase tracking-normal leading-none" 
              style={{ fontFamily: "'Ethnocentric', sans-serif" }}
            >
              RSJK
            </h1>
            <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] text-white font-sans font-bold absolute -bottom-2 md:-bottom-3 right-0 uppercase">
              Group
            </span>
          </div>
        </div>

        {/* Right Navigation (News Removed) */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs tracking-[0.2em] uppercase items-center font-semibold text-gray-300 z-50">
          
          {/* ABOUT DROPDOWN */}
          <div className="relative group py-4 cursor-pointer">
            <a href="#about" className="hover:text-white transition-colors flex items-center gap-1 rounded-full border border-transparent px-4 py-2 hover:border-neutral-700">
              ABOUT <span className="text-[8px] opacity-50 mb-0.5">▼</span>
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#0a0a0a]/95 backdrop-blur-md border border-neutral-800 rounded-sm flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
              <a href="#team" className="px-4 py-4 hover:text-[#a8b832] hover:bg-neutral-900 transition-colors text-center border-b border-neutral-800">TEAM</a>
              <a href="#awards" className="px-4 py-4 hover:text-[#a8b832] hover:bg-neutral-900 transition-colors text-center border-b border-neutral-800">AWARDS</a>
              <a href="#publications" className="px-4 py-4 hover:text-[#a8b832] hover:bg-neutral-900 transition-colors text-center border-b border-neutral-800">PUBLICATIONS</a>
              <a href="#services" className="px-4 py-4 hover:text-[#a8b832] hover:bg-neutral-900 transition-colors text-center">SERVICES</a>
            </div>
          </div>

          <a href="#projects" className="hover:text-white transition-colors rounded-full border border-transparent px-4 py-2 hover:border-neutral-700">PROJECTS</a>
          <a href="#contact" className="hover:text-white transition-colors rounded-full border border-transparent px-4 py-2 hover:border-neutral-700">CONTACT</a>
        </nav>
      </header>

      {/* 2. FULL-SCREEN PROJECT SHOWCASE */}
      <section id="projects" className="w-full">
        {/* Project 1 */}
        <div className="relative h-[80vh] w-full bg-neutral-900 border-b border-neutral-800 group overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/project1.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg">Organo Antharam</h2>
            <p className="text-[#a8b832] tracking-[0.2em] uppercase text-sm mt-2 font-bold">Residential Community</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative h-[80vh] w-full bg-neutral-800 border-b border-neutral-800 group overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/project2.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg">Polycab Office</h2>
            <p className="text-[#a8b832] tracking-[0.2em] uppercase text-sm mt-2 font-bold">Commercial Architecture</p>
          </div>
        </div>
      </section>

      {/* 3. CONTACT MAP & FORM (Philosophy & Featured Removed) */}
      <section id="contact" className="py-24 bg-[#111111]">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase text-center mb-16 text-white" style={{ fontFamily: "'Cinzel', serif" }}>Contact</h2>
        
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Map & Address */}
          <div className="flex flex-col gap-8">
            <div className="w-full h-80 bg-neutral-900 overflow-hidden border border-neutral-800 rounded-sm shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2014432521287!2d78.38938497462836!3d17.450069900997338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9166ed4f7941%3A0x25da1e982f78a2cd!2sMCR%20complex!5e0!3m2!1sen!2sin!4v1784141815164!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="text-left text-gray-400 text-sm leading-relaxed tracking-wide space-y-2">
              <p className="font-bold text-white uppercase tracking-widest mb-1 text-lg" style={{ fontFamily: "'Ethnocentric', sans-serif" }}>RSJK Group</p>
              <p className="font-bold text-[#a8b832] uppercase tracking-widest">Ar. Jagadeesh</p>
              <p className="mt-4">
                Flat No - 401, 4th floor, MCR Complex,<br/>
                Sri Swamy Ayyappa Co-operative<br/>
                Housing Society, Hyderabad - 500081
              </p>
              <p className="mt-4">Phone: +91 8686638289 / +91 9392849896</p>
              <p>Email: rsjkarchitects@gmail.com</p>
              
              {/* Clickable Instagram Logo */}
              <div className="mt-6">
                <a 
                  href="https://www.instagram.com/rsjk_groups" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 text-white hover:text-[#a8b832] transition-colors group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="group-hover:scale-110 transition-transform"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="font-bold tracking-widest uppercase">@rsjk_groups</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Side: Simple Contact Form */}
          <form className="flex flex-col gap-8 bg-[#0a0a0a] p-10 border border-neutral-800 rounded-sm shadow-xl">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">Name *</label>
              <input type="text" className="w-full border-b border-neutral-700 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent text-white" />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">Email *</label>
              <input type="email" className="w-full border-b border-neutral-700 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent text-white" />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">Phone</label>
              <input type="tel" className="w-full border-b border-neutral-700 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent text-white" />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">Message *</label>
              <textarea rows={4} className="w-full border-b border-neutral-700 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent resize-none text-white"></textarea>
            </div>
            <div className="text-right mt-4">
              <button type="button" className="px-10 py-4 bg-[#a8b832] text-white font-bold uppercase tracking-widest hover:bg-[#8e9c26] transition-colors text-xs rounded-sm">
                Send Message
              </button>
            </div>
          </form>

        </div>
      </section>

    </main>
  );
}
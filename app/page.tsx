export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-neutral-100 font-sans selection:bg-[#a8b832] selection:text-white overflow-x-hidden">
      
      {/* 1. HEADER (FHD Style Navigation) */}
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

        {/* Right Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs tracking-[0.2em] uppercase items-center font-semibold text-gray-300 z-50">
          
          {/* ABOUT DROPDOWN (Matches FHD Video + Awards) */}
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
          <a href="#news" className="hover:text-white transition-colors rounded-full border border-transparent px-4 py-2 hover:border-neutral-700">NEWS</a>
          <a href="#contact" className="hover:text-white transition-colors rounded-full border border-transparent px-4 py-2 hover:border-neutral-700">CONTACT</a>
        </nav>
      </header>

      {/* 2. FULL-SCREEN PROJECT SHOWCASE (Like the video scrolling) */}
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

      {/* 3. VISION & HIGHLIGHTS SECTION */}
      <section className="py-32 px-8 bg-[#0a0a0a] text-center border-b border-neutral-800">
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl md:text-4xl text-gray-200 leading-relaxed font-light mb-8">
            Over a million square feet of visionary, <br className="hidden md:block"/>
            <span className="font-bold text-white">context-driven architectural design</span>
          </h2>
          <button className="px-8 py-3 border border-neutral-600 rounded-full hover:bg-white hover:text-black transition-colors text-xs tracking-widest uppercase font-bold">
            View Projects
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto border-t border-neutral-800 pt-24">
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cinzel', serif" }}>30+</h3>
            <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed">Years of Collective<br/>Architectural Expertise</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cinzel', serif" }}>120+</h3>
            <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed">Team of Architects<br/>and Interior Designers</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cinzel', serif" }}>700+</h3>
            <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed">Projects Across Various<br/>Sectors and Cities</p>
          </div>
        </div>
      </section>

      {/* 4. CONTACT MAP & FORM (Your EXACT RSJK format) */}
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
              <p className="mt-4 font-bold text-white flex items-center gap-2">
                Instagram: <a href="https://instagram.com/rsjk_groups" target="_blank" rel="noreferrer" className="hover:text-[#a8b832] transition-colors">@rsjk_groups</a>
              </p>
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
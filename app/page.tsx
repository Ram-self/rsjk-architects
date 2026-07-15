export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-neutral-100 font-sans selection:bg-[#a8b832] selection:text-white">
      
      {/* 1. HEADER (Dark theme, sticky, custom left-aligned logo) */}
      <header className="bg-[#0a0a0a]/95 backdrop-blur-md text-white py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 border-b border-neutral-800">
        
        {/* Left Side: Custom RSJK Logo mimicking the business card */}
        <div className="flex flex-col items-start mt-4  mb-4  md:mb-0 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="flex flex-col relative mb-1">
            <h1 
              className="text-4xl md:text-5xl text-[#a8b832] uppercase tracking-normal leading-none" 
              style={{ fontFamily: "'Michroma',sans-serif " }}
            >
              RSJK
            </h1>
            <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] text-white font-sans font-bold absolute -bottom-2 md:-bottom-3 right-0 uppercase">
              Group
            </span>
          </div>
          
          <p 
            className="text-[0.65rem] md:text-[0.7rem] tracking-[0.25em] uppercase text-gray-400 mt-2"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}
          >
            Architects & Designers
          </p>
        </div>

        {/* Right Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs md:text-sm tracking-[0.2em] uppercase items-center font-semibold text-gray-300">
          <a href="#projects" className="hover:text-[#a8b832] transition-colors">Projects</a>
          <a href="#about" className="hover:text-[#a8b832] transition-colors">About Us</a>
          <a href="#services" className="hover:text-[#a8b832] transition-colors">Services</a>
          <a href="#contact" className="hover:text-[#a8b832] transition-colors">Contact</a>
        </nav>
      </header>

      {/* 2. HERO SECTION (Dark cinematic style) */}
      <section className="relative h-[60vh] md:h-[80vh] bg-[#1a1a1a] flex items-center justify-center overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
      </section>

      {/* 3. PROJECTS GRID */}
      <section id="projects" className="py-24 px-4 bg-[#111111]">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase text-center mb-16 text-white" style={{ fontFamily: "'Cinzel', serif" }}>Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1600px] mx-auto">
          <div className="aspect-[4/3] bg-neutral-800 bg-cover bg-center hover:opacity-75 cursor-pointer transition-all duration-500 border border-neutral-800" style={{ backgroundImage: "url('/project1.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-900 bg-cover bg-center hover:opacity-75 cursor-pointer transition-all duration-500 border border-neutral-800" style={{ backgroundImage: "url('/project2.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-800 bg-cover bg-center hover:opacity-75 cursor-pointer transition-all duration-500 border border-neutral-800" style={{ backgroundImage: "url('/project3.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-900 bg-cover bg-center hover:opacity-75 cursor-pointer transition-all duration-500 border border-neutral-800" style={{ backgroundImage: "url('/project4.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-800 bg-cover bg-center hover:opacity-75 cursor-pointer transition-all duration-500 border border-neutral-800" style={{ backgroundImage: "url('/project5.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-900 bg-cover bg-center hover:opacity-75 cursor-pointer transition-all duration-500 border border-neutral-800" style={{ backgroundImage: "url('/project6.jpg')" }}></div>
        </div>
      </section>

      {/* 4. ABOUT US */}
      <section id="about" className="py-24 px-8 bg-[#1a1a1a] text-center border-y border-neutral-800">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-10 text-white" style={{ fontFamily: "'Cinzel', serif" }}>About Us</h2>
        <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6 text-sm md:text-base font-medium">
          <p>
            RSJK Group works across the fields of Architecture, Interior Design, Landscape Architecture, and more. We have designed and developed works that span premium residential spaces, commercial projects, and dynamic office spaces.
          </p>
          <p>
            We operate from our studio in Hyderabad, and we have partnered with clients and organizations in and around Telangana and Andhra Pradesh to deliver exceptional design solutions.
          </p>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="py-24 bg-[#111111] text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-16 text-white" style={{ fontFamily: "'Cinzel', serif" }}>Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 px-8">
          <div className="flex flex-col items-center gap-6 group cursor-pointer">
            <div className="w-20 h-20 bg-neutral-900 border border-neutral-700 flex items-center justify-center rounded-sm group-hover:border-[#a8b832] transition-colors text-3xl">🏢</div>
            <h3 className="font-bold tracking-widest uppercase text-xs text-gray-300 group-hover:text-[#a8b832] transition-colors">Architecture</h3>
          </div>
          <div className="flex flex-col items-center gap-6 group cursor-pointer">
            <div className="w-20 h-20 bg-neutral-900 border border-neutral-700 flex items-center justify-center rounded-sm group-hover:border-[#a8b832] transition-colors text-3xl">🛋️</div>
            <h3 className="font-bold tracking-widest uppercase text-xs text-gray-300 group-hover:text-[#a8b832] transition-colors">Interior Design</h3>
          </div>
          <div className="flex flex-col items-center gap-6 group cursor-pointer">
            <div className="w-20 h-20 bg-neutral-900 border border-neutral-700 flex items-center justify-center rounded-sm group-hover:border-[#a8b832] transition-colors text-3xl">🏗️</div>
            <h3 className="font-bold tracking-widest uppercase text-xs text-gray-300 group-hover:text-[#a8b832] transition-colors">Design Build</h3>
          </div>
          <div className="flex flex-col items-center gap-6 group cursor-pointer">
            <div className="w-20 h-20 bg-neutral-900 border border-neutral-700 flex items-center justify-center rounded-sm group-hover:border-[#a8b832] transition-colors text-3xl">🌴</div>
            <h3 className="font-bold tracking-widest uppercase text-xs text-gray-300 group-hover:text-[#a8b832] transition-colors">Landscape</h3>
          </div>
        </div>
      </section>

      {/* 6. CONTACT MAP & FORM */}
      <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-neutral-800">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase text-center mb-16 text-white" style={{ fontFamily: "'Cinzel', serif" }}>Contact</h2>
        
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div className="flex flex-col gap-8">
            <div className="w-full h-80 bg-neutral-900 overflow-hidden border border-neutral-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2014432521287!2d78.38938497462836!3d17.450069900997338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9166ed4f7941%3A0x25da1e982f78a2cd!2sMCR%20complex!5e0!3m2!1sen!2sin!4v1784141815164!5m2!1sen!2sin"
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin">
              </iframe>
            </div>
            <div className="text-left text-gray-400 text-sm leading-relaxed tracking-wide space-y-2">
              <p className="font-bold text-white uppercase tracking-widest mb-1 text-lg" style={{ fontFamily: "'Ethnocentric', sans-serif" }}>RSJK Group</p>
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

          <form className="flex flex-col gap-8 bg-[#111111] p-10 border border-neutral-800">
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
              <button type="button" className="px-10 py-4 bg-[#a8b832] text-white font-bold uppercase tracking-widest hover:bg-[#8e9c26] transition-colors text-xs">
                Send Message
              </button>
            </div>
          </form>

        </div>
      </section>

    </main>
  );
}
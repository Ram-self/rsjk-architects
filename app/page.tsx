/* STREAMING_CHUNK: Setting up the main page structure and navigation header... */
import React from 'react';
export default function Home() { return (  
    {/* 1. HEADER (Dark theme, sticky, custom left-aligned logo) */}
  <header className="bg-[#0a0a0a]/95 backdrop-blur-md text-white py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 border-b border-neutral-800">
    
    {/* Left Side: Custom RSJK Logo mimicking the business card */}
    <div className="flex flex-col items-start mb-4 md:mb-0 cursor-pointer">
      <div className="flex flex-col relative mb-1">
        <h1 
          className="text-4xl md:text-5xl text-[#a8b832] uppercase tracking-[0.1em] leading-none" 
          style={{ fontFamily: "'Ethnocentric', sans-serif" }}
        >
          RSJK
        </h1>
        <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] text-white font-sans font-bold absolute -bottom-2 right-0 uppercase">
          Group
        </span>
      </div>
      
      <p 
        className="text-[0.65rem] md:text-[0.7rem] tracking-[0.25em] uppercase text-gray-400 mt-3"
        style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}
      >
        Architects & Designers
      </p>
    </div>

    {/* Right Side: Navigation */}
    <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs md:text-sm tracking-[0.2em] uppercase items-center font-semibold">
      <a href="#projects" className="hover:text-[#a8b832] transition-colors duration-300">Projects.</a>
      <a href="#about" className="hover:text-[#a8b832] transition-colors duration-300">About Us.</a>
      <a href="#services" className="hover:text-[#a8b832] transition-colors duration-300">Services.</a>
      <a href="#contact" className="hover:text-[#a8b832] transition-colors duration-300">Contact.</a>
    </nav>
  </header>

  /* STREAMING_CHUNK: Building the hero section and projects grid... */
  {/* 2. HERO SECTION */}
  <section className="relative w-full h-[70vh] md:h-[90vh] bg-neutral-900 flex items-center justify-center overflow-hidden border-b border-neutral-800">
    {/* Placeholder for background video/image */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
    
    <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-[#a8b832] flex items-center justify-center mb-6">
            <span className="text-3xl md:text-5xl text-[#a8b832]" style={{ fontFamily: "'Ethnocentric', sans-serif" }}>R</span>
        </div>
        <h2 className="text-2xl md:text-4xl tracking-[0.3em] uppercase text-white font-light" style={{ fontFamily: "'Cinzel', serif" }}>
            Architecture Studio
        </h2>
    </div>
  </section>

  {/* 3. PROJECTS GRID */}
  <section id="projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/4 flex items-center md:items-start justify-center md:justify-start">
            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.3em] uppercase text-white md:-rotate-90 md:origin-top-left md:translate-y-40 md:translate-x-12 whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>
                Projects.
            </h2>
        </div>
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square bg-neutral-800 group relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="aspect-square bg-neutral-800 group relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753086-00f18efc2297?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="aspect-square bg-neutral-800 group relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="aspect-square bg-neutral-800 group relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
        </div>
    </div>
  </section>

  /* STREAMING_CHUNK: Designing the About Us and Services sections... */
  {/* 4. ABOUT US */}
  <section id="about" className="py-24 bg-[#111111] border-y border-neutral-800">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-neutral-800 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80 hover:scale-105 transition-transform duration-1000"></div>
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-10 text-white" style={{ fontFamily: "'Cinzel', serif" }}>About Us.</h2>
            <div className="text-neutral-400 leading-relaxed space-y-6 text-sm md:text-base tracking-wide">
                <p>
                    RSJK Group works across the fields of Architecture, Interior Design, Landscape Architecture, and more. We have designed and developed works that span premium residential spaces, commercial projects, and dynamic office spaces.
                </p>
                <p>
                    We operate from our studio in Hyderabad, and we have partnered with clients and organizations in and around Telangana and Andhra Pradesh to deliver exceptional design solutions.
                </p>
            </div>
            <button className="mt-10 px-8 py-3 border border-[#a8b832] text-[#a8b832] hover:bg-[#a8b832] hover:text-black transition-colors duration-300 uppercase tracking-[0.2em] text-xs font-bold w-max">
                View More
            </button>
        </div>
    </div>
  </section>

  {/* 5. SERVICES */}
  <section id="services" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
    <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase text-center mb-20 text-white" style={{ fontFamily: "'Cinzel', serif" }}>Services.</h2>
    
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      
      {/* Architecture */}
      <div className="flex flex-col items-center gap-6 group cursor-pointer">
        <div className="w-20 h-20 border border-neutral-700 flex items-center justify-center group-hover:border-[#a8b832] transition-colors duration-300">
            <svg className="w-10 h-10 text-neutral-400 group-hover:text-[#a8b832] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        </div>
        <h3 className="font-bold tracking-[0.2em] uppercase text-xs md:text-sm text-neutral-300 group-hover:text-white transition-colors">Architecture</h3>
      </div>

      {/* Interior Design */}
      <div className="flex flex-col items-center gap-6 group cursor-pointer">
        <div className="w-20 h-20 border border-neutral-700 flex items-center justify-center group-hover:border-[#a8b832] transition-colors duration-300">
            <svg className="w-10 h-10 text-neutral-400 group-hover:text-[#a8b832] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
        </div>
        <h3 className="font-bold tracking-[0.2em] uppercase text-xs md:text-sm text-neutral-300 group-hover:text-white transition-colors">Interior Design</h3>
      </div>

      {/* Design Build (Updated from 3D Viz) */}
      <div className="flex flex-col items-center gap-6 group cursor-pointer">
        <div className="w-20 h-20 border border-neutral-700 flex items-center justify-center group-hover:border-[#a8b832] transition-colors duration-300">
            <svg className="w-10 h-10 text-neutral-400 group-hover:text-[#a8b832] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
        </div>
        <h3 className="font-bold tracking-[0.2em] uppercase text-xs md:text-sm text-neutral-300 group-hover:text-white transition-colors text-[#a8b832]">Design Build</h3>
      </div>

      {/* Landscape */}
      <div className="flex flex-col items-center gap-6 group cursor-pointer">
        <div className="w-20 h-20 border border-neutral-700 flex items-center justify-center group-hover:border-[#a8b832] transition-colors duration-300">
            <svg className="w-10 h-10 text-neutral-400 group-hover:text-[#a8b832] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        </div>
        <h3 className="font-bold tracking-[0.2em] uppercase text-xs md:text-sm text-neutral-300 group-hover:text-white transition-colors">Landscape</h3>
      </div>

    </div>
  </section>

  /* STREAMING_CHUNK: Creating the Contact section with map and updated details... */
  {/* 6. CONTACT & MAP (Updated Details) */}
  <section id="contact" className="py-24 bg-[#111111] border-t border-neutral-800">
    <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase text-center mb-16 text-white" style={{ fontFamily: "'Cinzel', serif" }}>Contact.</h2>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      
      {/* Left: Map and Info */}
      <div className="flex flex-col gap-8">
        <div className="w-full h-80 bg-neutral-900 overflow-hidden border border-neutral-700 p-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121781.57558034033!2d78.31012795!3d17.4930307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919baf4c6537%3A0xc6c7b949c3132e03!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="text-left text-neutral-400 text-sm leading-relaxed tracking-wide space-y-2">
          <p className="font-bold text-white uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "'Ethnocentric', sans-serif" }}>RSJK Group</p>
          
          <div className="flex gap-4 items-start">
              <span className="text-[#a8b832] font-bold">ADDRESS:</span>
              <p>Flat no - 401, 4th floor, MCR Complex,<br/>Sri Swamy Ayyappa Co-operative Housing Society,<br/>Hyderabad - 500019</p>
          </div>

          <div className="flex gap-4 items-center pt-2">
              <span className="text-[#a8b832] font-bold">PHONE:</span>
              <p>+91 8686638289, +91 9392849896</p>
          </div>

          <div className="flex gap-4 items-center pt-2">
              <span className="text-[#a8b832] font-bold">EMAIL:</span>
              <p>rsjkarchitects@gmail.com</p>
          </div>

          <div className="flex gap-4 items-center pt-2">
              <span className="text-[#a8b832] font-bold">INSTAGRAM:</span>
              <p>@rsjk_groups</p>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <form className="flex flex-col gap-8 bg-[#0a0a0a] p-8 border border-neutral-800">
        <div>
          <label className="block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-neutral-400">Name *</label>
          <input type="text" className="w-full border-b border-neutral-700 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent text-white" />
        </div>
        <div>
          <label className="block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-neutral-400">Email *</label>
          <input type="email" className="w-full border-b border-neutral-700 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent text-white" />
        </div>
        <div>
          <label className="block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-neutral-400">Phone</label>
          <input type="tel" className="w-full border-b border-neutral-700 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent text-white" />
        </div>
        <div>
          <label className="block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-neutral-400">Message *</label>
          <textarea rows={4} className="w-full border-b border-neutral-700 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent text-white resize-none"></textarea>
        </div>
        <div className="text-left mt-4">
          <button type="button" className="px-12 py-4 bg-[#a8b832] text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 text-xs">
            Send
          </button>
        </div>
      </form>

    </div>
  </section>

</main>
);}
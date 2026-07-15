export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 font-sans selection:bg-[#a8b832] selection:text-white">
      
      {/* 1. DARK HEADER WITH LEFT LOGO & DROPDOWN */}
      <header className="bg-[#1e1e1e] text-white py-6 px-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
        
        {/* Left Side Logo */}
        <div className="flex flex-col">
          {/* Ethnocentric Font applied here */}
          <h1 
            className="text-2xl md:text-4xl text-[#a8b832] mb-1 flex items-baseline gap-3 uppercase" 
            style={{ fontFamily: "'Ethnocentric', sans-serif" }}
          >
            RSJK <span className="text-sm md:text-lg tracking-widest text-white font-sans font-bold">Group</span>
          </h1>
          {/* Cinzel Font applied here */}
          <p 
            className="text-[0.65rem] md:text-[0.8rem] tracking-[0.25em] uppercase text-gray-300 mt-1"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}
          >
            Architects & Designers
          </p>
        </div>

        {/* Right Navigation */}
        <nav className="flex justify-end gap-6 md:gap-10 text-xs md:text-sm tracking-widest uppercase items-center relative">
          
          <div className="group relative py-4 hidden md:block">
            <span className="cursor-pointer hover:text-[#a8b832] transition-colors">Projects.</span>
            <div className="absolute top-full right-0 hidden group-hover:flex flex-col bg-[#1e1e1e] text-white p-4 gap-4 w-56 shadow-xl border-t-2 border-[#a8b832]">
              <a href="#projects" className="hover:text-[#a8b832] transition-colors">Architecture</a>
              <a href="#projects" className="hover:text-[#a8b832] transition-colors">Interiors</a>
              <a href="#projects" className="hover:text-[#a8b832] transition-colors">Landscape</a>
            </div>
          </div>
          
          <a href="#about" className="hover:text-[#a8b832] transition-colors hidden md:block">About Us.</a>
          <a href="#contact" className="hover:text-[#a8b832] transition-colors">Contact.</a>
        </nav>
      </header>

      {/* 2. HERO IMAGE SLIDER */}
      <section className="relative h-[60vh] md:h-[80vh] bg-neutral-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* 3. PROJECTS GRID */}
      <section id="projects" className="py-20 bg-white">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase text-center mb-16 text-neutral-800" style={{ fontFamily: "'Cinzel', serif" }}>Projects.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2 max-w-[1600px] mx-auto">
          <div className="aspect-[4/3] bg-neutral-200 bg-cover bg-center hover:opacity-80 cursor-pointer transition-opacity" style={{ backgroundImage: "url('/project1.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-300 bg-cover bg-center hover:opacity-80 cursor-pointer transition-opacity" style={{ backgroundImage: "url('/project2.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-200 bg-cover bg-center hover:opacity-80 cursor-pointer transition-opacity" style={{ backgroundImage: "url('/project3.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-300 bg-cover bg-center hover:opacity-80 cursor-pointer transition-opacity" style={{ backgroundImage: "url('/project4.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-200 bg-cover bg-center hover:opacity-80 cursor-pointer transition-opacity" style={{ backgroundImage: "url('/project5.jpg')" }}></div>
          <div className="aspect-[4/3] bg-neutral-300 bg-cover bg-center hover:opacity-80 cursor-pointer transition-opacity" style={{ backgroundImage: "url('/project6.jpg')" }}></div>
        </div>
      </section>

      {/* 4. ABOUT US */}
      <section id="about" className="py-24 px-8 bg-[#f5f5f3] text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-10 text-neutral-800" style={{ fontFamily: "'Cinzel', serif" }}>About Us.</h2>
        <div className="max-w-4xl mx-auto text-neutral-600 leading-relaxed space-y-6 text-sm md:text-base font-medium">
          <p>
            RSJK Group works across the fields of Architecture, Interior Design, Landscape Architecture, and more. We have designed and developed works that span premium residential spaces, commercial projects, and dynamic office spaces.
          </p>
          <p>
            We operate from our studio in Hyderabad, and we've partnered with clients and organizations in and around Telangana and Andhra Pradesh to deliver exceptional design solutions.
          </p>
        </div>
      </section>

      {/* 5. SERVICES - Updated List */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-16 text-neutral-800" style={{ fontFamily: "'Cinzel', serif" }}>Services.</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-neutral-200 flex items-center justify-center rounded-full mb-2 text-2xl">🏢</div>
            <h3 className="font-bold tracking-widest uppercase text-xs">Architecture</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-neutral-200 flex items-center justify-center rounded-full mb-2 text-2xl">🛋️</div>
            <h3 className="font-bold tracking-widest uppercase text-xs">Interiors</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-neutral-200 flex items-center justify-center rounded-full mb-2 text-2xl">🌴</div>
            <h3 className="font-bold tracking-widest uppercase text-xs">Landscape</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-neutral-200 flex items-center justify-center rounded-full mb-2 text-2xl">🏗️</div>
            <h3 className="font-bold tracking-widest uppercase text-xs">Design Build</h3>
          </div>
          <div className="flex flex-col items-center gap-4 col-span-2 md:col-span-1">
            <div className="w-16 h-16 bg-neutral-200 flex items-center justify-center rounded-full mb-2 text-2xl">📐</div>
            <h3 className="font-bold tracking-widest uppercase text-xs">Parametrics</h3>
          </div>
        </div>
      </section>

      {/* 6. CONTACT MAP & FORM */}
      <section id="contact" className="py-20 bg-[#f9f9f9] border-t border-neutral-200">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase text-center mb-16 text-neutral-800" style={{ fontFamily: "'Cinzel', serif" }}>Contact.</h2>
        
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Map and Info */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-80 bg-neutral-300 overflow-hidden shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121781.57558034033!2d78.31012795!3d17.4930307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919baf4c6537%3A0xc6c7b949c3132e03!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="text-left text-neutral-600 text-sm leading-relaxed">
              <p className="font-bold text-neutral-900 uppercase tracking-widest mb-2" style={{ fontFamily: "'Ethnocentric', sans-serif" }}>RSJK Group</p>
              <p className="font-bold text-[#a8b832] mb-2 uppercase tracking-widest">Ar. Jagadeesh</p>
              <p>Ph: +91 9392849896</p>
              <p>Email: rsjkarchitects@gmail.com</p>
              <p className="mt-4">
                Flat No - 401, 4th floor, MCR Complex,<br/>
                Sri Swamy Ayyappa Co-operative<br/>
                Housing Society, Hyderabad-500019
              </p>
              <p className="mt-4 font-bold text-neutral-900">Follow us on Instagram: @rsjk_groups</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="flex flex-col gap-6 bg-white p-8 shadow-sm border border-neutral-100">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2">Name *</label>
              <input type="text" className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent" />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2">Email *</label>
              <input type="email" className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent" />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2">Phone</label>
              <input type="tel" className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent" />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2">Message *</label>
              <textarea rows={4} className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-[#a8b832] transition-colors bg-transparent resize-none"></textarea>
            </div>
            <div className="text-right mt-4">
              <button type="button" className="px-10 py-3 bg-[#a8b832] text-white font-bold uppercase tracking-widest hover:bg-[#8e9c26] transition-colors shadow-md">
                Send
              </button>
            </div>
          </form>

        </div>
      </section>

    </main>
  );

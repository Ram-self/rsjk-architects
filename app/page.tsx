export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* MINIMALIST NAVIGATION */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-8 md:px-16 py-8 mix-blend-difference">
        <h1 className="text-xl font-serif tracking-[0.2em] uppercase">RSJK</h1>
        <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase">
          <a href="#portfolio" className="hover:text-gray-400 transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-gray-400 transition-colors">Studio</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* CINEMATIC HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-neutral-900 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/hero.jpg')" }}></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-16">
          <h2 className="text-5xl md:text-8xl font-serif tracking-widest uppercase mb-6 font-light drop-shadow-lg">
            RSJK <br/> Architects
          </h2>
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-gray-300 mb-16 drop-shadow-md">
            Hyderabad, Telangana
          </p>
          <a href="#portfolio" className="border-b border-white pb-1 text-xs tracking-[0.2em] uppercase hover:text-gray-400 hover:border-gray-400 transition-all">
            Discover Our Work
          </a>
        </div>
      </section>

      {/* GALLERY PORTFOLIO SECTION */}
      <section id="portfolio" className="py-32 px-4 md:px-16 max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <h3 className="text-2xl font-serif tracking-widest uppercase mb-4">Selected Works</h3>
          <div className="w-px h-12 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          
          {/* Project 1 */}
          <div className="group relative aspect-square md:aspect-[4/5] overflow-hidden bg-neutral-800 cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/project1.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500"></div>
            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h4 className="text-2xl font-serif tracking-wider uppercase mb-2">The Glass Pavilion</h4>
              <p className="text-xs tracking-widest uppercase text-gray-300">Jubilee Hills</p>
            </div>
          </div>

          {/* Project 2 (Offset to look artistic) */}
          <div className="group relative aspect-square md:aspect-[4/5] overflow-hidden bg-neutral-800 cursor-pointer mt-0 md:mt-32">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/project2.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500"></div>
            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h4 className="text-2xl font-serif tracking-wider uppercase mb-2">Urban Eco-Tower</h4>
              <p className="text-xs tracking-widest uppercase text-gray-300">HITEC City</p>
            </div>
          </div>

        </div>
      </section>

      {/* MINIMALIST ABOUT SECTION */}
      <section id="about" className="py-32 bg-white text-black px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-serif tracking-widest uppercase mb-12 text-gray-500">The Studio</h3>
          <p className="text-2xl md:text-4xl font-light leading-relaxed mb-12 font-serif">
            We shape spaces that shape lives. Blending timeless aesthetics with modern functionality, our architecture stands as a testament to precision, light, and materiality.
          </p>
          <a href="#contact" className="border-b border-black pb-1 text-xs tracking-[0.2em] uppercase hover:text-gray-500 hover:border-gray-500 transition-all">
            Get in Touch
          </a>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="py-24 px-8 text-center border-t border-white/10 bg-[#0a0a0a]">
        <h3 className="text-2xl font-serif tracking-widest uppercase mb-12">RSJK Architects</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-xs tracking-widest uppercase text-gray-400 mb-16">
          <p>Kukatpally, Hyderabad</p>
          <p>info@rsjk-architects.in</p>
          <p>+91 98765 43210</p>
        </div>
        <p className="text-[10px] tracking-widest text-gray-600 uppercase">
          &copy; {new Date().getFullYear()} RSJK Architects. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}
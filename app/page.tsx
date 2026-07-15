export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      
      {/* NAVIGATION BAR */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
        <h1 className="text-2xl font-extrabold tracking-widest uppercase text-neutral-800">
          RSJK Architects
        </h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-neutral-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-neutral-500 transition-colors">Projects</a>
          <a href="#services" className="hover:text-neutral-500 transition-colors">Services</a>
          <a href="#contact" className="hover:text-neutral-500 transition-colors">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-neutral-900 text-white">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="z-10 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Designing the Future.
          </h2>
          <p className="text-lg md:text-xl font-light text-neutral-300 mb-10">
            Functional, sustainable, and visually inspiring spaces.
          </p>
          <a href="#projects" className="px-8 py-4 bg-white text-neutral-900 font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors">
            View Our Work
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-8 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 uppercase tracking-widest text-neutral-800">About RSJK</h3>
        <div className="w-16 h-1 bg-neutral-900 mx-auto mb-8"></div>
        <p className="text-lg leading-relaxed text-neutral-600">
          Write your firm's history here. Tell your clients about your design philosophy, how many years of experience you have, and what makes your architecture firm unique. 
        </p>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center uppercase tracking-widest text-neutral-800">Featured Projects</h3>
          <div className="w-16 h-1 bg-neutral-900 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="bg-neutral-200 h-80 w-full mb-4 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-300 transition-colors">
                [ Project Image 1 ]
              </div>
              <h4 className="text-xl font-semibold text-neutral-900">Modern Villa Design</h4>
              <p className="text-neutral-500 text-sm font-medium mb-2">📍 Location: Jubilee Hills, Hyderabad</p>
              <p className="text-neutral-600 text-sm">A 5,000 sq ft residential project focusing on natural light, open ventilation, and sustainable materials.</p>
            </div>
            
            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="bg-neutral-200 h-80 w-full mb-4 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-300 transition-colors">
                [ Project Image 2 ]
              </div>
              <h4 className="text-xl font-semibold text-neutral-900">Commercial Office Tower</h4>
              <p className="text-neutral-500 text-sm font-medium mb-2">📍 Location: HITEC City, Telangana</p>
              <p className="text-neutral-600 text-sm">Corporate workspace designed for 500+ employees with integrated green spaces and smart glass facades.</p>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="bg-neutral-200 h-80 w-full mb-4 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-300 transition-colors">
                [ Project Image 3 ]
              </div>
              <h4 className="text-xl font-semibold text-neutral-900">Luxury Interior Renovation</h4>
              <p className="text-neutral-500 text-sm font-medium mb-2">📍 Location: Banjara Hills, Hyderabad</p>
              <p className="text-neutral-600 text-sm">Complete interior redesign of a heritage home, blending modern aesthetics with traditional architecture.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center uppercase tracking-widest text-neutral-800">Our Services</h3>
        <div className="w-16 h-1 bg-neutral-900 mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Architectural Design</h4>
            <p className="text-neutral-600">Comprehensive design services from conceptualization to final blueprints, ensuring structural integrity and aesthetic brilliance.</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Interior Design</h4>
            <p className="text-neutral-600">Curating the inner spaces of your building to harmonize with the architectural shell, optimizing for comfort and style.</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">3D Visualization</h4>
            <p className="text-neutral-600">High-fidelity 3D renders and walk-throughs so you can experience your project before construction even begins.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <footer id="contact" className="bg-neutral-900 text-neutral-400 py-16 px-8 text-center">
        <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest">Let's Work Together</h3>
        <p className="mb-2 text-lg">Email: info@rsjk-architects.in</p>
        <p className="mb-8 text-lg">Phone: +91 98765 43210</p>
        <p className="text-sm border-t border-neutral-700 pt-8 mt-8 max-w-md mx-auto">
          &copy; {new Date().getFullYear()} RSJK Architects. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
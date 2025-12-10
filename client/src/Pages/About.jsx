import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Removed Video imports

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-cubic" });
  }, []);

  // Placeholder image for financial growth theme - replace with your actual asset path if needed
  const aboutImageSrc = "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      // Base dark background color
      className="relative overflow-hidden bg-slate-950 text-white"
      id="about"
    >
      {/* --- Vector Background Pattern --- */}
      {/* This SVG sits behind the content using absolute positioning and low opacity */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none overflow-hidden">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="finance-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    {/* Simple graph up arrow pattern */}
                    <path d="M10 90 L 30 70 L 50 80 L 90 40" stroke="#07bf69" strokeWidth="2" fill="none"/>
                    <circle cx="90" cy="40" r="4" fill="#07bf69" />
                    {/* Subtle grid dots */}
                    <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="60" cy="60" r="1" fill="currentColor" opacity="0.5"/>
                </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#finance-pattern)"></rect>
         </svg>
      </div>


      {/* --- Main Content Container --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 py-20">
        
        {/* Main Grid: Left Image | Right Content */}
        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
          
          {/* LEFT SIDE: Image (Replaced Video) */}
          <div data-aos="fade-right" className="relative">
              {/* Decorative border accent */}
             <div className="absolute -inset-4  rounded-xl z-0 transform translate-x-4 translate-y-4 hidden md:block"></div>
             <img 
                src={aboutImageSrc} 
                alt="Credaro Financial Growth" 
                className="rounded-xl shadow-2xl relative z-10 border border-slate-800 object-cover h-[400px] w-full"
             />
          </div>

          {/* RIGHT SIDE: Content */}
          <div
            className="flex flex-col justify-center text-left"
            data-aos="fade-left"
          >
            {/* Header */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
              About <span className="text-[#07bf69]">Credaro</span>
            </h1>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-300">
              <p>
                Credaro is a specialised financial transformation company built for
                <span className="text-white font-semibold"> MSMEs and growing businesses in India.</span>
              </p>

              {/* Styled emphasis text */}
              <div className="border-l-4 border-[#07bf69] pl-4 bg-slate-900/50 py-2 rounded-r-lg">
                <p className="text-white font-medium italic text-lg md:text-xl">
                  "We don’t just apply for loans."
                </p>
              </div>

              <p>
                We engineer your company’s financials to make you eligible for the
                <span className="text-[#07bf69] font-bold"> best loans in the market.</span>
              </p>
            </div>

            {/* CTA Button (Unchanged) */}
            <div className="mt-10">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc8haoOxC0iM-4by9KDP65jwzFfRj-1DKh70Rt2xbbQjmq1CA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-40 h-12 px-4 bg-[#25975e6e] text-white border-2 border-white rounded-md text-lg font-bold cursor-pointer group flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Contact
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>

                <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-200 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-500 duration-1000"></span>
                <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-700 duration-700"></span>
                <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-1000 duration-500"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
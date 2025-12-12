import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative z-20 w-full min-h-dvh bg-pop-blue flex flex-col justify-between pt-28 md:pt-32 pb-12 px-6 md:px-12 overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem]">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

      {/* Top Bar / Badge */}
      <div className="relative z-10 w-full flex justify-between items-start pointer-events-none">
         <div className="hidden md:block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full pointer-events-auto opacity-0 animate-fade-in delay-300">
             <span className="text-xs font-bold uppercase tracking-widest text-white">Est. 2024 — Future Gastronomy</span>
         </div>
      </div>

      {/* Main Title Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-8 md:my-12">
          <div className="relative text-center leading-[0.85]">
              <h1 className="font-display font-black text-[11vw] md:text-[14vw] text-white tracking-tighter mix-blend-overlay opacity-0 animate-fade-up">
                  TASTE
              </h1>
              
              <div className="relative">
                  {/* Floating Image */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] md:w-[25vw] aspect-square z-20 pointer-events-none opacity-0 animate-scale-in delay-300">
                      <div className="w-full h-full rounded-full border-4 md:border-[6px] border-white shadow-2xl overflow-hidden bg-black animate-float">
                           <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop" alt="Signature Dish" className="w-full h-full object-cover" />
                      </div>
                  </div>
                  
                  <h1 className="font-display font-black text-[11vw] md:text-[14vw] text-transparent stroke-text relative z-30 pointer-events-none opacity-0 animate-fade-up delay-100" 
                      style={{ WebkitTextStroke: "2px #FACC15" }}
                  >
                      BOLDLY
                  </h1>
              </div>
          </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-8 opacity-0 animate-fade-in delay-500">
          <div className="hidden md:block max-w-md text-white/90">
              <h3 className="font-display font-bold text-xl mb-2">The Architecture of Flavor</h3>
              <p className="font-sans text-lg font-medium leading-relaxed">We don't just cook. We engineer <span className="text-pop-yellow decoration-wavy underline">edible experiences</span> for the brave palette.</p>
          </div>
          
          <div className="flex items-center gap-4 mx-auto md:mx-0">
               <a 
                   href="#contact" 
                   className="bg-pop-yellow text-black font-display font-black text-lg md:text-xl px-8 py-4 md:px-10 md:py-6 rounded-[2rem] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 transform hover:rotate-1"
                   data-hover="true"
               >
                   SIGNAL HQ <span className="text-xl md:text-2xl">↗</span>
               </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;
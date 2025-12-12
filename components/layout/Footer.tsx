import React, { useEffect, useRef } from 'react';

const Footer: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) entry.target.classList.add('is-visible');
    }, { threshold: 0.1 });
    if(ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-black text-white pt-16 md:pt-20 pb-12 overflow-hidden rounded-t-[2rem] md:rounded-t-[3rem] -mt-10 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-12">
            <div className="max-w-xl">
                <h2 className="text-4xl md:text-7xl font-display font-black uppercase mb-6 md:mb-8 leading-none">
                    Let's make <br/> <span className="text-pop-blue">History</span>.
                </h2>
            </div>

            <div className="flex gap-12 text-base md:text-lg font-bold">
                <ul className="space-y-3 md:space-y-4">
                    {['Instagram', 'Twitter', 'TikTok'].map((item) => (
                        <li key={item}>
                            <a href="#" className="hover:text-pop-pink transition-colors relative group" data-hover="true">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pop-pink transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="space-y-3 md:space-y-4 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                </ul>
            </div>
        </div>

        <div className="relative border-t border-white/20 pt-8 flex justify-between items-center text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500">
             <span>© 2024 Habitat</span>
             <span>SF — CA</span>
        </div>
        
        <div className="text-center mt-8 md:mt-12 overflow-hidden">
            <h1 
                ref={ref}
                className="reveal-on-scroll text-[20vw] font-display font-black leading-none text-white/10 select-none cursor-default hover:text-white/20 hover:scale-105 transition-all duration-500"
            >
                HABITAT
            </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
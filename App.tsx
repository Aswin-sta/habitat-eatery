import React, { useEffect, useState, useRef } from 'react';
import CustomCursor from './components/ui/CustomCursor';
import FloatingContact from './components/ui/FloatingContact';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Manifesto from './components/sections/Manifesto';
import FeaturedMenu from './components/sections/FeaturedMenu';
import Expansion from './components/sections/Expansion';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FullMenu from './components/pages/FullMenu';
import IntroOverlay from './components/layout/IntroOverlay';

const App: React.FC = () => {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const isMounted = useRef(false);

  // Robust Loader Logic
  useEffect(() => {
    isMounted.current = true;
    window.scrollTo(0, 0);

    const handleReady = async () => {
        if (document.readyState !== 'complete') {
            await new Promise(resolve => window.addEventListener('load', resolve, { once: true }));
        }

        if (document.fonts) {
            await document.fonts.ready;
        }

        const heroImg = new Image();
        heroImg.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop";
        
        await new Promise((resolve) => {
            if (heroImg.complete) resolve(true);
            heroImg.onload = () => resolve(true);
            heroImg.onerror = () => resolve(true);
        });

        requestAnimationFrame(() => {
             if (isMounted.current) {
                 setTimeout(() => {
                    if (isMounted.current) {
                        setLoading(false);
                        // Small delay to allow loader to exit before showing content transition
                        setTimeout(() => setContentVisible(true), 100);
                    }
                 }, 1000);
             }
        });
    };

    handleReady();

    return () => {
      isMounted.current = false;
    };
  }, []);

  // Scroll locking
  useEffect(() => {
    if (loading || isFullMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading, isFullMenuOpen]);

  return (
    <div className="bg-pop-cream text-black min-h-screen selection:bg-pop-pink selection:text-black">
      <CustomCursor />
      
      {/* Navbar with simple fade in */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
      </div>
      
      {/* Loader */}
      {loading && <IntroOverlay isExiting={!loading} />}

      {/* Main Content */}
      <main 
        className={`w-full relative transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ display: loading ? 'none' : 'block' }}
      >
        <Hero />
        <Manifesto />
        <FeaturedMenu onOpenFullMenu={() => setIsFullMenuOpen(true)} />
        <Expansion />
        <Contact />
        <Footer/>
      </main>
      
      {!loading && <FloatingContact />}
      
      <FullMenu isOpen={isFullMenuOpen} onClose={() => setIsFullMenuOpen(false)} />
    </div>
  );
};

export default App;
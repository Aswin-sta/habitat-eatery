import React, { useState, useEffect } from 'react';
import { Phone, Mail, X, MessageSquare } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.915 12.541 9.318 11.568 9.145 11.27C8.972 10.973 9.127 10.812 9.275 10.664C9.409 10.531 9.573 10.317 9.721 10.144C9.87 9.97 9.919 9.846 10.019 9.647C10.118 9.449 10.069 9.276 9.994 9.127C9.919 8.978 9.325 7.515 9.078 6.92C8.836 6.341 8.591 6.42 8.409 6.411C8.236 6.403 8.038 6.401 7.839 6.401C7.641 6.401 7.319 6.475 7.047 6.773C6.775 7.07 6.007 7.789 6.007 9.252C6.007 10.714 7.072 12.127 7.22 12.326C7.369 12.524 9.316 15.525 12.297 16.812C13.006 17.118 13.559 17.301 13.991 17.437C14.703 17.664 15.351 17.632 15.862 17.555C16.433 17.47 17.62 16.836 17.868 16.142C18.116 15.448 18.116 14.853 18.041 14.729C17.967 14.605 17.769 14.531 17.472 14.382ZM12.049 24C9.929 24 7.864 23.468 6.046 22.434L5.666 22.22L0.999 23.447L2.247 18.905L2.011 18.53C0.899 16.751 0.314 14.694 0.314 12.576C0.314 6.096 5.587 0.823 12.054 0.823C15.19 0.823 18.136 2.043 20.352 4.26C22.568 6.477 23.788 9.424 23.788 12.576C23.788 19.056 18.523 24 12.049 24Z"/>
  </svg>
);

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) { 
           setIsVisible(false);
           setIsOpen(false);
        } else {
           setIsVisible(true);
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <div className={`flex flex-col gap-3 mb-1 items-end transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            {[
                { icon: WhatsAppIcon, color: 'bg-pop-green', href: 'https://wa.me/15550123456', label: 'WhatsApp' },
                { icon: Mail, color: 'bg-pop-pink', href: 'mailto:eat@habitat.com', label: 'Email' },
                { icon: Phone, color: 'bg-pop-yellow', href: 'tel:+14155550199', label: 'Call' }
            ].map((item, i) => (
                <div
                    key={i}
                    className="flex items-center gap-3 transition-all duration-300"
                    style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
                >
                    <span className="text-xs font-bold uppercase bg-black text-white px-2 py-1 rounded shadow-md hidden md:block">{item.label}</span>
                    <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`w-12 h-12 md:w-14 md:h-14 ${item.color} rounded-full border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all`} 
                        data-hover="true"
                    >
                        <item.icon size={20} className="text-black" />
                    </a>
                </div>
            ))}
        </div>

        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 md:w-16 md:h-16 ${isOpen ? 'bg-black text-white' : 'bg-white text-black'} rounded-full border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all z-50`}
            data-hover="true"
            aria-label="Quick Connect"
        >
            <div className="relative flex items-center justify-center w-full h-full">
                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-100' : 'rotate-0 opacity-0'}`}><X size={24} /></div>
                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                    <MessageSquare size={24} className="fill-current" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-pop-orange rounded-full animate-ping" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-pop-orange rounded-full border border-white" />
                </div>
            </div>
        </button>
    </div>
  );
};

export default FloatingContact;
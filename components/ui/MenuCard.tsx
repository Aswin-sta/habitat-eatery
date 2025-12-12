import React from 'react';
import { MenuItem } from '../../types';
import { CARD_COLORS, TEXT_COLORS } from '../../data/menuData';

interface MenuCardProps {
    item: MenuItem;
    index: number;
    className?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index, className = "" }) => {
    const bgColor = CARD_COLORS[index % CARD_COLORS.length];
    const textColor = TEXT_COLORS[index % TEXT_COLORS.length];

    return (
        <div className={`${className} ${bgColor} rounded-[2.5rem] md:rounded-[3rem] border-4 border-black flex flex-col`}>
            {/* Image Container */}
            <div className="w-full aspect-square md:aspect-auto md:h-[55%] rounded-[2rem] border-2 border-black overflow-hidden mb-6 relative bg-white">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy" 
                />
                <div className="absolute top-4 right-4 bg-white text-black font-display font-black text-xl px-3 py-1 rounded-full border border-black shadow-md">
                    ${item.price}
                </div>
            </div>

            {/* Content Container */}
            <div className={`flex-1 flex flex-col justify-between ${textColor}`}>
                <div>
                    <div className="flex items-center gap-2 mb-2">
                         <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider border border-current px-2 rounded-full opacity-60">
                            {item.category}
                         </span>
                    </div>
                    <h4 className="text-4xl md:text-5xl font-display font-black leading-[0.9] mb-4">
                        {item.name}
                    </h4>
                    <p className="font-sans text-base md:text-lg font-medium opacity-90 leading-tight">
                        {item.description}
                    </p>
                </div>
                <button 
                    className="self-start mt-6 md:mt-4 px-6 py-3 bg-black text-white rounded-full font-bold uppercase text-sm border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors" 
                    data-hover="true"
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
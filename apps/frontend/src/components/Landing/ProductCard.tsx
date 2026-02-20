import React from 'react';

interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    badge?: string;
    badgeColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, badge, badgeColor = "text-primary" }) => {
    return (
        <div className="product-card group cursor-pointer">
            <div className="relative aspect-[3/4] mb-4 bg-slate-100 dark:bg-slate-800 overflow-hidden rounded-xl">
                <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={image}
                    alt={name}
                />
                <div className="quick-add absolute bottom-4 inset-x-4">
                    <button className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-3 rounded-lg font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-all uppercase tracking-wider">
                        Quick Add +
                    </button>
                </div>
            </div>
            <div className="space-y-1">
                {badge && <p className={`text-xs ${badgeColor} font-bold uppercase tracking-wider`}>{badge}</p>}
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{name}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;

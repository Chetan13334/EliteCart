import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo & Main Nav */}
                    <div className="flex items-center gap-12">
                        <a className="flex items-center gap-2 group" href="#">
                            <div className="text-primary">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">EliteCart</span>
                        </a>
                        <nav className="hidden md:flex items-center gap-8 uppercase tracking-widest text-xs font-semibold text-slate-600 dark:text-slate-400">
                            <a className="hover:text-primary transition-colors" href="#">Shop</a>
                            <a className="hover:text-primary transition-colors" href="#">Collections</a>
                            <a className="hover:text-primary transition-colors" href="#">About</a>
                            <a className="hover:text-primary transition-colors" href="#">Journal</a>
                        </nav>
                    </div>
                    {/* Icons & Search */}
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 border border-transparent focus-within:border-primary transition-all">
                            <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-400 text-slate-900 dark:text-white"
                                placeholder="Search our collection..."
                                type="text"
                            />
                        </div>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all relative text-slate-600 dark:text-slate-400 hover:text-primary">
                            <span className="material-symbols-outlined">person</span>
                        </button>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all relative text-slate-600 dark:text-slate-400 hover:text-primary">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
                        </button>
                        <button
                            onClick={() => navigate('/signin')}
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/20 active:scale-95"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import FloatingButton from '../common/FloatingButton';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 text-white mb-6">
                            <div className="text-primary">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tighter">EliteCart</span>
                        </div>
                        <p className="mb-8 max-w-sm text-sm">Elevating your lifestyle with premium fashion and artisan craftsmanship. Sustainable, ethical, and timeless.</p>
                        <div className="flex gap-4">
                            <a className="p-2 bg-slate-900 rounded-lg hover:text-white transition-colors" href="#">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </a>
                            <a className="p-2 bg-slate-900 rounded-lg hover:text-white transition-colors" href="#">
                                <span className="material-symbols-outlined">public</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-white transition-colors" href="#">Shop All</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Collections</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Customer Care</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
                        <p className="text-sm mb-6">Join our community for early access and exclusive previews.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg text-sm px-4 py-3 outline-none focus:border-primary text-white placeholder:text-slate-500 transition-colors"
                                placeholder="email@example.com"
                                type="email"
                            />
                            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
                    <p>© 2026 EliteCart Premium E-commerce. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Scroll-to-top floating button — bottom-right */}
            <FloatingButton mode="scroll-top" position="bottom-right" />
        </footer>
    );
};

export default Footer;

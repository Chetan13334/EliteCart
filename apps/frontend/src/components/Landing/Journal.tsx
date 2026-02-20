import React from 'react';

const Journal = () => {
    return (
        <section className="bg-slate-100 dark:bg-slate-900/50 py-24 overflow-hidden gsap-reveal">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo2jMmZACf8ReOgutrjwN_b71rC9nXPKpfQ4EEUCrxl3pdmsyIjzZ4uqKlD4tm1Rhmssea6ySDWFcZfT6qOdqkZRgfOw8SXXSa6zWu0YoYrMcYZkG-qlKt-0TcL2UyRUkpO8G8pZ8ELL34rNE4ZQifxEWn6RXIzDa2WU7vuAhy0f69yxSZ-bvq9Y3RTlYWkf82tE3uAftk6CzfM_BLFOuxmpld_gYv8eDs7ErAUqe0nAJ0tnLtsa41tA1xlzec2lQzRNd_4YAb0tc"
                            alt="Interior of a luxury minimalist boutique"
                        />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-xs">Our Heritage</span>
                            <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight text-slate-900 dark:text-white">Mastering Craftsmanship in a Digital Age</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                LUXE isn't just about fashion. It's about a seamless interaction between design and technology. Powered by a modern MERN stack architecture, we ensure your journey from discovery to delivery is as elegant as the garments we create.
                            </p>
                        </div>
                        <a className="inline-flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white border-b-2 border-primary pb-1 group" href="#">
                            Read the Journal
                            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journal;

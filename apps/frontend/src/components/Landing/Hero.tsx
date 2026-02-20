import React from 'react';

interface HeroProps {
    backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
    const defaultImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBC14X1SRJrO7EXlnNdA1c76F9A7hUd_Nha3QtfcCk38ijoNKPAVLGZM5flOGqB_eVPlDayC97YxJNEU43D-17oEnC8ga1FrHv3bn6lytZ7OBf1Uj-W5Ni9fcVmKyIYuaS8fghJVS0xOUOQTWntCFeAO0dsBCC18PAS8R3TEGJdXrPSzLlRhNxaNUV1NnNMl0mS_BMf0e5mmOO8g9GjXc6j6eD1QP1r3xI59zF5CCR0K5Jj_il3ThU54JMi24SwiAQGDrG8hjRdY7M";

    return (
        <section className="relative h-[85vh] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${backgroundImage || defaultImage}')` }}
                aria-label="High fashion editorial model in autumn clothing"
            >
                <div className="absolute inset-0 hero-gradient"></div>
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <span className="text-white/80 uppercase tracking-[0.4em] text-xs mb-6 font-medium gsap-hero-item">New Arrival</span>
                <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight max-w-4xl leading-tight gsap-hero-item">
                    The Autumn Collection 2026
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl gsap-hero-item">
                    Timeless elegance for the modern individual. Discover pieces crafted for longevity and style.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 gsap-hero-item">
                    <button className="px-10 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all uppercase tracking-widest text-sm">
                        Shop New Arrivals
                    </button>
                    <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold rounded-lg hover:bg-white/20 transition-all uppercase tracking-widest text-sm">
                        View Lookbook
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

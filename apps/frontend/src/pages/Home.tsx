import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";
import FeaturedSection from "../components/Landing/FeaturedSection";
import Recommendations from "../components/Landing/Recommendations";
import { useAuth } from "../contexts/AuthContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home: React.FC = () => {
    const { user } = useAuth();
    const containerRef = useRef<HTMLDivElement>(null);
    const heroBgRef = useRef<HTMLDivElement>(null);
    const bannerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // ── 1. Loyalty Banner slide-down ──
            gsap.from(bannerRef.current, {
                y: -40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            // ── 2. Hero text stagger entrance ──
            gsap.from(".home-hero-item", {
                y: 60,
                opacity: 0,
                duration: 1.3,
                stagger: 0.18,
                ease: "power4.out",
                delay: 0.4,
            });

            // ── 3. Hero background Ken-Burns zoom ──
            gsap.to(heroBgRef.current, {
                scale: 1.08,
                duration: 8,
                ease: "none",
            });

            // ── 4. Hero parallax on scroll ──
            gsap.to(heroBgRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".home-hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // ── 5. Scroll-reveal for sections ──
            const revealSections = gsap.utils.toArray<HTMLElement>(".home-reveal");
            revealSections.forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    y: 56,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                });
            });

            // ── 6. Stagger children of any .home-stagger-children parent ──
            const staggerParents = gsap.utils.toArray<HTMLElement>(
                ".home-stagger-children"
            );
            staggerParents.forEach((parent) => {
                const children = parent.children;
                gsap.from(children, {
                    scrollTrigger: {
                        trigger: parent,
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                });
            });
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden"
        >
            {/* ── Loyalty Banner ── */}
            <div
                ref={bannerRef}
                className="bg-slate-900 dark:bg-black text-white py-2.5 px-4 text-center"
            >
                <p className="text-xs tracking-[0.15em] font-medium uppercase">
                    Welcome back,{" "}
                    <span className="text-primary font-bold">{user?.name ?? "Guest"}</span>
                    . Your exclusive{" "}
                    <span className="text-primary font-bold">10% loyalty discount</span>{" "}
                    has been applied at checkout.
                </p>
            </div>

            <Header />

            <main>
                {/* ── HERO ── */}
                <section className="home-hero-section relative h-[80vh] w-full overflow-hidden">
                    {/* Parallax + Ken Burns background */}
                    <div
                        ref={heroBgRef}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC14X1SRJrO7EXlnNdA1c76F9A7hUd_Nha3QtfcCk38ijoNKPAVLGZM5flOGqB_eVPlDayC97YxJNEU43D-17oEnC8ga1FrHv3bn6lytZ7OBf1Uj-W5Ni9fcVmKyIYuaS8fghJVS0xOUOQTWntCFeAO0dsBCC18PAS8R3TEGJdXrPSzLlRhNxaNUV1NnNMl0mS_BMf0e5mmOO8g9GjXc6j6eD1QP1r3xI59zF5CCR0K5Jj_il3ThU54JMi24SwiAQGDrG8hjRdY7M')",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55" />
                    </div>

                    {/* Hero content */}
                    <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                        <span className="home-hero-item text-white/80 uppercase tracking-[0.4em] text-xs mb-6 font-medium">
                            Autumn Editorial
                        </span>

                        <h1 className="home-hero-item text-5xl md:text-7xl font-light text-white mb-8 tracking-tight max-w-4xl leading-tight">
                            Refined Elegance, <br /> Curated for You
                        </h1>

                        <p className="home-hero-item text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl">
                            Discover the latest arrivals in our Autumn 2024 collection,
                            handpicked to complement your style.
                        </p>

                        <div className="home-hero-item flex flex-col sm:flex-row gap-4">
                            <button className="px-10 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-primary/30">
                                Shop New Arrivals
                            </button>
                            <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm">
                                View Lookbook
                            </button>
                        </div>
                    </div>
                </section>

                {/* ── RECOMMENDATIONS ── scroll-revealed */}
                <div className="home-reveal">
                    <Recommendations />
                </div>

                {/* ── FEATURED SECTION ── scroll-revealed */}
                <div className="home-reveal">
                    <FeaturedSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
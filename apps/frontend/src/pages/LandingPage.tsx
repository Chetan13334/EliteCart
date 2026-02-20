import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Header from '../components/layout/Header';
import Hero from '../components/Landing/Hero';
import FeaturedSection from '../components/Landing/FeaturedSection';
import Journal from '../components/Landing/Journal';
import Recommendations from '../components/Landing/Recommendations';
import Footer from '../components/layout/Footer';

import heroImage from '../assets/pixels.jpg';


gsap.registerPlugin(ScrollTrigger, useGSAP);

const LandingPage = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Hero Entrance Animation
        gsap.from(".gsap-hero-item", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5
        });

        // 2. Scroll Reveal Animations
        const sections = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
        sections.forEach((section) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%", // when the top of the section hits 85% of the viewport height
                    toggleActions: "play none none none"
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
            <Header />
            <main>
                <Hero backgroundImage={heroImage} />
                <FeaturedSection />
                <Journal />
                <Recommendations />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;

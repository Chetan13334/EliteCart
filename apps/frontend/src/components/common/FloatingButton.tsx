import React from "react";
import { useNavigate } from "react-router-dom";

interface FloatingButtonProps {
    mode: "back" | "scroll-top";
    position?: "top-left" | "bottom-right";
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ mode, position = "bottom-right" }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (mode === "scroll-top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate(-1);
        }
    };

    const positionClasses = position === "top-left"
        ? "top-8 left-8"
        : "bottom-8 right-8";

    return (
        <button
            onClick={handleClick}
            aria-label={mode === "scroll-top" ? "Back to top" : "Go back"}
            className={`fixed ${positionClasses} w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-white rounded-full shadow-2xl backdrop-blur-lg border border-white/20 dark:border-slate-700/50 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 active:scale-95 transition-all duration-300 z-[60] group`}
        >
            <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                {mode === "scroll-top" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                )}
            </div>
        </button>
    );
};

export default FloatingButton;

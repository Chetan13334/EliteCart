import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import modelImg from "../assets/model2.jpg";

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Signup submitted");
    };

    return (
        <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="flex min-h-screen">

                {/* Left Image Section */}
                <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="High fashion editorial model in autumn clothing"
                        src={modelImg}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                    <div className="absolute bottom-8 left-8 max-w-md text-white">
                        <span className="uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
                            Autumn Collection 2024
                        </span>
                        <h2 className="text-4xl font-light leading-tight mb-4">
                            Join the LUXE Circle: Experience personalized luxury.
                        </h2>
                        <p className="text-white/80 font-light">
                            Become a member to access exclusive collections, personalized
                            styling, and priority service.
                        </p>
                    </div>
                </div>

                {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8  bg-white dark:bg-background-dark">
                    <div className="w-full max-w-md space-y-10">

                        {/* Logo + Heading */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="text-primary">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 48 48">
                                        <path
                                            d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <span className="text-3xl font-bold tracking-tighter uppercase">
                                    LUXE
                                </span>
                            </div>

                            <div className="text-center">
                                <h1 className="text-xl font-medium tracking-tight">
                                    Create Account
                                </h1>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                                    Enter your details to join our premium community
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={handleSubmit}>

                            {/* Full Name */}
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400"
                                />
                            </div>

                            {/* Password */}
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400"
                                />
                                <p className="text-[10px] text-slate-400 mt-1">
                                    Minimum 8 characters with at least one symbol.
                                </p>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    required
                                    className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                                />
                                <label className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    I agree to receive the newsletter and marketing communications from LUXE.
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                            >
                                Create Account
                            </button>

                            {/* Google Button */}
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-4 rounded-lg font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                            >
                                Sign up with Google
                            </button>

                        </form>

                        {/* Footer */}
                        <div className="text-center pt-2">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Already have an account?
                                <span
                                    onClick={() => navigate("/signin")}
                                    className="text-primary font-bold hover:underline ml-1 cursor-pointer"
                                >
                                    Sign In
                                </span>
                            </p>
                        </div>

                        <div className="pt-8 text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">
                            <p>Secured by MERN Architecture</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
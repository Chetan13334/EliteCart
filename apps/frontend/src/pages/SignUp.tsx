import React, { useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import FloatingButton from "../components/common/FloatingButton";
import modelImg from "../assets/model2.jpg";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();

    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setError(null);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreedToTerms) {
            setError("You must agree to the newsletter terms to create an account.");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            await signup({ name: form.name, email: form.email, password: form.password });
            navigate("/signin");
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Sign up failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
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
                            Autumn Collection 2026
                        </span>
                        <h2 className="text-4xl font-light leading-tight mb-4">
                            Join the EliteCart Circle: Experience personalized luxury.
                        </h2>
                        <p className="text-white/80 font-light">
                            Become a member to access exclusive collections, personalized
                            styling, and priority service.
                        </p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white dark:bg-background-dark">
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
                                    EliteCart
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

                            {/* Error Banner */}
                            {error && (
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg px-4 py-3 text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Full Name */}
                            <div className="space-y-1">
                                <label
                                    htmlFor="signup-name"
                                    className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="signup-name"
                                    name="name"
                                    type="text"
                                    required
                                    minLength={2}
                                    maxLength={80}
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label
                                    htmlFor="signup-email"
                                    className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="signup-email"
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400"
                                />
                            </div>

                            {/* Password */}
                            <div className="space-y-1">
                                <label
                                    htmlFor="signup-password"
                                    className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400"
                                >
                                    Password
                                </label>
                                <input
                                    id="signup-password"
                                    name="password"
                                    type="password"
                                    required
                                    minLength={8}
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400"
                                />
                                <p className="text-[10px] text-slate-400 mt-1">
                                    Minimum 8 characters with at least one letter and one number.
                                </p>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="terms-checkbox"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                                />
                                <label
                                    htmlFor="terms-checkbox"
                                    className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed cursor-pointer"
                                >
                                    I agree to receive the newsletter and marketing communications from EliteCart.
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                        </svg>
                                        Creating Account...
                                    </>
                                ) : (
                                    "Create Account"
                                )}
                            </button>

                            {/* Google Button */}
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-4 rounded-lg font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Sign up with Google
                            </button>

                        </form>

                        {/* Footer links */}
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
            {/* Back to landing/previous button — top-left */}
            <FloatingButton mode="back" position="top-left" />
        </div>
    );
};

export default SignUp;
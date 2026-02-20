import React, { useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import FloatingButton from "../components/common/FloatingButton";
import modelImg from "../assets/model.jpg";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signin({ email: form.email, password: form.password });
      navigate("/home");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex min-h-screen">

        {/* Left Side Image Section */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="High fashion editorial model in autumn clothing"
            src={modelImg}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-md text-white">
            <span className="uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Autumn Collection 2026
            </span>
            <h2 className="text-4xl font-light leading-tight mb-4">
              Redefining the essence of modern luxury.
            </h2>
            <p className="text-white/80 font-light">
              Join our community for a personalized shopping experience powered
              by the latest in fashion technology.
            </p>
          </div>
        </div>

        {/* Right Side Login Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-10 lg:p-14 bg-white dark:bg-background-dark">
          <div className="w-full max-w-md space-y-12">

            {/* Logo + Heading */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48">
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
                  Welcome Back
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Enter your credentials to access your account
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Error Banner */}
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              {/* Email */}
              <div className="space-y-1">
                <label
                  htmlFor="signin-email"
                  className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400"
                >
                  Email Address
                </label>
                <input
                  id="signin-email"
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
                  htmlFor="signin-password"
                  className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400"
                >
                  Password
                </label>
                <input
                  id="signin-password"
                  name="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Remember */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                />
                <label htmlFor="remember-me" className="text-sm text-slate-600 dark:text-slate-400">
                  Remember me for 30 days
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
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center pt-8">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Don't have an account?
                <span
                  onClick={() => navigate("/signup")}
                  className="text-primary font-bold hover:underline ml-1 cursor-pointer"
                >
                  Create an Account
                </span>
              </p>
            </div>

            <div className="pt-12 text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">
              <p>Secured by MERN Architecture</p>
            </div>

          </div>
        </div>
      </div>
      <FloatingButton mode="back" position="top-left" />
    </div>
  );
};

export default SignIn;
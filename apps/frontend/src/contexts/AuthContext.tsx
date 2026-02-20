import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { authService } from "../services/authService";
import type { User, SignupRequest, SigninRequest } from "../interfaces/auth.interface";

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
}

interface AuthContextValue extends AuthState {
    signup: (payload: SignupRequest) => Promise<void>;
    signin: (payload: SigninRequest) => Promise<void>;
    signout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<AuthState>({
        user: null,
        accessToken: null,
        isAuthenticated: false,
    });

    const signup = useCallback(async (payload: SignupRequest) => {
        const result = await authService.signup(payload);
        setState({
            user: result.data.user,
            accessToken: result.data.accessToken,
            isAuthenticated: true,
        });
    }, []);

    const signin = useCallback(async (payload: SigninRequest) => {
        const result = await authService.signin(payload);
        setState({
            user: result.data.user,
            accessToken: result.data.accessToken,
            isAuthenticated: true,
        });
    }, []);

    const signout = useCallback(async () => {
        await authService.signout();
        setState({ user: null, accessToken: null, isAuthenticated: false });
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, signup, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextValue => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
};

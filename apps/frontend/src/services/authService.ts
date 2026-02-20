import type { SignupRequest, SigninRequest, AuthResponse } from "../interfaces/auth.interface";

const API_URL = import.meta.env.VITE_API_URL as string;

async function request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data as T;
}

export const authService = {
    signup: (payload: SignupRequest): Promise<AuthResponse> =>
        request<AuthResponse>("/auth/signup", {
            method: "POST",
            body: JSON.stringify(payload),
        }),

    signin: (payload: SigninRequest): Promise<AuthResponse> =>
        request<AuthResponse>("/auth/signin", {
            method: "POST",
            body: JSON.stringify(payload),
        }),

    signout: (): Promise<void> =>
        request<void>("/auth/signout", { method: "POST" }),

    me: (accessToken: string): Promise<{ success: boolean; data: { user: import("../interfaces/auth.interface").User } }> =>
        request("/auth/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
        }),
};

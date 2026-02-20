export interface User {
    id: string;
    name: string;
    email: string;
    role: "customer" | "admin";
    lastLoginAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface SignupRequest {
    name: string;
    email: string;
    password: string;
}

export interface SigninRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    data: {
        user: User;
        accessToken: string;
    };
}

export interface ApiError {
    success: false;
    message: string;
    errors?: Record<string, string[]>;
}

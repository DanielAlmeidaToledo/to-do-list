import React from "react";
import { render, act } from "@testing-library/react";
import { AuthProvider, useAuth, AuthContext } from "./Auth";
import { api } from "../../Services/axios";

jest.mock("@testing-library/react");

// Mock da função useWarningSnackbar
jest.mock("../../Helpers/Hooks/useWarningSnackbar", () => ({
    useWarningSnackbar: jest.fn(),
}));

// Mock da função useLoading
jest.mock("../../Context/Loading", () => ({
    useLoading: () => ({
        setLoading: jest.fn(),
    }),
}));

// Mock do localStorage
const mockLocalStorage = (token) => {
    Object.defineProperty(window, "localStorage", {
        value: {
            getItem: jest.fn(() => token),
            setItem: jest.fn(),
            removeItem: jest.fn(),
        },
        writable: true,
    });
};

// Mock do axios
jest.mock("../../Services/axios", () => ({
    api: {
        post: jest.fn(),
    },
}));

describe("Auth Context", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("provides auth context values", () => {
        const TestComponent = () => {
            const authContext = useAuth();
            return (
                <>
                    <div>
                        {authContext.user ? "Logged In" : "Not Logged In"}
                    </div>
                </>
            );
        };

        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        expect(screen.getByText("Not Logged In")).toBeInTheDocument();
    });

    it("logs in successfully", async () => {
        const TestComponent = () => {
            const { login } = useAuth();
            const handleLogin = async () => {
                await login({ username: "testuser", password: "testpassword" });
            };
            return (
                <>
                    <button onClick={handleLogin}>Login</button>
                </>
            );
        };

        api.post.mockResolvedValueOnce({ data: { token: "mockedToken" } });

        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await act(async () => {
            await fireEvent.click(screen.getByText("Login"));
        });

        expect(api.post).toHaveBeenCalledWith("/api/Auth", {
            username: "testuser",
            password: "testpassword",
        });

        expect(localStorage.setItem).toHaveBeenCalledWith(
            "authToken",
            "mockedToken"
        );
        expect(screen.getByText("Logged In")).toBeInTheDocument();
    });
});

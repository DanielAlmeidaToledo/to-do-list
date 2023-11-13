import { createContext, useContext, useState, useCallback } from "react";
import { api } from "../../Services/axios";
import { useWarningSnackbar } from "../../Helpers/Hooks/useWarningSnackbar";
import { useLoading } from "../Loading";

export type UserProps = {
    username: string;
    password: string;
    name: string;
};

type AuthContextProps = {
    user: UserProps | null;
    login: (user: UserProps) => Promise<void>;
    register: (user: UserProps) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserProps | null>(null);
    const showWarningSnackbar = useCallback(useWarningSnackbar(), []);
    const { setLoading } = useLoading();

    // Login
    const login = async (user: UserProps) => {
        setLoading(true);
        try {
            const response = await api.post("/api/Auth", {
                username: user.username,
                password: user.password,
            });

            // Armazena o token no localStorage
            const newToken = response.data.token;
            localStorage.setItem("authToken", newToken);

            setUser(user);

            showWarningSnackbar({
                msg: "Usuário logado com sucesso!",
                severity: "success",
            });
            setLoading(false);
        } catch (error: any) {
            if (error.response.status === 400) {
                showWarningSnackbar({
                    msg: "Usuário ou senha inválidos!",
                    severity: "error",
                });
            }
            throw error;
        }
    };

    // Register
    const register = async (user: UserProps) => {
        try {
            const response = await api.post("/api/Auth/SignIn", {
                username: user.username,
                password: user.password,
                name: user.name,
            });

            setUser(user);

            showWarningSnackbar({
                msg: "Usuário cadastrado com sucesso!",
                severity: "success",
            });
        } catch (error: any) {
            if (error.response.status === 400) {
                showWarningSnackbar({
                    msg: "Usuário ou senha inválidos!",
                    severity: "error",
                });
            }
            throw error;
        }
    };

    // Logout
    const logout = () => {
        localStorage.removeItem("authToken");
        setUser(null);
        showWarningSnackbar({
            msg: "Usuário deslogado.",
            severity: "info",
        });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout,
            }}
        >
            <>{children}</>
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthContext, useAuth, AuthProvider };

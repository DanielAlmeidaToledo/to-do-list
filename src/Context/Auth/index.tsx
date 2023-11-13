import { createContext, useContext, useState } from "react";
import { api } from "../../Services/axios";

export type UserProps = {
    username: string;
    password: string;
    name: string;
};

type AuthContextProps = {
    user: UserProps | null;
    login: (user: UserProps) => void;
    register: (user: UserProps) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserProps | null>(null);

    const login = async (user: UserProps) => {
        await api
            .post("/api/Auth", {
                username: user.username,
                password: user.password,
            })
            .then((response: any) => {
                console.log(response);
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    const register = async (user: UserProps) => {
        try {
            const response = await api.post("/api/Auth/SignIn", {
                username: user.username,
                password: user.password,
                name: user.name,
            });
            console.log(response);
        } catch (error: any) {
            console.log(error);
        }
    };

    const logout = () => {
        setUser(null);
        console.log("logout");
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

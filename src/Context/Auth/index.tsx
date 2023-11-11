import { createContext, useContext, useState } from "react";

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

    const login = (user: UserProps) => {
        setUser(user);
        console.log(user);
        console.log("login");
    };

    const register = (user: UserProps) => {
        setUser(user);
        console.log(user);
        console.log("register");
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

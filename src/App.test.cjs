import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock dos provedores e do RouterProvider
jest.mock("notistack", () => ({
    SnackbarProvider: ({ children }) => children,
}));
jest.mock("./Context/Loading/index.tsx", () => ({
    LoadingProvider: ({ children }) => children,
}));
jest.mock("./Context/Auth/index.tsx", () => ({
    AuthProvider: ({ children }) => children,
}));
jest.mock("./Context/Task/index.tsx", () => ({
    TasksProvider: ({ children }) => children,
}));
jest.mock("react-router-dom", () => ({
    RouterProvider: ({ children }) => children,
}));

// Mock dos componentes filhos
jest.mock("./Pages/Home/Home.tsx", () => () => <div data-testid="home-page" />);
jest.mock("./Pages/Login/Login.tsx", () => () => (
    <div data-testid="login-page" />
));
jest.mock("./Pages/Register/Register.tsx", () => () => (
    <div data-testid="register-page" />
));
jest.mock("./Components/Footer/Footer.tsx", () => () => (
    <div data-testid="footer" />
));

test("renders App component", () => {
    // Renderiza o componente
    render(<App />);

    // Verifica se os componentes filhos foram renderizados
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
    expect(screen.getByTestId("login-page")).toBeInTheDocument();
    expect(screen.getByTestId("register-page")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
});

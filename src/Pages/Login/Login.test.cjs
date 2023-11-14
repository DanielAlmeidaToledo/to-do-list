import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "../../Context/Auth";
import Login from "./Login";

jest.mock("../../Context/Auth");

const mockedUseAuth = useAuth;

describe("Login Component", () => {
    it("renders Login component", async () => {
        // Mock para o contexto de autenticação
        mockedUseAuth.mockReturnValue({ login: jest.fn() });

        // Renderizar o componente
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        // Verificar se os elementos são renderizados corretamente
        expect(screen.getByText("Logo")).toBeInTheDocument();
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Login" })
        ).toBeInTheDocument();
    });

    it("handles login with valid credentials", async () => {
        // Mock para o contexto de autenticação
        const mockLogin = jest.fn();
        mockedUseAuth.mockReturnValue({ login: mockLogin });

        // Renderizar o componente
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        // Preencher os campos de login
        fireEvent.change(screen.getByLabelText("Username"), {
            target: { value: "testuser" },
        });
        fireEvent.change(screen.getByLabelText("Password"), {
            target: { value: "testpassword" },
        });

        // Clicar no botão de login
        fireEvent.click(screen.getByRole("button", { name: "Login" }));

        // Verificar se a função de login foi chamada
        expect(mockLogin).toHaveBeenCalledWith({
            username: "testuser",
            password: "testpassword",
        });
    });

    it("handles login with missing credentials", async () => {
        // Mock para o contexto de autenticação
        const mockShowWarningSnackbar = jest.fn();
        mockedUseAuth.mockReturnValue({ login: jest.fn() });

        // Mock para o uso do Snackbar
        jest.mock("../../Helpers/Hooks/useWarningSnackbar", () => ({
            useWarningSnackbar: () => ({
                showWarningSnackbar: mockShowWarningSnackbar,
            }),
        }));

        // Renderizar o componente
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        // Clicar no botão de login sem preencher os campos
        fireEvent.click(screen.getByRole("button", { name: "Login" }));

        // Verificar se a função do Snackbar foi chamada
        expect(mockShowWarningSnackbar).toHaveBeenCalledWith({
            msg: "Preencha todos os campos!",
            severity: "error",
        });
    });
});

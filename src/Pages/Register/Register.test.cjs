import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider, useAuth } from "../../Context/Auth";
import Register from "./Register";

jest.mock("../../Context/Auth");

const mockedUseAuth = useAuth;

describe("Register Component", () => {
    it("renders Register component", async () => {
        // Mock para o contexto de autenticação
        mockedUseAuth.mockReturnValue({ register: jest.fn() });

        // Renderizar o componente
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );

        // Verificar se os elementos são renderizados corretamente
        expect(screen.getByText("Logo")).toBeInTheDocument();
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Register" })
        ).toBeInTheDocument();
    });

    it("handles registration with valid credentials", async () => {
        // Mock para o contexto de autenticação
        const mockRegister = jest.fn();
        mockedUseAuth.mockReturnValue({ register: mockRegister });

        // Renderizar o componente
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );

        // Preencher os campos de registro
        fireEvent.change(screen.getByLabelText("Name"), {
            target: { value: "Test User" },
        });
        fireEvent.change(screen.getByLabelText("Username"), {
            target: { value: "testuser" },
        });
        fireEvent.change(screen.getByLabelText("Password"), {
            target: { value: "testpassword" },
        });

        // Clicar no botão de registro
        fireEvent.click(screen.getByRole("button", { name: "Register" }));

        // Verificar se a função de registro foi chamada
        expect(mockRegister).toHaveBeenCalledWith({
            name: "Test User",
            username: "testuser",
            password: "testpassword",
        });
    });

    it("handles registration with missing credentials", async () => {
        // Mock para o contexto de autenticação
        const mockShowWarningSnackbar = jest.fn();
        mockedUseAuth.mockReturnValue({ register: jest.fn() });

        // Mock para o uso do Snackbar
        jest.mock("../../Helpers/Hooks/useWarningSnackbar", () => ({
            useWarningSnackbar: () => ({
                showWarningSnackbar: mockShowWarningSnackbar,
            }),
        }));

        // Renderizar o componente
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );

        // Clicar no botão de registro sem preencher os campos
        fireEvent.click(screen.getByRole("button", { name: "Register" }));

        // Verificar se a função do Snackbar foi chamada
        expect(mockShowWarningSnackbar).toHaveBeenCalledWith({
            msg: "Preencha todos os campos!",
            severity: "error",
        });
    });
});

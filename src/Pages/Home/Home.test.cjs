import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route } from "react-router-dom";
import { AuthProvider, TasksProvider, useAuth, useTasks } from "../../Context";
import Home from "./Home";

jest.mock("../../Context/Auth");
jest.mock("../../Context/Task");

const mockedUseAuth = useAuth;
const mockedUseTasks = useTasks;

// Mock para o localStorage.getItem
const mockLocalStorage = (token) => {
    Object.defineProperty(window, "localStorage", {
        value: {
            getItem: jest.fn(() => token),
        },
        writable: true,
    });
};

describe("Home Component", () => {
    it("renders Home component with tasks", async () => {
        // Mock para o contexto de autenticação
        mockedUseAuth.mockReturnValue({ user: { username: "mockedUser" } });

        // Mock para o contexto de tarefas
        const mockedTasks = [
            { id: 1, title: "Task 1", description: "Description 1", status: 1 },
            { id: 2, title: "Task 2", description: "Description 2", status: 0 },
        ];
        mockedUseTasks.mockReturnValue({
            tasks: mockedTasks,
            getTasks: jest.fn(),
            addTask: jest.fn(),
        });

        // Configurar localStorage
        mockLocalStorage("mockedAuthToken");

        // Renderizar o componente
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Verificar se os elementos são renderizados corretamente
        expect(screen.getByText("Logout")).toBeInTheDocument();
        expect(screen.getByText("Filter by:")).toBeInTheDocument();
        expect(screen.getByLabelText("Title")).toBeInTheDocument();
        expect(screen.getByLabelText("Description")).toBeInTheDocument();
        expect(screen.getByText("Add Task")).toBeInTheDocument();
        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.getByText("Task 2")).toBeInTheDocument();
    });

    it("renders Home component with no tasks", async () => {
        // Mock para o contexto de autenticação
        mockedUseAuth.mockReturnValue({ user: { username: "mockedUser" } });

        // Mock para o contexto de tarefas
        mockedUseTasks.mockReturnValue({
            tasks: [],
            getTasks: jest.fn(),
            addTask: jest.fn(),
        });

        // Configurar localStorage
        mockLocalStorage("mockedAuthToken");

        // Renderizar o componente
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Verificar se a mensagem de nenhuma tarefa cadastrada é exibida
        expect(
            screen.getByText("Nenhuma tarefa cadastrada!")
        ).toBeInTheDocument();
    });

    it("redirects to login if no authToken", () => {
        // Configurar localStorage sem authToken
        mockLocalStorage(null);

        // Renderizar o componente dentro de um MemoryRouter
        render(
            <MemoryRouter initialEntries={["/home"]}>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">Login Page</Route>
            </MemoryRouter>
        );

        // Verificar se redirecionou para a página de login
        expect(screen.getByText("Login Page")).toBeInTheDocument();
    });
});

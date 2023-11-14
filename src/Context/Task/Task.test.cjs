import React from "react";
import { render, act } from "@testing-library/react";
import { TasksProvider, useTasks, TasksContext } from "./Task";
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
        get: jest.fn(),
        post: jest.fn(),
        delete: jest.fn(),
    },
}));

describe("Tasks Context", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("provides tasks context values", () => {
        const TestComponent = () => {
            const tasksContext = useTasks();
            return (
                <>
                    <div>
                        {tasksContext.tasks.length > 0
                            ? "Tasks Available"
                            : "No Tasks"}
                    </div>
                </>
            );
        };

        render(
            <TasksProvider>
                <TestComponent />
            </TasksProvider>
        );

        expect(screen.getByText("No Tasks")).toBeInTheDocument();
    });

    it("fetches tasks successfully", async () => {
        const TestComponent = () => {
            const { getTasks } = useTasks();
            const handleGetTasks = async () => {
                await getTasks();
            };
            return (
                <>
                    <button onClick={handleGetTasks}>Get Tasks</button>
                </>
            );
        };

        api.get.mockResolvedValueOnce({
            data: [{ id: 1, title: "Task 1", description: "Description 1" }],
        });

        render(
            <TasksProvider>
                <TestComponent />
            </TasksProvider>
        );

        await act(async () => {
            await fireEvent.click(screen.getByText("Get Tasks"));
        });

        expect(api.get).toHaveBeenCalledWith("/api/ToDo");
        expect(screen.getByText("Tasks Available")).toBeInTheDocument();
    });
});

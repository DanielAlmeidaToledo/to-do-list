import { createContext, useContext, useState, useCallback } from "react";
import { api } from "../../Services/axios";
import { useWarningSnackbar } from "../../Helpers/Hooks/useWarningSnackbar";
import { useLoading } from "../Loading";

export type TaskProps = {
    id: number;
    title: string;
    description: string;
    status: number;
    date: string;
    guidIdUser: string;
};

type TasksContextProps = {
    tasks: TaskProps[] | [];
    getTasks: () => void;
    addTask: (title: string, description: string) => void;
    changeStatus: (id: number) => void;
    deleteTask: (id: number) => void;
};

const TasksContext = createContext<TasksContextProps>({} as TasksContextProps);

const TasksProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<TaskProps[] | []>([]);
    const showWarningSnackbar = useCallback(useWarningSnackbar(), []);
    const { setLoading } = useLoading();

    const getTasks = async () => {
        setLoading(true);
        api.defaults.headers.authorization =
            `Bearer ${localStorage.getItem("authToken")}` || "";

        await api
            .get("/api/ToDo")
            .then((response: any) => {
                setLoading(false);
                setTasks(response.data);
            })
            .catch((error: any) => {
                setLoading(false);
                console.log(error);
            });
    };

    const addTask = async (title: string, description: string) => {
        setLoading(true);
        api.defaults.headers.authorization =
            `Bearer ${localStorage.getItem("authToken")}` || "";

        await api
            .post("/api/ToDo", {
                title,
                description,
            })
            .then((response: any) => {
                setTasks([...tasks, response.data]);
                setLoading(false);
                showWarningSnackbar({
                    msg: "Tarefa adicionada com sucesso!",
                    severity: "success",
                });
            })
            .catch((error: any) => {
                setLoading(false);
                console.log(error);
            });
    };

    const changeStatus = async (id: number) => {
        setLoading(true);
        api.defaults.headers.authorization =
            `Bearer ${localStorage.getItem("authToken")}` || "";

        await api
            .get(`/api/ToDo/MarkAsDone/${id}`)
            .then((response: any) => {
                let newTasks: TaskProps[] = tasks.map((task: TaskProps) => {
                    if (task.id === id) {
                        task.status = 1;
                    }
                    return task;
                });

                showWarningSnackbar({
                    msg: "Tarefa completada com sucesso!",
                    severity: "success",
                });

                setLoading(false);
                setTasks(newTasks);
            })
            .catch((error: any) => {
                setLoading(false);
                console.log(error);
            });
    };

    const deleteTask = async (id: number) => {
        setLoading(true);
        api.defaults.headers.authorization =
            `Bearer ${localStorage.getItem("authToken")}` || "";

        await api
            .delete(`/api/ToDo/${id}`)
            .then((response: any) => {
                setTasks(tasks.filter((task: TaskProps) => task.id !== id));
                setLoading(false);
                showWarningSnackbar({
                    msg: "Tarefa deletada com sucesso!",
                    severity: "success",
                });
            })
            .catch((error: any) => {
                setLoading(false);
                console.log(error);
            });
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                getTasks,
                addTask,
                changeStatus,
                deleteTask,
            }}
        >
            <>{children}</>
        </TasksContext.Provider>
    );
};

const useTasks = () => {
    const context = useContext(TasksContext);
    return context;
};

export { TasksContext, useTasks, TasksProvider };

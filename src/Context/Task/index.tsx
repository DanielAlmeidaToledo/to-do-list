import { createContext, useContext, useState } from "react";
import { api } from "../../Services/axios";

export type TaskProps = {
    title: string;
    description: string;
};

type TasksContextProps = {
    tasks: TaskProps | [];
    getTasks: () => void;
};

const TasksContext = createContext<TasksContextProps>({} as TasksContextProps);

const TasksProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<TaskProps | []>([]);

    const getTasks = async () => {
        await api
            .get("/api/ToDo")
            .then((response: any) => {
                console.log(response);
                setTasks(response.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                getTasks,
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

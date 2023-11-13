import { Box } from "@mui/material";
import { TaskProps } from "../../Context/Task";
import TaskItem from "../TaskItem/TaskItem";

interface TasksProps {
    tasksList: TaskProps[];
}

const Tasks = ({ tasksList }: TasksProps) => {
    return (
        <Box sx={{ width: "100%" }}>
            {tasksList.map((task: TaskProps) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </Box>
    );
};

export default Tasks;

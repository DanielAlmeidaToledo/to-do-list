import { useCallback } from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ClearIcon from "@mui/icons-material/Clear";
import { TaskProps, useTasks } from "../../Context/Task";
import { useWarningSnackbar } from "../../Helpers/Hooks/useWarningSnackbar";

interface TaskItemProps {
    task: TaskProps;
}

const TaskItem = ({ task }: TaskItemProps) => {
    const { changeStatus, deleteTask } = useTasks();

    const showWarningSnackbar = useCallback(useWarningSnackbar(), []);

    const handleChangeStatus = (id: number, status: number) => {
        if (status === 0) {
            changeStatus(id);
        } else {
            showWarningSnackbar({
                msg: "Tarefa já está concluída!",
                severity: "warning",
            });
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "8px",
                padding: "0.5rem",
                marginBottom: "1rem",
                width: "95%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "109%",
                }}
            >
                <Checkbox
                    checked={task.status === 1}
                    onChange={() => handleChangeStatus(task.id, task.status)}
                    sx={{
                        color: "#9f2de4",
                        "&.Mui-checked": {
                            color: "#9f2de4",
                        },
                        "& .MuiSvgIcon-root": { fontSize: 32 },
                    }}
                />
                <Typography
                    component="div"
                    sx={{
                        textDecoration:
                            task.status === 1 ? "line-through" : "none",
                        color: task.status === 1 ? "gray" : "black",
                        marginLeft: "0.5rem",
                    }}
                >
                    {task.title}
                </Typography>
            </Box>
            <ButtonIcon
                ariaLabel="delete"
                icon={<ClearIcon />}
                handleClick={() => deleteTask(task.id)}
            />
        </Box>
    );
};

export default TaskItem;

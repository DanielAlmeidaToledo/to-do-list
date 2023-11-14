import { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Filter from "../../Components/Filter/Filter";
import InputAdd from "../../Components/InputAdd/InputAdd";
import { useAuth } from "../../Context/Auth";
import { TaskProps, useTasks } from "../../Context/Task";
import Tasks from "../../Components/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import Logout from "../../Components/Logout/Logout";
import { useWarningSnackbar } from "../../Helpers/Hooks/useWarningSnackbar";

const stylePaper = {
    padding: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "45%",
    borderRadius: "8px",
    margin: "auto",
    gap: "2.4rem",
};

const Home = () => {
    const [statusFilter, setStatusFilter] = useState(2);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>([]);
    const showWarningSnackbar = useWarningSnackbar();

    const { user } = useAuth();
    const { tasks, getTasks, addTask } = useTasks();

    const handleAddTask = () => {
        if (title === "") {
            showWarningSnackbar({
                msg: "O campo título é obrigatório!",
                severity: "warning",
            });
        } else {
            addTask(title, description);
            setTitle("");
            setDescription("");
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    useEffect(() => {
        // Filtre as tarefas com base no statusFilter
        const filtered = tasks.filter((task) => {
            if (statusFilter === 2) {
                return true;
            } else {
                return task.status === statusFilter;
            }
        });

        setFilteredTasks(filtered);
    }, [statusFilter, tasks]);

    if (!localStorage.getItem("authToken")) {
        return <Navigate to="/login" />;
    } else {
        return (
            <Container>
                <Logout />
                <Grid container>
                    <Paper sx={stylePaper}>
                        <Filter
                            username={user?.username || ""}
                            status={statusFilter}
                            setStatus={setStatusFilter}
                        />
                        <InputAdd
                            title={title}
                            setTitle={setTitle}
                            handleSubmit={handleAddTask}
                        />
                        {tasks.length !== 0 ? (
                            <Tasks tasksList={filteredTasks} />
                        ) : (
                            <Typography variant="h6" sx={{ margin: "2rem 0" }}>
                                Nenhuma tarefa cadastrada!
                            </Typography>
                        )}
                    </Paper>
                </Grid>
            </Container>
        );
    }
};

export default Home;

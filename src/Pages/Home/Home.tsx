import { useState, useEffect } from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import Filter from "../../Components/Filter/Filter";
import InputAdd from "../../Components/InputAdd/InputAdd";
import { useAuth } from "../../Context/Auth";
import { useTasks } from "../../Context/Task";
import Tasks from "../../Components/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import Logout from "../../Components/Logout/Logout";

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

    const { user } = useAuth();
    const { tasks, getTasks, addTask } = useTasks();

    const handleAddTask = () => {
        addTask(title, description);
    };

    useEffect(() => {
        getTasks();
    }, []);

    if (!localStorage.getItem("authToken")) {
        return <Navigate to="/login" />;
    } else {
        return (
            <Container>
                <Logout />
                <Grid container>
                    <Paper sx={stylePaper}>
                        <Filter
                            name={user?.name || ""}
                            status={statusFilter}
                            setStatus={setStatusFilter}
                        />
                        <InputAdd
                            title={title}
                            setTitle={setTitle}
                            handleSubmit={handleAddTask}
                        />
                        {tasks.length !== 0 && <Tasks tasksList={tasks} />}
                    </Paper>
                </Grid>
            </Container>
        );
    }
};

export default Home;

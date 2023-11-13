import { useState, useEffect } from "react";
import { Container, Grid, Paper } from "@mui/material";
import Filter from "../../Components/Filter/Filter";
import InputAdd from "../../Components/InputAdd/InputAdd";
import { useAuth } from "../../Context/Auth";
import { useTasks } from "../../Context/Task";

const stylePaper = {
    padding: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    borderRadius: "8px",
    margin: "auto",
    gap: "2.4rem",
};

const Home = () => {
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");

    const handleChangeStatus = (event: any) => {
        setStatus(event.target.value);
    };

    const handleAddTask = () => {
        console.log("Add: ", title);
        setTitle("");
    };

    const { user } = useAuth();
    const { tasks, getTasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, [user]);

    return (
        <Container>
            <Grid container>
                <Paper sx={stylePaper}>
                    <Filter
                        name={user?.name || ""}
                        status={status}
                        handleChange={handleChangeStatus}
                    />
                    <InputAdd
                        title={title}
                        setTitle={setTitle}
                        handleSubmit={handleAddTask}
                    />
                </Paper>
            </Grid>
        </Container>
    );
};

export default Home;

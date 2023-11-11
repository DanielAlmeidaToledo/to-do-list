import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Forms from "../../Components/Forms/Forms";
import Logo from "../../Components/Logo/Logo";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleLogin = () => {
        console.log(`Username: ${username}, Password: ${password}`);
    };

    const handleRegister = () => {
        console.log(
            `Name: ${name}, Username: ${username}, Password: ${password}`
        );
    };

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Grid container>
                <Logo />
                <Forms
                    type="login"
                    username={username}
                    password={password}
                    name={name}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setName={setName}
                    handleSubmit={handleLogin}
                />
            </Grid>
        </Container>
    );
};

export default Login;

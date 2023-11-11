import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Forms from "../../Components/Forms/Forms";
import Logo from "../../Components/Logo/Logo";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleRegister = () => {
        console.log(
            `Name: ${name}, Username: ${username}, Password: ${password}`
        );
    };

    return (
        <Container>
            <Grid container>
                <Logo />
                <Forms
                    type="register"
                    username={username}
                    password={password}
                    name={name}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setName={setName}
                    handleSubmit={handleRegister}
                />
            </Grid>
        </Container>
    );
};

export default Register;

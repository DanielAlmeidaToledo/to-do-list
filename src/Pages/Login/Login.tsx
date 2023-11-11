import { UserProps, useAuth } from "../../Context/Auth";
import { Container, Grid } from "@mui/material";
import Forms from "../../Components/Forms/Forms";
import Logo from "../../Components/Logo/Logo";

const Login = () => {
    const { login } = useAuth();

    const handleLogin = (user: UserProps) => {
        login(user);
    };

    return (
        <Container>
            <Grid container>
                <Logo />
                <Forms type="login" handleSubmit={handleLogin} />
            </Grid>
        </Container>
    );
};

export default Login;

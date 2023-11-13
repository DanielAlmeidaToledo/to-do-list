import { UserProps, useAuth } from "../../Context/Auth";
import { Container, Grid } from "@mui/material";
import Forms from "../../Components/Forms/Forms";
import Logo from "../../Components/Logo/Logo";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (user: UserProps) => {
        try {
            await login(user);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
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

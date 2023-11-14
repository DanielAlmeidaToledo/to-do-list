import { useWarningSnackbar } from "../../Helpers/Hooks/useWarningSnackbar";
import { UserProps, useAuth } from "../../Context/Auth";
import { Container, Grid } from "@mui/material";
import Forms from "../../Components/Forms/Forms";
import Logo from "../../Components/Logo/Logo";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const showWarningSnackbar = useWarningSnackbar();

    const handleLogin = async (user: UserProps) => {
        if (user.username === "" || user.password === "") {
            showWarningSnackbar({
                msg: "Preencha todos os campos!",
                severity: "error",
            });
        } else {
            try {
                await login(user);
                navigate("/");
            } catch (error) {
                console.log(error);
            }
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

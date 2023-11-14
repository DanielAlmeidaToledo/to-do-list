import { useWarningSnackbar } from "../../Helpers/Hooks/useWarningSnackbar";
import { UserProps, useAuth } from "../../Context/Auth";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Forms from "../../Components/Forms/Forms";
import Logo from "../../Components/Logo/Logo";

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const showWarningSnackbar = useWarningSnackbar();

    const handleRegister = async (user: UserProps) => {
        if (user.username === "" || user.password === "" || user.name === "") {
            showWarningSnackbar({
                msg: "Preencha todos os campos!",
                severity: "error",
            });
        } else {
            try {
                await register(user);
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
                <Forms type="register" handleSubmit={handleRegister} />
            </Grid>
        </Container>
    );
};

export default Register;

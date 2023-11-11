import { UserProps, useAuth } from "../../Context/Auth";
import { Container, Grid } from "@mui/material";
import Forms from "../../Components/Forms/Forms";
import Logo from "../../Components/Logo/Logo";

const Register = () => {
    const { register } = useAuth();

    const handleRegister = (user: UserProps) => {
        register(user);
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

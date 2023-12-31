import { useState } from "react";
import { UserProps } from "../../Context/Auth";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";

interface FormsProps {
    type: string;
    handleSubmit: (user: UserProps) => void;
}

export default function Forms({ type, handleSubmit }: FormsProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return (
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
                sx={{
                    padding: 6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "60%",
                    borderRadius: "8px",
                    margin: "auto",
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                        marginBottom: 2,
                        fontSize: "32px",
                        fontWeight: "600",
                    }}
                >
                    {type === "login" ? "Faça seu login" : "Crie sua conta"}
                </Typography>
                <form>
                    {/* Username */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        sx={{ marginTop: 4 }}
                    />
                    {/* Name */}
                    {type !== "login" && (
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome"
                            name="name"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ marginTop: 4 }}
                        />
                    )}
                    {/* Password */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginTop: 4 }}
                    />
                    {/* Submit */}
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        onClick={() =>
                            handleSubmit({
                                username: username,
                                password: password,
                                name: name,
                            })
                        }
                        sx={{
                            marginTop: 4,
                            backgroundColor: "#9F2DE4",
                            height: "50px",
                            ":hover": {
                                backgroundColor: "#9F2DE4",
                            },
                        }}
                    >
                        Entrar
                    </Button>
                </form>
            </Paper>
            {type === "login" ? (
                <Typography sx={{ marginTop: 2, textAlign: "center" }}>
                    Não tem uma conta?{" "}
                    <a
                        href="/register"
                        style={{
                            textDecoration: "none",
                            color: "#9F2DE4",
                        }}
                    >
                        Cadastre-se
                    </a>
                </Typography>
            ) : (
                <Typography sx={{ marginTop: 2, textAlign: "center" }}>
                    Já tem uma conta?{" "}
                    <a
                        href="/login"
                        style={{
                            textDecoration: "none",
                            color: "#9F2DE4",
                        }}
                    >
                        Faça login
                    </a>
                </Typography>
            )}
        </Grid>
    );
}

import { Grid, Paper, Typography, TextField, Button } from "@mui/material";

interface FormsProps {
    type: string;
    username: string;
    password: string;
    name: string;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    setName: (name: string) => void;
    handleSubmit: () => void;
}

export default function Forms({
    type,
    username,
    password,
    name,
    setUsername,
    setPassword,
    setName,
    handleSubmit,
}: FormsProps) {
    return (
        <Grid item xs={6}>
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
                    />
                    {/* Submit */}
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
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
                    Não tem uma conta? <a href="/register">Cadastre-se</a>
                </Typography>
            ) : (
                <Typography sx={{ marginTop: 2 }}>
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

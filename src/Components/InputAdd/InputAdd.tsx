import { Grid } from "@mui/material";

interface InputAddProps {
    title: string;
    setTitle: (title: string) => void;
    handleSubmit: () => void;
}

const InputAdd = ({ title, setTitle, handleSubmit }: InputAddProps) => {
    return (
        <Grid
            container
            sx={{
                border: "1px solid #B5B5B5",
                borderRadius: "10rem",
                background: "#F8F8F8",
            }}
        >
            {/* Welcome */}
            <Grid item xs={8} sm={6} md={8} lg={8} sx={{}}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>
            {/* Filter */}
            {/* xs={12} sm={12} md={6} lg={6} */}
            <Grid item xs={4} sm={6} md={4} lg={4}>
                <button onClick={() => handleSubmit()}>Adicionar</button>
            </Grid>
        </Grid>
    );
};

export default InputAdd;

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
            <Grid item xs={8} sx={{}}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>
            {/* Filter */}
            <Grid item xs={4}>
                <button onClick={() => handleSubmit()}>Adicionar</button>
            </Grid>
        </Grid>
    );
};

export default InputAdd;

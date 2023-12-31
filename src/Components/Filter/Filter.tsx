import {
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";

interface FilterProps {
    username: string;
    status: number | null;
    setStatus: (status: number) => void;
}

const Filter = ({ username, status, setStatus }: FilterProps) => {
    return (
        <Grid container>
            {/* Welcome */}
            <Grid
                item
                xs={6}
                sx={{
                    display: "flex",
                    alignItems: "end",
                }}
            >
                <Typography variant="h5">Olá, {username || "User"}</Typography>
            </Grid>
            {/* Filter */}
            <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
                <FormControl
                    variant="standard"
                    sx={{ width: 240, minWidth: 100 }}
                >
                    <InputLabel id="demo-simple-select-standard-label">
                        Status
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as number)}
                        label="Status"
                    >
                        <MenuItem value={2}>Todos</MenuItem>
                        <MenuItem value={0}>Pendentes</MenuItem>
                        <MenuItem value={1}>Concluídas</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Filter;

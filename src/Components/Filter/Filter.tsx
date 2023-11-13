import {
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";

interface FilterProps {
    name: string;
    status: string;
    handleChange: (event: any) => void;
}

const Filter = ({ name, status, handleChange }: FilterProps) => {
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
                <Typography variant="h5">Olá, {name || "User"}</Typography>
            </Grid>
            {/* Filter */}
            <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
                <FormControl variant="standard" sx={{ minWidth: 240 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                        Status
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={status}
                        onChange={handleChange}
                        label="Status"
                    >
                        <MenuItem value="">Todos</MenuItem>
                        <MenuItem value="Concluida">Concluídas</MenuItem>
                        <MenuItem value="Pendentes">Pendentes</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Filter;

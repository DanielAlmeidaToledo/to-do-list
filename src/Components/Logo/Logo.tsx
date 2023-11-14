import { Grid, Typography, Box } from "@mui/material";
import Check from "../../Assets/check.svg";

export default function Logo() {
    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4rem",
            }}
        >
            <img
                src={Check}
                alt="Check"
                loading="lazy"
                style={{ width: "12rem" }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                    variant="h4"
                    color="black"
                    sx={{
                        textDecoration: "underline",
                        textDecorationColor: "#9F2DE4",
                        fontSize: "72px",
                        fontWeight: "bold",
                    }}
                >
                    To Do
                </Typography>
                <Typography
                    variant="h4"
                    color="black"
                    sx={{
                        fontSize: "72px",
                        fontWeight: "bold",
                        marginLeft: "16px",
                    }}
                >
                    List
                </Typography>
            </Box>
        </Grid>
    );
}

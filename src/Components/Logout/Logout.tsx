import { useAuth } from "../../Context/Auth";
import { Box, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const styleIconButton = {
    width: "3rem",
    height: "3rem",
    color: "#000",
};

export default function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Box
            sx={{
                position: "fixed",
                right: 0,
                top: 0,
                margin: "2rem",
            }}
        >
            <IconButton
                aria-label="Logout"
                sx={styleIconButton}
                onClick={() => handleLogout()}
            >
                <LogoutIcon fontSize="large" />
            </IconButton>
        </Box>
    );
}

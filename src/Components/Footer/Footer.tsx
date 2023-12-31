import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function Footer() {
    const [show, setShow] = useState(true);
    const innerWidth = window.innerWidth;

    useEffect(() => {
        if (window.innerWidth <= 900) setShow(false);
    }, []);

    if (!show) return null;

    return (
        <Box
            sx={{
                position: "fixed",
                right: 0,
                bottom: 0,
                margin: "1rem",
            }}
        >
            Desenvolvido por{" "}
            <a
                href="https://danieltoledo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    textDecoration: "none",
                    color: "#9F2DE4",
                }}
            >
                Daniel Toledo
            </a>
        </Box>
    );
}

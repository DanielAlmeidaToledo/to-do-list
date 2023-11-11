import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import Login from "./Pages/Login/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Login />,
    },
    {
        path: "/",
        element: <>Home</>,
    },
]);

export default function App() {
    return (
        <>
            <Box sx={{ height: "100vh", width: "100%" }}>
                <Box
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <RouterProvider router={router} />
                </Box>
            </Box>
        </>
    );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import Login from "./Pages/Login/Login.tsx";
import Register from "./Pages/Register/Register.tsx";
import { AuthProvider } from "./Context/Auth/index.tsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",
        element: <>Home</>,
    },
]);

const App = () => {
    return (
        <AuthProvider>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <RouterProvider router={router} />
            </Box>
        </AuthProvider>
    );
};

export default App;

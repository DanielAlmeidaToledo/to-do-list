import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import { AuthProvider } from "./Context/Auth/index.tsx";
import Login from "./Pages/Login/Login.tsx";
import Register from "./Pages/Register/Register.tsx";
import Home from "./Pages/Home/Home.tsx";
import Footer from "./Components/Footer/Footer.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
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
                <Footer />
            </Box>
        </AuthProvider>
    );
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { LoadingProvider } from "./Context/Loading/index.tsx";
import { AuthProvider } from "./Context/Auth/index.tsx";
import { TasksProvider } from "./Context/Task/index.tsx";
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
        <SnackbarProvider>
            <LoadingProvider>
                <AuthProvider>
                    <TasksProvider>
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
                    </TasksProvider>
                </AuthProvider>
            </LoadingProvider>
        </SnackbarProvider>
    );
};

export default App;

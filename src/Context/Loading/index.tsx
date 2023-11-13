import { useState, createContext, useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type LoadingContextProps = {
    loading: boolean;
    setLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextProps>(
    {} as LoadingContextProps
);

const styleLoading = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
};

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <LoadingContext.Provider
            value={{
                loading,
                setLoading,
            }}
        >
            <>
                {children}
                {loading && (
                    <Box sx={styleLoading}>
                        <CircularProgress color="secondary" size={70} />
                    </Box>
                )}
            </>
        </LoadingContext.Provider>
    );
};

const useLoading = () => {
    const context = useContext(LoadingContext);
    return context;
};

export { LoadingContext, useLoading, LoadingProvider };

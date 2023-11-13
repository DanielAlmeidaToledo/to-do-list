import { useSnackbar } from "notistack";

export interface PropsUseWarningSnackbar {
    msg: string;
    severity: "error" | "warning" | "info" | "success";
    time?: number;
}

export const useWarningSnackbar = () => {
    const { enqueueSnackbar } = useSnackbar();

    return ({ msg, severity, time }: PropsUseWarningSnackbar) => {
        enqueueSnackbar(msg, {
            variant: severity,
            autoHideDuration: time || 2000,
        });
    };
};

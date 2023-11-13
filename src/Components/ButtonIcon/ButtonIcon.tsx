import { IconButton } from "@mui/material";
import { TaskProps } from "../../Context/Task";

interface ButtonIconProps {
    ariaLabel: string;
    icon: JSX.Element;
    handleClick: () => void;
}

const styleIconButton = {
    width: "2.6rem",
    height: "2.6rem",
    color: "#000",
};

const ButtonIcon = ({ ariaLabel, icon, handleClick }: ButtonIconProps) => {
    return (
        <IconButton
            aria-label={ariaLabel}
            sx={styleIconButton}
            onClick={() => handleClick()}
        >
            {icon}
        </IconButton>
    );
};

export default ButtonIcon;

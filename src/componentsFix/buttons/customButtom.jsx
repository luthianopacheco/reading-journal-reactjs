import { Button, CircularProgress } from "@mui/material";

function CustomButton({ children, isLoading = false, onClick, variant = "contained", color = "default" }) {
    let colorStyles = {};
    const baseStyles = {
        borderRadius: "20px",
        padding: "6px 32px",
        textTransform: "none",
        fontWeight: 600,
        width: 150,
        height: 40
    };

    switch (color) {
        case "danger":
            colorStyles = {
                backgroundColor: "#c62828", color: "#fafafa", "&:hover": { backgroundColor: "#b71c1c" }
            }
            break;

        case "success":
            colorStyles = {
                backgroundColor: "#689f38", color: "#fafafa", "&:hover": { backgroundColor: "#558b2f" }
            };
            break;

        default:
            colorStyles = {
                backgroundColor: "#fafafa", color: "#333333", "&:hover": { backgroundColor: "#e0e0e0" }
            };
            break;
    }

    return (
        <Button variant={variant} onClick={onClick} sx={{ ...baseStyles, ...colorStyles }} >
            {isLoading ? <CircularProgress size='20px' sx={{ color: '#fafafa' }} /> : children}
        </Button>

    );
}

export default CustomButton;

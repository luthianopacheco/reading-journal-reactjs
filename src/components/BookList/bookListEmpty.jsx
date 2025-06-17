import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../buttons/customButtom";

function BookListEmpty() {
    const navigate = useNavigate();

    return (
        <Box textAlign="center">
            <Typography>Lista de livros vazia.</Typography>
            <br />
            <CustomButton color="success" onClick={() => navigate('/book-form')}>
                Cadastrar
            </CustomButton>
        </Box>
    )
}

export default BookListEmpty;
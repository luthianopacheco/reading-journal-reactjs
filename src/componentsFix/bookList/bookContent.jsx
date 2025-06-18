import { Box, Typography } from "@mui/material"

function BookContent({ book }) {
    return (
        <>
            <Box className="row">
                <Typography><b>Título:</b></Typography>
                <Typography>{book.title}</Typography>
            </Box>
            <Box className="row">
                <Typography><b>Autor (a):</b></Typography>
                <Typography>{book.author}</Typography>
            </Box>
            <Box className="row">
                <Typography><b>Gênero:</b></Typography>
                <Typography>{book.genre}</Typography>
            </Box>
            <Box className="row">
                <Typography><b>Lido em:</b></Typography>
                <Typography>{book.readAt}</Typography>
            </Box>
        </>
    )
}

export default BookContent
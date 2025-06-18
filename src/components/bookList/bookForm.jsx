import { Box, TextField } from "@mui/material";

function BookForm({ editForm, handleInputChange }) {
    return (
        <Box component="form" noValidate autoComplete="off">
            <TextField
                fullWidth
                label="Título"
                name="title"
                value={editForm.title}
                onChange={handleInputChange}
                margin="dense"
                size="small"
            />
            <TextField
                fullWidth
                label="Autor"
                name="author"
                value={editForm.author}
                onChange={handleInputChange}
                margin="dense"
                size="small"
            />
            <TextField
                fullWidth
                label="Gênero"
                name="genre"
                value={editForm.genre}
                onChange={handleInputChange}
                margin="dense"
                size="small"
            />
            <TextField
                fullWidth
                label="Data"
                name="readAt"
                value={editForm.readAt}
                onChange={handleInputChange}
                margin="dense"
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
            />
        </Box>
    )
}

export default BookForm;
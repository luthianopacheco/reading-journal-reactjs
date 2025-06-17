import { Alert, Stack } from "@mui/material";

function BookFormAlert({ success, error }) {
    const showError = typeof error === 'string' && error.trim() !== '';

    if (!success && !showError) return null;

    return (
        <Stack spacing={2} sx={{ mb: 2, width: '100%', maxWidth: 550 }}>
            {success && (
                <Alert severity="success">
                    Livro cadastrado com sucesso!
                </Alert>
            )}
            {showError && (
                <Alert severity="error">
                    {error}
                </Alert>
            )}
        </Stack>
    );
}

export default BookFormAlert;

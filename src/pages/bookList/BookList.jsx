import './BookList.css';
import { Box, CircularProgress, Typography } from '@mui/material';
import TitleComponent from '../../componentsFix/title/titleComponent';
import BookListEmpty from '../../componentsFix/bookList/bookListEmpty';
import BookListGrid from '../../componentsFix/bookList/bookListGrid';
import { useBookList } from '../../hooks/useBookList';

function BookList() {
    const { booksResponse, deleteHandlers, updateHandlers } = useBookList();
    const { books, loading, error } = booksResponse;

    return (
        <Box className="book-list-page">
            <TitleComponent title="Lista de Livros" />

            {loading && (
                <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Typography color="error" align="center" mt={2}>
                    {error}
                </Typography>
            )}

            {!loading && !error && (
                books.length === 0
                    ? <BookListEmpty />
                    : <BookListGrid
                        booksResponse={booksResponse}
                        deleteHandlers={deleteHandlers}
                        updateHandlers={updateHandlers}
                    />
            )}
            <br /><br /><br /><br />
        </Box>
    );
}

export default BookList;

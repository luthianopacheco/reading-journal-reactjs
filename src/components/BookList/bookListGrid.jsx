import { Grid } from "@mui/material"
import BookCard from "./bookCard"

function BookListGrid({ booksResponse, deleteHandlers, updateHandlers }) {
    const { books } = booksResponse;

    return (
        <Grid container spacing={3} justifyContent="center">
            {books.map((book, index) => (
                <BookCard
                    key={book.id || index}
                    index={index}
                    book={book}
                    booksResponse={booksResponse}
                    deleteHandlers={deleteHandlers}
                    updateHandlers={updateHandlers}
                />
            ))}
        </Grid>
    )
}

export default BookListGrid
import { Box, Card, CardContent } from "@mui/material";
import BookForm from "./bookForm";
import BookContent from "./bookContent";
import BookActionsUpdate from "./bookActionsUpdate";
import BookActionsEditDelete from "./bookActionsEditDelete";
import './bookList.css';

function BookCard({ book, index, deleteHandlers, updateHandlers }) {
    const { editingIndex, editForm, handleEditClick, handleInputChange } = updateHandlers
    const { deletingId } = deleteHandlers

    const isEditing = editingIndex === index;
    const isDeleting = deletingId === book.id;
    deleteHandlers.isDeleting = isDeleting;

    const cardSx = {
        backgroundColor: 'white',
        minWidth: '450px',
        maxWidth: '500px',
        padding: '32px',
        height: '200px',
        display: 'flex',
        justifyContent: 'space - between',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }
    const contentSx = {
        flexGrow: '1',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '4px',
    }

    return (
        <Card sx={cardSx}>
            <CardContent sx={contentSx}>
                {isEditing
                    ? <BookForm
                        editForm={editForm}
                        handleInputChange={handleInputChange}
                    />
                    : <BookContent book={book} />
                }
            </CardContent>

            <Box className="action-icons">
                {isEditing
                    ? <BookActionsUpdate updateHandlers={updateHandlers} />
                    : <BookActionsEditDelete
                        index={index}
                        handleEditClick={handleEditClick}
                        deleteHandlers={deleteHandlers} />
                }
            </Box>
        </Card>
    );
}

export default BookCard;

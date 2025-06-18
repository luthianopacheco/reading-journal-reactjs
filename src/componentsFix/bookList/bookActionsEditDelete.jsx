import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CircularProgress, IconButton } from "@mui/material";

function BookActionsEditDelete({ index, handleEditClick, deleteHandlers }) {
    return (
        <>
            <IconButton title="Editar" color="primary" onClick={() => handleEditClick(index)}>
                <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: '20px' }} />
            </IconButton>
            {
                deleteHandlers.loading && deleteHandlers.isDeleting
                    ? <CircularProgress size='20px' sx={{ alignSelf: 'center', color: 'red' }} />
                    : <IconButton title="Deletar" color="error" onClick={() => deleteHandlers.removeBook(index)}>
                        <FontAwesomeIcon icon={faTrashCan} style={{ fontSize: '20px' }} />
                    </IconButton>
            }
        </>
    )
}

export default BookActionsEditDelete;
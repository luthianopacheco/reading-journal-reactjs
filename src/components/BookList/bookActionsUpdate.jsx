import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { CircularProgress, IconButton } from "@mui/material";

function BookActionsUpdate({ updateHandlers }) {
    return (
        <>
            {
                updateHandlers.loading
                    ? <CircularProgress size='20px' sx={{ alignSelf: 'center' }} />
                    : <IconButton title="Atualizar" color="primary" onClick={updateHandlers.handleSave}>
                        <FontAwesomeIcon icon={faFloppyDisk} style={{ fontSize: '20px' }} />
                    </IconButton>
            }
            <IconButton title="Cancelar" color="error" onClick={updateHandlers.handleCancel}>
                <FontAwesomeIcon icon={faRectangleXmark} style={{ fontSize: '20px' }} />
            </IconButton>
        </>
    )
}

export default BookActionsUpdate;
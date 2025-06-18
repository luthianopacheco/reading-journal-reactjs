import { Box } from "@mui/material";
import { useBookForm } from "../../hooks/useBookForm";
import TitleComponent from "../../componentsFix/title/titleComponent";
import BookFormActions from "../../componentsFix/bookForm/bookFormActions";
import BookFormCard from "../../componentsFix/bookForm/bookFormCard";
import BookFormAlert from "../../componentsFix/bookForm/bookFormAlert";
import './BookForm.css'

function BookForm() {
    const { form, loading, errors, success, error, handleChange, handleSubmit, handleClean } = useBookForm();

    return (
        <Box className='card'>
            <TitleComponent title='Cadastrar' />
            <BookFormAlert success={success} error={error} />
            <BookFormCard
                form={form}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <BookFormActions
                loading={loading}
                handleClean={handleClean}
                handleSubmit={handleSubmit}
            />
            <br /><br /><br /><br />
        </Box>
    );
}

export default BookForm;

import { Box } from "@mui/material";
import { useBookForm } from "../../hooks/useBookForm";
import TitleComponent from "../../components/title/titleComponent";
import BookFormActions from "../../components/bookForm/bookFormActions";
import BookFormCard from "../../components/bookForm/bookFormCard";
import BookFormAlert from "../../components/bookForm/bookFormAlert";
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

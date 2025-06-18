import CustomButton from "../buttons/customButtom";

function BookFormActions({ loading, handleClean, handleSubmit }) {
    return (
        <div className="buttonGroup">
            <CustomButton color="danger" onClick={handleClean}>
                Limpar
            </CustomButton>
            <CustomButton isLoading={loading} color="success" onClick={handleSubmit}>
                Salvar
            </CustomButton>
        </div>
    );
}


export default BookFormActions;

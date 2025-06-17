import { TextField } from "@mui/material";
import "./bookForm.css";

function BookFormCard({ form, errors, handleChange, handleSubmit }) {
    const content = [
        { label: 'Título', name: 'title' },
        { label: 'Autor', name: 'author' },
        { label: 'Gênero', name: 'genre' },
        { label: 'Lido em', name: 'readAt', type: 'date' }
    ];

    return (
        <div className='custom-card'>
            <form onSubmit={handleSubmit}>
                {content.map((item) => (
                    <div key={item.name} className='inputGroup'>
                        <p className='label'>{item.label}:</p>
                        <TextField
                            name={item.name}
                            type={item.type || 'text'}
                            value={form[item.name] || ''}
                            onChange={handleChange}
                            error={errors[item.name]}
                            helperText={errors[item.name] ? 'Campo obrigatório' : ''}
                            size="small"
                            fullWidth
                        />
                    </div>
                ))}
            </form>
        </div>
    );
}

export default BookFormCard;

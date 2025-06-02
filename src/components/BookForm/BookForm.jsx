import { useState } from "react";
import './BookForm.css'


function BookForm({ addBook }) {
    const [form, setForm] = useState({ titulo: '', autor: '', genero: '', data: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.titulo && form.autor && form.genero && form.data) {
            addBook(form);
            setForm({ titulo: '', autor: '', genero: '', data: '' });
            alert("Livro adicionado com sucesso!");
        } else {
            alert("É preciso preencher todos os campos!");
        }
    };

    return (
        <div className="mb-3 book-form">
            <h1>Cadastrar</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input className="form-control" name="titulo" value={form.titulo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Autor(a)</label>
                    <input className="form-control" name="autor" value={form.autor} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gênero</label>
                    <input className="form-control" name="genero" value={form.genero} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Data</label>
                    <input className="form-control" name="data" value={form.data} onChange={handleChange} />
                </div>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <button type="submit" className="btn btn-lg btn-primary">Adicionar</button>
                </div>
            </form>
        </div>
    );
};

export default BookForm;
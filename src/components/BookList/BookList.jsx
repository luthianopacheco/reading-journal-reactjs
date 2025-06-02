import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'

import './BookList.css'

function BookList({ books, removeBook, editBook, setPage }) {

    const [editingIndex, setEditingIndex] = useState(null);
    const [editForm, setEditForm] = useState({ titulo: '', autor: '', genero: '', data: '' });

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditForm(books[index]);
    };

    const handleInputChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        const updatedBooks = [...books];
        updatedBooks[editingIndex] = editForm;
        editBook(updatedBooks);
        setEditingIndex(null);
    };

    return (
        <div className="col">
            <h1>Lista de Livros</h1>
            {books.length === 0 ? (
                <div style={{ textAlign: "center" }}>
                    <p>Lista de livros vazia.</p>
                    <button onClick={() => setPage('book-form')} className="btn btn-lg btn-success">Cadastrar</button>
                </div>
            ) : (
                <div className='book-list'>
                    <ul>
                        {books.map((book, index) => (
                            <li key={index}>
                                {editingIndex === index ? (
                                    <>
                                        <input name="titulo" value={editForm.titulo} onChange={handleInputChange} />
                                        <input name="autor" value={editForm.autor} onChange={handleInputChange} />
                                        <input name="genero" value={editForm.genero} onChange={handleInputChange} />
                                        <input name="data" value={editForm.data} onChange={handleInputChange} />
                                        <button onClick={handleSave} className="btn btn-sm btn-success">Salvar</button>
                                    </>
                                ) : (
                                    <>
                                        {book.titulo} - {book.autor} - {book.genero} - {book.data}
                                        <div className='icons'>
                                            <span title='Editar' onClick={() => handleEditClick(index)} style={{ marginRight: '25px' }}>
                                                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                            </span>
                                            <span title='Remover' onClick={() => removeBook(index)}>
                                                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                            </span>
                                        </div>
                                    </>)}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setPage('book-form')} className="btn btn-lg btn-primary">Cadastrar</button>
                </div>
            )}
        </div>
    );
}


export default BookList;
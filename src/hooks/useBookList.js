import { useState, useEffect } from 'react';
import { useFetchBooks, useDeleteBook, useUpdateBook } from './useAPI';

export function useBookList() {
    const { books, loading, error } = useFetchBooks();
    const { deleteBook, loading: loadingDelete, error: errorDelete } = useDeleteBook();
    const { updateBook, loading: loadingUpdate, error: errorUpdate } = useUpdateBook();

    const [booksState, setBooksState] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editForm, setEditForm] = useState({ title: '', author: '', genre: '', readAt: '' });
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        if (books.length) {
            setBooksState(books);
        }
    }, [books]);

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditForm(booksState[index]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        const updatedBook = await updateBook(editForm);
        setBooksState((prev) =>
            prev.map(book => (book.id === updatedBook.id ? updatedBook : book))
        );
        setEditingIndex(null);
    };

    const handleCancel = () => setEditingIndex(null);

    const handleRemoveBook = async (index) => {
        const bookId = booksState[index].id;
        setDeletingId(bookId);
        await deleteBook(bookId);
        setBooksState((prev) => prev.filter(book => book.id !== bookId));
        setDeletingId(null);
    };

    const booksResponse = { loading, error, books: booksState };
    const deleteHandlers = { removeBook: handleRemoveBook, deletingId, loading: loadingDelete, error: errorDelete };
    const updateHandlers = {
        handleSave,
        handleCancel,
        handleEditClick,
        handleInputChange,
        editingIndex,
        editForm,
        loading: loadingUpdate,
        error: errorUpdate
    };

    return { booksResponse, deleteHandlers, updateHandlers };
}


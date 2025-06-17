import { useState, useEffect } from 'react';
import axios from 'axios';
import BookModel from '../data/bookModel';

const apiUrl = 'http://localhost:5000/books';

// Lista todos os livros
function useFetchBooks() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                const books = response.data.map(BookModel.fromJson);
                setData(books);
            } catch (error) {
                setError('Erro ao carregar os dados');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { books: data, loading, error };
}

// Busca livro por ID
function useFetchBookById(id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/${id}`);
                setData(BookModel.fromJson(response.data));
            } catch (error) {
                setError('Erro ao buscar o livro');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { book: data, loading, error };
}

// Cadastra um novo livro
function useCreateBook() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const createBook = async (bookData) => {
        setLoading(true);
        setError('');
        try {
            await axios.post(apiUrl, BookModel.toJson(bookData));
            return true;
        } catch (error) {
            setError('Erro ao cadastrar o livro');
            setTimeout(() => setError(''), 3000);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { createBook, loading, error };
}

// Atualiza um livro
function useUpdateBook() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const updateBook = async (bookData) => {
        setLoading(true);
        try {
            const response = await axios.put(apiUrl, BookModel.toJson(bookData));
            return response.data;
        } catch (error) {
            console.log(error)
            setError('Erro ao atualizar o livro');
        } finally {
            setLoading(false);
        }
    };

    return { updateBook, loading, error };
}

// Deleta um livro por ID
function useDeleteBook() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const deleteBook = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`${apiUrl}/${id}`);
        } catch (error) {
            setError('Erro ao remover o livro');
        } finally {
            setLoading(false);
        }
    };

    return { deleteBook, loading, error };
}

export { useFetchBooks, useFetchBookById, useCreateBook, useUpdateBook, useDeleteBook }

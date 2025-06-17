import { useState } from "react";
import { useCreateBook } from "./useAPI";

export function useBookForm() {
    const [form, setForm] = useState({ title: '', author: '', genre: '', readAt: '' });
    const [errors, setErrors] = useState({ title: null, author: null, genre: null, readAt: null });
    const [success, setSuccess] = useState(false);
    const { createBook, loading, error } = useCreateBook();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        if (value.trim() !== '') {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            title: form.title.trim() === '',
            author: form.author.trim() === '',
            genre: form.genre.trim() === '',
            readAt: form.readAt.trim() === '',
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error);
        if (hasErrors) {
            setSuccess(false);
            return;
        }

        const wasSuccessful = await createBook(form);

        if (wasSuccessful) {
            setForm({ title: '', author: '', genre: '', readAt: '' });
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }
    };

    const handleClean = () => {
        setForm({ title: '', author: '', genre: '', readAt: '' });
        setErrors({ title: null, author: null, genre: null, readAt: null });
        setSuccess(false);
    };

    return { form, errors, success, loading, error, handleChange, handleSubmit, handleClean };
}

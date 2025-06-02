import { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import aboutData from "./Data/About";
import booksData from "./Data/Books";
import homeData from "./Data/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  const [page, setPage] = useState('home');
  const [books, setBooks] = useState([...booksData]);

  const addBook = (book) => setBooks([...books, book]);
  const removeBook = (index) => setBooks(books.filter((_, i) => i !== index));
  const editBook = (updatedList) => setBooks(updatedList);

  let content;
  if (page === 'home') content = <Home description={homeData} />;
  else if (page === 'about') content = <About description={aboutData} />;
  else if (page === 'book-form') content = <BookForm addBook={addBook} />;
  else if (page === 'book-list') content = <BookList books={books} removeBook={removeBook} editBook={editBook} setPage={setPage} />;

  return (
    <div>
      <NavBar setPage={setPage} />
      <br /><br />
      <div className="container">
        {content}
      </div>
    </div>
  );
};

export default App;

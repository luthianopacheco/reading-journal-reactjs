import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import BookForm from "../../pages/bookForm/BookForm";
import BookList from '../../pages/bookList/BookList';
import aboutDescriptions from "../../data/about";

function CustomRouter() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About descriptions={aboutDescriptions} />} />
                <Route path='/book-form' element={<BookForm />} />
                <Route path='/book-list' element={<BookList />} />
            </Routes>
        </Router>
    );
}

export default CustomRouter;

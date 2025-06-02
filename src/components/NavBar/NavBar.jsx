import './NavBar.css'

function NavBar({ setPage }) {
    return (
        <nav className='custom-nav'>
            <div className="container-fluid ">
                <ul className="d-flex flex-row gap-4">
                    <li><a href="#" onClick={() => setPage('home')}>Página Inicial</a></li>
                    <li><a href="#" onClick={() => setPage('about')}>Sobre</a></li>
                    <li><a href="#" onClick={() => setPage('book-list')}>Lista de livros</a></li>
                    <li><a href="#" onClick={() => setPage('book-form')}>Cadastrar</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar

import { About } from './pages/About.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'

const { useState } = React

export function App() {

    const [page, setPage] = useState('home')

    return (
        <section className="app">
            <header className="app-header">
                <section>
                    <h1>Miss Books</h1>
                    <nav className="app-nav">
                        <a onClick={() => setPage('home')} href="#">Home</a>
                        <a onClick={() => setPage('about')} href="#">About</a>
                        <a onClick={() => setPage('book-index')} href="#">Books</a>
                    </nav>
                </section>
            </header>
            <main className="main-layout">
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'book-index' && <BookIndex />}
            </main>
        </section>
    );
}

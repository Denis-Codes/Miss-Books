import { Home } from './cmps/Home.jsx'
import { About } from './pages/About.jsx'

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
                        <a onClick={() => setPage('about')} href="#">About us</a>
                        <a onClick={() => setPage('app')} href="#">App</a>
                    </nav>
                </section>
            </header>
            <main className="main-layout">
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
            </main>
        </section>
    )
}
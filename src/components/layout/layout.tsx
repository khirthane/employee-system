import { BrowserRouter } from 'react-router-dom'
import Header from './header';
import Navbar from './navbar';
import './layout.scss';
import AppRoute from './appRoute';

const Layout = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navbar />
                <div className="page-container">
                    <Header />
                    <main className="main-container">
                        <AppRoute />
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout;
import { Link } from 'react-router-dom';
import Logo from './logo';
import t from 'utils/i18nProvider/translate';
import './layout.scss'

const Navbar = (): JSX.Element => {
    return (
        <aside className="side-bar">
            <Logo />
            <nav className="nav-container">
                <div className="nav-content">
                    <Link to="/" className="nav-link" id="dashboard-link">{t('dashboard')}</Link>
                    <Link to="/employees" className="nav-link" id="employees-link">{t('employees')}</Link>
                </div>
            </nav>
        </aside>
    )
}

export default Navbar;

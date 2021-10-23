import { NavLink } from 'react-router-dom';
import Logo from './logo';
import t from 'utils/i18nProvider/translate';
import './layout.scss'

const Navbar = (): JSX.Element => {

    return (
        <aside className="side-bar">
            <Logo />
            <nav className="nav-container">
                <div className="nav-content">
                    <NavLink exact to="/" activeClassName='selected' className="nav-link" id="dashboard-link">{t('dashboard')}</NavLink>
                    <NavLink to="/employees" activeClassName='selected' className="nav-link" id="employees-link">{t('employees')}</NavLink>
                </div>
            </nav>
        </aside>
    )
}

export default Navbar;

import { Link } from 'react-router-dom';
import Logo from './logo';
import intl from 'utils/locales/en.json'
import './layout.scss'

const Navbar = (): JSX.Element => {
    return (
        <aside className="side-bar">
            <Logo />
            <nav className="nav-container">
                <div className="nav-content">
                    <Link to="/" className="nav-link" id="dashboard-link">{intl.dashboard}</Link>
                    <Link to="/employees" className="nav-link" id="employees-link">{intl.employees}</Link>
                </div>
            </nav>
        </aside>
    )
}

export default Navbar;

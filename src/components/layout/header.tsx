import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LOCALES } from 'utils/i18nProvider';
import t from 'utils/i18nProvider/translate';
import './layout.scss'

const Header = ({ changeLocale }): JSX.Element => {

    const defaultLocale = sessionStorage.getItem('locale');
    const [pageName, setPageName] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setPageName(location.pathname === '/' ? t('dashboard') : t(location.pathname.substring(1)));
    }, [location])

    const changeLocation = (e) => {
        sessionStorage.setItem('locale', e.target.value);
        changeLocale(e.target.value);
    }

    return (
        <header className="header">
            <span className="header-title">{pageName}</span>
            <div className="locale-select">
                <select className="form-select change-locale" value={defaultLocale} onChange={changeLocation}>
                    <option value={LOCALES.ENGLISH}>English</option>
                    <option value={LOCALES.GERMAN}>German</option>
                    <option value={LOCALES.FRENCH}>French</option>
                </select>
            </div>
        </header>
    )
}

export default Header;
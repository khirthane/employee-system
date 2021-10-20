import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import intl from 'utils/locales/en.json'
import './layout.scss'

const Header = (): JSX.Element => {

    const [pageName, setPageName] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setPageName(location.pathname === '/' ? intl.dashboard : location.pathname.substring(1));
    }, [location])


    return (
        <header className="header">
            {pageName}
        </header>
    )
}

export default Header;
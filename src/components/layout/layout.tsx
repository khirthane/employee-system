import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { I18nPropvider, LOCALES } from 'utils/i18nProvider';
import Header from './header';
import Navbar from './navbar';
import AppRoute from './appRoute';
import './layout.scss';

const Layout = (): JSX.Element => {

    const [locale, setLocale] = useState(LOCALES.ENGLISH);
    const changeLocale = (loc: string) => {
        setLocale(loc);
    }

    return (
        <I18nPropvider locale={locale}>
            <BrowserRouter>
                <div className="app-container">
                    <Navbar />
                    <div className="page-container">
                        <Header changeLocale={(loc) => changeLocale(loc)} />
                        <main className="main-container">
                            <AppRoute />
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        </I18nPropvider>
    )
}

export default Layout;
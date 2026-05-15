import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import logo from '/public/imgs/logo.svg'
import logoWhite from '/public/imgs/logoWhite.svg'
import sun from '/public/imgs/sun.svg'
import moon from '/public/imgs/moon.png'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import portfolioContext from '../context/PortfolioContext';

const links = [
    { name: "home", url: '/' },
    { name: "projects", url: '/projects' },
    { name: "contact", url: '/contact' }
]




const Navbar = () => {
    const { theme, changeTheme } = useContext(portfolioContext)
    const { t, i18n } = useTranslation()

    const changeLang = () => {
        let lang = i18n.language == 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(lang)
    }

    return (
        <>

            <div className={`nav ${theme}`}>
                <div className="container">
                    <div className="nav__box">
                        <img src={theme == 'dark' ? logoWhite : logo} alt="" className="nav__box-logo" />
                        <div className="nav__box-right">
                            <ul className="nav__box-list">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <NavLink to={link.url} className='nav__box-link'>
                                            <span className="nav__box-link-span">{t(link.name)}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            <button className="nav__box-theme">
                                <img onClick={() => {
                                    changeTheme()
                                }} className='nav__box-switchTheme' src={theme == 'dark' ? moon : sun} />
                            </button>
                        </div>
                    </div>
                </div>
                <button className="nav__lang" onClick={() => changeLang()}>{i18n.language == 'ru' ? 'RU' : 'EN'}</button>
            </div>
        </>
    )
}

export default Navbar
import React, { useContext } from 'react'
import { Link } from 'react-router'
import arrow from '/public/imgs/arrow.svg'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import portfolioContext from '../context/PortfolioContext';




const Footer = () => {
const { theme, changeTheme } = useContext(portfolioContext)
    const { t } = useTranslation()
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -30 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 1 }}

                viewport={{ once: true }}
            >
                <footer className={`footer ${theme}`}>
                    <div className="container">
                        <div className="footer__box">
                            <div className="footer__box-left">
                                <h2 className="footer__box-title">{t('contact')}</h2>
                                <Link to={'/contact'} className="footer__box-link">
                                    <h3>{t('contactButton')}</h3>
                                    <img src={arrow} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </motion.div>
        </>
    )
}

export default Footer
import React, { useContext, useEffect, useState } from 'react'
import arrow from '/public/imgs/arrow.svg'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import portfolioContext from '../context/PortfolioContext';

const FullProjectsList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/liffxvv/repos")
            .then(res => res.json())
            .then(data => setRepos(data));
    }, []);

    const { t } = useTranslation()
    const { theme, changeTheme } = useContext(portfolioContext)
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 1 }}

                viewport={{ once: true }}
            >
                <div className={`fullProjects ${theme}`}>
                    <div className="container">
                        <h1 className="fullProjects__title">{t('allProjects')}:</h1>
                        <div className="fullProjects__cards">
                            {repos.map(repo => (
                                <motion.div

                                key={repo.id}
                                    initial={{ opacity: 0, y: 100 }}

                                    whileInView={{ opacity: 1, y: 0 }}

                                    transition={{ duration: 1 }}

                                    viewport={{ once: true }}
                                >

                                    <div className="fullProjects__card">
                                        <h3 className="fullProjects__card-title">{repo.name}</h3>
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            className="fullProjects__card-link"
                                        >
                                            {t('more')}
                                            <img src={arrow} alt="" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default FullProjectsList
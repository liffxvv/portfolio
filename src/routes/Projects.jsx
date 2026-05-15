import React, { useContext, useEffect, useState } from 'react'
import arrow from '/public/imgs/arrow.svg'
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { h1 } from 'framer-motion/client';
import { useTranslation } from 'react-i18next';
import portfolioContext from '../context/PortfolioContext';



const Projects = () => {

    const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/liffxvv/repos")
            .then(res => res.json())
            .then(data => {
                const filteredRepos = data.filter(
                    repo =>
                        !repo.fork &&
                        repo.description
                );

                setRepos(filteredRepos);
            });

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


                <section className={`projects ${theme}`}>
                    <div className="container">
                        <h1 className="projects__title">{t('projectsTitle')}:</h1>
                        <div className="projects__cards">
                            {repos.map(repo => (
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}

                                    whileInView={{ opacity: 1, y: 0 }}

                                    transition={{ duration: 1 }}

                                    viewport={{ once: true }}
                                    key={repo.id}
                                >
                                    <div className="projects__card">
                                        <h3 className="projects__card-title">{repo.name}</h3>

                                        <p className="projects__card-desc">{repo.description}</p>

                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            className="projects__card-link"
                                        >
                                            {t('more')}
                                            <img src={arrow} alt="" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="projects__more">
                                <h3 className="projects__more-title">{t('otherWorks')}</h3>
                                <Link to={'/allProjects'} className="projects__more-link">
                                    {t('moreProjects')}
                                    <img src={arrow} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Projects
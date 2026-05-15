import React, { useContext } from 'react'
import html from '/public/imgs/html.svg'
import css from '/public/imgs/css.svg'
import git from '/public/imgs/git.svg'
import js from '/public/imgs/js.svg'
import figma from '/public/imgs/figma.png'
import npm from '/public/imgs/npm.svg'
import react from '/public/imgs/react.svg'
import scss from '/public/imgs/sass.png'
import ts from '/public/imgs/ts.png'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'
import portfolioContext from '../context/PortfolioContext'

const skills = [
  {
    img: html,
    name: 'HTML',
    text: 'html'
  },
  {
    img: css,
    name: 'CSS',
    text: 'css'
  },
  {
    img: git,
    name: 'GitHub',
    text: 'git'
  },
  {
    img: js,
    name: 'JavaScript',
    text: 'js'
  },
  {
    img: figma,
    name: 'Figma',
    text: 'figma'
  },
  {
    img: npm,
    name: 'npm',
    text: 'npm'
  },
  {
    img: react,
    name: 'React',
    text: 'react'
  },
  {
    img: scss,
    name: 'SCSS',
    text: 'scss'
  },
  {
    img: ts,
    name: 'TypeScript',
    text: 'ts'
  }
]

const Home = () => {

const { theme, changeTheme } = useContext(portfolioContext)


  const { t } = useTranslation()
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        viewport={{ once: true }}
      >
        <section className={`aboutMe ${theme}`}>
          <div className="container">
            <div className="aboutMe__box">
              <h1 className="aboutMe__box-title">{t('aboutMe')}</h1>
              <p className="aboutMe__box-text">{t('aboutDescription')}
              </p>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        viewport={{ once: true }}
      >
        <section className={`skills ${theme}`}>
          <div className="container">
            <h1 className="skills__title">{t('skillsTitle')}</h1>
            <div className="skills__box">
              <div className="skills__box-cards">
                {skills.map((skill) => (
                  <div className="skills__box-card" key={skill.name}>
                    <div className="skills__box-card-top">
                      <img src={skill.img} alt="" className="skills__box-card-logo" />
                      <h3 className="skills__box-card-title">{skill.name}</h3>
                    </div>
                    <p className="skills__box-card-text">{t(skill.text)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>

    </>
  )
}

export default Home
import emailjs from '@emailjs/browser';
import React, { useContext, useRef, useState } from 'react'
import phone from '/public/imgs/phone.png'
import tg from '/public/imgs/tg.png'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import portfolioContext from '../context/PortfolioContext';

const socials = [
    {
        logo: phone,
        name: 'phone',
        url: 'tel:+998970078977'
    },
    {
        logo: tg,
        name: 'telegram',
        url: 'https://t.me/liffxvv'
    }

]

const Contacts = () => {
    const { theme, changeTheme } = useContext(portfolioContext)
    
    const form = useRef();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setSuccess(false);
        setError(false);

        emailjs
            .sendForm(
                "service_p7mbw6p",
                "template_ubc385a",
                form.current,
                "pqjwEP-W9SIHToTDZ"
            )
            .then(() => {
                setSuccess(true);

                form.current.reset();
            })
            .catch(() => {
                setError(true);
            });
    };
    const { t } = useTranslation()
    return (
        <>
            <div className={`contacts ${theme}`}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        transition={{ duration: 1 }}

                        viewport={{ once: true }}
                    >
                        <section className="contacts__mail">
                            <h1 className="contacts__mail-title">{t('sendMail')}</h1>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="contacts__mail-form"
                            >

                                <input
                                    className='contacts__mail-form-input'
                                    type="text"
                                    name="name"
                                    placeholder={t('yourName')}
                                    required
                                />

                                <input
                                    className='contacts__mail-form-input'
                                    type="email"
                                    name="email"
                                    placeholder={t('yourEmail')}
                                    required
                                />

                                <textarea
                                    className='contacts__mail-form-text'
                                    name="message"
                                    placeholder={t('yourMess')}
                                    rows="6"
                                    required
                                />

                                <button type="submit">
                                    {t('sendMessage')}
                                </button>

                            </form>

                            {success && (
                                <p className="contacts__mail-success">
                                    Message sent successfully!
                                </p>
                            )}

                            {error && (
                                <p className="contacts__mail-error">
                                    Something went wrong...
                                </p>
                            )}
                        </section>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        transition={{ duration: 1 }}

                        viewport={{ once: true }}
                    >
                        <section className="contacts__socials">
                            <h1 className="contacts__socials-title">{t('contacts')}</h1>
                            <div className="contacts__socials-box">
                                {socials.map((social) => (
                                    <div key={social.name} className="contacts__socials-card">
                                        <div className="contacts__socials-card-top">
                                            <img src={social.logo} alt="" className="contacts__socials-card-logo" />
                                            <h2 className="contacts__socials-card-name">{t(social.name)}</h2>
                                        </div>
                                        <a href={social.url}><button className="contacts__socials-card-link">{t('contacttome')}</button></a>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Contacts
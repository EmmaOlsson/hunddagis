import React from 'react';
import hunddagis from '../assets/graphics/hunddagis.jpg';
import style from '../css/contact.module.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const ContactScreen = () => {

  const { t } = useTranslation();

  const history = useHistory();

  function handleClick() {
    alert('Tack för ditt meddelande!')
    history.push('/contact')
  }

  return (
    <section className={style.logoContainer}>
      <div className={style.contactTitle}>
        <h2 className={style.contactTitle}>{t('contact.title')}</h2>
      </div>

      <div className={style.contactDetailsContainer}>
        <div className={style.leftContainer}>
          <img className={style.img} alt="location" src={hunddagis}></img>
          <div className={style.contactDetails}>
            <div className={style.content}>
              <div className={style.titleContainer}>
                <span className={style.contactDetailsTitle}>
                  {t('contact.contactDetails.title')}
                </span>
              </div>

              <div className={style.nameContainer}>
                <span className={style.subHeading}>{t('contact.contactDetails.name')} </span>
                <span className={style.information}>Hunddagis</span>
              </div>

              <div className={style.addressContainer}>
                <span className={style.subHeading}>{t('contact.contactDetails.address')} </span>
                <span className={style.information}>Båthusgatan 9, 25667 Helsingborg</span>
              </div>

              <div className={style.phoneContainer}>
                <span className={style.subHeading}>{t('contact.contactDetails.phone')} </span>
                <span className={style.information}>000000000</span>
              </div>

              <div className={style.emailContainer}>
                <span className={style.subHeading}>{t('contact.contactDetails.Email')} </span>
                <span className={style.information}>test@testsson.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <aside className={style.contactContainer}>
          <form className={style.contactForm}>
          <h3 className={style.contactFormTitle}>Kontaktformulär</h3>
            <ul className={style.contactFormContact}>
              <li>
                <label for="firstName">Förnamn:</label>
                <input type="text" id="firstName"></input>
              </li>
              <li>
                <label for="lastName">Efternamn:</label>
                <input type="text" id="lastName"></input>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email"></input>
              </li>
              <li>
                <label for="dropDownMenu">Ämne:</label>
                <select className={style.dropDownMenu} id="dropDownMenu">
                  <option value="booking">Boka plats</option>
                  <option value="questions">Fråga om tjänst</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Klagomål</option>
                </select>
              </li>
              <li>
                <label for="message">Meddelande:</label>
                <input type="text" className={style.contactText}id="message"></input>
              </li>
              <li>
                <input type="submit" value="Skicka" onClick={handleClick} className={style.submitForm}></input>
              </li>
            </ul>
          </form>
        </aside>
      </div>
    </section>
  );
};

export default ContactScreen;

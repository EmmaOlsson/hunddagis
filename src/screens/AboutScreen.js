import React, { useState, useEffect } from 'react';
import Styles from '../css/about.module.css';

import { useTranslation } from 'react-i18next';


const AboutScreen = () => {

  const [aboutUsData, setAboutUsData] = useState([])
  const [servicesData, setServicesData] = useState([])
  const [staffData, setStaffData] = useState([])


  const { t, i18n } = useTranslation();

  // About us
  useEffect(() => {
    const aboutUsDataFromi18n = i18n.t('about.aboutUs.aboutUsData', {
      returnObjects: true
    })
    setAboutUsData(aboutUsDataFromi18n)
  }, [i18n, t])

  // Services
  useEffect(() => {
    const servicesDataFromi18n = i18n.t('about.ourServices.servicesData', {
      returnObjects: true
    })
    setServicesData(servicesDataFromi18n)
  }, [i18n, t])

  // Staff
  useEffect(() => {
    const staffDataFromi18n = i18n.t('about.ourStaff.staffData', {
      returnObjects: true
    })
    setStaffData(staffDataFromi18n)
  }, [i18n, t])


  return <section>
    <main className={Styles.mainContainer}>
      {/* About */}
      <div className={Styles.topAbout}>
        <article className={Styles.aboutText}>
          <h2 className={Styles.aboutTitles}>{t('about.aboutUs.title')}</h2>
          {
            aboutUsData.map((aboutUs) => {
              return <section className={Styles.aboutInfo} key={aboutUs.id}>
                <p>
                  <span>{aboutUs.text}</span>
                </p>
              </section>
            })
          }
        </article>
        {/* Services */}
        <aside className={Styles.servicesContainer}>
          <h2 className={Styles.aboutTitles}>{t('about.ourServices.title')}</h2>
          {
            servicesData.map((services) => {
              return <section className={Styles.priceList} key={services.id}>
                <div className={Styles.ourOffers}>
                  <h3>{services.type}</h3>
                  <ul className={Styles.offerList}>
                    <li>{services.days}</li>
                    <li>{services.price}</li>
                  </ul>
                </div>
              </section>
            })
          }
        </aside>
      </div>
      {/* Staff */}
      <div className={Styles.bottomAbout}>
        <h2 className={Styles.aboutTitles}>{t('about.ourStaff.title')}</h2>
        <article className={Styles.staffContainer}>
          {
            staffData.map((staff) => {
              return <section className={Styles.staffInfo} key={staff.id}>
                <img className={Styles.staffImg} src={staff.img} alt={'staff'}></img>
                <h3>{staff.name}</h3>
                <p>{staff.desc}</p>
                <a href={staff.emailLink}>{staff.email}</a>
              </section>
            }
            )
          }
        </article>
      </div>
    </main>

{/* Contact Form */}
{/*         <aside className={Styles.contactContainer}>
          <h2 className={Styles.aboutTitles}>Kontakta oss</h2>
          <form className={Styles.contactForm}>
            <ul className={Styles.contactFormContact}>
              <li>
                <label for="name">Förnamn:</label>
                <input type="text"></input>
              </li>
              <li>
                <label for="name">Efternamn:</label>
                <input type="text"></input>
              </li>
              <li>
                <label for="name">Email:</label>
                <input type="text"></input>
              </li>
              <li>
                <label for="dropDownMenu">Ämne:</label>
                <select>
                  <option value="booking">Boka plats</option>
                  <option value="questions">Fråga om tjänst</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Klagomål</option>
                </select>
              </li>
              <li>
                <label for="name">Innehåll:</label>
                <input className={Styles.contactText}></input>
              </li>
              <li>
                <input type="submit" value="Skicka"></input>
              </li>
            </ul>
          </form>
        </aside> */}

  </section>;
};

export default AboutScreen;

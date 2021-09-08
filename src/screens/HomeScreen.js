import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import Styles from '../css/homescreen.module.css';
import happyDogsImg from '../../src/assets/graphics/happy-dogs.jpg';

import { useTranslation } from 'react-i18next';


const HomeScreen = () => {

  const { t, i18n } = useTranslation();

  const history = useHistory();

  const [servicesData, setServicesData] = useState([])

  useEffect(() => {
    const serviceDataFromi18n = i18n.t('startPage.ourServices.servicesData', {returnObjects: true})
    setServicesData(serviceDataFromi18n)
  }, [i18n, t])

  function handleClick() {
    history.push("/contact");
  }

  return (
    <section className={Styles.sectionContainer}>
      
        <div className={Styles.topContainer} >
          <img className={Styles.mainImg} src={happyDogsImg} alt="happy-dogs" ></img>
        </div>

        <div className={Styles.middleContainer} >
          <article className={Styles.infoBox} >
            <h3>{t('startPage.title')}</h3>
            <p>{t('startPage.openingHours.title')}</p>
            <p>{t('startPage.openingHours.dropOff')}</p>
            <p>{t('startPage.openingHours.pickUp')}</p>
          </article>

          <article className={Styles.applicationBox} >
            <div className={Styles.applicationBoxContent} >
              <h5>{t('startPage.signUp.title')}</h5>
            <button className={Styles.applicationButton} onClick={handleClick} >{t('startPage.signUp.signUp')}</button>
              </div>
          </article>
        </div>

        <article className={Styles.bottomContainer} >
          {
            servicesData.map((service) => {
              return <section className={Styles.priceInfo} key={service.id} >
                <h3>{service.type}</h3>
                <p>{service.days}</p>
                <p>{service.price}</p>
              </section>
            })
          }
        </article>
    </section>
    );
  };
export default HomeScreen;

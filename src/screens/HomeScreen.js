import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import Styles from '../css/homescreen.module.css';
import happyDogsImg from '../../src/assets/graphics/happy-dogs.jpg';
import servicesSweFile from '../assets/data/services';

import { useTranslation } from 'react-i18next';


const HomeScreen = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const history = useHistory();

  const [servicesSwe, setServicesSwe] = useState([])

  useEffect(() => {
    setServicesSwe(servicesSweFile)
  }, [])

  function handleClick() {
    history.push("/contact");
  }

  return (
    <section className={Styles.sectionContainer}>
      
        <div className={Styles.topSection} >
          <img className={Styles.mainImg} src={happyDogsImg} alt="happy-dogs" ></img>
        </div>

        <div className={Styles.middleSection} >

          <article className={Styles.infoBox} >
            <h3>Hundkojans hunddagis</h3>
            <p>Våra öppettider</p>
            <p>Inlämning: 07:00 - 09:00</p>
            <p>Hämtning: 14:00 - 17:30</p>
          </article>

          <article className={Styles.applicationBox} >
            <div className={Styles.applicationBoxContent} >
              <h5>Intresserad av en dagisplats?</h5>
            <button className={Styles.applicationButton} onClick={handleClick} >Skicka ansökan</button>
              </div>
          </article>

        </div>

        <div className={Styles.bottomSection} >
            <article className={Styles.servicesContainer} >
              {
                servicesSwe.map((service) => {
                  return <section className={Styles.priceInfo} key={service.id} >
                    <h4>{service.time}</h4>
                    <p>{service.days}</p>
                    <p>{service.price}</p>
                  </section>
                })
              }
            </article>
        </div>
    </section>
    );
  };
export default HomeScreen;

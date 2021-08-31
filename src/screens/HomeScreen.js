import React from 'react';

import Styles from '../css/homescreen.module.css';

import happyDogsImg from '../../src/assets/graphics/happy-dogs.jpg';

const HomeScreen = () => {
  return (
    <section>
      <div>
      <img className={Styles.mainImg} src={happyDogsImg} alt="picture-of-happy-dogs" ></img>
      <article className={Styles.welcomeText} >
        <h3>Hundkojans hunddagis</h3>
        <p>Våra öppettider</p>
        <p>Inlämning: 07:00 - 09:00</p>
        <p>Hämtning: 14:00 - 17:30</p>
      </article>
      </div>
    </section>
  )
};

export default HomeScreen;

import React from 'react';

import Styles from '../css/homescreen.module.css';

import happyDogsImg from '../../src/assets/graphics/happy-dogs.jpg';

const HomeScreen = () => {
  return (
    <section>
      

      <main className={Styles.mainContainer} >
        
      <img className={Styles.mainImg} src={happyDogsImg} alt="happy-dogs" ></img>

      <div className={Styles.mainText} >
      <article className={Styles.infoBox} >
        <h3>Hundkojans hunddagis</h3>
        <p>Våra öppettider</p>
        <p>Inlämning: 07:00 - 09:00</p>
        <p>Hämtning: 14:00 - 17:30</p>
      </article>
      <article className={Styles.applicationBox} >
        <h5>Intresserad av en dagisplats?</h5>
        <button className={Styles.applicationButton} >Skicka ansökan</button>
      </article>
      </div>
      </main>


    </section>
  )
};

export default HomeScreen;

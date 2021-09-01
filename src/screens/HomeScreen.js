import React from 'react';

import Styles from '../css/homescreen.module.css';
import { useHistory } from 'react-router-dom';
import happyDogsImg from '../../src/assets/graphics/happy-dogs.jpg';

const HomeScreen = () => {

  const history = useHistory();

  function handleClick() {
    history.push("/contact");
  }

  return (
    <section className={Styles.mainSection}>
      

      <main className={Styles.mainContainer} >

      <img className={Styles.mainImg} src={happyDogsImg} alt="happy-dogs" ></img>

      </main>
      <div className={Styles.mainText} >
        <article className={Styles.infoBox} >
          <h3>Hundkojans hunddagis</h3>
          <p>Våra öppettider</p>
          <p>Inlämning: 07:00 - 09:00</p>
          <p>Hämtning: 14:00 - 17:30</p>
        </article>


        <article className={Styles.applicationBox} >
          <div className={Styles.applicationBoxCircle} ></div>

          <div className={Styles.applicationBoxContent} >
            <h5>Intresserad av en dagisplats?</h5>
          <button className={Styles.applicationButton} onClick={handleClick} >Skicka ansökan</button>
            </div>

        </article>

        </div>


    </section>
  )
};

export default HomeScreen;

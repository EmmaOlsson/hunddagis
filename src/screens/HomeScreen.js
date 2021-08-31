import React from 'react';

import Styles from '../css/homescreen.module.css';

import happyDogsImg from '../../src/assets/graphics/happy-dogs.jpg';

const HomeScreen = () => {
  return (
    <section>
      <img className={Styles.mainImg} src={happyDogsImg} alt="picture-of-happy-dogs" ></img>
    </section>
  )
};

export default HomeScreen;

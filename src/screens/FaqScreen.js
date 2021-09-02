import React, { useState, useEffect } from 'react';
import Styles from '../css/faq.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const FaqScreen = () => {
  const [open, setOpen] = useState(null);
  const [questions, setQuestions] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const questionsFromi18n = i18n.t('faq.questions', {
      returnObjects: true,
    });
    setQuestions(questionsFromi18n);
  }, [i18n, t]);

  return (
    <div className={Styles.mainContainer}>
      <h3 className={Styles.heading}>{t('faq.title')}</h3>
      <p className={Styles.description}>
        {t('faq.subHeading')}
        <Link to='/contact' className={Styles.contactLink}>
          här!
        </Link>
      </p>
      {questions.map((question, index) => (
        <div className={Styles.questionWrapper} key={index}>
          <div className={Styles.questionContainer}>
            <h5 className={Styles.question}>{question.title}</h5>
            <p className={open === index && Styles.answer}>
              {open === index ? question.answer : ''}
            </p>
          </div>
          <div className={Styles.buttonContainer}>
            <FontAwesomeIcon
              icon={open === index ? faAngleUp : faAngleDown}
              className={Styles.showAnswer}
              onClick={() => (open === index ? setOpen(null) : setOpen(index))}
            ></FontAwesomeIcon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqScreen;

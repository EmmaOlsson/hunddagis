import React, { useState, useEffect } from 'react';
import Styles from '../css/faq.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import faqData from '../assets/graphics/data/faqData';

const FaqScreen = () => {
  const [open, setOpen] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(faqData);
  }, []);

  return (
    <div className={Styles.mainContainer}>
      <h3 className={Styles.heading}>Vanliga frågor</h3>
      <p className={Styles.description}>
        Självklart har du som ägare av en fyrbent vän många frågor. Här har vi
        samlat de vanligaste frågorna med svar. Skulle svaret på din fråga inte
        finnas är du välkommen att kontakta oss{' '}
        <Link to='/contact' className={Styles.contactLink}>
          här!
        </Link>
      </p>
      {questions.map((question, index) => (
        <div className={Styles.questionWrapper} key={index}>
          <div className={Styles.questionContainer}>
            <h5 className={Styles.question}>{question.question}</h5>
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

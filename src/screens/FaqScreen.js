import React, { useState } from 'react';
import Styles from '../css/faq.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FaqScreen = () => {
  const [open, setOpen] = useState(null);
  const [questions, setQuestions] = useState([
    {
      question: 'Hur många hundar tar ni emot samtidigt?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'Hur ser en dag ut hos er?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'Hur lång tid tar det att få en dagisplats?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'Tar ni emot alla raser?',
      answer:
        'Lorem, ipsum dolor sit amet conectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'Kan man ha hundar över natten hos er?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'Tar ni emot okastrerade hundar?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
  ]);

  return (
    <div className={Styles.mainContainer}>
      <h3 className={Styles.heading}>Vanliga frågor</h3>
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
              icon={faAngleDown}
              className={Styles.showAnswer}
              onClick={() => (open === index ? setOpen(null) : setOpen(index))}
            >
              show answer
            </FontAwesomeIcon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqScreen;

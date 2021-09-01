import React, { useState } from 'react';
import Styles from '../css/faq.css';

const FaqScreen = () => {
  const [open, setOpen] = useState(null);
  const [questions, setQuestions] = useState([
    {
      question: 'question1',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'question2',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'question3',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'question4',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'question5',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
    {
      question: 'question6',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum corrupti officia magni, quisquam cumque dolorem praesentium',
    },
  ]);

  return (
    <div>
      <h3 className={Styles.heading}>Vanliga frågor</h3>
      {questions.map((question, index) => (
        <div className={Styles.questionWrapper} key={index}>
          <div className={Styles.questionContainer}>
            <h5 className={Styles.question}>{question.question}</h5>
            <p className={Styles.answer}>
              {open === index ? question.answer : ''}
            </p>
          </div>
          <div className={Styles.buttonContainer}>
            <button
              className={Styles.showAnswer}
              onClick={() => (open === index ? setOpen(null) : setOpen(index))}
            >
              show answer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqScreen;

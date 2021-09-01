import React, { useState } from 'react';

const FaqScreen = () => {
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
      <h3>Vanliga frågor</h3>
      {questions.map((question, index) => (
        <div key={index}>
          <div className='question-container'>
            <h5>{question.question}</h5>
            <h6>{question.answer}</h6>
          </div>
          <div className='button-container'>
            <button>show answer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqScreen;

import React, { useState } from 'react';
import '../Quiz.css'; // Import your CSS file

const Quiz4 = () => {
  const question = { question: "The color coding for dry powder fire extinguisher is", answer: "Blue" };
  const nextLocation = "You will find me where numbers oscillate";

  const [userAnswer, setUserAnswer] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    const answerLower = userAnswer.trim().toLowerCase();
    const isCorrect = answerLower === question.answer.toLowerCase();

    // Display the result only after the button is clicked
    setShowMessage(true);

    // Update isCorrect state
    setIsCorrect(isCorrect);

    // Clear the input value
    setUserAnswer('');
  };

  return (
    <div className="quiz-container">
      <div>
      <h1>7</h1>
        <h3 className="question-heading">Question 4</h3>
        <p className="question-text">{question.question}</p>
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          className="answer-input"
        />
        <button onClick={handleCheckAnswer} className="check-answer-btn">Check Answer</button>
      </div>
      {showMessage && (
        <div className={`quiz-results ${isCorrect ? 'correct-result' : 'wrong-result'}`}>
          <h3>{isCorrect ? nextLocation : 'Wrong!'}</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz4;

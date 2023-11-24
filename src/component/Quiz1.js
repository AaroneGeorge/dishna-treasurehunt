import React, { useState } from 'react';
import '../Quiz.css'; // Import your CSS file

const Quiz1 = () => {
  const question = { question: "What is the name of the federal agency that protects the health and safety of workers", answer: "OSHA" };
  const nextLocation = "Hey Siri, Lumos";

  const [userAnswer, setUserAnswer] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    const answerLower = userAnswer.trim().toLowerCase(); // Trim spaces and convert to lowercase
    const correctAnswerLower = question.answer.toLowerCase(); // Convert correct answer to lowercase

    const isCorrect = answerLower === correctAnswerLower;

    // Display the result only after the button is clicked
    setShowMessage(true);

    // Update isCorrect state
    setIsCorrect(isCorrect);

    // Clear the input value
    setUserAnswer('');
  };

  return (
    <div>
      <div className="quiz-container">
        <h1>7</h1>
        <div>
          <h3 className="question-heading">Question 1</h3>
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
    </div>
  );
};

export default Quiz1;

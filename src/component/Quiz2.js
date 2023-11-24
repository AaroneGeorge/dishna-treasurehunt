import React, { useState } from 'react';
import '../Quiz.css'; // Import your CSS file

const Quiz2 = () => {
  const question = { question: "What does RPE stand for in construction safety", answer: "Respiratory protective equipment" };
  const nextLocation = (
    <div>
      💧 🔥 ⚡️<br />
      ⬇️<br />
      💰
    </div>
  );
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
        <h1>5</h1>
        <h3 className="question-heading">Question 2</h3>
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

export default Quiz2;

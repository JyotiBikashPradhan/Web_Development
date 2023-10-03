import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';

const MainPage = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <>
      {startQuiz ? (
        <QuizQuestion />
      ) : (
        <>
         
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="start-page">
              <h2 className="text-2xl mb-4">Welcome to the Quiz!</h2>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleStartQuiz}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;


// import React, { useState,useEffect } from 'react';
// import './QuizApp.css';

// const QuizQuestion = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(-1);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [showAnswers, setShowAnswers] = useState(false);
//   const [quizData, setQuizData] = useState([]);

//   useEffect(() => {
//     // Fetch quiz data from the API endpoint
//     const fetchQuizData = async () => {
//       try {
//         const response = await fetch('http://192.168.17.207:8080/questions/allQuestions');
//         const data = await response.json();
//         setQuizData(data);
//       } catch (error) {
//         console.error('Error fetching quiz data:', error);
//       }
//     };

//     fetchQuizData();
//   }, []);
//   const handleStartQuiz = () => {
//     setCurrentQuestion(0);
//   };

//   const handleAnswerClick = (selectedOption) => {
//     const question = quizData[currentQuestion];

//     // Get the existing user answers from local storage
//     const storedUserAnswers = localStorage.getItem('userAnswers');
//     let userAnswers = storedUserAnswers ? JSON.parse(storedUserAnswers) : [];

//     // Store the selected answer for the current question
//     userAnswers[currentQuestion] = selectedOption;

//     // Update the user answers in local storage
//     localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

//     if (selectedOption === question.rightAnswer) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < quizData.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const handleRestartQuiz = () => {
//     setCurrentQuestion(-1);
//     setScore(0);
//     setShowScore(false);
//     setShowAnswers(false);
//   };

//   const handleShowAnswers = () => {
//     setShowAnswers(true);
//   };

//   if (currentQuestion === -1) {
//     return (
//       <div className="quiz-container">
//         <div className="start-page">
//           <h2>Welcome to the Quiz!</h2>
//           <button onClick={handleStartQuiz}>Start Quiz</button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="quiz-container">
//       {showScore ? (
//         <div className="score-section">
//           <h2>Your Score: {score} / {quizData.length}</h2>
//           <button onClick={handleRestartQuiz}>Restart Quiz</button>
//           <button onClick={handleShowAnswers}>Show Answers</button>
//           {showAnswers && (
//             <div className="answers-section">
//               <h3>Answers</h3>
//               <ul>
//                 {quizData.map((question, index) => (
//                   <li key={index}>
//                     <strong>Question {index + 1}:</strong> {question.questionTitle}
//                     <br />
//                     <strong>Your Answer:</strong> {JSON.parse(localStorage.getItem('userAnswers'))[index]}
//                     <br />
//                     <strong>Actual Answer:</strong> {question.rightAnswer}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="question-container">
//           <h2>Question {currentQuestion + 1}</h2>
//           <h3>{quizData[currentQuestion].questionTitle}</h3>
//           <ul>
//             {Object.entries(quizData[currentQuestion]).map(([key, value]) => {
//               if (key.startsWith('option')) {
//                 const optionNumber = key.replace('option', '');
//                 return (
//                   <li key={key} onClick={() => handleAnswerClick(value)}>
//                     <span className="option-number">{optionNumber}. </span>
//                     {value}
//                   </li>
//                 );
//               }
//               return null;
//             })}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizQuestion;
import React, { useState, useEffect } from 'react';

const QuizQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    // Fetch quiz data from the API endpoint
    const fetchQuizData = async () => {
      try {
        const response = await fetch('http://192.168.17.207:8080/questions/allQuestions');
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswerClick = (selectedOption) => {
    // Update the user's selected answer for the current question
    setQuizData((prevData) => {
      const updatedData = [...prevData];
      updatedData[currentQuestion].userAnswer = selectedOption;
      return updatedData;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      // All questions are answered, you can display the result or summary page here
      console.log('Quiz completed!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl">Question {currentQuestion + 1}</h2>
        <h3>{quizData[currentQuestion]?.questionTitle}</h3>
        <ul>
          {Object.entries(quizData[currentQuestion] || {}).map(([key, value]) => {
            if (key.startsWith('option')) {
              const optionNumber = key.replace('option', '');
              return (
                <li
                  key={key}
                  onClick={() => handleAnswerClick(value)}
                  className={`relative mb-2 cursor-pointer p-2 rounded transition-colors ${
                    quizData[currentQuestion]?.userAnswer === value ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <span className="option-number font-bold text-blue-500">{optionNumber}. </span>
                  {value}
                </li>
              );
            }
            return null;
          })}
        </ul>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleNextQuestion}
        >
          {currentQuestion + 1 < quizData.length ? 'Next Question' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;

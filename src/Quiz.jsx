import React, { useState } from 'react';
import Navbar from './components/navbar.jsx'; // Corrected import path for Navbar.jsx

const Quiz = () => {
  // State to store user's selected answers for each question
  const [userAnswers, setUserAnswers] = useState({});
  // State to control when quiz results are displayed
  const [showResults, setShowResults] = useState(false);
  // State to store the calculated score
  const [score, setScore] = useState(0);
  // State to control visibility of the review section
  const [showReview, setShowReview] = useState(false);

  // Data structure for all quiz questions, categorized
  const quizSections = [
    {
      id: 'html-quiz',
      title: 'HTML Quiz',
      questions: [
        {
          id: 'q1-html',
          type: 'multiple_choice',
          question: '1. What does HTML stand for?',
          options: [
            'Hyper Text Markup Language',
            'Hyperlinks and Text Markup Language',
            'Home Tool Markup Language',
            'Hyperlinking Text Management Language'
          ],
          correctAnswer: 'Hyper Text Markup Language',
        },
        {
          id: 'q2-html',
          type: 'true_false',
          question: '2. The `<br>` tag is used to insert a horizontal rule.',
          correctAnswer: false, // False, it's for line break
        },
        {
          id: 'q3-html',
          type: 'multiple_choice',
          question: '3. Which HTML tag is used to define an internal style sheet?',
          options: [
            '<script>',
            '<css>',
            '<style>',
            '<link>'
          ],
          correctAnswer: '<style>',
        },
        {
          id: 'q4-html',
          type: 'true_false',
          question: '4. HTML comments start with `<!--` and end with `-->`.',
          correctAnswer: true,
        },
        {
          id: 'q5-html',
          type: 'multiple_choice',
          question: '5. Which element is used to specify a footer for a document or section?',
          options: [
            '<footer>',
            '<bottom>',
            '<end>',
            '<section>'
          ],
          correctAnswer: '<footer>',
        },
      ],
    },
    {
      id: 'css-quiz',
      title: 'CSS Quiz',
      questions: [
        {
          id: 'q1-css',
          type: 'multiple_choice',
          question: '1. Which property is used to change the background color?',
          options: [
            'color',
            'bgcolor',
            'background-color',
            'background'
          ],
          correctAnswer: 'background-color',
        },
        {
          id: 'q2-css',
          type: 'true_false',
          question: '2. CSS stands for "Cascading Style Sheets".',
          correctAnswer: true,
        },
        {
          id: 'q3-css',
          type: 'multiple_choice',
          question: '3. Which CSS property controls the text size?',
          options: [
            'text-style',
            'font-size',
            'text-size',
            'font-style'
          ],
          correctAnswer: 'font-size',
        },
        {
          id: 'q4-css',
          type: 'true_false',
          question: '4. The `padding` property creates space outside an element\'s border.',
          correctAnswer: false, // False, padding is inside, margin is outside
        },
        {
          id: 'q5-css',
          type: 'multiple_choice',
          question: '5. How do you select an element with `id="demo"`?',
          options: [
            '#demo',
            '.demo',
            'demo',
            '*demo'
          ],
          correctAnswer: '#demo',
        },
      ],
    },
    {
      id: 'javascript-quiz',
      title: 'JavaScript Quiz',
      questions: [
        {
          id: 'q1-js',
          type: 'multiple_choice',
          question: '1. Which built-in method returns the length of the string?',
          options: [
            'length()',
            'size()',
            'count()',
            'length'
          ],
          correctAnswer: 'length',
        },
        {
          id: 'q2-js',
          type: 'true_false',
          question: '2. JavaScript is a case-sensitive language.',
          correctAnswer: true,
        },
        {
          id: 'q3-js',
          type: 'multiple_choice',
          question: '3. How do you write "Hello World" in an alert box?',
          options: [
            'msg("Hello World");',
            'alertBox("Hello World");',
            'alert("Hello World");',
            'prompt("Hello World");'
          ],
          correctAnswer: 'alert("Hello World");',
        },
        {
          id: 'q4-js',
          type: 'true_false',
          question: '4. The `const` keyword allows reassignment of the variable after its initial declaration.',
          correctAnswer: false, // False, const cannot be reassigned
        },
        {
          id: 'q5-js',
          type: 'multiple_choice',
          question: '5. Which operator is used to assign a value to a variable?',
          options: [
            '-',
            '=',
            '*',
            'x'
          ],
          correctAnswer: '=',
        },
      ],
    },
  ];

  // Handler for selecting an answer
  const handleAnswerSelect = (questionId, selectedValue) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: selectedValue,
    }));
  };

  // Handler for submitting the entire quiz
  const handleSubmitQuiz = () => {
    let currentScore = 0;
    quizSections.forEach(section => {
      section.questions.forEach(question => {
        if (userAnswers[question.id] !== undefined) {
          // For true/false, convert string to boolean for comparison
          const userAnswerForComparison = question.type === 'true_false' 
            ? (userAnswers[question.id] === 'true') 
            : userAnswers[question.id];

          if (userAnswerForComparison === question.correctAnswer) {
            currentScore += 1;
          }
        }
      });
    });
    setScore(currentScore);
    setShowResults(true);
    setShowReview(false); // Hide review if it was open from a previous attempt
  };

  // Handler to show review of missed questions
  const handleReviewQuiz = () => {
    setShowReview(true);
  };

  // Handler to retry the quiz (resets states)
  const handleRetryQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
    setShowReview(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter pt-16">
      <Navbar activePage="Quiz" /> {/* Highlight 'Quiz' in the Navbar */}

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-700 mb-12">
          Test Your Knowledge
        </h1>

        {/* Render quiz sections if results are not shown */}
        {!showResults ? (
          <div className="space-y-12">
            {quizSections.map(section => (
              <div key={section.id} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8 border-b-2 border-indigo-200 pb-4">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {section.questions.map(question => (
                    <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <p className="text-lg font-semibold text-gray-800 mb-4">{question.question}</p>
                      {question.type === 'multiple_choice' && (
                        <div className="space-y-3">
                          {question.options.map(option => (
                            <label key={option} className="flex items-center text-gray-700 cursor-pointer">
                              <input
                                type="radio"
                                name={question.id}
                                value={option}
                                onChange={() => handleAnswerSelect(question.id, option)}
                                checked={userAnswers[question.id] === option}
                                className="form-radio text-indigo-600 h-5 w-5"
                              />
                              <span className="ml-3">{option}</span>
                            </label>
                          ))}
                        </div>
                      )}
                      {question.type === 'true_false' && (
                        <div className="flex items-center space-x-6">
                          <label htmlFor={`${question.id}-true`} className="flex items-center text-gray-700 cursor-pointer">
                            <input
                              type="radio"
                              id={`${question.id}-true`}
                              name={question.id}
                              value="true"
                              onChange={() => handleAnswerSelect(question.id, 'true')}
                              checked={userAnswers[question.id] === 'true'}
                              className="form-radio text-indigo-600 h-5 w-5"
                            />
                            <span className="ml-3">True</span>
                          </label>
                          <label htmlFor={`${question.id}-false`} className="flex items-center text-gray-700 cursor-pointer">
                            <input
                              type="radio"
                              id={`${question.id}-false`}
                              name={question.id}
                              value="false"
                              onChange={() => handleAnswerSelect(question.id, 'false')}
                              checked={userAnswers[question.id] === 'false'}
                              className="form-radio text-indigo-600 h-5 w-5"
                            />
                            <span className="ml-3">False</span>
                          </label>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center mt-12">
              <button
                onClick={handleSubmitQuiz}
                className="px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        ) : (
          // Display results and review options
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">Quiz Results</h2>
            <p className="text-2xl font-semibold text-gray-800 mb-8">
              You scored {score} out of {quizSections.reduce((total, section) => total + section.questions.length, 0)}!
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={handleRetryQuiz}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Try Again
              </button>
              <button
                onClick={handleReviewQuiz}
                className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition duration-300 ease-in-out"
              >
                Review Missed Questions
              </button>
            </div>

            {showReview && (
              <div className="mt-12 text-left space-y-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Review Your Answers</h3>
                {quizSections.map(section => (
                  <div key={section.id} className="space-y-6">
                    <h4 className="text-xl font-bold text-indigo-600 mb-4">{section.title}</h4>
                    {section.questions.map(question => {
                      const userAnswer = userAnswers[question.id];
                      // For true/false, convert stored string answer to boolean for comparison
                      const userAnswerForComparison = question.type === 'true_false' 
                        ? (userAnswer === 'true') 
                        : userAnswer;
                      const isCorrect = userAnswerForComparison === question.correctAnswer;
                      const hasAnswered = userAnswer !== undefined;

                      return (
                        <div key={question.id} className={`p-4 rounded-lg border ${isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                          <p className="font-semibold text-gray-900 mb-2">{question.question}</p>
                          {question.type === 'multiple_choice' && (
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                              {question.options.map(option => (
                                <li key={option} className={`${option === question.correctAnswer ? 'font-bold text-green-700' : ''} ${option === userAnswer && !isCorrect ? 'text-red-700 line-through' : ''}`}>
                                  {option}
                                  {option === userAnswer && <span className="ml-2 text-xs font-normal"> (Your Answer)</span>}
                                  {option === question.correctAnswer && <span className="ml-2 text-xs font-normal"> (Correct)</span>}
                                </li>
                              ))}
                            </ul>
                          )}
                          {question.type === 'true_false' && (
                            <div className="text-sm text-gray-700">
                              <p className={`${question.correctAnswer === true ? 'font-bold text-green-700' : ''}`}>Correct Answer: True</p>
                              <p className={`${question.correctAnswer === false ? 'font-bold text-green-700' : ''}`}>Correct Answer: False</p>
                              {hasAnswered && (
                                <p className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}>Your Answer: {userAnswer === 'true' ? 'True' : 'False'}</p>
                              )}
                              {!hasAnswered && <p className="text-gray-500">You did not answer this question.</p>}
                            </div>
                          )}
                           {!isCorrect && hasAnswered && (
                              <p className="mt-2 text-red-700 text-sm">
                                Your answer was incorrect. The correct answer was: {
                                  question.type === 'multiple_choice' ? question.correctAnswer : 
                                  question.correctAnswer ? 'True' : 'False'
                                }
                              </p>
                          )}
                           {!hasAnswered && showResults && (
                               <p className="mt-2 text-orange-700 text-sm">
                                You skipped this question. The correct answer was: {
                                  question.type === 'multiple_choice' ? question.correctAnswer : 
                                  question.correctAnswer ? 'True' : 'False'
                                }
                               </p>
                           )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer - Copied from Home.jsx */}
      <footer className="py-8 px-4 sm:px-8 bg-gray-200 text-gray-800 text-center text-sm rounded-t-lg shadow-inner mt-16">
        <p> © 2025 . E-learning Platform</p>
      </footer>
    </div>
  );
};

export default Quiz;

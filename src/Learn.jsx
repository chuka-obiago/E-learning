import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import Navbar from './components/navbar.jsx'; // Corrected import path for Navbar.jsx

const Learn = () => {
  // State to manage the visibility of output for code snippets
  const [showCodeOutput, setShowCodeOutput] = useState({});
  // State to manage the quiz answers and feedback
  const [quizStates, setQuizStates] = useState({});
  // State to manage the sticky navigation
  const [isSticky, setSticky] = useState(false);
  // Ref to get the DOM element for the section navigation
  const navRef = useRef(null);
  // State to store the original top offset of the nav
  const [navOffsetTop, setNavOffsetTop] = useState(0);

  // Function to toggle the output visibility for a specific code snippet
  const toggleCodeOutput = (lessonKey) => {
    setShowCodeOutput(prevState => ({
      ...prevState,
      [lessonKey]: !prevState[lessonKey],
    }));
  };

  // Function to handle quiz submission
  const handleQuizSubmit = (lessonKey, userAnswer, correctAnswer) => {
    setQuizStates(prevState => ({
      ...prevState,
      [lessonKey]: {
        selectedAnswer: userAnswer,
        isCorrect: userAnswer === correctAnswer,
        showFeedback: true,
      }
    }));
  };

  // Effect to handle sticky navigation
  useEffect(() => {
    if (navRef.current) {
      // Set the initial top offset of the navigation bar once
      setNavOffsetTop(navRef.current.offsetTop);
    }

    const handleScroll = () => {
      // Check if current scroll position is past the navigation's original top offset
      if (window.scrollY > navOffsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navOffsetTop]); // Rerun effect if navOffsetTop changes (e.g., if content above changes height)


  // Data for each interactive lesson category
  const lessonCategories = [
    {
      id: 'html-basics',
      title: 'HTML Basics',
      lessons: [
        {
          key: 'html1',
          type: 'code_snippet',
          subTitle: '1. HTML Document Structure',
          explanation: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically.`,
          code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a basic paragraph.</p>
</body>
</html>`,
          output: `<h1>Welcome to HTML!</h1><p>This is a basic paragraph.</p>`,
        },
        {
          key: 'html2',
          type: 'code_snippet',
          subTitle: '2. HTML Headings and Paragraphs',
          explanation: `HTML headings (h1 to h6) define titles and subtitles, while the <p> tag is used for paragraphs.`,
          code: `<h1>Main Title</h1>
<h2>Subtitle</h2>
<p>This is the first sentence of a paragraph. It provides some general information.</p>
<p>This is another paragraph.</p>`,
          output: `<h1>Main Title</h1><h2>Subtitle</h2><p>This is the first sentence of a paragraph. It provides some general information.</p><p>This is another paragraph.</p>`,
        },
        {
          key: 'html3',
          type: 'code_snippet',
          subTitle: '3. HTML Links and Images',
          explanation: `The <a> tag defines a hyperlink. The <img> tag is used to embed an image in an HTML page.`,
          code: `<a href="https://www.example.com">Visit Example</a>
<br>
<img src="https://placehold.co/150x100/ADD8E6/000000?text=Image" alt="Placeholder Image">`,
          output: `<a href="#" style="color: blue; text-decoration: underline;">Visit Example</a><br><img src="https://placehold.co/150x100/ADD8E6/000000?text=Image" alt="Placeholder Image" style="max-width: 100%; height: auto; margin-top: 10px;">`,
        },
        {
          key: 'html4',
          type: 'code_snippet',
          subTitle: '4. HTML Lists',
          explanation: `HTML offers ordered lists (<ol>) and unordered lists (<ul>) to display content in a structured way.`,
          code: `<h3>My Favorite Fruits:</h3>
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>
<h3>Steps to Success:</h3>
<ol>
    <li>Learn</li>
    <li>Practice</li>
    <li>Build</li>
</ol>`,
          output: `<h3>My Favorite Fruits:</h3><ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul><h3>Steps to Success:</h3><ol><li>Learn</li><li>Practice</li><li>Build</li></ol>`,
        },
        {
          key: 'html5_quiz',
          type: 'true_false',
          subTitle: '5. HTML True/False Quiz',
          question: 'The `<body>` tag is used to define the main content of an HTML document.',
          correctAnswer: true,
        },
      ],
    },
    {
      id: 'css-styling',
      title: 'CSS Styling',
      lessons: [
        {
          key: 'css1',
          type: 'code_snippet',
          subTitle: '1. Basic CSS Syntax',
          explanation: `CSS (Cascading Style Sheets) is used for describing the presentation of a document. It consists of selectors, properties, and values.`,
          code: `p {
    color: blue;
    font-size: 16px;
}`,
          output: `<p style="color: blue; font-size: 16px;">This text is blue and 16px.</p>`,
        },
        {
          key: 'css2',
          type: 'code_snippet',
          subTitle: '2. CSS Selectors (Class & ID)',
          explanation: `CSS selectors are used to "find" (or select) the HTML elements you want to style.`,
          code: `<style>
.my-class {
    background-color: yellow;
}
#my-id {
    border: 2px solid red;
}
</style>
<div class="my-class">I have a yellow background.</div>
<p id="my-id">I have a red border.</p>`,
          output: `<div style="background-color: yellow; padding: 10px; margin-bottom: 10px;">I have a yellow background.</div><p style="border: 2px solid red; padding: 10px;">I have a red border.</p>`,
        },
        {
          key: 'css3',
          type: 'code_snippet',
          subTitle: '3. CSS Box Model (Padding, Margin, Border)',
          explanation: `The CSS box model describes the boxes generated by elements in the document tree and lays out all elements according to their width, height, padding, borders, and margins.`,
          code: `<style>
.box {
    width: 100px;
    height: 100px;
    padding: 20px;
    border: 5px solid green;
    margin: 15px;
    background-color: lightblue;
}
</style>
<div class="box">Box Content</div>`,
          output: `<div style="width: 100px; height: 100px; padding: 20px; border: 5px solid green; margin: 15px; background-color: lightblue; display: inline-block;">Box Content</div>`,
        },
        {
          key: 'css4',
          type: 'code_snippet',
          subTitle: '4. CSS Flexbox Basics',
          explanation: `Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (grow or shrink) to fill the extra space or shrink to fit into smaller spaces.`,
          code: `<style>
.flex-container {
    display: flex;
    justify-content: space-around;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
}
.flex-item {
    background-color: #6a0dad;
    color: white;
    padding: 10px;
    margin: 5px;
    border-radius: 3px;
}
</style>
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
</div>`,
          output: `<div style="display: flex; justify-content: space-around; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
<div style="background-color: #6a0dad; color: white; padding: 10px; margin: 5px; border-radius: 3px;">Item 1</div>
<div style="background-color: #6a0dad; color: white; padding: 10px; margin: 5px; border-radius: 3px;">Item 2</div>
<div style="background-color: #6a0dad; color: white; padding: 10px; margin: 5px; border-radius: 3px;">Item 3</div>
</div>`,
        },
        {
          key: 'css5_quiz',
          type: 'true_false',
          subTitle: '5. CSS True/False Quiz',
          question: 'The `margin` property is used to create space around an element, outside of any defined borders.',
          correctAnswer: true,
        },
      ],
    },
    {
      id: 'javascript-intro',
      title: 'JavaScript Introduction',
      lessons: [
        {
          key: 'js1',
          type: 'code_snippet',
          subTitle: '1. JavaScript Variables and Data Types',
          explanation: `JavaScript is a programming language that enables interactive web pages. Variables are containers for storing data values.`,
          code: `let message = "Hello World";
const PI = 3.14;
let isLearning = true;
let score = 100;

console.log(typeof message); // string
console.log(typeof PI);      // number
console.log(typeof isLearning); // boolean`,
          output: `<p>Check console for output: string, number, boolean</p>`,
        },
        {
          key: 'js2',
          type: 'code_snippet',
          subTitle: '2. JavaScript Operators',
          explanation: `Operators perform operations on values and variables. Common types include arithmetic, assignment, comparison, and logical operators.`,
          code: `let x = 5;
let y = 2;
console.log(x + y); // Addition
console.log(x * y); // Multiplication
console.log(x === 5); // Strict equality
console.log(x > y && y < 10); // Logical AND`,
          output: `<p>Check console for output: 7, 10, true, true</p>`,
        },
        {
          key: 'js3',
          type: 'code_snippet',
          subTitle: '3. JavaScript Functions',
          explanation: `A JavaScript function is a block of code designed to perform a particular task.`,
          code: `function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result); // 20`,
          output: `<p>Check console for output: 20</p>`,
        },
        {
          key: 'js4',
          type: 'code_snippet',
          subTitle: '4. JavaScript Conditionals (if/else)',
          explanation: `Conditional statements allow you to perform different actions based on different conditions.`,
          code: `let temperature = 25;
if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 20) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
}`,
          output: `<p>Check console for output: "It's warm."</p>`,
        },
        {
          key: 'js5_quiz',
          type: 'true_false',
          subTitle: '5. JavaScript True/False Quiz',
          question: 'JavaScript is primarily used for server-side programming, not for client-side web browser interaction.',
          correctAnswer: false,
        },
      ],
    },
  ];

  return (
    // Main container for the Learn page, consistent with Home.jsx light theme
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter pt-16"> {/* pt-16 for navbar spacing */}
      <Navbar activePage="Learn" /> {/* Highlight 'Learn' in the Navbar */}

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-700 mb-12">
          Interactive Lessons
        </h1>

        {/* Section Navigation Links - Made sticky */}
        <nav
          ref={navRef} // Attach the ref
          className={`mb-12 flex justify-center space-x-6 p-4 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out
            ${isSticky ? 'fixed top-16 w-full z-40' : 'relative'}`} // Apply fixed positioning when sticky. top-16 to sit below main Navbar
          style={isSticky ? { left: '0', right: '0' } : {}} // Ensure full width and correct positioning when fixed
        >
          {lessonCategories.map(category => (
            <a 
              key={category.id} 
              href={`#${category.id}`} 
              className="text-indigo-600 hover:text-indigo-800 font-semibold text-lg transition-colors duration-200"
              onClick={() => {
                // Smooth scroll to the target section when link is clicked
                document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {category.title}
            </a>
          ))}
        </nav>
        {/* Placeholder div to prevent content from jumping when nav becomes sticky */}
        {isSticky && (
          <div style={{ height: navRef.current ? navRef.current.offsetHeight : 'auto' }} className="mb-12"></div>
        )}

        <div className="space-y-16">
          {lessonCategories.map(category => (
            <div key={category.id} id={category.id} className="pt-8"> {/* pt-8 to offset fixed navbar */}
              <h2 className="text-4xl sm:text-5xl font-bold text-center text-indigo-700 mb-10 border-b-2 border-indigo-200 pb-4">
                {category.title}
              </h2>
              <div className="space-y-12">
                {category.lessons.map(lesson => (
                  <section key={lesson.key} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">{lesson.subTitle}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{lesson.explanation}</p>

                    {lesson.type === 'code_snippet' && (
                      <>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Code Snippet:</h4>
                        <pre className="bg-gray-800 text-white rounded-md p-4 overflow-x-auto text-sm md:text-base">
                          <code>{lesson.code}</code>
                        </pre>

                        <button
                          onClick={() => toggleCodeOutput(lesson.key)}
                          className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                        >
                          {showCodeOutput[lesson.key] ? 'Hide Output' : 'Show Output'}
                        </button>

                        {showCodeOutput[lesson.key] && (
                          <div className="mt-6 p-4 bg-blue-50 text-gray-800 border border-blue-200 rounded-md shadow-inner transition-all duration-300 ease-in-out transform scale-y-100 origin-top">
                            <h4 className="text-xl font-semibold mb-2 text-blue-700">Expected Output:</h4>
                            {/* Dangerously set inner HTML for actual HTML/CSS/JS output simulation */}
                            <div dangerouslySetInnerHTML={{ __html: lesson.output }} />
                          </div>
                        )}
                      </>
                    )}

                    {lesson.type === 'true_false' && (
                      <div className="mt-6">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Quiz: {lesson.question}</h4>
                        <div className="flex items-center space-x-4 mb-4">
                          {/* Use regular buttons for True/False options */}
                          <button
                            onClick={() => setQuizStates(prevState => ({ ...prevState, [lesson.key]: { ...prevState[lesson.key], selectedAnswer: true, showFeedback: false } }))}
                            className={`px-5 py-2 rounded-full font-medium transition duration-200
                              ${quizStates[lesson.key]?.selectedAnswer === true ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                          >
                            True
                          </button>
                          <button
                            onClick={() => setQuizStates(prevState => ({ ...prevState, [lesson.key]: { ...prevState[lesson.key], selectedAnswer: false, showFeedback: false } }))}
                            className={`px-5 py-2 rounded-full font-medium transition duration-200
                              ${quizStates[lesson.key]?.selectedAnswer === false ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                          >
                            False
                          </button>
                        </div>
                        <button
                          onClick={() => handleQuizSubmit(lesson.key, quizStates[lesson.key]?.selectedAnswer, lesson.correctAnswer)}
                          disabled={typeof quizStates[lesson.key]?.selectedAnswer === 'undefined'} // Disable if no answer selected
                          className={`px-6 py-3 font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300
                            ${typeof quizStates[lesson.key]?.selectedAnswer === 'undefined' ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
                        >
                          Submit Answer
                        </button>

                        {quizStates[lesson.key]?.showFeedback && (
                          <div className={`mt-4 p-3 rounded-md text-sm font-medium ${quizStates[lesson.key]?.isCorrect ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}>
                            {quizStates[lesson.key]?.isCorrect ? 'Correct! Well done.' : 'Incorrect. Try again!'}
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Copied from Home.jsx */}
      <footer className="py-8 px-4 sm:px-8 bg-gray-200 text-gray-800 text-center text-sm rounded-t-lg shadow-inner mt-16">
        <p>Copyright © 2025 . E-learning Platform</p>
      </footer>
    </div>
  );
};

export default Learn;

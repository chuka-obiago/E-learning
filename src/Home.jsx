import React from 'react';
import { Lightbulb, Code, Rocket, Users } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; 
import HomeImage from './assets/images/home1.png'; 

// Main Home component
const App = () => {
  // Function to handle smooth scrolling to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-inter">
        
      <Navbar activePage="Home"/>

      {/* Hero Section  */}
      <section id="hero" className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 sm:p-8 rounded-b-lg shadow-xl">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center py-8">
                <img 
                    src={HomeImage} 
                    alt="E-learn Hero" 
                    className="w-[300px] h-auto object-contain"
                />
            </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            E-learning Platform
          </h1>
          {/* Hero Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
            Your journey into programming starts here. Learn how to build real solutions.
          </p>
          {/* Start Learning Button */}
          <button
            onClick={() => scrollToSection('modules-preview')}
            className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-zoom-in"
          >
            Start Learning
          </button>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-16 px-4 sm:px-8 bg-gray-100 rounded-lg mx-auto my-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-700">
          Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Objective 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <Lightbulb className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simplify Learning</h3>
            <p className="text-gray-700">
              Break down complex concepts into easy-to-understand lessons for beginners.
            </p>
          </div>
          {/* Objective 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <Code className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Build Core Skills</h3>
            <p className="text-gray-700">
              Equip students with fundamental HTML, CSS, and JavaScript knowledge.
            </p>
          </div>
          {/* Objective 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <Rocket className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Foster Practical Application</h3>
            <p className="text-gray-700">
              Encourage hands-on coding and project-based learning.
            </p>
          </div>
          {/* Objective 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <Users className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support Growth</h3>
            <p className="text-gray-700">
              Provide a supportive environment for aspiring developers.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Modules Preview */}
      <section id="modules-preview" className="py-16 px-4 sm:px-8 bg-gray-50 mx-auto my-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-700">
          Our Learning Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* HTML Basics Card - Updated to use Link and point to /learn#html-basics */}
          <article className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">HTML Basics</h3>
            <p className="text-gray-700 mb-6">
              Learn the foundational language for building web pages. Understand structure and elements.
            </p>
            <Link to="/learn#html-basics" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300 ease-in-out shadow-md">
              Learn More
            </Link>
          </article>
          {/* CSS Styling Card */}
          <article className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-green-600">CSS Styling</h3>
            <p className="text-gray-700 mb-6">
              Style your web pages beautifully. Master layouts, colors, and responsive design.
            </p>
            {/* Keeping as a simple link for now, could also be updated to a specific section */}
            <Link to="/learn#css-styling" className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300 ease-in-out shadow-md">
              Learn More
            </Link>
          </article>
          {/* JavaScript Intro Card */}
          <article className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-yellow-600">JavaScript Intro</h3>
            <p className="text-gray-700 mb-6">
              Add interactivity to your websites. Dive into the world of dynamic web applications.
            </p>
            {/* Keeping as a simple link for now, could also be updated to a specific section */}
            <Link to="/learn#javascript-intro" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out shadow-md">
              Learn More
            </Link>
          </article>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-8 bg-gray-100 rounded-lg mx-auto my-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-indigo-700">
          About this E-learning Platform
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          This platform is designed to be your ultimate starting point in programming with web development. Offering clear, practical lessons on HTML, CSS, and JavaScript, helping you build a strong foundation and the confidence to create your own projects. This project aims to make learning code simple, accessible, and enjoyable for everyone.
        </p>
      </section>

      {/* Footer  */}
      <footer className="py-8 px-4 sm:px-8 bg-gray-200 text-gray-800 text-center text-sm rounded-t-lg shadow-inner">
        <p> © 2025 . E-learning Platform</p>
      </footer>

      {/* Tailwind CSS keyframes for animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.3s;
        }
        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out forwards;
          animation-delay: 0.6s;
        }
      `}</style>
    </main>
  );
};

export default App;

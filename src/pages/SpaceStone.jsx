import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import CaptainAmerica from '../Images/CaptainAmerica.png';
import Nagavishnu from "../assets/Nagavishnu Karthik.jpg";
import { Mail as LucideMail, Phone, MapPin, Linkedin, GraduationCap } from 'lucide-react';
import VishnuPDF from '../assets/Vishnu Resume (2).pdf';

export default function SpaceStone() {
  const navigate = useNavigate();
  const [showHero, setShowHero] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);

  const messages = [
    "I am Captain America, assigned by my master to introduce the Space Stone.",
    "The Space Stone represents your journey through space and time—your experiences and growth.",
    "Let me guide you through your professional profile and story!"
  ];

  useEffect(() => {
    const sequence = async () => {
      setShowHero(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      for (let i = 0; i < messages.length; i++) {
        setMessageIndex(i);
        setShowMessage(true);
        await new Promise(resolve => setTimeout(resolve, 4000));
        setShowMessage(false);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      setShowHero(false);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setContentVisible(true);
      sessionStorage.setItem('spaceStoneIntroShown', 'true');
    };
    sequence();

    // Prevent right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Prevent keyboard shortcuts
    const handleKeyDown = (e) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
      }
    };

    // Prevent dev tools through console
    const preventDevTools = () => {
      const devtools = /./;
      devtools.toString = function() {
        this.opened = true;
      }
      console.log('%c', devtools);
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('devtoolschange', preventDevTools);
    preventDevTools();

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('devtoolschange', preventDevTools);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>NVK | Profile</title>
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@700&display=swap" rel="stylesheet" />
        <style>
          {`
            @font-face {
              font-family: 'NikoPol';
              src: url('/fonts/NikoPol.ttf') format('truetype');
            }
          `}
        </style>
      </Helmet>
      <div className="min-h-screen w-full bg-gradient-to-tr from-[#0a1837] via-[#0a2347] to-[#1c2e4a] flex flex-col items-center justify-center text-white px-0 relative overflow-hidden">
        {/* Cosmic Captain America Background */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-700/40 to-blue-800/60" />
          <div className="absolute inset-0 bg-stars bg-repeat opacity-60" />
        </div>
        {/* Animated Red, White, Blue Glows */}
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-white rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        {/* Captain America Shield Overlay with Centered Silver Star */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20 blur-[18px]" style={{ opacity: 0.32 }}> 
          <svg
            className="animate-spin-slow"
            width="440" height="440" viewBox="0 0 440 440" fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Dark Red Ring */}
            <circle cx="220" cy="220" r="210" fill="#7a0717" fillOpacity="0.42" />
            {/* Pure White Ring */}
            <circle cx="220" cy="220" r="170" fill="#fff" fillOpacity="0.18" />
            {/* Inner Dark Red Ring */}
            <circle cx="220" cy="220" r="130" fill="#7a0717" fillOpacity="0.42" />
            {/* Blue Center */}
            <circle cx="220" cy="220" r="90" fill="#2563eb" fillOpacity="0.22" />
            {/* Metallic Silver Star */}
            <polygon
              points="220,145 236,200 295,200 245,230 260,285 220,250 180,285 195,230 145,200 204,200"
              fill="url(#silverGradient)" stroke="#c0c0c0" strokeWidth="2" opacity="0.22"
            />
            <defs>
              <linearGradient id="silverGradient" x1="220" y1="145" x2="220" y2="285" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f5f6fa" />
                <stop offset="0.5" stopColor="#c0c0c0" />
                <stop offset="1" stopColor="#a0a0a0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Captain America Character */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-50 pointer-events-none ${
          showHero ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <img 
            src={CaptainAmerica} 
            alt="Captain America" 
            className="w-[500px] h-[500px] object-contain animate-float"
          />
        </div>

        {/* Hero Message */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900/90 p-8 rounded-xl border-4 border-blue-500/50 transition-all duration-500 z-50 backdrop-blur-sm pointer-events-none w-full max-w-5xl ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-3xl md:text-4xl text-white text-center font-bold drop-shadow-lg" 
             style={{ 
               fontFamily: "'Comic Neue', cursive",
               letterSpacing: '2px',
               textShadow: '2px 2px 0 #1e40af, 4px 4px 0 #1d4ed8, 0 0 20px rgba(59, 130, 246, 0.5)'
             }}>
            {messages[messageIndex]}
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="fixed top-4 left-4 bg-blue-900/80 hover:bg-blue-800/80 text-white px-4 py-2 rounded-lg border-2 border-blue-500/50 transition-all duration-300 z-50 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Dashboard</span>
        </button>

        {/* Profile Content - Landscape Layout */}
        <div className={`relative z-10 w-full max-w-6xl mx-auto transition-all duration-1000 mt-16 md:mt-20 pb-16 md:pb-24 ${
          showHero ? 'blur-md' : ''
        } ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row gap-8 md:items-center w-full justify-center">
            {/* Profile Card */}
            <div className="bg-blue-900/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl flex flex-col items-center w-full md:w-auto mx-auto self-center">
              <div className="relative mb-4 flex justify-center items-center w-full">
                <img src={Nagavishnu} alt="Nagavishnu Karthik B S" className="w-28 aspect-[3/4] rounded-xl border-4 border-blue-400 shadow-lg object-cover mx-auto bg-white" style={{objectPosition:'center top'}} />
              </div>
              <h2 className="text-white text-xl md:text-2xl text-center mb-2 truncate whitespace-nowrap" style={{fontFamily: "'Bangers', Impact, 'Comic Sans MS', cursive, sans-serif", letterSpacing: '2.5px'}}>
Nagavishnu Karthik B S
</h2>
              <div className="flex flex-col gap-3 w-full mt-2 text-[15px]">
                <div className="flex items-center gap-2 text-blue-100">
                  <LucideMail size={18} className="text-blue-300" />
                  <span className="font-semibold text-blue-200">Email:</span>
                  <a href="mailto:nagavishnukarthikbs@gmail.com" className="no-underline hover:text-blue-400">nagavishnukarthikbs@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Phone size={18} className="text-blue-300" />
                  <span className="font-semibold text-blue-200">Phone:</span>
                  <a href="tel:+919600338213" className="no-underline hover:text-blue-400">+91 96003 38213</a>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin size={18} className="text-blue-300" />
                  <span className="font-semibold text-blue-200">Location:</span>
                  <span>Villapuram, Madurai</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Linkedin size={18} className="text-blue-300" />
                  <span className="font-semibold text-blue-200">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/naga-vishnu-karthik-b-s/" className="no-underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">linkedin.com/in/naga-vishnu-karthik-b-s/</a>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <GraduationCap size={18} className="text-blue-300" />
                  <span className="font-semibold text-blue-200">Status:</span>
                  <span>Student</span>
                </div>
                <hr className="my-3 border-blue-700/50" />
                <div className="flex items-center gap-2 text-blue-100 justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-file-text text-blue-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                  <a href={VishnuPDF} download className="no-underline hover:text-blue-400 font-semibold">Download Resume</a>
                </div>
              </div>
            </div>

            {/* About Card */}
            <div className="flex-1 bg-blue-900/70 backdrop-blur-md rounded-xl p-8 shadow-2xl flex flex-col justify-center min-w-0">
              <h3 className="text-2xl md:text-3xl mb-4 text-white font-bold" style={{fontFamily: "'Bangers', Impact, 'Comic Sans MS', cursive, sans-serif", letterSpacing: '2.5px'}}>About Me</h3>
              <p className="text-white mb-6 leading-relaxed">
                Hi, I'm Nagavishnu Karthik B S — a passionate Full Stack Developer and UI Designer, driven by the art of building seamless, impactful digital experiences.<br/><br/>
                Much like the Space Stone, which bends space and enables instant travel, I move fluidly across technologies — from front-end finesse to back-end strength — turning ideas into interactive, meaningful realities.<br/><br/>
                My mission? To craft digital solutions that not only look great but also solve real-world problems with style and efficiency.
              </p>
              <h4 className="text-xl md:text-2xl mb-3 text-white font-bold" style={{fontFamily: "'Bangers', Impact, 'Comic Sans MS', cursive, sans-serif", letterSpacing: '2.5px'}}>My Professional Journey</h4>
              <p className="text-blue-100 leading-relaxed">
                With a strong foundation as a Full Stack Developer and UI Designer, I've journeyed through every layer of the development stack. From crafting intuitive user interfaces to building scalable backend systems, I bring both creativity and logic to the table.<br/><br/>
                Like traversing dimensions with precision, I've handled database structuring, API integrations, and deployment workflows — all while ensuring smooth, impactful digital experiences.<br/><br/>
                Explore the other Infinity Stones to uncover my projects, skillsets, and how we can collaborate!
              </p>
            </div>
          </div>

          {/* Resume Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Left Column */}
            <div className="space-y-8">
              <section className="bg-blue-800/50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Bangers', Impact, 'Comic Sans MS', cursive, sans-serif", letterSpacing: '2.5px' }}>Education</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="text-xl font-semibold text-white">St. Mary's Higher Secondary School</h3>
                    <p className="text-blue-200">6th - 12th</p>
                    <p className="text-blue-300">2016 - 2023</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="text-xl font-semibold text-white">Velammal College of Engineering and Technology</h3>
                    <p className="text-blue-200">B.E. (CSE)</p>
                    <p className="text-blue-300">2023 - Ongoing</p>
                  </div>
                </div>
              </section>

              <section className="bg-blue-800/50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Bangers', Impact, 'Comic Sans MS', cursive, sans-serif", letterSpacing: '2.5px' }}>Projects</h2>
                <ul className="list-disc list-inside text-blue-100 space-y-2">
                  <li>
                    <span className="font-semibold text-white">Student Attendance:</span> Java-based app for managing class attendance with period-wise tracking and database integration.
                  </li>
                  <li>
                    <span className="font-semibold text-white">ForkFinder:</span> Neon-themed restaurant finder using HTML, CSS, and JavaScript with interactive UI and icon-based filters.
                  </li>
                  <li>
                    <span className="font-semibold text-white">VCET Attendo:</span> Web app for VCET attendance tracking using localStorage and real-time absence logging.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Quoteify:</span> React-based quote generator fetching dynamic quotes with smooth transitions and clean UI.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Marvel Portfolio:</span> A dynamic, Marvel-themed portfolio site built with React and Tailwind CSS featuring smooth animations and responsive design.
                  </li>
                </ul>
              </section>


            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <section className="bg-blue-800/50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Bangers', Impact, 'Comic Sans MS', cursive, sans-serif", letterSpacing: '2.5px' }}>Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">HTML5</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">CSS3</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">Javascript</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">React Js</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">Tailwind CSS</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">MongoDB</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">API</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">Figma</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-lg text-white font-semibold">Node JS</span>
                </div>
              </section>

              <section className="bg-blue-800/50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Bangers', Impact, 'Comic Sans MS', cursive, sans-serif", letterSpacing: '2.5px' }}>Certifications</h2>
                <ul className="list-disc list-inside text-blue-100 space-y-2">
                  <li>Introduction to C Programming - NPTEL</li>
                  <li>Introduction to Structured Query Language - Coursera</li>
                  <li>Introduction to MongoDB - MongoDB University</li>
                  <li>Fundamentals of Java Programming - Coursera</li>
                  <li>Frontend for Java Full Stack Development - Coursera</li>
                  <li>Software Testing - NPTEL</li>
                  <li>Cloud Computing Internship at NSIC</li>
                  <li>React Basics - Coursera(Meta)</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes text-glow {
          0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
          50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
          100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
        }

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        @keyframes spin-slow { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
        
        .animate-spin-slow { 
          animation: spin-slow 24s linear infinite; 
        }
      `}</style>
    </>
  );
} 
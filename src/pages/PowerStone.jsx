import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import realLightning from '../assets/real_lightning.svg';
import Thor from '../Images/Thor.png';

function BackToDashboard() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 bg-purple-900/80 hover:bg-fuchsia-900/80 text-white px-4 py-2 rounded-lg border-2 border-purple-500/50 transition-all duration-300 z-50 flex items-center space-x-2"
    >
      <span>←</span>
      <span>Back to Dashboard</span>
    </button>
  );
}

export default function PowerStone() {
  const [showHero, setShowHero] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);

  const messages = [
    "I am Thor, God of Thunder, assigned by my master to introduce the Power Stone.",
    "The Power Stone represents unmatched strength, potential, and technical prowess.",
    "Let me guide you through the skills and powers it reveals!"
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
      sessionStorage.setItem('powerStoneIntroShown', 'true');
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

  // --- Data for new design ---
  const frontendSkills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 77 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 85 },
    { name: "Tailwind CSS", level: 65 }
  ];
  const backendSkills = [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 0 },
    { name: "Python", level: 75 },
    { name: "Django", level: 0 },
    { name: "RESTful APIs", level: 85 }
  ];
  const dbSkills = [
    { name: "MongoDB", level: 82 },
    { name: "PostgreSQL", level: 0 },
    { name: "Firebase", level: 10 },
    { name: "AWS", level: 20 },
    { name: "Docker", level: 0 }
  ];
  const tools = [
    "Git", "GitHub", "VS Code", "Figma", "Adobe Photoshop", "GraphQL", "NPM", "Netlify", "Vercel"
  ];
  const powers = [
    "Full-stack application architecture and development",
    "Responsive and accessible web design implementation",
    "Performance optimization and debugging",
    "API design and integration",
    "Database modeling and optimization"
  ];

  return (
    <>
      <Helmet>
        <title>NVK | Skills</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
        <style>
          {`
            @font-face {
              font-family: 'NikoPol';
              src: url('/fonts/NikoPol.ttf') format('truetype');
            }
          `}
        </style>
      </Helmet>
      <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white px-0 relative overflow-hidden">
        {/* Realistic Lightning SVG Background */}
        <img src={realLightning} alt="lightning" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none animate-lightning-flicker" draggable="false" />
        {/* Starfield overlay */}
        <div className="absolute inset-0 bg-stars bg-repeat opacity-60 z-0" />

        {/* Thor Character Floating Overlay */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-50 pointer-events-none ${
          showHero ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <img
            src={Thor}
            alt="Thor"
            className="w-[500px] h-[500px] object-contain animate-float"
            style={{filter:'drop-shadow(0 8px 32px #a78bfa)'}}
          />
        </div>

        {/* Hero Message Overlay */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-900/90 p-8 rounded-xl border-4 border-purple-500/50 transition-all duration-500 z-50 backdrop-blur-sm pointer-events-none w-full max-w-5xl ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-3xl md:text-4xl text-white text-center font-bold drop-shadow-lg" 
             style={{ 
               fontFamily: "'Permanent Marker', cursive",
               letterSpacing: '2px',
               textShadow: '0 0 10px #a855f7, 0 0 20px #7e22ce, 0 0 30px #6b21a8',
               transform: 'rotate(-1deg)'
             }}>
            {messages[messageIndex]}
          </p>
        </div>

        {/* Back to Dashboard Button */}
        <BackToDashboard /> <br></br>

        {/* Main Content (blurred when hero active, fade/slide in) */}
        {contentVisible && (
          <>
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-20 transition-all duration-1000">
              {/* Frontend */}
              <div className="bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-slate-900/90 backdrop-blur-md rounded-2xl p-7 shadow-2xl border border-purple-700/50">
                <h3 className="text-2xl font-bold mb-4 text-purple-200 tracking-wide">Frontend Development</h3>
                <div className="space-y-5">
                  {frontendSkills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-purple-100 font-medium">{skill.name}</span>
                        <span className="text-purple-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-purple-950/50 overflow-hidden">
                        <div className="h-2 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 shadow-lg animate-progress-glow" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Backend */}
              <div className="bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-slate-900/90 backdrop-blur-md rounded-2xl p-7 shadow-2xl border border-purple-700/50">
                <h3 className="text-2xl font-bold mb-4 text-purple-200 tracking-wide">Backend Development</h3>
                <div className="space-y-5">
                  {backendSkills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-purple-100 font-medium">{skill.name}</span>
                        <span className="text-purple-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-purple-950/50 overflow-hidden">
                        <div className="h-2 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 shadow-lg animate-progress-glow" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Database & Cloud */}
              <div className="bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-slate-900/90 backdrop-blur-md rounded-2xl p-7 shadow-2xl border border-purple-700/50">
                <h3 className="text-2xl font-bold mb-4 text-purple-200 tracking-wide">Database & Cloud</h3>
                <div className="space-y-5">
                  {dbSkills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-purple-100 font-medium">{skill.name}</span>
                        <span className="text-purple-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-purple-950/50 overflow-hidden">
                        <div className="h-2 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 shadow-lg animate-progress-glow" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Tools & Professional Powers */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-16 mt-20 transition-all duration-1000">
              {/* Tools & Technologies */}
              <div className="bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-slate-900/90 backdrop-blur-md rounded-2xl p-7 shadow-2xl border border-purple-700/50">
                <h3 className="text-2xl font-bold mb-6 text-purple-200 tracking-wide">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, i) => (
                    <span key={i} className="px-4 py-1 bg-purple-800/60 text-purple-200 font-semibold rounded-full shadow-md text-sm border border-purple-600/40 hover:bg-fuchsia-700/70 transition-all cursor-default select-none">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {/* Professional Powers */}
              <div className="bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-slate-900/90 backdrop-blur-md rounded-2xl p-7 shadow-2xl border border-purple-700/50">
                <h3 className="text-2xl font-bold mb-6 text-purple-200 tracking-wide">Professional Powers</h3>
                <ul className="space-y-4">
                  {powers.map((power, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-400 to-blue-400 shadow-lg animate-pulse" />
                      <span className="text-purple-100 text-base font-medium">{power}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Custom Styles for Glow/Animation */}
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
            0% { text-shadow: 0 0 10px #a78bfa, 0 0 20px #818cf8; }
            50% { text-shadow: 0 0 40px #a78bfa, 0 0 80px #818cf8; }
            100% { text-shadow: 0 0 10px #a78bfa, 0 0 20px #818cf8; }
          }
          .animate-text-glow {
            animation: text-glow 3s ease-in-out infinite;
          }
          @keyframes progress-glow {
            0%,100% { box-shadow: 0 0 8px 2px #a78bfa44, 0 0 16px 4px #818cf855; }
            50% { box-shadow: 0 0 24px 8px #a78bfa88, 0 0 40px 16px #818cf8bb; }
          }
          .animate-progress-glow {
            animation: progress-glow 2s ease-in-out infinite;
          }
          @keyframes lightning-flicker {
            0%, 100% { opacity: 0.7; filter: brightness(1.2); }
            10% { opacity: 1; filter: brightness(2); }
            20% { opacity: 0.6; filter: brightness(1.1); }
            30% { opacity: 1; filter: brightness(2.2); }
            40% { opacity: 0.8; filter: brightness(1.4); }
            50% { opacity: 1; filter: brightness(2.5); }
            60% { opacity: 0.6; filter: brightness(1.1); }
            70% { opacity: 1; filter: brightness(2); }
            80% { opacity: 0.7; filter: brightness(1.2); }
            90% { opacity: 1; filter: brightness(2.3); }
          }
          .animate-lightning-flicker { animation: lightning-flicker 2.2s infinite; }
          .animate-lightning-flicker2 { animation: lightning-flicker 2.7s infinite 0.7s; }
          .animate-lightning-flicker3 { animation: lightning-flicker 1.9s infinite 1.1s; }
        `}</style>
      </div>
    </>
  );
}
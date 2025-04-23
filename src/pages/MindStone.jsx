import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import IronMan from '../Images/IronMan.png';
import ArcReactor from '../Images/ArcReactor.png';
import VishnuC from '../Certificates/Vishnu C.jpg';
import VishnuSQL from '../Certificates/Vishnu SQL.jpg';
import VishnuMongoDB from '../Certificates/Vishnu MongoDB.jpg';
import VishnuJava from '../Certificates/Vishnu Java.jpg';
import VishnuFrontend from '../Certificates/Vishnu Frontend.jpg';
import VishnuTesting from '../Certificates/Vishnu Software Testing.jpg';
import VishnuIntern from '../Certificates/Vishnu Intern.jpg';
import VishnuReact from '../Certificates/Vishnu React.jpg';


function BackToDashboard() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 bg-yellow-900/80 hover:bg-yellow-700/80 text-yellow-100 px-4 py-2 rounded-lg border-2 border-yellow-400/50 transition-all duration-300 z-50 flex items-center space-x-2 shadow-lg backdrop-blur-md"
    >
      <span>←</span>
      <span>Back to Dashboard</span>
    </button>
  );
}

export default function MindStone() {
  const [showHero, setShowHero] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);

  const messages = [
    "I am Iron Man. You know, I once wielded all six stones... and yet we lost it.",
    "But today, I'm here to celebrate your achievements. Each certification is like a piece of armor in your journey.",
    "Let's see what makes you extraordinary. After all, part of the journey is the end... but this is just your beginning!"
  ];

  const certifications = [
    {
      title: "Introduction to C Programming",
      issuer: "NPTEL",
      date: "May 2024",
      description: "Developed a strong foundation in C programming, mastering core concepts, control structures, and problem-solving techniques.",
      image: VishnuC
    },
    {
      title: "Introduction to Structured Query Language",
      issuer: "Coursera",
      date: "August 2023",
      description: "Acquired essential skills in SQL for querying, updating, and managing relational databases through hands-on labs.",
      image: VishnuSQL 
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB University",
      date: "June 2024",
      description: "Learned practical NoSQL database operations, document modeling, and aggregation with MongoDB.",
      image: VishnuMongoDB
    },
    {
      title: "Fundamentals of Java Programming",
      issuer: "Coursera",
      date: "September 2024",
      description: "Built a solid understanding of Java syntax, OOP principles, and application development fundamentals.",
      image: VishnuJava
    },
    {
      title: "Frontend for Java Full Stack Development",
      issuer: "Coursera",
      date: "October 2024",
      description: "Explored modern frontend technologies and frameworks as part of a Java full stack specialization.",
      image: VishnuFrontend
    },
    {
      title: "Software Testing",
      issuer: "NPTEL",
      date: "November 2024",
      description: "Covered essential software testing methodologies, tools, and best practices for quality assurance.",
      image: VishnuTesting
    },
    {
      title: "Internship on Cloud Computing",
      issuer: "NSIC",
      date: "December 2024",
      description: "Completed a hands-on internship focused on cloud computing concepts, infrastructure, and deployment.",
      image: VishnuIntern
    },
    {
      title: "React Basics",
      issuer: "Coursera (Meta)",
      date: "February 2025",
      description: "Gained foundational knowledge of React, including components, state management, and modern UI development.",
      image: VishnuReact
    }
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
        <title>NVK | Certifications</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
        <style>
          {`
            @font-face {
              font-family: 'NikoPol';
              src: url('/fonts/NikoPol.ttf') format('truetype');
            }
          `}
        </style>
      </Helmet>
      {/* Animated Background */}
      <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white px-0 relative overflow-hidden">
        {/* Blur overlay when Iron Man is talking or message is showing */}
        {/* Always-on glassy blur and arc-reactor color glow - only background, not content */}
        <div className="pointer-events-none absolute inset-0 z-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full backdrop-blur-[24px] bg-gradient-to-br from-blue-900/70 via-cyan-900/50 to-yellow-900/70 opacity-95 transition-all duration-700" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-800/40 via-orange-700/30 via-60% to-yellow-200/20 blur-3xl opacity-80" />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        </div>
         {/* Arc Reactor Background with Image */}
         <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
           {/* Base Arc Reactor Image */}
           <div className="relative w-[800px] h-[800px]">
             <img 
               src={ArcReactor}
               alt="Arc Reactor"
               className="w-full h-full object-contain"
             />
             
             {/* Electric Arcs Container */}
             <div className="absolute inset-0 flex items-center justify-center">
               {/* Inner Electric Arcs */}
               {[...Array(8)].map((_, i) => (
                 <div
                   key={`inner-${i}`}
                   className="absolute w-[400px] h-1"
                   style={{
                     transform: `rotate(${i * 45}deg)`,
                   }}
                 >
                   <div 
                     className="w-full h-full bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 
                              animate-electric-pulse blur-[2px]"
                     style={{
                       animationDelay: `${i * 0.15}s`,
                     }}
                   />
                 </div>
               ))}
               
               {/* Outer Lightning Bolts */}
               {[...Array(6)].map((_, i) => (
                 <div
                   key={`outer-${i}`}
                   className="absolute w-[600px] h-[2px]"
                   style={{
                     transform: `rotate(${i * 60}deg)`,
                   }}
                 >
                   <div 
                     className="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent 
                              opacity-0 animate-lightning blur-sm"
                     style={{
                       animationDelay: `${i * 0.5}s`,
                     }}
                   />
                 </div>
               ))}
             </div>

             {/* Glow Effect */}
             <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-glow-pulse"></div>
           </div>
         </div>

        {/* Overlay for better content visibility */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-900/85 pointer-events-none"></div>

        {/* Starfield overlay */}
        <div className="absolute inset-0 bg-stars bg-repeat opacity-60 z-0" />
        
        {/* Gradient overlays for depth */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/60 via-yellow-800/40 to-gray-900/60" />
        </div>

        {/* Back to Dashboard Button */}
        <BackToDashboard />

        {/* Iron Man Character Floating Overlay */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-50 pointer-events-none ${
          showHero ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <img
            src={IronMan}
            alt="Iron Man"
            className="w-[420px] h-[420px] object-contain animate-float"
            style={{filter:'drop-shadow(0 8px 32px #ffd700)'}}
          />
        </div>

        {/* Hero Message Overlay */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-900/90 p-8 rounded-xl border-4 border-red-500/50 transition-all duration-500 z-50 backdrop-blur-sm pointer-events-none w-full max-w-5xl ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-3xl md:text-4xl text-white text-center font-bold drop-shadow-lg" 
             style={{ 
               fontFamily: "'Orbitron', sans-serif",
               letterSpacing: '2px',
               textShadow: '0 0 10px #ef4444, 0 0 20px #dc2626, 0 0 30px #b91c1c',
             }}>
            {messages[messageIndex]}
          </p>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-24 flex flex-col items-center gap-8">
          {/* Certifications Section - appears only after intro/hero message */}
          {contentVisible && (
            <section className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-8 animate-fadein-slow">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 tracking-wide text-center drop-shadow animate-fadein-slow">Professional Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-yellow-700/90 via-orange-500/70 via-70% to-yellow-100/20 rounded-xl p-6 shadow-2xl border-2 border-yellow-400/40 flex flex-col gap-2 backdrop-blur-2xl hover:shadow-[0_0_42px_8px_rgba(255,215,0,0.16)] transition-all duration-300 group relative overflow-hidden">
                    {/* Extra glowing border for the card */}
                    <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-yellow-300/50 blur-[2px] opacity-60 group-hover:opacity-90 transition-all duration-300" />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-yellow-200/5 via-transparent to-yellow-400/5 opacity-60 group-hover:opacity-80 transition-all duration-300" />
                    {cert.image && (
                      <div className="relative">
                        <img
                          src={cert.image}
                          alt={cert.title + ' Certificate'}
                          className="w-full max-h-36 object-contain mb-2 rounded-md border-2 border-yellow-400 shadow-lg bg-black/20 group-hover:scale-[1.02] transition-transform duration-300"
                          style={{ background: 'linear-gradient(90deg,#fff2 60%,#ffd70011 100%)' }}
                        />
                        <button
                          onClick={() => window.open(cert.image, '_blank')}
                          className="absolute top-2 right-2 p-2 bg-yellow-900/90 hover:bg-yellow-800/90 rounded-full transition-all duration-300 group-hover:scale-110 group"
                          title="View certificate in new tab"
                        >
                          <ExternalLink className="w-4 h-4 text-yellow-200 group-hover:text-yellow-100 transition-colors" />
                        </button>
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-yellow-200 mb-1 group-hover:text-yellow-100 transition-colors">{cert.title}</h3>
                    <div className="flex items-center text-yellow-100 text-sm mb-2">
                      <span className="mr-2">{cert.issuer}</span>
                      <span className="mx-2 text-yellow-400">•</span>
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-yellow-50 text-sm opacity-90 group-hover:opacity-100 transition-opacity">{cert.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Spacing - Responsive */}
          {contentVisible && (
            <div className="w-full py-16 md:py-24 lg:py-32" aria-hidden="true" />
          )}
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(-10px); }
            50% { transform: translateY(10px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-fadein-slow {
            animation: fadein-slow 1.2s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes fadein-slow {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes electric-pulse {
            0%, 100% { 
              opacity: 0;
              transform: scaleX(0.5) translateX(-20%);
            }
            50% { 
              opacity: 0.8;
              transform: scaleX(1.2) translateX(20%);
            }
          }
          @keyframes lightning {
            0% { 
              opacity: 0;
              transform: scaleX(0.3) translateX(-50%);
            }
            10%, 30% { 
              opacity: 0.9;
              filter: brightness(1.5);
              transform: scaleX(1.2) translateX(10%);
            }
            40%, 100% { 
              opacity: 0;
              transform: scaleX(0.3) translateX(50%);
            }
          }
          @keyframes glow-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-electric-pulse {
            animation: electric-pulse 2s ease-in-out infinite;
          }
          .animate-lightning {
            animation: lightning 4s ease-out infinite;
          }
          .animate-glow-pulse {
            animation: glow-pulse 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
} 
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import DrStrange from '../Images/DrStrange.png';

function BackToDashboard() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 bg-green-900/80 hover:bg-green-700/80 text-green-100 px-4 py-2 rounded-lg border-2 border-green-400/50 transition-all duration-300 z-50 flex items-center space-x-2 shadow-lg backdrop-blur-md"
    >
      <span>←</span>
      <span>Back to Dashboard</span>
    </button>
  );
}

export default function TimeStone() {
  const [showHero, setShowHero] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showTimeline, setShowTimeline] = useState(false);

  const messages = [
    "I am Doctor Strange, Master of the Mystic Arts and wielder of the Time Stone.",
    "This stone allows us to traverse through time and witness your journey.",
    "Let me show you the path that has led you here..."
  ];

  const timeline = [
    {
      year: "15th Dec 2005",
      title: "Born",
      description: "The beginning of my journey in Madurai, Tamil Nadu, where I first opened my eyes to the world of possibilities.",
      icon: "👶"
    },
    {
      year: "2008 - 2016",
      title: "Pre Schooling",
      description: "My early education years at St. Mary 's Higher Seconday School, where I developed my foundational skills and discovered my love for learning.",
      icon: "🏫"
    },
    {
      year: "2016 - 2021",
      title: "High School (10th, No Grades Due to Corona)",
      description: "Completed my high school education at Velammal Matriculation School, where I developed a strong foundation in science and mathematics. The pandemic year taught me resilience and adaptability in the face of challenges.",
      icon: "📚"
    },
    {
      year: "2021 - 2023",
      title: "Higher Secondary (12th, 91% in Bio Maths Group)",
      description: "Excelled in my higher secondary education with a focus on Biology and Mathematics, achieving 91% in my final examinations. This period strengthened my analytical and problem-solving abilities.",
      icon: "🧮"
    },
    {
      year: "2023 - 2024",
      title: "Joined Velammal College of Engineering and Technology in BE CSE",
      description: "Embarked on my technical journey at VCET, where I'm pursuing my passion for Computer Science and Engineering. Currently learning programming fundamentals, data structures, and software development principles.",
      icon: "💻"
    },
    {
      year: "2024 - Ongoing",
      title: "Mastering Myself in Technical Fields",
      description: "Actively developing my skills in web development, learning modern frameworks like React and Node.js. Building projects to apply theoretical knowledge and create practical solutions. Continuously expanding my knowledge in software development and exploring new technologies.",
      icon: "🚀"
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
      setShowTimeline(true);
      setShowHero(false);
    };

    sequence();
  }, []);

  return (
    <>
      <Helmet>
        <title>NVK | Experience</title>
        <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet" />
      </Helmet>
      <BackToDashboard />
      <div className="min-h-screen w-full bg-gradient-to-tr from-green-900 via-green-800 to-green-700 flex flex-col items-center justify-center text-white px-0 relative overflow-hidden pt-24 pb-32">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient with increased blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-green-700/90 blur-[32px] opacity-90" />
          
          {/* Magical Threads */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-magical-thread"
                style={{
                  width: '2px',
                  height: `${400 + Math.random() * 300}px`,
                  background: `linear-gradient(to top, 
                    transparent, 
                    rgba(34, 197, 94, ${0.2 + Math.random() * 0.3}), 
                    rgba(34, 197, 94, ${0.4 + Math.random() * 0.3}), 
                    rgba(34, 197, 94, ${0.2 + Math.random() * 0.3}), 
                    transparent)`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  filter: 'blur(1px)',
                  animation: `magical-thread ${10 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Time Runes */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-green-500/30 animate-time-rune"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  animation: `time-rune ${20 + i * 5}s infinite linear ${i * 2}s`
                }}
              />
            ))}
          </div>

          {/* Magical Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-magical-particle"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  background: `rgba(34, 197, 94, ${0.6 + Math.random() * 0.4})`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(1px)',
                  animation: `magical-particle ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Dr. Strange Character */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-50 pointer-events-none ${
          showHero ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <img 
            src={DrStrange} 
            alt="Doctor Strange" 
            className="w-[500px] h-[500px] object-contain animate-float"
          />
        </div>

        {/* Hero Message */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-900/90 p-8 rounded-xl border-4 border-green-500/50 transition-all duration-500 z-50 backdrop-blur-sm pointer-events-none w-full max-w-5xl ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-3xl md:text-4xl text-white text-center font-bold drop-shadow-lg" 
             style={{ 
               fontFamily: "'MedievalSharp', cursive",
               letterSpacing: '2px',
               textShadow: '0 0 10px #22c55e, 0 0 20px #15803d, 0 0 30px #14532d',
             }}>
            {messages[messageIndex]}
          </p>
        </div>

        {/* Timeline Content */}
        <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 ${showTimeline ? '' : 'blur-md'} transition-all duration-500`}>
          <div className="bg-green-900/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold mb-4 tracking-widest text-white animate-text-glow font-sans">
                My Journey
              </h1>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500/50"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-green-800/50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl mr-4">{item.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-green-300">{item.year}</p>
                          </div>
                        </div>
                        <p className="text-green-100">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                ))}
              </div>
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

        @keyframes magical-thread {
          0% { 
            opacity: 0; 
            transform: translateY(0) rotate(0deg) scaleY(0.8);
          }
          50% { 
            opacity: 1; 
            transform: translateY(-100px) rotate(180deg) scaleY(1.2);
          }
          100% { 
            opacity: 0; 
            transform: translateY(-200px) rotate(360deg) scaleY(0.8);
          }
        }

        @keyframes time-rune {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes magical-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 1; }
          100% { transform: translateY(-60px) translateX(0); opacity: 0; }
        }

        .animate-magical-thread {
          animation: magical-thread 10s ease-in-out infinite;
        }

        .animate-time-rune {
          animation: time-rune 20s linear infinite;
        }

        .animate-magical-particle {
          animation: magical-particle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
} 
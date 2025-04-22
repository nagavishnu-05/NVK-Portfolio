import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Wanda from '../Images/Wanda.png';
import ForkFinder from '../Projects/ForkFinder.png';
import Attendance from '../Projects/Attendance.png';
import MiniChatGPT from '../Projects/MiniChatGPT.png';
import Quoteify from '../Projects/Quoteify.png';
import VCETAttendo from '../Projects/VCET Attendo.png';
import Portfolio from '../Projects/Portfolio.png';

import { useNavigate } from 'react-router-dom';

function BackToDashboard() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 bg-[#7b1fa2]/80 hover:bg-[#e53935]/80 text-white px-4 py-2 rounded-lg border-2 border-[#ff1744]/40 transition-all duration-300 z-[100] flex items-center space-x-2 shadow-lg backdrop-blur-md"
    >
      <span>←</span>
      <span>Back to Dashboard</span>
    </button>
  );
}

export default function RealityStone() {
  const [showHero, setShowHero] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [wandaGone, setWandaGone] = useState(false);

  const messages = [
    "I am Wanda Maximoff, wielder of the Reality Stone.",
    "This stone represents the manifestation of ideas into reality.",
    "Let me show you the projects you've brought to life..."
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
      // Fade Wanda out and reveal projects
      setShowHero(false);
      setTimeout(() => setWandaGone(true), 1000); // Wait for fade-out transition, then unmount Wanda
    };

    sequence();
  }, []);

  return (
    <>
      <Helmet>
        <title>NVK | Projects</title>
        <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet" />
      </Helmet>
      <BackToDashboard />
      <div className="min-h-screen w-full bg-gradient-to-tr from-[#7b1fa2] via-[#e53935] to-[#ff1744] flex flex-col items-center justify-center text-white px-0 relative overflow-hidden pt-24">
        {/* Enhanced Magical Red-Themed Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient with increased blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7b1fa2]/90 via-[#e53935]/80 to-[#ff1744]/90 blur-[32px] opacity-90" />
          
          {/* Animated magical orbs */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float-slow"
                style={{
                  width: `${200 + i * 40}px`,
                  height: `${200 + i * 40}px`,
                  background: `radial-gradient(circle at 30% 30%, rgba(255, 23, 68, ${0.1 + i * 0.05}), transparent)`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${i * 45}deg)`,
                  filter: 'blur(8px)',
                  animation: `float-slow ${8 + i * 2}s infinite ease-in-out ${i * 1.5}s`
                }}
              />
            ))}
          </div>

          {/* Magical energy streams */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 animate-energy-stream"
                style={{
                  height: `${200 + Math.random() * 300}px`,
                  background: `linear-gradient(to top, transparent, rgba(255, 23, 68, ${0.4 + Math.random() * 0.4}), transparent)`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  filter: 'blur(3px)',
                  animation: `energy-stream ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Magical particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-particle"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  background: `rgba(255, ${150 + Math.random() * 105}, ${150 + Math.random() * 105}, ${0.6 + Math.random() * 0.4})`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(1px)',
                  animation: `particle ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Magical runes */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-red-500/30 animate-rune"
                style={{
                  width: `${300 + i * 100}px`,
                  height: `${300 + i * 100}px`,
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                  animation: `rune ${20 + i * 5}s infinite linear ${i * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Wanda Character */}
        {!wandaGone && (
          <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-50 pointer-events-none ${
            showHero ? 'opacity-100 scale-100' : 'opacity-0 scale-110 translate-y-8 pointer-events-none'
          }`}>
            <img 
              src={Wanda} 
              alt="Wanda" 
              className="w-[500px] h-[500px] object-contain animate-float"
            />
          </div>
        )}

        {/* Hero Message */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-900/90 p-8 rounded-xl border-4 border-pink-500/50 transition-all duration-500 z-50 backdrop-blur-sm pointer-events-none w-full max-w-5xl ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-3xl md:text-4xl text-white text-center font-bold drop-shadow-lg" 
             style={{ 
               fontFamily: "'Creepster', cursive",
               letterSpacing: '3px',
               textShadow: '0 0 10px #ec4899, 0 0 20px #be185d, 0 0 30px #9d174d'
             }}>
            {messages[messageIndex]}
          </p>
        </div>

        {/* Projects Content */}
        <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 ${showHero ? 'blur-md pointer-events-none' : ''} transition-all duration-500`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold mb-4 tracking-widest text-white animate-text-glow font-sans">
              Projects
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Fork Finder",
                description: "Fork Finder is a modern React-based web application designed to elevate the restaurant discovery experience. With a focus on sleek UI/UX design, the app integrates stunning animations, interactive components, and a vibrant theme inspired by culinary aesthetics. Developed using Figma for wireframing and Tailwind CSS for rapid styling, Fork Finder offers a dynamic and user-friendly interface that makes finding your next favorite meal effortless and enjoyable.",
                technologies: ["Figma", "Wire Framing"],
                image: ForkFinder,
                featured: true,
                link: "https://www.figma.com/design/suKhqYcssBT9Tcimj96Wt3/Vishnu-Project?node-id=326-2765&p=f"
              },
              {
                title: "Student Attendance Management",
                description: "A responsive web-based application designed to simplify attendance tracking for educational institutions. Built using HTML, CSS, and JavaScript, it features an intuitive interface where staff can mark attendance, select reasons for absences, and view detailed records by date, period, and student. The system ensures organized data handling and improves the overall efficiency of classroom management.",
                technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "Node Js"],
                image: Attendance,
                featured: true,
                link: "https://vcetcseb23-27-student-attendance.neocities.org/"
              },
              {
                title: "Mini ChatGPT",
                description: "A lightweight conversational AI interface built using HTML, CSS, and JavaScript, designed to simulate intelligent responses and create an engaging user experience. This mini assistant mimics the behavior of ChatGPT on a smaller scale, with a clean UI and responsive chat flow ideal for learning and experimentation.",
                technologies: ["HTML", "CSS", "JavaScript", "MindsDB API"],
                image: MiniChatGPT,
                featured: true,
                link: "https://nagavishnu-05.github.io/MiniChatGPT.github.io/"
              },
              {
                title: "Quoteify",
                description: "A sleek and inspirational quote generator application that delivers random motivational quotes with every click. Built with HTML, CSS, and JavaScript, the app features smooth animations, share options, and a modern UI that refreshes the mind and spirit with every interaction.",
                technologies: ["HTML", "CSS", "JavaScript", "MindsDB API"],
                image: Quoteify,
                featured: true,
                link: "https://nagavishnu-05.github.io/Quoteify.github.io/"
              },
              {
                title: "VCET Attendo",
                description: "An advanced and refined version of the Student Attendance Management system, VCET Attendo streamlines class attendance tracking with a clean UI, period-wise student status selection, and automated data handling. Built using HTML, CSS, and JavaScript, it offers improved accuracy and ease for staff to manage, store, and review attendance with real-time updates and reason tagging for absentees.",
                technologies: ["HTML", "CSS", "JavaScript", "Whatsapp Integration"],
                image: VCETAttendo,
                featured: true,
                link: "https://vcet-attendo.vercel.app/"
              },
              {
                title: "Marvel Portfolio",
                description: "This very portfolio! A magical Marvel-themed showcase of all my projects, skills, and creative journey. Built with React, Tailwind CSS, and inspired by the Infinity Stones.",
                technologies: ["React", "Tailwind CSS", "Framer Motion"],
                image: Portfolio,
                featured: true,
                link: "/"
              }
            ].map((project, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden bg-[#1a0f0f] hover:bg-[#2a1f1f] transition-all duration-300">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#ff4444]/90 text-white text-sm px-3 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-sm px-3 py-1 rounded-full bg-[#2a1f1f] text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <div className="flex mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ffae42] hover:text-white transition-colors"
                        title="Open Project Link"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M14 3h7v7" />
                          <path d="M5 19l14-14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes energy-stream {
          0% { opacity: 0; transform: translateY(0) scale(1); }
          50% { opacity: 1; transform: translateY(-50px) scale(1.2); }
          100% { opacity: 0; transform: translateY(-100px) scale(1); }
        }

        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 1; }
          100% { transform: translateY(-60px) translateX(0); opacity: 0; }
        }

        @keyframes rune {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-energy-stream {
          animation: energy-stream 4s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle 3s ease-in-out infinite;
        }

        .animate-rune {
          animation: rune 20s linear infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes text-glow {
          0% { text-shadow: 0 0 10px rgba(255, 64, 129, 0.7); }
          50% { text-shadow: 0 0 28px #ff1744, 0 0 40px #e53935; }
          100% { text-shadow: 0 0 10px rgba(255, 64, 129, 0.7); }
        }
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import PowerStone from './Images/Power Stone.png';
import SpaceStone from './Images/Space Stone.png';
import TimeStone from './Images/Time Stone.png';
import MindStone from './Images/Mind Stone.png';
import SoulStone from './Images/Soul Stone.png';
import RealityStone from './Images/Reality Stone.png';
import Thanos from './Images/Thanos.png';

export default function Dashboard() {
  const navigate = useNavigate();
  const [showThanos, setShowThanos] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const marqueeRef = useRef(null);
  const autoScrollRef = useRef(null);

  const messages = [
    "I am Thanos, the Mad Titan. My quest is complete; the Infinity Stones are mine.",
    "But instead of destruction, I have forged a new universe—a portfolio of marvels.",
    "Each stone is now guarded by a chosen Avenger, awaiting your discovery.",
    "Step forth, explore the stones, and unveil the heroes within..."
  ];

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('thanosIntroPlayed');
    if (hasPlayed === 'true') {
      setShowThanos(false);
      setShowMessage(false);
      return;
    }
    const sequence = async () => {
      setShowThanos(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      for (let i = 0; i < messages.length; i++) {
        setMessageIndex(i);
        setShowMessage(true);
        await new Promise(resolve => setTimeout(resolve, 6000));
        setShowMessage(false);
        await new Promise(resolve => setTimeout(resolve, 1200));
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowThanos(false);
      sessionStorage.setItem('thanosIntroPlayed', 'true');
    };
    sequence();
  }, []);

  const colorClassMap = {
    'red-500': 'bg-red-500',
    'blue-500': 'bg-blue-500',
    'green-500': 'bg-green-500',
    'yellow-400': 'bg-yellow-400',
    'purple-500': 'bg-purple-500',
    'orange-400': 'bg-orange-400',
  };

  const stones = [
    { name: 'Space Stone', color: 'blue-500', image: SpaceStone, description: 'The Space Stone allows...', delay: '0s', path: '/space' },
    { name: 'Power Stone', color: 'red-500', image: PowerStone, description: 'The Power Stone grants...', delay: '1s', path: '/power' },
    { name: 'Mind Stone', color: 'yellow-400', image: MindStone, description: 'The Mind Stone grants...', delay: '2s', path: '/mind' },
    { name: 'Reality Stone', color: 'orange-400', image: RealityStone, description: 'The Reality Stone enables...', delay: '3s', path: '/reality' },
    { name: 'Time Stone', color: 'green-500', image: TimeStone, description: 'The Time Stone gives...', delay: '4s', path: '/time' },
    { name: 'Soul Stone', color: 'purple-500', image: SoulStone, description: 'The Soul Stone allows...', delay: '5s', path: '/soul' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (marqueeRef.current) {
        const scrollLeft = marqueeRef.current.scrollLeft;
        marqueeRef.current.scrollTo({ left: scrollLeft + 1, behavior: 'smooth' });
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Helmet>
        <title>NVK | Dashboard</title>
      </Helmet>
      {/* Hide scrollbars on stones carousel */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="min-h-screen w-full bg-gradient-to-tr from-[#18002a] via-[#0e0023] to-[#1e004a] flex flex-col items-center justify-center text-white px-0 relative overflow-hidden">
        {/* Cosmic gradient overlay for more depth */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/60 via-indigo-900/40 to-blue-900/60" />
          <div className="absolute inset-0 bg-stars bg-repeat opacity-60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(150)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.2,
                  transform: `scale(${Math.random() * 0.5 + 0.5})`
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-blue-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-50 pointer-events-none ${
          showThanos ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <img 
            src={Thanos} 
            alt="Thanos" 
            className="w-[600px] h-[600px] object-contain animate-float"
          />
        </div>

        {/* Add gap after Thanos image */}
        <div className="mb-12"></div>
          
        <div 
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 p-8 rounded-xl border-4 border-purple-500/50 transition-all duration-500 z-50 backdrop-blur-sm pointer-events-none w-full max-w-5xl ${
            showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <p className="text-3xl md:text-4xl text-white font-anime tracking-wider leading-relaxed text-center px-4 animate-text-glow">
            {messages[messageIndex]}
          </p>
        </div>
        {/* Add gap after Thanos message */}
        <div className="mb-8"></div>

        <div className={`relative z-10 w-full max-w-5xl mx-auto ${showThanos ? 'blur-md' : ''} transition-all duration-500`}>
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-extrabold mb-4 tracking-widest text-gray-100 animate-text-glow whitespace-nowrap drop-shadow-[0_2px_8px_rgba(150,150,255,0.18)] font-sans">
              Nagavishnu Karthik B S
            </h1>
            <p className="text-xl text-cyan-300 font-semibold mb-2 animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,255,255,0.4)] font-sans">Full Stack Developer & UI Designer</p>
            <p className="text-base text-fuchsia-100 mb-2 animate-fade-in-up font-normal drop-shadow-[0_2px_8px_rgba(255,0,255,0.2)] font-sans">Blending code and creativity to craft seamless digital experiences.</p>
          </div>

          {/* Add gap before stones marquee */}
          <div className="mb-8"></div>
          <div ref={marqueeRef} className="relative w-full h-[200px] overflow-x-auto no-scrollbar flex items-center">
            <div className="whitespace-nowrap flex items-center gap-16">
              {[...stones, ...stones].map((stone, idx) => (
                <div key={idx}
                  className="mx-8 transform transition-all duration-300 group relative cursor-pointer"
                  onClick={() => navigate(stone.path)}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Comic-style tooltip on hover */}
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none z-20 transition-all duration-300">
                      <div className="relative">
                        <div className="bg-yellow-200 border-4 border-black text-black font-bold rounded-2xl px-6 py-4 shadow-lg text-base font-comic-bubble max-w-xs text-center comic-bubble">
                          {stone.description}
                        </div>
                        <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 w-0 h-0 border-t-[20px] border-t-yellow-200 border-x-[20px] border-x-transparent border-b-0"></div>
                        <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-0 h-0 border-t-[22px] border-t-black border-x-[22px] border-x-transparent border-b-0"></div>
                      </div>
                    </div>
                    <div className="relative mb-1">
                      <img 
                        src={stone.image} 
                        alt={stone.name}
                        className="w-28 h-28 object-contain transform transition-all duration-300 group-hover:scale-125 relative z-10"
                      />
                    </div>
                    <p className="text-base font-bold text-white text-center font-anime whitespace-nowrap opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
                      {stone.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-base text-gray-300 text-center animate-fade-in-up delay-700">
            <div className="flex justify-center space-x-4">
              <span className="text-fuchsia-400 animate-ping text-2xl">▸</span>
              <span className="text-purple-400 animate-ping delay-200 text-2xl">▸</span>
              <span className="text-indigo-400 animate-ping delay-400 text-2xl">▸</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        * {
          font-family: 'Press Start 2P', cursive;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes text-glow {
          0% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          }
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
        }

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </>
  );
}

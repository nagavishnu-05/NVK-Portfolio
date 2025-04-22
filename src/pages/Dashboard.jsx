import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [messages, setMessages] = useState([
    "Welcome to the Dashboard!",
    "This is a sample message.",
    "You can add more messages as needed."
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [messages.length]);

  return (
    <div>
      <Helmet>
        <title>NVK | Dashboard</title>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
        <style>
          {`
            @font-face {
              font-family: 'NikoPol';
              src: url('/fonts/NikoPol.ttf') format('truetype');
            }
          `}
        </style>
      </Helmet>

      <div 
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 p-8 rounded-xl border-4 border-purple-500/50 transition-all duration-500 z-50 backdrop-blur-sm pointer-events-none w-full max-w-5xl ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
        <p className="text-3xl md:text-4xl text-white tracking-wider leading-relaxed text-center px-4 animate-text-glow" 
           style={{ 
             fontFamily: "'Bangers', cursive",
             letterSpacing: '4px',
             textShadow: '0 0 10px rgba(147, 51, 234, 0.7), 0 0 20px rgba(147, 51, 234, 0.5)'
           }}>
          {messages[messageIndex]}
        </p>
      </div>
    </div>
  );
};

export default Dashboard; 
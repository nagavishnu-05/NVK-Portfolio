import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import NickFury from '../Images/NickFury.png';
import { Linkedin, Github, Mail, Phone, Instagram } from './lucide-icons';
import { sendEmail } from '../services/emailService';

function BackToDashboard() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 bg-purple-900/80 hover:bg-purple-700/80 text-purple-100 px-4 py-2 rounded-lg border-2 border-purple-400/50 transition-all duration-300 z-50 flex items-center space-x-2 shadow-lg backdrop-blur-md"
    >
      <span>←</span>
      <span>Back to Dashboard</span>
    </button>
  );
}

export default function SoulStone() {
  const [showHero, setShowHero] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showContacts, setShowContacts] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);

  const messages = [
    "I am Nick Fury, Director of S.H.I.E.L.D. and guardian of the Soul Stone.",
    "This stone represents the connections that bind us together.",
    "Let me help you reach out and make contact..."
  ];

  const contacts = [
    {
      platform: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/naga-vishnu-karthik-b-s/",
      username: "Nagavishnu Karthik B S"
    },
    {
      platform: "GitHub",
      icon: Github,
      link: "https://github.com/nagavishnu-05",
      username: "nagavishnu-05"
    },
    {
      platform: "Email",
      icon: Mail,
      link: "mailto:nagavishnukarthikbs@gmail.com",
      username: "Nagavishnu Karthik B S"
    },
    {
      platform: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/nagavishnukarthik05_official/",
      username: "nagavishnukarthik05_official"
    },
    {
      platform: "Phone",
      icon: Phone,
      link: "tel:+919600338213",
      username: "+91 96003 38213"
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
      setShowContacts(true);
      setShowHero(false);
    };

    sequence();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setEmailStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    const result = await sendEmail(formData);
    setEmailStatus(result);
    setIsSending(false);

    if (result.success) {
      e.target.reset();
    }
  };

  return (
    <>
      <Helmet>
        <title>NVK | Contact</title>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </Helmet>
      <BackToDashboard />
      <div className="min-h-screen w-full bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-700 flex flex-col items-center justify-center text-white px-0 relative overflow-hidden pt-24 pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-purple-700/60" />
        <div className="absolute inset-0 bg-stars bg-repeat opacity-60" />

        {/* Nick Fury Character */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-50 pointer-events-none ${
          showHero ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <img 
            src={NickFury} 
            alt="Nick Fury" 
            className="w-[500px] h-[500px] object-contain animate-float"
          />
        </div>

        {/* Hero Message */}
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-900/90 p-8 rounded-xl border-4 border-yellow-500/50 transition-all duration-500 z-50 backdrop-blur-sm pointer-events-none w-full max-w-5xl ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-3xl md:text-4xl text-white text-center font-bold drop-shadow-lg" 
             style={{ 
               fontFamily: "'Share Tech Mono', monospace",
               letterSpacing: '2px',
               textShadow: '0 0 10px #eab308, 0 0 20px #ca8a04, 0 0 30px #a16207',
             }}>
            {messages[messageIndex]}
          </p>
        </div>

        {/* Contacts Content */}
        <div className={`relative z-10 w-full max-w-5xl mx-auto ${showContacts ? '' : 'blur-md'} transition-all duration-500`}>
          <div className="bg-purple-900/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold mb-4 tracking-widest text-white animate-text-glow font-sans">
                Get in Touch
              </h1>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-800/50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700/50"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl"><contact.icon size={32} /></span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{contact.platform}</h3>
                      <p className="text-purple-200">{contact.username}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="mt-12 bg-purple-800/50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-purple-200 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-purple-900/50 border-2 border-purple-500/50 rounded-lg p-3 text-white focus:outline-none focus:border-purple-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-purple-900/50 border-2 border-purple-500/50 rounded-lg p-3 text-white focus:outline-none focus:border-purple-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full bg-purple-900/50 border-2 border-purple-500/50 rounded-lg p-3 text-white focus:outline-none focus:border-purple-400 h-32"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${
                    isSending ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {emailStatus && (
                  <div className={`mt-4 p-3 rounded-lg text-center ${
                    emailStatus.success ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'
                  }`}>
                    {emailStatus.message}
                  </div>
                )}
              </form>
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
      `}</style>
    </>
  );
} 
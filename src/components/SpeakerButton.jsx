import React, { useState, useEffect } from 'react';
import { FaVolumeUp, FaStop } from 'react-icons/fa';

const SpeakerButton = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState([]);

  // Preload voices
  useEffect(() => {
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
    
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isPlaying) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying]);

  // Global state sync
  useEffect(() => {
    const checkState = setInterval(() => {
      if (isPlaying && !window.speechSynthesis.speaking) {
        setIsPlaying(false);
      }
    }, 500);
    return () => clearInterval(checkState);
  }, [isPlaying]);

  const toggleSpeech = (e) => {
    e.stopPropagation(); // Prevent triggering parent clicks

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // Cancel any ongoing global audio
      window.speechSynthesis.cancel();
      
      // Pre-process text for 100% clear pronunciation of acronyms and technical terms
      const clearText = text
        .replace(/\bCRM\b/g, 'C R M')
        .replace(/\bERP\b/g, 'E R P')
        .replace(/\bAPI\b/g, 'A P I')
        .replace(/\bAPIs\b/g, 'A P I s')
        .replace(/\bRBAC\b/g, 'R B A C')
        .replace(/\bAI\b/g, 'A I');

      const utterance = new SpeechSynthesisUtterance(clearText);

      // Order of preference for clear male voices
      const preferredVoiceNames = [
        'Google UK English Male', // Chrome UK Male
        'Microsoft Guy Online (Natural) - English (United States)', // Edge Neural Male
        'Microsoft David Desktop - English (United States)', // Windows standard male (very clear)
        'Microsoft David', // Windows male
        'Microsoft Mark Desktop - English (United States)', // Windows male
        'Daniel', // macOS UK Male
        'Alex', // macOS clear male
        'Fred' // macOS male
      ];

      let selectedVoice = null;
      
      // 1. Try to find the explicitly listed male voices first
      for (const name of preferredVoiceNames) {
        selectedVoice = voices.find(v => v.name === name || v.name.includes(name));
        if (selectedVoice) break;
      }

      // 2. Fallback to any voice explicitly labeled "Male"
      if (!selectedVoice) {
        selectedVoice = voices.find(v => v.name.toLowerCase().includes('male') && v.lang.includes('en'));
      }

      // 3. Fallback to any clear standard English voice if no explicitly male voice is found
      if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang.includes('en-US') || v.lang.includes('en-GB'));
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      // Explicitly set language to UK English for sharper consonant articulation
      utterance.lang = selectedVoice ? selectedVoice.lang : 'en-GB';

      // Fine-tuning parameters for maximum clarity on basic engines:
      utterance.rate = 0.85; 
      utterance.pitch = 1.1;
      utterance.volume = 1.0;
      
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleSpeech}
      className={`p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 flex items-center justify-center flex-shrink-0
        ${isPlaying 
          ? 'bg-[#3F2B96]/30 border-[#3F2B96] text-white shadow-[0_0_15px_rgba(63,43,150,0.4)]' 
          : 'bg-gray-800/40 border-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-700/60 hover:border-gray-500'
        }`}
      aria-label={isPlaying ? "Stop narration" : "Play narration"}
      title={isPlaying ? "Stop narration" : "Play narration"}
    >
      {isPlaying ? <FaStop size={14} /> : <FaVolumeUp size={14} />}
    </button>
  );
};

export default SpeakerButton;

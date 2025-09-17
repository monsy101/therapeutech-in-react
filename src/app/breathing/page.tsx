"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react';

const BreathingPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'exhale' | 'hold'>('inhale');
  const [breathCount, setBreathCount] = useState(0);
  const [circleSize, setCircleSize] = useState(200);
  const [displayText, setDisplayText] = useState('Start Breathing');
  const [isComplete, setIsComplete] = useState(false);

  const totalBreaths = 30;
  const inhaleDuration = 5000; // 5 seconds
  const exhaleDuration = 6000; // 6 seconds

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && !isComplete) {
      const startTime = Date.now();
      let currentPhaseStart = startTime;
      
      interval = setInterval(() => {
        const elapsed = Date.now() - currentPhaseStart;
        
        if (phase === 'inhale') {
          if (elapsed >= inhaleDuration) {
            setPhase('exhale');
            setDisplayText('Breathe out');
            setCircleSize(200);
            currentPhaseStart = Date.now();
          } else {
            const progress = elapsed / inhaleDuration;
            setCircleSize(200 + (50 * progress));
          }
        } else if (phase === 'exhale') {
          if (elapsed >= exhaleDuration) {
            setBreathCount(prev => {
              const newCount = prev + 1;
              if (newCount >= totalBreaths) {
                setIsComplete(true);
                setDisplayText('Complete!');
                setIsActive(false);
                return newCount;
              }
              return newCount;
            });
            setPhase('inhale');
            setDisplayText('Breathe in');
            setCircleSize(200);
            currentPhaseStart = Date.now();
          } else {
            const progress = elapsed / exhaleDuration;
            setCircleSize(250 - (50 * progress));
          }
        }
      }, 50);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, phase, isComplete]);

  const startBreathing = () => {
    setIsActive(true);
    setIsComplete(false);
    setBreathCount(0);
    setPhase('inhale');
    setDisplayText('Breathe in');
    setCircleSize(200);
  };

  const stopBreathing = () => {
    setIsActive(false);
    setDisplayText('Session Ended');
  };

  const resetSession = () => {
    setIsActive(false);
    setIsComplete(false);
    setBreathCount(0);
    setPhase('inhale');
    setDisplayText('Start Breathing');
    setCircleSize(200);
  };

  return (
    <div className="min-h-screen bg-[#F1F4F8] flex flex-col">
      {/* Header */}
      <div className="bg-[#91EEA5] p-6">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => window.history.back()}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-[#14181B]" />
          </button>
          <h1 className="text-2xl font-bold text-[#14181B]">Breathing Exercise</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#14181B] mb-2">
            Take A Few Deep Breaths
          </h2>
          <p className="text-[#57636C]">
            Follow the circle as it expands and contracts with your breathing
          </p>
        </div>

        {/* Breathing Circle */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Shadow Circle */}
          <div 
            className="absolute rounded-full"
            style={{
              width: 300,
              height: 300,
              boxShadow: '0 0 20px rgba(77, 182, 172, 0.7)',
            }}
          />
          
          {/* Animated Circle */}
          <div
            className="rounded-full flex items-center justify-center text-white font-bold text-2xl transition-all duration-100 ease-in-out"
            style={{
              width: circleSize,
              height: circleSize,
              background: 'radial-gradient(circle, #4DB6AC 0%, #339989 50%, #206A5D 100%)',
            }}
          >
            {displayText}
          </div>
        </div>

        {/* Breath Counter */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-[#14181B] mb-2">
            {breathCount}/{totalBreaths}
          </div>
          <p className="text-[#57636C]">Breaths Completed</p>
        </div>

        {/* Control Buttons */}
        <div className="flex space-x-4">
          {!isComplete ? (
            <>
              {!isActive ? (
                <button
                  onClick={startBreathing}
                  className="bg-[#91EEA5] text-[#14181B] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#7DD3A0] transition-colors flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>Start Session</span>
                </button>
              ) : (
                <button
                  onClick={stopBreathing}
                  className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
                >
                  <Pause size={20} />
                  <span>End Session</span>
                </button>
              )}
            </>
          ) : (
            <div className="flex space-x-4">
              <button
                onClick={startBreathing}
                className="bg-[#91EEA5] text-[#14181B] px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#7DD3A0] transition-colors"
              >
                Another Round
              </button>
              <button
                onClick={resetSession}
                className="bg-gray-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-500 transition-colors flex items-center space-x-2"
              >
                <RotateCcw size={20} />
                <span>Reset</span>
              </button>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 max-w-md text-center">
          <h3 className="text-lg font-semibold text-[#14181B] mb-2">Instructions</h3>
          <ul className="text-[#57636C] space-y-1">
            <li>• Sit comfortably with your back straight</li>
            <li>• Breathe in as the circle expands</li>
            <li>• Breathe out as the circle contracts</li>
            <li>• Focus on your breathing rhythm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreathingPage;

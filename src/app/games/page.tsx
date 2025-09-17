"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Check, X } from 'lucide-react';

const GamesPage = () => {
  const [gameType, setGameType] = useState<'menu' | 'number' | 'visual'>('menu');
  const [gameState, setGameState] = useState<'start' | 'showing' | 'inputting' | 'result'>('start');
  const [level, setLevel] = useState(1);
  const [currentNumber, setCurrentNumber] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showDuration, setShowDuration] = useState(0);

  // Number Memory Game
  const generateNumber = (length: number) => {
    let number = '';
    for (let i = 0; i < length; i++) {
      if (i === 0 && length > 1) {
        number += Math.floor(Math.random() * 9) + 1; // 1-9 for first digit
      } else {
        number += Math.floor(Math.random() * 10); // 0-9 for other digits
      }
    }
    return number;
  };

  const startNumberGame = () => {
    setGameType('number');
    setGameState('start');
    setLevel(1);
    setCurrentNumber('');
    setUserInput('');
  };

  const showNumber = () => {
    const number = generateNumber(level);
    setCurrentNumber(number);
    setGameState('showing');
    
    const duration = Math.max(750, Math.min(4000, number.length * 700));
    setShowDuration(duration);
    
    setTimeout(() => {
      setGameState('inputting');
    }, duration);
  };

  const checkAnswer = () => {
    if (userInput === currentNumber) {
      setIsCorrect(true);
      setGameState('result');
    } else {
      setIsCorrect(false);
      setGameState('result');
    }
  };

  const nextLevel = () => {
    setLevel(prev => prev + 1);
    setUserInput('');
    setGameState('showing');
    showNumber();
  };

  const resetGame = () => {
    setLevel(1);
    setCurrentNumber('');
    setUserInput('');
    setGameState('start');
  };

  const backToMenu = () => {
    setGameType('menu');
    setGameState('start');
    setLevel(1);
    setCurrentNumber('');
    setUserInput('');
  };

  return (
    <div className="min-h-screen bg-[#F1F4F8]">
      {/* Header */}
      <div className="bg-[#91EEA5] p-6">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => window.history.back()}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-[#14181B]" />
          </button>
          <h1 className="text-2xl font-bold text-[#14181B]">
            {gameType === 'menu' ? 'Memory Games' : 'Number Memory Game'}
          </h1>
        </div>
      </div>

      <div className="p-6">
        {gameType === 'menu' ? (
          /* Game Selection Menu */
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                onClick={startNumberGame}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
              >
                <div className="w-20 h-20 bg-[#91EEA5] rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl font-bold text-[#14181B]">#</span>
                </div>
                <h3 className="text-2xl font-bold text-[#14181B] mb-4">Number Memory Game</h3>
                <p className="text-[#57636C] mb-6">
                  Improve your short term memory for numbers. Remember the sequence and test your recall ability.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-[#57636C]">
                  <span>• Progressive difficulty</span>
                  <span>• Memory training</span>
                  <span>• Focus improvement</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center opacity-50">
                <div className="w-20 h-20 bg-gray-300 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl font-bold text-gray-600">👁</span>
                </div>
                <h3 className="text-2xl font-bold text-[#14181B] mb-4">Visual Memory Game</h3>
                <p className="text-[#57636C] mb-6">
                  Boost cognitive function by sharpening the ability to recall and process visual information.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-[#57636C]">
                  <span>• Visual processing</span>
                  <span>• Pattern recognition</span>
                  <span>• Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Number Memory Game */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm min-h-[500px] flex flex-col justify-center">
              {gameState === 'start' && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[#14181B] mb-6">Number Memory Game</h2>
                  <p className="text-[#57636C] mb-8">
                    You will see a number for a few seconds. Try to remember it and type it back.
                  </p>
                  <button
                    onClick={showNumber}
                    className="bg-[#91EEA5] text-[#14181B] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#7DD3A0] transition-colors"
                  >
                    START GAME
                  </button>
                  <div className="mt-4 text-[#57636C]">
                    Level: {level}
                  </div>
                </div>
              )}

              {gameState === 'showing' && (
                <div className="text-center">
                  <div className="text-2xl font-semibold text-[#57636C] mb-8">Level: {level}</div>
                  <div className="text-8xl font-bold text-[#14181B] mb-8 animate-pulse">
                    {currentNumber}
                  </div>
                  <div className="text-[#57636C]">Memorize this number...</div>
                </div>
              )}

              {gameState === 'inputting' && (
                <div className="text-center">
                  <div className="text-2xl font-semibold text-[#57636C] mb-8">Level: {level}</div>
                  <h3 className="text-3xl font-bold text-[#14181B] mb-8">What was the number?</h3>
                  <div className="max-w-md mx-auto">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="w-full px-6 py-4 text-3xl font-bold text-center border-2 border-gray-300 rounded-xl focus:border-[#91EEA5] focus:outline-none"
                      placeholder="Enter number"
                      autoFocus
                    />
                  </div>
                  <button
                    onClick={checkAnswer}
                    className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors"
                  >
                    CHECK
                  </button>
                </div>
              )}

              {gameState === 'result' && (
                <div className="text-center">
                  <div className="text-6xl font-bold mb-6">
                    {isCorrect ? (
                      <span className="text-green-500">CORRECT!</span>
                    ) : (
                      <span className="text-red-500">INCORRECT!</span>
                    )}
                  </div>
                  <div className="text-2xl font-semibold text-[#14181B] mb-8">
                    The number was: {currentNumber}
                  </div>
                  
                  {isCorrect ? (
                    <button
                      onClick={nextLevel}
                      className="bg-[#91EEA5] text-[#14181B] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#7DD3A0] transition-colors"
                    >
                      NEXT LEVEL
                    </button>
                  ) : (
                    <div className="space-y-4">
                      <button
                        onClick={resetGame}
                        className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors"
                      >
                        PLAY AGAIN
                      </button>
                      <div>
                        <button
                          onClick={backToMenu}
                          className="text-[#57636C] hover:text-[#14181B] flex items-center space-x-2 mx-auto"
                        >
                          <ArrowLeft size={20} />
                          <span>Back to Games</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesPage;

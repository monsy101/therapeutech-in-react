"use client";

import { useState } from 'react';
import { Send, Paperclip, Smile, Phone, Video } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'therapist';
  text: string;
  timestamp: string;
  type: 'text' | 'image' | 'file';
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'therapist',
      text: 'Hello John! How are you feeling today?',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: 2,
      sender: 'user',
      text: 'Hi Dr. Johnson! I\'m doing better today. The breathing exercises you suggested really helped.',
      timestamp: '10:32 AM',
      type: 'text'
    },
    {
      id: 3,
      sender: 'therapist',
      text: 'That\'s wonderful to hear! I\'m glad the breathing exercises are working for you. Have you been practicing them regularly?',
      timestamp: '10:35 AM',
      type: 'text'
    },
    {
      id: 4,
      sender: 'user',
      text: 'Yes, I\'ve been doing them twice a day as you recommended. I notice I feel more calm throughout the day.',
      timestamp: '10:37 AM',
      type: 'text'
    },
    {
      id: 5,
      sender: 'therapist',
      text: 'Excellent progress! Consistency is key. For our next session, I\'d like to introduce you to some mindfulness techniques. Would you like me to send you some resources to review beforehand?',
      timestamp: '10:40 AM',
      type: 'text'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now(),
      sender: 'user',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate therapist response
    setTimeout(() => {
      const therapistResponse: Message = {
        id: Date.now() + 1,
        sender: 'therapist',
        text: 'Thank you for sharing that with me. I appreciate your openness.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      };
      setMessages(prev => [...prev, therapistResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const therapistInfo = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cognitive Behavioral Therapy',
    status: 'online',
    avatar: 'SJ'
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">{therapistInfo.avatar}</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{therapistInfo.name}</h2>
              <p className="text-sm text-gray-600">{therapistInfo.specialty}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">{therapistInfo.status}</span>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Video size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-md px-4 py-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 shadow-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-900 shadow-sm px-4 py-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Paperclip size={20} />
          </button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors"
            >
              <Smile size={16} />
            </button>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
        
        <div className="mt-2 text-xs text-gray-500">
          <p>💡 Tip: You can share your thoughts, feelings, or any concerns with your therapist here.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

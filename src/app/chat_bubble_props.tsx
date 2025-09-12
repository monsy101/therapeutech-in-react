import React from 'react';

interface ChatBubbleProps {
  sender: 'user' | 'ai';
  text: string;
  timestamp?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ sender, text, timestamp }) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-md px-4 py-3 rounded-lg shadow-md text-sm
        ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <p className="mb-1">{text}</p>
        {timestamp && (
          <span className="text-xs text-gray-500 block text-right">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
"use client";

import { useState } from 'react';
import ChatBubble from './chat_bubble_props';
import MessageInput from './message_input';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp,
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Call your local LLM API (OpenAI-compatible format)
      const response = await fetch('http://127.0.0.1:49897/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "stablelm-zephyr-3b",
          messages: [
            {
              role: "user",
              content: text
            }
          ],
          max_tokens: 1000,
          temperature: 0.7
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || data.response || data.message || data.text || "No response received";

      const aiReply: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (error) {
      console.error('Error calling LLM API:', error);
      const errorReply: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text: "Sorry, I couldn't connect to the AI service. Please try again.",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} sender={msg.sender} text={msg.text} timestamp={msg.timestamp} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="max-w-md px-4 py-3 rounded-lg shadow-md text-sm bg-gray-100 text-gray-800">
              <p className="mb-1">AI is thinking...</p>
            </div>
          </div>
        )}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
}
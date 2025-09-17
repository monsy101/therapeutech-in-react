"use client";

import { useState } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  BookOpen, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Heart,
  Plus,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const [mood, setMood] = useState(7);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const upcomingSessions = [
    {
      id: 1,
      therapist: 'Dr. Sarah Johnson',
      time: 'Today, 2:00 PM',
      type: 'Individual Therapy',
      status: 'confirmed'
    },
    {
      id: 2,
      therapist: 'Dr. Michael Chen',
      time: 'Tomorrow, 10:00 AM',
      type: 'Group Session',
      status: 'pending'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'Completed mood check-in',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 2,
      title: 'Read article: "Managing Anxiety"',
      time: '1 day ago',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Chat message from Dr. Johnson',
      time: '2 days ago',
      icon: MessageCircle,
      color: 'text-purple-600'
    }
  ];

  const quickActions = [
    {
      title: 'Breathing Exercise',
      description: 'Practice deep breathing for relaxation',
      icon: Heart,
      color: 'bg-[#91EEA5]',
      href: '/breathing'
    },
    {
      title: 'Yoga Poses',
      description: 'Improve mental health with yoga',
      icon: TrendingUp,
      color: 'bg-[#91EEA5]',
      href: '/yoga'
    },
    {
      title: 'Memory Games',
      description: 'Boost cognitive function',
      icon: Clock,
      color: 'bg-[#91EEA5]',
      href: '/games'
    },
    {
      title: 'Browse Resources',
      description: 'Explore wellness articles and tools',
      icon: BookOpen,
      color: 'bg-[#91EEA5]',
      href: '/resources'
    }
  ];

  const moodOptions = [
    { emoji: "😞", label: "Very Sad", color: "bg-red-300" },
    { emoji: "🙁", label: "Sad", color: "bg-orange-300" },
    { emoji: "😐", label: "Neutral", color: "bg-yellow-300" },
    { emoji: "🙂", label: "Happy", color: "bg-green-300" },
    { emoji: "😃", label: "Very Happy", color: "bg-blue-300" }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-[#91EEA5] rounded-full flex items-center justify-center">
          <span className="text-[#14181B] font-bold text-lg">JD</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#14181B]">Welcome back, John!</h1>
          <p className="text-[#57636C]">Good morning!</p>
        </div>
      </div>

      {/* Mood Tracking Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#14181B]">How are you Feeling Today?</h2>
          <button className="text-[#57636C] hover:text-[#14181B]">
            <TrendingUp size={20} />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mb-4">
          {moodOptions.map((mood, index) => (
            <button
              key={index}
              onClick={() => setSelectedMood(mood.label)}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${
                selectedMood === mood.label 
                  ? `${mood.color} scale-110 shadow-lg` 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {mood.emoji}
            </button>
          ))}
        </div>
        
        {selectedMood && (
          <div className="text-center">
            <p className="text-[#57636C]">You selected: <span className="font-semibold text-[#14181B]">{selectedMood}</span></p>
          </div>
        )}
      </div>

      {/* AI Chat Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-[#14181B] font-semibold">Want to talk with an AI assistant?</span>
          </div>
          <button 
            onClick={() => window.location.href = '/chat'}
            className="bg-[#91EEA5] text-[#14181B] px-4 py-2 rounded-lg hover:bg-[#7DD3A0] transition-colors flex items-center space-x-2"
          >
            <span>Chat</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#14181B]">Tasks for Today</h2>
          <button 
            onClick={() => window.location.href = '/tasks'}
            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Plus size={16} className="text-[#57636C]" />
          </button>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm min-h-[200px]">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-[#E0FFEA] border-2 border-[#91EEA5] rounded flex items-center justify-center">
                <CheckCircle size={16} className="text-[#91EEA5]" />
              </div>
              <span className="text-[#14181B]">Complete morning meditation</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-[#E0FFEA] border-2 border-[#91EEA5] rounded"></div>
              <span className="text-[#14181B]">Take a 10-minute walk</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-[#E0FFEA] border-2 border-[#91EEA5] rounded"></div>
              <span className="text-[#14181B]">Practice breathing exercises</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Exercises */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#14181B]">Recommended Exercises</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.title}
                onClick={() => window.location.href = action.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#91EEA5] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="text-[#14181B]" size={32} />
                </div>
                <h3 className="font-semibold text-[#14181B] mb-2 text-center">{action.title}</h3>
                <p className="text-sm text-[#57636C] text-center mb-4">{action.description}</p>
                <div className="flex justify-end">
                  <ArrowRight size={16} className="text-[#57636C]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Sessions</h2>
            <Calendar className="text-gray-400" size={20} />
          </div>
          
          <div className="space-y-3">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{session.therapist}</p>
                  <p className="text-sm text-gray-600">{session.type}</p>
                  <p className="text-xs text-gray-500">{session.time}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {session.status === 'confirmed' ? (
                    <CheckCircle className="text-green-600" size={16} />
                  ) : (
                    <Clock className="text-yellow-600" size={16} />
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    session.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {session.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <TrendingUp className="text-gray-400" size={20} />
          </div>
          
          <div className="space-y-3">
            {recentActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon className={`${activity.color}`} size={16} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Heart className="text-blue-600 mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600">Sessions Completed</p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="text-green-600 mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-green-600">28</p>
            <p className="text-sm text-gray-600">Days Streak</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <BookOpen className="text-purple-600 mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-purple-600">15</p>
            <p className="text-sm text-gray-600">Resources Read</p>
          </div>
          
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <TrendingUp className="text-yellow-600 mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-yellow-600">8.5</p>
            <p className="text-sm text-gray-600">Avg Mood Score</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

"use client";

import { useState } from 'react';
import SessionCard from '../components/SessionCard';
import { Calendar, Plus, Filter } from 'lucide-react';

const SessionsPage = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');

  const sessions = [
    {
      id: 1,
      therapist: 'Dr. Sarah Johnson',
      date: 'Today',
      time: '2:00 PM',
      duration: '50 minutes',
      type: 'Individual Therapy',
      location: 'Video Call',
      status: 'upcoming' as const,
      notes: 'Focus on anxiety management techniques'
    },
    {
      id: 2,
      therapist: 'Dr. Michael Chen',
      date: 'Tomorrow',
      time: '10:00 AM',
      duration: '60 minutes',
      type: 'Group Session',
      location: 'Video Call',
      status: 'upcoming' as const,
      notes: 'Group discussion on stress management'
    },
    {
      id: 3,
      therapist: 'Dr. Sarah Johnson',
      date: 'Last Week',
      time: '3:00 PM',
      duration: '50 minutes',
      type: 'Individual Therapy',
      location: 'Video Call',
      status: 'completed' as const,
      notes: 'Discussed progress on mindfulness exercises. Patient showed improvement in anxiety levels.'
    },
    {
      id: 4,
      therapist: 'Dr. Emily Rodriguez',
      date: '2 weeks ago',
      time: '11:00 AM',
      duration: '45 minutes',
      type: 'Individual Therapy',
      location: 'In-Person',
      status: 'completed' as const,
      notes: 'Initial assessment completed. Set goals for therapy journey.'
    },
    {
      id: 5,
      therapist: 'Dr. Michael Chen',
      date: '3 weeks ago',
      time: '2:30 PM',
      duration: '60 minutes',
      type: 'Group Session',
      location: 'Video Call',
      status: 'cancelled' as const,
      notes: 'Cancelled due to technical issues'
    }
  ];

  const filteredSessions = sessions.filter(session => 
    filter === 'all' || session.status === filter
  );

  const filterOptions = [
    { value: 'all', label: 'All Sessions', count: sessions.length },
    { value: 'upcoming', label: 'Upcoming', count: sessions.filter(s => s.status === 'upcoming').length },
    { value: 'completed', label: 'Completed', count: sessions.filter(s => s.status === 'completed').length },
    { value: 'cancelled', label: 'Cancelled', count: sessions.filter(s => s.status === 'cancelled').length },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Therapy Sessions</h1>
          <p className="text-gray-600">Manage your therapy appointments and track your progress</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          <span>Book Session</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Filter size={20} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-700">Filter by status:</span>
        </div>
        
        <div className="flex space-x-2">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === option.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </div>
      </div>

      {/* Sessions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>

      {/* Empty State */}
      {filteredSessions.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions found</h3>
          <p className="text-gray-600 mb-4">
            {filter === 'all' 
              ? "You don't have any therapy sessions yet." 
              : `You don't have any ${filter} sessions.`
            }
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Your First Session
          </button>
        </div>
      )}

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Session Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">
              {sessions.filter(s => s.status === 'upcoming').length}
            </p>
            <p className="text-sm text-gray-600">Upcoming</p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">
              {sessions.filter(s => s.status === 'completed').length}
            </p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">
              {sessions.filter(s => s.status === 'completed').length * 50}
            </p>
            <p className="text-sm text-gray-600">Total Minutes</p>
          </div>
          
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <p className="text-2xl font-bold text-yellow-600">
              {Math.round((sessions.filter(s => s.status === 'completed').length / sessions.length) * 100)}%
            </p>
            <p className="text-sm text-gray-600">Completion Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsPage;

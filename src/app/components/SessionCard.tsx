"use client";

import { Calendar, Clock, User, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

interface SessionCardProps {
  session: {
    id: number;
    therapist: string;
    date: string;
    time: string;
    duration: string;
    type: string;
    location: string;
    status: 'upcoming' | 'completed' | 'cancelled';
    notes?: string;
  };
}

const SessionCard = ({ session }: SessionCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="text-blue-600" size={16} />;
      case 'completed':
        return <CheckCircle className="text-green-600" size={16} />;
      case 'cancelled':
        return <AlertCircle className="text-red-600" size={16} />;
      default:
        return <Clock className="text-gray-600" size={16} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{session.therapist}</h3>
          <p className="text-sm text-gray-600">{session.type}</p>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon(session.status)}
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(session.status)}`}>
            {session.status}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{session.date}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock size={16} />
          <span>{session.time} ({session.duration})</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{session.location}</span>
        </div>
      </div>

      {session.notes && (
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-sm text-gray-700">{session.notes}</p>
        </div>
      )}

      <div className="flex space-x-2">
        {session.status === 'upcoming' && (
          <>
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Join Session
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Reschedule
            </button>
          </>
        )}
        
        {session.status === 'completed' && (
          <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
            View Notes
          </button>
        )}
        
        {session.status === 'cancelled' && (
          <button className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
            Book New Session
          </button>
        )}
      </div>
    </div>
  );
};

export default SessionCard;

"use client";

import { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, Edit, Save, X, Camera, Award, Target, TrendingUp } from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    location: 'New York, NY',
    bio: 'I\'m on a journey to better mental health and personal growth. Therapy has been a transformative experience for me.',
    avatar: 'JD'
  });

  const [editProfile, setEditProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditProfile(prev => ({ ...prev, [field]: value }));
  };

  const therapyStats = [
    {
      label: 'Sessions Completed',
      value: '24',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Days Streak',
      value: '45',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Goals Achieved',
      value: '8',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Resources Completed',
      value: '15',
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const recentGoals = [
    { id: 1, title: 'Practice mindfulness daily', completed: true, progress: 100 },
    { id: 2, title: 'Reduce anxiety levels', completed: false, progress: 75 },
    { id: 3, title: 'Improve sleep quality', completed: false, progress: 60 },
    { id: 4, title: 'Build better relationships', completed: false, progress: 40 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600">Manage your personal information and track your progress</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Edit size={20} />
          <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center">
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-600 text-2xl font-bold">{profile.avatar}</span>
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Camera size={16} />
                  </button>
                )}
              </div>

              {/* Name */}
              {isEditing ? (
                <input
                  type="text"
                  value={editProfile.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="text-xl font-bold text-gray-900 text-center bg-gray-50 rounded-lg px-3 py-2 mb-2 w-full"
                />
              ) : (
                <h2 className="text-xl font-bold text-gray-900 mb-2">{profile.name}</h2>
              )}

              {/* Bio */}
              {isEditing ? (
                <textarea
                  value={editProfile.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2 mb-4 w-full h-20 resize-none"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-sm text-gray-600 mb-4">{profile.bio}</p>
              )}

              {/* Member Since */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-500">Member since</p>
                <p className="font-semibold text-gray-900">January 2024</p>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <Save size={16} />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editProfile.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="text-gray-900 bg-gray-50 rounded-lg px-3 py-1 w-full"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.email}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editProfile.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="text-gray-900 bg-gray-50 rounded-lg px-3 py-1 w-full"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editProfile.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="text-gray-900 bg-gray-50 rounded-lg px-3 py-1 w-full"
                    />
                  ) : (
                    <p className="text-gray-900">{new Date(profile.dateOfBirth).toLocaleDateString()}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editProfile.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="text-gray-900 bg-gray-50 rounded-lg px-3 py-1 w-full"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.location}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Therapy Statistics */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Therapy Statistics</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {therapyStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={`${stat.bgColor} rounded-lg p-4 text-center`}>
                    <Icon className={`${stat.color} mx-auto mb-2`} size={24} />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Goals */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Goals</h3>
            
            <div className="space-y-4">
              {recentGoals.map((goal) => (
                <div key={goal.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{goal.title}</h4>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      goal.completed 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {goal.completed ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        goal.completed ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{goal.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

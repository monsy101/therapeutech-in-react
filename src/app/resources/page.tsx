"use client";

import { useState } from 'react';
import { Search, BookOpen, Play, Download, Heart, Star, Clock, User } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  type: 'article' | 'video' | 'exercise' | 'meditation';
  category: string;
  duration: string;
  author: string;
  rating: number;
  readTime: string;
  description: string;
  isBookmarked: boolean;
  isCompleted: boolean;
}

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Understanding Anxiety: A Comprehensive Guide',
      type: 'article',
      category: 'Anxiety',
      duration: '15 min read',
      author: 'Dr. Sarah Johnson',
      rating: 4.8,
      readTime: '15 min',
      description: 'Learn about the different types of anxiety, their causes, and evidence-based treatment approaches.',
      isBookmarked: true,
      isCompleted: false
    },
    {
      id: 2,
      title: 'Mindfulness Meditation for Beginners',
      type: 'meditation',
      category: 'Mindfulness',
      duration: '20 min',
      author: 'Dr. Michael Chen',
      rating: 4.9,
      readTime: '20 min',
      description: 'A guided meditation session designed to help you develop mindfulness skills and reduce stress.',
      isBookmarked: false,
      isCompleted: true
    },
    {
      id: 3,
      title: 'Cognitive Behavioral Therapy Techniques',
      type: 'video',
      category: 'CBT',
      duration: '45 min',
      author: 'Dr. Emily Rodriguez',
      rating: 4.7,
      readTime: '45 min',
      description: 'Learn practical CBT techniques you can use to challenge negative thought patterns.',
      isBookmarked: true,
      isCompleted: false
    },
    {
      id: 4,
      title: 'Breathing Exercises for Stress Relief',
      type: 'exercise',
      category: 'Stress Management',
      duration: '10 min',
      author: 'Dr. Sarah Johnson',
      rating: 4.6,
      readTime: '10 min',
      description: 'Simple breathing techniques to help you manage stress and anxiety in real-time.',
      isBookmarked: false,
      isCompleted: false
    },
    {
      id: 5,
      title: 'Building Healthy Sleep Habits',
      type: 'article',
      category: 'Sleep',
      duration: '12 min read',
      author: 'Dr. David Kim',
      rating: 4.5,
      readTime: '12 min',
      description: 'Evidence-based strategies to improve your sleep quality and establish healthy bedtime routines.',
      isBookmarked: true,
      isCompleted: true
    },
    {
      id: 6,
      title: 'Progressive Muscle Relaxation',
      type: 'exercise',
      category: 'Relaxation',
      duration: '25 min',
      author: 'Dr. Lisa Wang',
      rating: 4.8,
      readTime: '25 min',
      description: 'A step-by-step guide to progressive muscle relaxation for deep stress relief.',
      isBookmarked: false,
      isCompleted: false
    }
  ];

  const categories = ['all', 'Anxiety', 'Mindfulness', 'CBT', 'Stress Management', 'Sleep', 'Relaxation'];
  const types = ['all', 'article', 'video', 'exercise', 'meditation'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <BookOpen size={20} className="text-blue-600" />;
      case 'video':
        return <Play size={20} className="text-red-600" />;
      case 'exercise':
        return <Heart size={20} className="text-green-600" />;
      case 'meditation':
        return <Star size={20} className="text-purple-600" />;
      default:
        return <BookOpen size={20} className="text-gray-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'video':
        return 'bg-red-100 text-red-800';
      case 'exercise':
        return 'bg-green-100 text-green-800';
      case 'meditation':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Wellness Resources</h1>
        <p className="text-gray-600">Explore articles, exercises, and tools to support your mental health journey</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="lg:w-48">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(resource.type)}
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(resource.type)}`}>
                    {resource.type}
                  </span>
                </div>
                <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={16} className={resource.isBookmarked ? 'fill-current text-red-500' : ''} />
                </button>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {resource.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <User size={14} />
                  <span>{resource.author}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock size={14} />
                  <span>{resource.readTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Star size={14} className="text-yellow-500" />
                  <span>{resource.rating}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  {resource.type === 'video' ? 'Watch' : resource.type === 'exercise' ? 'Start' : 'Read'}
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  <Download size={16} />
                </button>
              </div>

              {/* Progress Indicator */}
              {resource.isCompleted && (
                <div className="mt-3 flex items-center space-x-2 text-sm text-green-600">
                  <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Completed</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <BookOpen className="text-blue-600 mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-blue-600">
              {resources.filter(r => r.isCompleted).length}
            </p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <Heart className="text-red-600 mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-red-600">
              {resources.filter(r => r.isBookmarked).length}
            </p>
            <p className="text-sm text-gray-600">Bookmarked</p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Star className="text-green-600 mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-green-600">
              {Math.round(resources.reduce((acc, r) => acc + r.rating, 0) / resources.length * 10) / 10}
            </p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Clock className="text-purple-600 mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-purple-600">
              {resources.filter(r => r.isCompleted).reduce((acc, r) => acc + parseInt(r.readTime), 0)}
            </p>
            <p className="text-sm text-gray-600">Minutes Learned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;

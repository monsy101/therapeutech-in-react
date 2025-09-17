"use client";

import { useState } from 'react';
import { ArrowLeft, Clock, Users, Heart } from 'lucide-react';

const YogaPage = () => {
  const [selectedPose, setSelectedPose] = useState<string | null>(null);

  const yogaPoses = [
    {
      id: 'big-toe',
      name: 'Big Toe Pose',
      description: 'A forward fold that stretches the hamstrings and calms the mind',
      duration: '5-10 minutes',
      difficulty: 'Beginner',
      benefits: ['Improves flexibility', 'Calms the mind', 'Stretches hamstrings'],
      instructions: [
        'Stand with feet hip-width apart',
        'Fold forward from the hips',
        'Reach for your big toes with your fingers',
        'Keep your knees slightly bent if needed',
        'Hold for 5-10 breaths'
      ],
      color: 'bg-green-500'
    },
    {
      id: 'bridge',
      name: 'Bridge Pose',
      description: 'A gentle backbend that opens the chest and strengthens the back',
      duration: '3-5 minutes',
      difficulty: 'Beginner',
      benefits: ['Strengthens back muscles', 'Opens chest', 'Improves posture'],
      instructions: [
        'Lie on your back with knees bent',
        'Place feet hip-width apart',
        'Press into your feet to lift your hips',
        'Interlace fingers under your body',
        'Hold for 5-8 breaths'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'hare',
      name: 'Hare Pose',
      description: 'A calming forward fold that relieves stress and tension',
      duration: '5-8 minutes',
      difficulty: 'Beginner',
      benefits: ['Relieves stress', 'Calms nervous system', 'Stretches spine'],
      instructions: [
        'Kneel on the floor',
        'Sit back on your heels',
        'Fold forward bringing forehead to floor',
        'Extend arms forward or alongside body',
        'Hold for 5-10 breaths'
      ],
      color: 'bg-orange-500'
    },
    {
      id: 'side-plank',
      name: 'Supported Side Plank',
      description: 'A strengthening pose that builds core stability',
      duration: '2-3 minutes',
      difficulty: 'Intermediate',
      benefits: ['Strengthens core', 'Improves balance', 'Builds arm strength'],
      instructions: [
        'Start in plank position',
        'Shift weight to one arm',
        'Stack feet and lift hips',
        'Extend top arm toward ceiling',
        'Hold for 3-5 breaths each side'
      ],
      color: 'bg-purple-500'
    },
    {
      id: 'wind-relieving',
      name: 'Wind Relieving Pose',
      description: 'A gentle twist that aids digestion and relieves bloating',
      duration: '3-5 minutes',
      difficulty: 'Beginner',
      benefits: ['Aids digestion', 'Relieves bloating', 'Stretches lower back'],
      instructions: [
        'Lie on your back',
        'Bring knees to chest',
        'Wrap arms around knees',
        'Gently rock side to side',
        'Hold for 5-8 breaths'
      ],
      color: 'bg-red-500'
    }
  ];

  const selectedPoseData = yogaPoses.find(pose => pose.id === selectedPose);

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
          <h1 className="text-2xl font-bold text-[#14181B]">Yoga Poses</h1>
        </div>
      </div>

      <div className="p-6">
        {!selectedPose ? (
          /* Yoga Poses Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaPoses.map((pose) => (
              <div
                key={pose.id}
                onClick={() => setSelectedPose(pose.id)}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className={`w-16 h-16 ${pose.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#14181B] mb-2">{pose.name}</h3>
                <p className="text-[#57636C] mb-4">{pose.description}</p>
                <div className="flex items-center space-x-4 text-sm text-[#57636C]">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{pose.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{pose.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Selected Pose Details */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setSelectedPose(null)}
                  className="text-[#57636C] hover:text-[#14181B] flex items-center space-x-2"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Poses</span>
                </button>
                <div className={`px-3 py-1 ${selectedPoseData?.color} text-white rounded-full text-sm font-medium`}>
                  {selectedPoseData?.difficulty}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#14181B] mb-4">{selectedPoseData?.name}</h2>
                  <p className="text-[#57636C] mb-6">{selectedPoseData?.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock size={20} className="text-[#57636C]" />
                      <span className="text-[#14181B] font-medium">Duration: {selectedPoseData?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={20} className="text-[#57636C]" />
                      <span className="text-[#14181B] font-medium">Level: {selectedPoseData?.difficulty}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#14181B] mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedPoseData?.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#91EEA5] rounded-full"></div>
                          <span className="text-[#57636C]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#14181B] mb-4">Instructions</h3>
                  <ol className="space-y-3">
                    {selectedPoseData?.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#91EEA5] text-[#14181B] rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-[#57636C]">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full bg-[#91EEA5] text-[#14181B] py-3 rounded-lg font-semibold text-lg hover:bg-[#7DD3A0] transition-colors">
                  Start Practice
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YogaPage;

"use client";

import { useState } from 'react';
import { ArrowLeft, Plus, Check, Trash2, Edit3, Calendar, Clock } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Complete morning meditation',
      description: 'Practice 10 minutes of mindfulness meditation',
      completed: true,
      dueDate: '2024-01-15',
      priority: 'medium',
      category: 'Wellness'
    },
    {
      id: 2,
      title: 'Take a 10-minute walk',
      description: 'Go for a short walk around the neighborhood',
      completed: false,
      dueDate: '2024-01-15',
      priority: 'low',
      category: 'Exercise'
    },
    {
      id: 3,
      title: 'Practice breathing exercises',
      description: 'Do 5 minutes of deep breathing exercises',
      completed: false,
      dueDate: '2024-01-15',
      priority: 'high',
      category: 'Wellness'
    },
    {
      id: 4,
      title: 'Read therapy resources',
      description: 'Review the anxiety management article',
      completed: false,
      dueDate: '2024-01-16',
      priority: 'medium',
      category: 'Learning'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    category: 'Wellness'
  });

  const categories = ['Wellness', 'Exercise', 'Learning', 'Social', 'Work', 'Personal'];
  const priorities = [
    { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'High', color: 'bg-red-100 text-red-800' }
  ];

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now(),
        title: newTask.title,
        description: newTask.description,
        completed: false,
        dueDate: newTask.dueDate,
        priority: newTask.priority,
        category: newTask.category
      };
      setTasks([...tasks, task]);
      setNewTask({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        category: 'Wellness'
      });
      setShowAddForm(false);
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task: Task) => {
    setEditingTask(task);
    setNewTask({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      category: task.category
    });
    setShowAddForm(true);
  };

  const updateTask = () => {
    if (editingTask && newTask.title.trim()) {
      setTasks(tasks.map(task => 
        task.id === editingTask.id 
          ? { ...task, ...newTask }
          : task
      ));
      setEditingTask(null);
      setNewTask({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        category: 'Wellness'
      });
      setShowAddForm(false);
    }
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingTask(null);
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'medium',
      category: 'Wellness'
    });
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#F1F4F8]">
      {/* Header */}
      <div className="bg-[#91EEA5] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <ArrowLeft size={24} className="text-[#14181B]" />
            </button>
            <h1 className="text-2xl font-bold text-[#14181B]">Tasks</h1>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-white bg-opacity-20 text-[#14181B] px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#14181B] mb-2">{totalTasks}</div>
            <div className="text-[#57636C]">Total Tasks</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{completedTasks}</div>
            <div className="text-[#57636C]">Completed</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#91EEA5] mb-2">{completionRate}%</div>
            <div className="text-[#57636C]">Completion Rate</div>
          </div>
        </div>

        {/* Add/Edit Task Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-[#14181B] mb-4">
              {editingTask ? 'Edit Task' : 'Add New Task'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#14181B] mb-2">Title</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#91EEA5] focus:outline-none"
                  placeholder="Enter task title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#14181B] mb-2">Description</label>
                <textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#91EEA5] focus:outline-none"
                  rows={3}
                  placeholder="Enter task description"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#14181B] mb-2">Due Date</label>
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#91EEA5] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#14181B] mb-2">Priority</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value as 'low' | 'medium' | 'high'})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#91EEA5] focus:outline-none"
                  >
                    {priorities.map(priority => (
                      <option key={priority.value} value={priority.value}>
                        {priority.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#14181B] mb-2">Category</label>
                  <select
                    value={newTask.category}
                    onChange={(e) => setNewTask({...newTask, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#91EEA5] focus:outline-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={editingTask ? updateTask : addTask}
                  className="bg-[#91EEA5] text-[#14181B] px-6 py-2 rounded-lg font-semibold hover:bg-[#7DD3A0] transition-colors"
                >
                  {editingTask ? 'Update Task' : 'Add Task'}
                </button>
                <button
                  onClick={cancelForm}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tasks List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`bg-white rounded-xl p-6 shadow-sm transition-all ${
                task.completed ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? 'bg-[#91EEA5] border-[#91EEA5]'
                      : 'bg-[#E0FFEA] border-[#91EEA5]'
                  }`}
                >
                  {task.completed && <Check size={16} className="text-white" />}
                </button>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-lg font-semibold ${
                      task.completed ? 'line-through text-[#57636C]' : 'text-[#14181B]'
                    }`}>
                      {task.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        priorities.find(p => p.value === task.priority)?.color
                      }`}>
                        {priorities.find(p => p.value === task.priority)?.label}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {task.category}
                      </span>
                    </div>
                  </div>
                  
                  {task.description && (
                    <p className="text-[#57636C] mb-3">{task.description}</p>
                  )}
                  
                  <div className="flex items-center space-x-4 text-sm text-[#57636C]">
                    {task.dueDate && (
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => editTask(task)}
                    className="p-2 text-[#57636C] hover:text-[#14181B] hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-2 text-[#57636C] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {tasks.length === 0 && (
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-[#57636C] mb-4">No tasks yet</div>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-[#91EEA5] text-[#14181B] px-6 py-2 rounded-lg font-semibold hover:bg-[#7DD3A0] transition-colors"
              >
                Add Your First Task
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;

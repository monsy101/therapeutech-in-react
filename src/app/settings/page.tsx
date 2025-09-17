"use client";

import { useState } from 'react';
import { 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Download, 
  Trash2, 
  Key, 
  Smartphone,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Eye,
  EyeOff
} from 'lucide-react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
      sessionReminders: true,
      resourceUpdates: true,
      weeklyReports: false
    },
    privacy: {
      profileVisibility: 'private',
      dataSharing: false,
      analytics: true,
      marketing: false
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium',
      language: 'en'
    },
    security: {
      twoFactor: false,
      sessionTimeout: '30',
      passwordChange: false
    }
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value
      }
    }));
  };

  const handlePrivacyChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value
      }
    }));
  };

  const handleAppearanceChange = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [key]: value
      }
    }));
  };

  const handleSecurityChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      security: {
        ...prev.security,
        [key]: value
      }
    }));
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Password change requested');
    setShowPasswordForm(false);
    setPasswordData({ current: '', new: '', confirm: '' });
  };

  const exportData = () => {
    // Handle data export logic here
    console.log('Data export requested');
  };

  const deleteAccount = () => {
    // Handle account deletion logic here
    console.log('Account deletion requested');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Customize your Therapa experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <nav className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
                Notifications
              </button>
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                Privacy
              </button>
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                Appearance
              </button>
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                Security
              </button>
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                Data & Privacy
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="text-blue-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Email Notifications</h3>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.email}
                    onChange={(e) => handleNotificationChange('email', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Push Notifications</h3>
                  <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.push}
                    onChange={(e) => handleNotificationChange('push', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Session Reminders</h3>
                  <p className="text-sm text-gray-600">Get reminded about upcoming sessions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.sessionReminders}
                    onChange={(e) => handleNotificationChange('sessionReminders', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-green-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Privacy</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Visibility
                </label>
                <select
                  value={settings.privacy.profileVisibility}
                  onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="private">Private</option>
                  <option value="friends">Friends Only</option>
                  <option value="public">Public</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Data Sharing</h3>
                  <p className="text-sm text-gray-600">Allow sharing of anonymized data for research</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.dataSharing}
                    onChange={(e) => handlePrivacyChange('dataSharing', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="text-purple-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Appearance</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAppearanceChange('theme', 'light')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                      settings.appearance.theme === 'light'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <Sun size={16} />
                    <span>Light</span>
                  </button>
                  <button
                    onClick={() => handleAppearanceChange('theme', 'dark')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                      settings.appearance.theme === 'dark'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <Moon size={16} />
                    <span>Dark</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size
                </label>
                <select
                  value={settings.appearance.fontSize}
                  onChange={(e) => handleAppearanceChange('fontSize', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Key className="text-red-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Security</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.security.twoFactor}
                    onChange={(e) => handleSecurityChange('twoFactor', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Timeout
                </label>
                <select
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleSecurityChange('sessionTimeout', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="120">2 hours</option>
                </select>
              </div>

              <div>
                <button
                  onClick={() => setShowPasswordForm(!showPasswordForm)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Change Password
                </button>
              </div>

              {showPasswordForm && (
                <form onSubmit={handlePasswordChange} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.current}
                      onChange={(e) => setPasswordData(prev => ({ ...prev, current: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.new}
                      onChange={(e) => setPasswordData(prev => ({ ...prev, new: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.confirm}
                      onChange={(e) => setPasswordData(prev => ({ ...prev, confirm: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Update Password
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPasswordForm(false)}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Data & Privacy */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Download className="text-orange-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Data & Privacy</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Export Data</h3>
                  <p className="text-sm text-gray-600">Download a copy of your data</p>
                </div>
                <button
                  onClick={exportData}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Export
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Delete Account</h3>
                  <p className="text-sm text-gray-600">Permanently delete your account and data</p>
                </div>
                <button
                  onClick={deleteAccount}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

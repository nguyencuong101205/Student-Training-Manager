import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { mockUser } from './data/mockData';
import { Layers } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(mockUser);

  const handleLoginSuccess = (userData) => {
    setUser((prev) => ({
      ...prev,
      ...userData
    }));
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  return (
    <div className="relative min-h-screen">
      {currentPage === 'login' ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <HomePage user={user} onLogout={handleLogout} />
      )}

      <div className="fixed bottom-3 right-3 z-50 flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-900 text-white text-xs px-3 py-1.5 rounded-full shadow-2xl backdrop-blur-md border border-slate-700/80 transition select-none">
        <Layers className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-slate-400 hidden sm:inline">Chế độ xem:</span>
        <button
          onClick={() => setCurrentPage('login')}
          className={`px-2 py-0.5 rounded-full transition font-semibold ${
            currentPage === 'login'
              ? 'bg-blue-600 text-white shadow'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          Trang Login
        </button>
        <span className="text-slate-600">|</span>
        <button
          onClick={() => setCurrentPage('home')}
          className={`px-2 py-0.5 rounded-full transition font-semibold ${
            currentPage === 'home'
              ? 'bg-blue-600 text-white shadow'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          Trang Home
        </button>
      </div>
    </div>
  );
}

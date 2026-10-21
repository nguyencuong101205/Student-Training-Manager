import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import QuickCards from '../components/QuickCards';
import NewsSection from '../components/NewsSection';
import ScheduleView from '../components/ScheduleView';
import TuitionView from '../components/TuitionView';
import CourseRegistrationView from '../components/CourseRegistrationView';
import ProfileView from '../components/ProfileView';
import ArticleModal from '../components/ArticleModal';

export default function HomePage({ user, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'schedule' | 'tuition' | 'registration' | 'profile'
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const renderContent = () => {
    switch (currentView) {
      case 'schedule':
        return <ScheduleView />;
      case 'tuition':
        return <TuitionView />;
      case 'registration':
        return <CourseRegistrationView />;
      case 'profile':
        return <ProfileView />;
      case 'home':
      default:
        return (
          <>
            <QuickCards onNavigate={setCurrentView} />
            <NewsSection 
              onSelectArticle={setSelectedArticle} 
              searchQuery={searchQuery}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#edf2f8] flex flex-col font-sans text-slate-800">
      {/* Top Navbar */}
      <Header
        user={user}
        onLogout={onLogout}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onNavigate={setCurrentView}
      />

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          currentView={currentView}
          onNavigate={(view) => {
            setCurrentView(view);
            // On mobile close sidebar after click
            if (window.innerWidth < 768) {
              setSidebarOpen(false);
            }
          }}
        />

        {/* Dynamic Main Workspace */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 max-w-[1600px] mx-auto w-full">
          {/* Breadcrumb if not in home view */}
          {currentView !== 'home' && (
            <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
              <button 
                onClick={() => setCurrentView('home')} 
                className="hover:text-blue-600 font-semibold"
              >
                Trang chủ
              </button>
              <span>/</span>
              <span className="text-slate-800 font-medium capitalize">
                {currentView === 'schedule' && 'Thời khóa biểu'}
                {currentView === 'tuition' && 'Tra cứu học phí'}
                {currentView === 'registration' && 'Đăng ký học'}
                {currentView === 'profile' && 'Hồ sơ sinh viên'}
              </span>
            </div>
          )}

          {renderContent()}
        </main>
      </div>

      {/* Article Detail Modal */}
      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </div>
  );
}

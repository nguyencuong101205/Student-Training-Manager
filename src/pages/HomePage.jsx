import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StudentWelcomeBanner from '../components/StudentWelcomeBanner';
import QuickCards from '../components/QuickCards';
import ScheduleView from '../components/ScheduleView';
import NewsSection from '../components/NewsSection';
import TuitionView from '../components/TuitionView';
import CourseRegistrationView from '../components/CourseRegistrationView';
import ProfileView from '../components/ProfileView';
import GradeLookupView from '../components/GradeLookupView';
import AppealModal from '../components/AppealModal';
import ArticleModal from '../components/ArticleModal';
import PortalFooter from '../components/PortalFooter';

export default function HomePage({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'schedule' | 'tuition' | 'registration' | 'profile' | 'grades'
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAppealOpen, setIsAppealOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'grades':
        return <GradeLookupView />;
      case 'tuition':
        return <TuitionView />;
      case 'registration':
        return <CourseRegistrationView />;
      case 'profile':
        return <ProfileView />;
      case 'schedule':
        return <ScheduleView />;
      case 'home':
      default:
        return (
          <div className="space-y-6">
            {/* 1. Banner Tổng quan Sinh viên Thông minh */}
            <StudentWelcomeBanner onNavigate={setCurrentView} />

            {/* 2. 4 Thẻ truy cập nhanh */}
            <QuickCards onNavigate={setCurrentView} />

            {/* 3. Lịch học & Thời khóa biểu tuần trực tiếp trên trang chủ */}
            <ScheduleView />

            {/* 4. Hai cột bảng tin Đào tạo & Nhà trường */}
            <NewsSection 
              onSelectArticle={setSelectedArticle} 
              searchQuery={searchQuery}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#edf2f8] flex flex-col font-sans text-slate-800">
      {/* Modern Top Header with menu button (Clean typography, no logo) */}
      <Header
        user={user}
        onLogout={onLogout}
        onToggleSidebar={() => setIsMenuOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onNavigate={setCurrentView}
        currentView={currentView}
      />

      {/* Main Workspace */}
      <main className="flex-1 p-4 sm:p-6 lg:p-7 max-w-7xl mx-auto w-full">
        {/* Breadcrumb if not in home view */}
        {currentView !== 'home' && (
          <div className="mb-6 flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <button 
                onClick={() => setCurrentView('home')} 
                className="hover:text-blue-600 font-semibold text-slate-600 transition"
              >
                Trang chủ
              </button>
              <span>/</span>
              <span className="text-[#1b5fc1] font-extrabold capitalize text-xs">
                {currentView === 'grades' && 'Góc học tập / Tra cứu điểm & Bảng điểm'}
                {currentView === 'schedule' && 'Thời khóa biểu tuần'}
                {currentView === 'tuition' && 'Tra cứu công nợ & học phí'}
                {currentView === 'registration' && 'Đăng ký học phần'}
                {currentView === 'profile' && 'Hồ sơ cá nhân & Kết quả học tập'}
              </span>
            </div>

            <button
              onClick={() => setCurrentView('home')}
              className="text-xs font-bold text-[#1b5fc1] hover:text-blue-800 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition active:scale-95"
            >
              ← Quay lại trang chủ
            </button>
          </div>
        )}

        {renderContent()}
      </main>

      {/* Portal Footer */}
      <PortalFooter />

      {/* Blurred Overlay Full-Page Menu Drawer with exact UTT Tree Nodes */}
      <Sidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          setIsMenuOpen(false);
        }}
        onLogout={onLogout}
        onOpenAppeal={() => setIsAppealOpen(true)}
      />

      {/* Article Detail Modal */}
      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />

      {/* Đăng ký xin phúc khảo Modal */}
      <AppealModal 
        isOpen={isAppealOpen} 
        onClose={() => setIsAppealOpen(false)} 
      />
    </div>
  );
}

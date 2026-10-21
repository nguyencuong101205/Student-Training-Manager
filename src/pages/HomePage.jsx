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
import OneStopServiceView from '../components/OneStopServiceView';
import ExamScheduleView from '../components/ExamScheduleView';
import AppealModal from '../components/AppealModal';
import ArticleModal from '../components/ArticleModal';
import PortalFooter from '../components/PortalFooter';

export default function HomePage({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAppealOpen, setIsAppealOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'one-stop':
        return <OneStopServiceView />;
      case 'exam-schedule':
        return <ExamScheduleView />;
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
            <StudentWelcomeBanner onNavigate={setCurrentView} />
            <QuickCards onNavigate={setCurrentView} />
            <ScheduleView />
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
      <Header
        user={user}
        onLogout={onLogout}
        onToggleSidebar={() => setIsMenuOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onNavigate={setCurrentView}
        currentView={currentView}
      />

      <main className="flex-1 p-4 sm:p-6 lg:p-7 max-w-7xl mx-auto w-full">
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
                {currentView === 'one-stop' && 'Dịch vụ một cửa sinh viên điện tử'}
                {currentView === 'exam-schedule' && 'Lịch thi kết thúc học phần'}
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

      <PortalFooter />

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

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />

      <AppealModal 
        isOpen={isAppealOpen} 
        onClose={() => setIsAppealOpen(false)} 
      />
    </div>
  );
}

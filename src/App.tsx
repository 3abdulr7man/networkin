import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardView } from './views/DashboardView';
import { LecturesView } from './views/LecturesView';
import { FlashcardsView } from './views/FlashcardsView';
import { GlossaryView } from './views/GlossaryView';
import { ExamsView } from './views/ExamsView';
import { 
  Activity, BookOpen, Layers, HelpCircle, Shield, 
  Sun, Moon, Globe, Info
} from 'lucide-react';

function App() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  // Navigation state
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem('active_tab') || 'dashboard';
  });

  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to Dark Mode
  });

  // Onboarding Modal state
  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => {
    return !localStorage.getItem('onboarding_completed');
  });

  // Save active tab
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem('active_tab', tab);
  };

  // Toggle Theme
  const toggleTheme = () => {
    setIsDark(prev => {
      const nextTheme = !prev;
      localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
      return nextTheme;
    });
  };

  // Toggle Language
  const toggleLanguage = () => {
    const nextLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('lang', nextLang);
  };

  // Onboarding close helper
  const closeOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('onboarding_completed', 'true');
  };

  // Apply classes to document elements on theme/lang change
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    // Apply Theme
    if (isDark) {
      root.classList.add('dark');
      body.classList.add('dark');
      body.style.backgroundColor = '#0b0f19';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      body.style.backgroundColor = '#f8fafc';
    }

    // Apply Text direction
    root.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    root.setAttribute('lang', i18n.language);
  }, [isDark, isRtl, i18n.language]);

  // Tab definitions
  const tabs = [
    { id: 'dashboard', label: t('dashboard'), icon: Activity },
    { id: 'lectures', label: t('lectures'), icon: BookOpen },
    { id: 'flashcards', label: t('flashcards'), icon: Layers },
    { id: 'glossary', label: t('glossary'), icon: HelpCircle },
    { id: 'exams', label: t('exams'), icon: Shield },
  ];

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${isDark ? 'bg-darkbg text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* 1. TOP HEADER SHIELD */}
      <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors ${isDark ? 'bg-darkbg/85 border-slate-900/60' : 'bg-white/85 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo Title */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleTabChange('dashboard')}>
            <div className="w-9 h-9 rounded-xl bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
              <Shield className="h-5 w-5 text-slate-950 font-bold" />
            </div>
            <div>
              <span className="font-extrabold text-sm md:text-base tracking-wide bg-gradient-to-r from-primary-500 to-teal-400 bg-clip-text text-transparent">
                Networks Hub
              </span>
              <span className="block text-[9px] text-slate-450 dark:text-slate-500 font-mono tracking-widest leading-none font-bold uppercase">
                Faculty of CS
              </span>
            </div>
          </div>

          {/* Quick Actions (Lang & Theme Toggle) */}
          <div className="flex items-center gap-3">
            
            {/* Lang button */}
            <button 
              onClick={toggleLanguage}
              className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              aria-label={t('arabicBtn')}
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline font-mono">
                {isRtl ? t('englishBtn') : t('arabicBtn')}
              </span>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition ${isDark ? 'bg-slate-900 border-slate-800 text-amber-400 hover:text-amber-300' : 'bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200'}`}
              aria-label={t('themeToggle')}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            
          </div>
        </div>
      </header>

      {/* 2. DYNAMIC MAIN HUB CONTAINER */}
      <main className="py-6 min-h-[calc(100vh-160px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'dashboard' && <DashboardView onNavigate={handleTabChange} />}
            {activeTab === 'lectures' && <LecturesView />}
            {activeTab === 'flashcards' && <FlashcardsView />}
            {activeTab === 'glossary' && <GlossaryView />}
            {activeTab === 'exams' && <ExamsView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. STICKY THUMB-FRIENDLY BOTTOM NAVIGATION BAR (Mobile First) */}
      <nav className={`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-md transition-colors ${isDark ? 'bg-[#090d16]/95 border-slate-900' : 'bg-white/95 border-slate-200'} md:relative md:border-t-0 md:bg-transparent md:backdrop-blur-none`}>
        <div className="max-w-md mx-auto md:max-w-2xl px-2 md:px-0">
          <div className="flex justify-around md:justify-center md:gap-4 py-2.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-1.5 rounded-xl transition duration-300 relative ${
                    isActive 
                      ? 'text-primary-500 font-bold bg-primary-500/10 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                >
                  {/* Accent glow strictly on active tab */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl border border-primary-500/20 shadow-[0_0_12px_rgba(20,184,166,0.15)] pointer-events-none" />
                  )}
                  <Icon className="h-4.5 w-4.5" />
                  <span className="text-[10px] md:text-xs font-medium tracking-wide">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Padding space to prevent layout cutoff on mobile sticky footer */}
      <div className="h-16 md:hidden" />

      {/* 4. IMMUTABLE SYSTEM FOOTER (CREDITS) */}
      <footer className={`py-8 font-mono text-center text-xs border-t transition-colors ${isDark ? 'bg-[#090d16] border-slate-900 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="text-slate-400 font-bold text-sm tracking-wide">
            Developed by Abdulrhman Elghareeb
          </p>
          <p className="opacity-75">
            Faculty of Computers and Artificial Intelligence • Networking Fundamentals Exam Platform
          </p>
        </div>
      </footer>

      {/* 5. ONBOARDING WELCOME MODAL */}
      <AnimatePresence>
        {showOnboarding && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-2xl p-6 relative overflow-hidden"
            >
              {/* Top Accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 bg-primary-500/10 text-primary-500 rounded-2xl flex items-center justify-center mx-auto border border-primary-500/20">
                  <Info className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {t('onboardingTitle')}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  {t('onboardingDesc')}
                </p>

                <div className="pt-4">
                  <button 
                    onClick={closeOnboarding}
                    className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-slate-950 font-bold rounded-xl shadow-md transition active:scale-95 duration-150"
                  >
                    {t('closeOnboarding')}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;

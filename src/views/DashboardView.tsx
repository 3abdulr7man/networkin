import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Award, CheckCircle, Clock, BookOpen, Layers, HelpCircle, Activity } from 'lucide-react';

interface DashboardViewProps {
  onNavigate: (tab: string) => void;
}

// Target countdown: Thursday 11 June 2026 at 11:30 AM
const TARGET_DATE = new Date('2026-06-11T11:30:00+03:00');

const calculateTimeLeft = (onPassed?: () => void) => {
  const now = new Date();
  const difference = TARGET_DATE.getTime() - now.getTime();
  
  if (difference <= 0) {
    if (onPassed) onPassed();
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [examPassed, setExamPassed] = useState(() => {
    return new Date().getTime() >= TARGET_DATE.getTime();
  });
  
  // Stats state initialized directly from localStorage
  const [stats, setStats] = useState(() => {
    const solved = parseInt(localStorage.getItem('solved_questions') || '0', 10);
    const correct = parseInt(localStorage.getItem('correct_answers') || '0', 10);
    const wrong = parseInt(localStorage.getItem('wrong_answers') || '0', 10);
    const sessions = parseInt(localStorage.getItem('study_sessions') || '1', 10);
    
    const accuracy = solved > 0 ? Math.round((correct / solved) * 100) : 0;
    
    return {
      solved,
      correct,
      wrong,
      accuracy,
      sessions,
      sessionSeconds: 0
    };
  });

  useEffect(() => {
    // 1. Calculate Countdown
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(() => setExamPassed(true)));
    }, 1000);

    // 2. Track current session time
    const sessionTimer = setInterval(() => {
      setStats(prev => {
        const currentSecs = prev.sessionSeconds + 1;
        // Save current session time in case of reload
        sessionStorage.setItem('current_session_seconds', currentSecs.toString());
        return { ...prev, sessionSeconds: currentSecs };
      });
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(sessionTimer);
    };
  }, []);

  // Format session time
  const formatSessionTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 pb-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary-500 animate-pulse" />
            {isRtl ? "لوحة المتابعة الشخصية" : "Personal Dashboard"}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
            {isRtl ? "تتبع تقدمك في الاستعداد للاختبار النهائي ومعدلات دقة إجابتك" : "Monitor your exam preparation statistics and accuracy rate"}
          </p>
        </div>
        <div className="bg-primary-500/10 border border-primary-500/20 text-primary-500 dark:text-primary-400 text-xs px-4 py-2 rounded-xl flex items-center gap-2 font-semibold">
          <Clock className="h-4 w-4 animate-spin-slow" />
          <span>
            {t('sessionTimer')}{formatSessionTime(stats.sessionSeconds)}
          </span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left column - Countdown Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary-500 font-bold flex items-center gap-1.5 mb-3">
              <Calendar className="h-3.5 w-3.5" />
              {t('countdown')}
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isRtl ? "امتحان نظريات وتطبيقات الشبكات" : "Networking Fundamentals Final Exam"}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
              {isRtl ? "الموعد الرسمي: الخميس 11 يونيو الساعة 11:30 صباحاً" : "Official Date: Thursday 11 June at 11:30 AM"}
            </p>
          </div>

          <div className="my-8 grid grid-cols-4 gap-3 md:gap-6">
            {[
              { label: t('days'), val: timeLeft.days },
              { label: t('hours'), val: timeLeft.hours },
              { label: t('minutes'), val: timeLeft.minutes },
              { label: t('seconds'), val: timeLeft.seconds }
            ].map((unit, i) => (
              <div key={i} className="flex flex-col items-center bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 rounded-xl p-3 md:p-5 relative">
                <span className="text-2xl md:text-4xl font-extrabold font-mono text-primary-500 dark:text-primary-400 tracking-tight">
                  {unit.val < 10 ? `0${unit.val}` : unit.val}
                </span>
                <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-2 font-bold uppercase tracking-wider">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {examPassed ? (
            <div className="bg-red-500/10 text-red-500 dark:text-red-400 border border-red-500/20 text-xs px-4 py-3 rounded-xl font-medium text-center">
              {t('countdownEnded')}
            </div>
          ) : (
            <div className="bg-primary-500/5 text-primary-600 dark:text-primary-400 border border-primary-500/10 text-xs px-4 py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-ping" />
              {isRtl ? "لست وحدك، ليلة الامتحان نقضيها سوياً خطوة بخطوة." : "You're not alone. We'll get through this step by step."}
            </div>
          )}
        </motion.div>

        {/* Right column - Progress Ring */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-teal-500 font-bold flex items-center gap-1.5 mb-3">
              <Activity className="h-4 w-4" />
              {isRtl ? "التقدم العام في المنهج" : "Syllabus Progress"}
            </span>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {isRtl ? "معدل الإنجاز الدراسي" : "Study Completion Rate"}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
              {isRtl ? "تتبع نسبة الأسئلة التي قمت بحلها من إجمالي بنك الأسئلة للمقرر." : "Track the percentage of questions solved from the course test bank."}
            </p>
          </div>

          {/* Progress Circle container */}
          <div className="my-6 flex justify-center items-center relative">
            <svg className="w-32 h-32 transform -rotate-90">
              {/* Outer track */}
              <circle
                cx="64"
                cy="64"
                r="52"
                className="stroke-slate-100 dark:stroke-slate-800"
                strokeWidth="10"
                fill="transparent"
              />
              {/* Inner animated circle */}
              <motion.circle
                cx="64"
                cy="64"
                r="52"
                className="stroke-primary-500"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 52}
                initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                animate={{ strokeDashoffset: (2 * Math.PI * 52) * (1 - (stats.solved / 99)) }}
                transition={{ duration: 1 }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                {Math.min(100, Math.round((stats.solved / 99) * 100))}%
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold tracking-wider uppercase">
                {t('studyProgress')}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-800/80 pt-4">
            <span className="text-slate-500 dark:text-slate-400">
              {isRtl ? `تم حل ${stats.solved} من أصل 99 سؤال` : `Solved ${stats.solved} of 99 questions`}
            </span>
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-bold px-2 py-0.5 rounded">
              {99 - stats.solved} {isRtl ? "متبقي" : "left"}
            </span>
          </div>
        </motion.div>

      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Solved Stats Card */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <div className="p-3 bg-teal-500/10 text-teal-500 dark:text-teal-400 rounded-xl">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{t('solved')}</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 font-mono">{stats.solved}</h3>
          </div>
        </div>

        {/* Accuracy Stats Card */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <div className="p-3 bg-primary-500/10 text-primary-500 dark:text-primary-400 rounded-xl">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{t('accuracy')}</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 font-mono">{stats.accuracy}%</h3>
          </div>
        </div>

        {/* Session Stats Card */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <div className="p-3 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 rounded-xl">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{t('sessions')}</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 font-mono">{stats.sessions}</h3>
          </div>
        </div>

      </div>

      {/* Main Grid: Hub Navigation & Developer Credits */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Navigation Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary-500" />
            {t('quickAccess')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Summary Hub Link */}
            <button 
              onClick={() => onNavigate('lectures')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary-500/30 transition text-right sm:text-left flex items-start justify-between group"
            >
              <div className="space-y-1 text-left">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest font-mono">01. {t('lectures')}</span>
                <h4 className="font-bold text-slate-950 dark:text-white group-hover:text-primary-500 transition">{isRtl ? "ملخصات المحاضرات" : "Lecture summaries"}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? "مراجعة شاملة مدعمة بأكواد وألوان مفتاحية" : "Thorough syllabus summaries with highlighted keywords"}</p>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/80 group-hover:bg-primary-500/10 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition">
                <BookOpen className="h-5 w-5" />
              </div>
            </button>

            {/* Flashcards Hub Link */}
            <button 
              onClick={() => onNavigate('flashcards')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-500/30 transition text-right sm:text-left flex items-start justify-between group"
            >
              <div className="space-y-1 text-left">
                <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest font-mono">02. {t('flashcards')}</span>
                <h4 className="font-bold text-slate-950 dark:text-white group-hover:text-amber-500 transition">{isRtl ? "بطاقات الاستذكار ثلاثية الأبعاد" : "3D Flashcards Hub"}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? "16 بطاقة تفاعلية سريعة ومثيرة" : "16 interactive double-sided terms cards"}</p>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/80 group-hover:bg-amber-500/10 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition">
                <Layers className="h-5 w-5" />
              </div>
            </button>

            {/* Glossary Grid Link */}
            <button 
              onClick={() => onNavigate('glossary')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition text-right sm:text-left flex items-start justify-between group"
            >
              <div className="space-y-1 text-left">
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">03. {t('glossary')}</span>
                <h4 className="font-bold text-slate-950 dark:text-white group-hover:text-indigo-500 transition">{isRtl ? "شبكة الاختصارات والمفاهيم" : "Glossary Grid"}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? "18 مصطلحاً شبكياً للبحث الفوري" : "18 fundamental acronyms and abbreviations"}</p>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/80 group-hover:bg-indigo-500/10 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition">
                <HelpCircle className="h-5 w-5" />
              </div>
            </button>

            {/* Exams Link */}
            <button 
              onClick={() => onNavigate('exams')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-teal-500/30 transition text-right sm:text-left flex items-start justify-between group"
            >
              <div className="space-y-1 text-left">
                <span className="text-xs font-semibold text-teal-500 uppercase tracking-widest font-mono">04. {t('exams')}</span>
                <h4 className="font-bold text-slate-950 dark:text-white group-hover:text-teal-500 transition">{isRtl ? "بنك الامتحانات والمحاكاة" : "Exams Hub Engine"}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? "امتحانات فاينال، ميدتيرم، محاكي عشوائي" : "Interactive past finals, midterms & simulator"}</p>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/80 group-hover:bg-teal-500/10 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition">
                <Award className="h-5 w-5" />
              </div>
            </button>

          </div>
        </div>

        {/* Developer Attribution Card */}
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle teal light ray */}
          <div className="absolute top-0 left-0 w-36 h-36 bg-teal-500/10 rounded-full blur-2xl -ml-12 -mt-12 pointer-events-none" />
          
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-2">
              System Creator
            </span>
            <h3 className="text-xl font-bold font-mono tracking-wide text-white">
              Abdulrhman Elghareeb
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              Developed as the ultimate, premium computer network engineering companion for Computer Science and FCAI students. 
              Engineered with dark mode isolation, offline-first caching, and custom calculated SVGs.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800/60">
            <a 
              href="https://www.instagram.com/3abdulr7man.1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/40 text-teal-300 hover:text-white transition group"
            >
              <span className="text-xs font-bold font-mono group-hover:translate-x-1 duration-200">
                Instagram: @3abdulr7man.1
              </span>
              <svg 
                className="h-4 w-4 text-teal-400 group-hover:scale-125 duration-200 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

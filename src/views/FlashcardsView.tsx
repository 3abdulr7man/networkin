import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FLASHCARDS_DATA } from '../data/flashcards';
import { Layers, ChevronLeft, ChevronRight, RefreshCw, Key } from 'lucide-react';

export const FlashcardsView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Log viewed card count in analytics
  useEffect(() => {
    const analyticsViewed = JSON.parse(localStorage.getItem('viewed_flashcards') || '[]');
    const currentId = FLASHCARDS_DATA[currentIndex].id;
    if (!analyticsViewed.includes(currentId)) {
      analyticsViewed.push(currentId);
      localStorage.setItem('viewed_flashcards', JSON.stringify(analyticsViewed));
    }
  }, [currentIndex]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === FLASHCARDS_DATA.length - 1 ? 0 : prev + 1));
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? FLASHCARDS_DATA.length - 1 : prev - 1));
    }, 150);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const currentCard = FLASHCARDS_DATA[currentIndex];

  return (
    <div className="max-w-xl mx-auto px-4 pb-12 space-y-6 flex flex-col items-center">
      
      {/* View Header */}
      <div className="w-full text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-2">
          <Layers className="h-8 w-8 text-primary-500" />
          {t('flashcards')}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
          {isRtl ? "16 بطاقة تفاعلية لحفظ وفهم المفاهيم بطريقة ثلاثية الأبعاد سريعة" : "16 interactive 3D cards to review definitions and core facts"}
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-between w-full text-slate-500 dark:text-slate-400 text-xs font-mono">
        <span>{t('flashcards')}</span>
        <span>{currentIndex + 1} / {FLASHCARDS_DATA.length}</span>
      </div>

      {/* 3D Flashcard Container */}
      <div className="w-full aspect-[4/3] min-h-[260px] perspective-1000 relative group">
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`w-full h-full rounded-3xl border border-slate-200 dark:border-slate-800/80 cursor-pointer shadow-xl relative transform-style-3d transition-transform duration-500 select-none ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 w-full h-full p-6 md:p-8 bg-white dark:bg-slate-900 rounded-3xl backface-hidden flex flex-col justify-between items-center text-center">
            {/* Top Tag */}
            <span className="text-[10px] font-bold font-mono tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full uppercase">
              {currentCard.topic}
            </span>
            
            {/* Center Term */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {isRtl ? currentCard.titleAr : currentCard.titleEn}
            </h3>

            {/* Bottom Flip Indicator */}
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1.5 font-mono">
              <RefreshCw className="h-3 w-3 animate-spin-slow" />
              {t('flipCard')}
            </span>
          </div>

          {/* BACK SIDE */}
          <div className="absolute inset-0 w-full h-full p-6 md:p-8 bg-slate-950 dark:bg-slate-950 text-white rounded-3xl backface-hidden rotate-y-180 flex flex-col justify-between items-center text-center border border-primary-500/30">
            {/* Top Tag */}
            <span className="text-[10px] font-bold font-mono tracking-widest text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full uppercase">
              {currentCard.topic}
            </span>
            
            {/* Center Definition */}
            <div className="max-w-[90%] overflow-y-auto max-h-[140px] px-2 py-1 scrollbar-thin">
              <p className="text-sm md:text-base leading-relaxed text-slate-200">
                {isRtl ? currentCard.descAr : currentCard.descEn}
              </p>
            </div>

            {/* Bottom Indicator */}
            <span className="text-[10px] font-medium text-slate-500 flex items-center gap-1.5 font-mono">
              <RefreshCw className="h-3 w-3" />
              {t('flipCard')}
            </span>
          </div>
        </div>
      </div>

      {/* Nav Controls */}
      <div className="flex items-center gap-4 w-full justify-center mt-4">
        <button 
          onClick={handlePrev}
          className="p-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white rounded-xl shadow-sm hover:scale-105 active:scale-95 transition"
          title={isRtl ? "السابق" : "Previous"}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button 
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-slate-950 font-bold rounded-xl shadow-md hover:scale-105 active:scale-95 transition flex items-center gap-2 text-xs md:text-sm"
        >
          <RefreshCw className="h-4 w-4" />
          {isRtl ? "اقلب البطاقة" : "Flip Term"}
        </button>

        <button 
          onClick={handleNext}
          className="p-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white rounded-xl shadow-sm hover:scale-105 active:scale-95 transition"
          title={isRtl ? "التالي" : "Next"}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono text-center space-y-1">
        <p className="flex items-center gap-1 justify-center">
          <Key className="h-3 w-3" />
          <span>Space: Flip Card • Arrow Keys: Navigate</span>
        </p>
      </div>

    </div>
  );
};

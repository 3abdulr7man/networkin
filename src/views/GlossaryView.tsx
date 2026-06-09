import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GLOSSARY_DATA } from '../data/glossary';
import { BookOpen, Search, Filter, AlertCircle } from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter categories list
  const categories = ['All', 'Protocols', 'Hardware', 'Layers', 'EMI'];

  // Search and filter logic
  const filteredGlossary = GLOSSARY_DATA.filter(item => {
    const query = searchQuery.toLowerCase().trim();
    
    // Category match
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    
    if (!matchesCategory) return false;
    if (!query) return true;

    // Content match
    return (
      item.term.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.descEn.toLowerCase().includes(query) ||
      item.descAr.includes(query)
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 pb-12 space-y-6">
      
      {/* View Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary-500" />
          {t('glossary')}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
          {isRtl ? "شبكة تفاعلية للمصطلحات الأساسية والاختصارات الهندسية مع التصفية والبحث الفوري" : "Acronyms, terms, and key networking protocols definitions at your fingertips"}
        </p>
      </div>

      {/* Search and Filters panel */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400 dark:text-slate-500" />
          <input 
            type="text"
            placeholder={t('searchGlossary')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition text-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1">
            <Filter className="h-3.5 w-3.5" />
            {isRtl ? "الفئة:" : "Filter:"}
          </span>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                activeCategory === cat 
                  ? 'bg-primary-500 border-primary-500 text-slate-950 font-bold shadow-md shadow-primary-500/20' 
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
            >
              {cat === 'All' ? t('filterAll') : cat}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Glossary Cards */}
      {filteredGlossary.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <AlertCircle className="h-10 w-10 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-500 dark:text-slate-400 font-bold">{t('noResults')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGlossary.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-primary-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-primary-500 transition font-mono tracking-tight">
                    {item.term}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-primary-500/10 text-primary-500 dark:text-primary-400 uppercase">
                    {item.category}
                  </span>
                </div>
                
                <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {isRtl ? item.descAr : item.descEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[10px] text-slate-450 dark:text-slate-500 font-mono italic">
                {isRtl ? `مصطلح شبكات أساسي (${item.category})` : `Core networking term (${item.category})`}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

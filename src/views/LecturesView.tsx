import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { LECTURES_DATA } from '../data/lectures';
import { Search, ChevronDown, BookOpen, Clock, AlertCircle, Sparkles, FileText } from 'lucide-react';

export const LecturesView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'summary' | 'detailed'>('summary');
  
  // Outer accordions for Lectures
  const [expandedLectures, setExpandedLectures] = useState<Record<string, boolean>>({
    'l1': true // default open first lecture
  });

  // Inner accordions for Detailed Sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'l1-sec-0': true // default open first section of first lecture
  });

  const toggleExpandLecture = (id: string) => {
    setExpandedLectures(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleExpandSection = (secKey: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [secKey]: !prev[secKey]
    }));
  };

  // Search logic (matches English or Arabic titles, topics, and detailed points)
  const filteredLectures = LECTURES_DATA.filter(lecture => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    const matchesTitle = 
      lecture.titleEn.toLowerCase().includes(query) || 
      lecture.titleAr.includes(query);

    const matchesTopics = lecture.topics.some(topic => 
      topic.titleEn.toLowerCase().includes(query) ||
      topic.titleAr.includes(query) ||
      topic.contentEn.toLowerCase().includes(query) ||
      topic.contentAr.includes(query)
    );

    const matchesDetailed = lecture.detailedSections.some(sec => 
      sec.titleEn.toLowerCase().includes(query) ||
      sec.titleAr.includes(query) ||
      sec.pointsEn.some(p => p.toLowerCase().includes(query)) ||
      sec.pointsAr.some(p => p.includes(query))
    );

    return matchesTitle || matchesTopics || matchesDetailed;
  });

  // Highlight matches function
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const regex = new RegExp(`(${highlight.trim()})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) => 
          regex.test(part) 
            ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-500/30 text-slate-900 dark:text-yellow-200 px-0.5 rounded font-medium">{part}</mark>
            : part
        )}
      </>
    );
  };

  // Formatting helper to highlight specific networking keywords in summaries
  const renderFormattedLine = (line: string) => {
    if (line.startsWith('•')) {
      const parts = line.split(':');
      if (parts.length > 1) {
        return (
          <li className="list-none my-2 pl-4 border-l-2 border-primary-500/40 rtl:pl-0 rtl:pr-4 rtl:border-l-0 rtl:border-r-2 text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-white font-semibold">
              {highlightText(parts[0].replace('•', '').trim(), searchQuery)}:
            </strong>
            <span>{highlightText(parts.slice(1).join(':'), searchQuery)}</span>
          </li>
        );
      }
    }
    return <p className="text-slate-700 dark:text-slate-300 leading-relaxed my-2">{highlightText(line, searchQuery)}</p>;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12 space-y-6">
      
      {/* View Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary-500" />
            {t('lectures')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
            {isRtl ? "ملخصات مركزة وشرح مفصل مدعم باللغتين العربية والإنجليزية" : "Concise summaries and detailed syllabus explanations in Arabic and English"}
          </p>
        </div>

        {/* View Mode Switcher Tab */}
        <div className="bg-slate-100 dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-1 self-start">
          <button
            onClick={() => setViewMode('summary')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
              viewMode === 'summary'
                ? 'bg-primary-500 text-slate-950 shadow-md shadow-primary-500/10'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{isRtl ? "ملخص سريع للمراجعة" : "Revision Summary"}</span>
          </button>
          <button
            onClick={() => setViewMode('detailed')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
              viewMode === 'detailed'
                ? 'bg-primary-500 text-slate-950 shadow-md shadow-primary-500/10'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>{isRtl ? "الشرح التفصيلي" : "Detailed Explanation"}</span>
          </button>
        </div>
      </div>

      {/* Live Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400 dark:text-slate-500" />
        <input 
          type="text"
          placeholder={t('searchLectures')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition text-sm"
        />
      </div>

      {/* Empty State */}
      {filteredLectures.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <AlertCircle className="h-10 w-10 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-500 dark:text-slate-400 font-bold">{t('noResults')}</p>
        </div>
      )}

      {/* Lectures Accordion List */}
      <div className="space-y-4">
        {filteredLectures.map((lecture) => {
          const isExpanded = !!expandedLectures[lecture.id];
          return (
            <div 
              key={lecture.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Header Tab */}
              <button
                onClick={() => toggleExpandLecture(lecture.id)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-900/60 transition"
              >
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-mono font-bold text-primary-500 tracking-wider flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {isRtl ? lecture.durationAr : lecture.durationEn}
                  </span>
                  <h3 className="font-extrabold text-slate-900 dark:text-white md:text-lg text-left">
                    {isRtl ? lecture.titleAr : lecture.titleEn}
                  </h3>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Expandable Topics Section */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                  >
                    <div className="p-5 space-y-6">
                      
                      {/* View Mode Conditional Rendering */}
                      {viewMode === 'summary' ? (
                        /* SUMMARY MODE: Condensed revision key points */
                        <div className="space-y-6">
                          {lecture.topics.map((topic, j) => (
                            <div key={j} className="space-y-2 pb-6 last:pb-0 last:border-b-0 border-b border-slate-100 dark:border-slate-800/60">
                              <h4 className="font-bold text-slate-950 dark:text-white text-sm md:text-base border-r-4 border-teal-500 pr-2 rtl:border-l-4 rtl:border-r-0 rtl:pl-2 rtl:pr-0">
                                {isRtl ? topic.titleAr : topic.titleEn}
                              </h4>
                              <div className="space-y-1 pl-2 rtl:pl-0 rtl:pr-2 text-xs md:text-sm leading-relaxed">
                                {(isRtl ? topic.contentAr : topic.contentEn).split('\n').map((line, k) => (
                                  <React.Fragment key={k}>
                                    {renderFormattedLine(line)}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* DETAILED MODE: Full structured explanation text with inner accordions */
                        <div className="space-y-4">
                          {lecture.detailedSections.map((sec, j) => {
                            const secKey = `${lecture.id}-sec-${j}`;
                            const isSecExpanded = !!expandedSections[secKey];
                            return (
                              <div 
                                key={j} 
                                className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950"
                              >
                                <button
                                  onClick={() => toggleExpandSection(secKey)}
                                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-100 dark:hover:bg-slate-900 transition"
                                >
                                  <h4 className="font-extrabold text-slate-900 dark:text-white text-sm md:text-base text-left">
                                    {isRtl ? sec.titleAr : sec.titleEn}
                                  </h4>
                                  <ChevronDown 
                                    className={`h-4.5 w-4.5 text-slate-400 transition-transform duration-200 ${isSecExpanded ? 'rotate-180' : ''}`} 
                                  />
                                </button>
                                
                                <AnimatePresence initial={false}>
                                  {isSecExpanded && (
                                    <motion.div
                                      initial={{ height: 0 }}
                                      animate={{ height: 'auto' }}
                                      exit={{ height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-900">
                                        <ul className="space-y-3 pt-3 list-none">
                                          {(isRtl ? sec.pointsAr : sec.pointsEn).map((point, k) => (
                                            <li 
                                              key={k} 
                                              className="pl-4 border-l-2 border-primary-500/60 rtl:pl-0 rtl:pr-4 rtl:border-l-0 rtl:border-r-2 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                                            >
                                              {highlightText(point, searchQuery)}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

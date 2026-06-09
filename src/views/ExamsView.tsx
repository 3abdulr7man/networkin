import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { QUESTIONS_DATA, type Question } from '../data/questions';
import { ProgrammaticNetworkDiagram } from '../components/NetworkDiagram';
import { Award, Clock, ArrowLeft, HelpCircle, Check, X, Shield, AlertTriangle, BookOpen } from 'lucide-react';

export const ExamsView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  // Exam Selection states
  const [, setActiveExamId] = useState<string>(''); // e.g. 'final2023', 'final2024', 'midterm', 'quiz1', 'quiz2', 'simulator'
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);

  // Playground states
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({}); // maps question ID to selected option index
  const [wrongSelections, setWrongSelections] = useState<Record<string, number>>({}); // tracks selected incorrect answers to animate them red
  const [lockedQuestions, setLockedQuestions] = useState<Record<string, boolean>>({}); // locked status of each question
  
  // Timer states
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes (1500 seconds)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Review mode filter
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'wrong'>('all');

  // Available Exams List definitions
  const examsList = [
    { id: 'final2024', key: 'final2024', titleAr: 'امتحان فاينال الشبكات 2024', titleEn: 'Network Final Exam 2024', count: 30, tagAr: 'رسمي 2024', tagEn: 'Official 2024', difficulty: 'Hard' },
    { id: 'final2023', key: 'final2023', titleAr: 'امتحان فاينال الشبكات 2023', titleEn: 'Network Final Exam 2023', count: 30, tagAr: 'رسمي 2023', tagEn: 'Official 2023', difficulty: 'Hard' },
    { id: 'midterm', key: 'midterm', titleAr: 'امتحان الميدتيرم', titleEn: 'Midterm Exam', count: 10, tagAr: 'ميدتيرم', tagEn: 'Midterm', difficulty: 'Medium' },
    { id: 'quiz1', key: 'quiz1', titleAr: 'كويز الشبكات الأول (الدرايف)', titleEn: 'Network Quiz 1 (Drive)', count: 20, tagAr: 'كويز 1', tagEn: 'Quiz 1', difficulty: 'Easy' },
    { id: 'quiz2', key: 'quiz2', titleAr: 'كويز المنصة الجديدة', titleEn: 'New Platform Quiz 2', count: 9, tagAr: 'كويز 2', tagEn: 'Quiz 2', difficulty: 'Easy' },
  ];

  // Triggers end of exam
  const submitExam = () => {
    setExamCompleted(true);
    if (timerRef.current) clearInterval(timerRef.current);

    // Track total exam attempts in localStorage
    const attempts = parseInt(localStorage.getItem('exam_attempts') || '0', 10);
    localStorage.setItem('exam_attempts', (attempts + 1).toString());
  };

  const quitExam = () => {
    setExamStarted(false);
    setExamCompleted(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Starts the exam session
  const startExam = (examId: string) => {
    setActiveExamId(examId);
    setExamCompleted(false);
    setSelectedAnswers({});
    setWrongSelections({});
    setLockedQuestions({});
    setCurrentIndex(0);
    setReviewFilter('all');

    let pool: Question[];
    if (examId === 'simulator') {
      // Simulator: Pick 25 random questions from the entire database
      const shuffled = [...QUESTIONS_DATA].sort(() => 0.5 - Math.random());
      pool = shuffled.slice(0, 25);
      setTimeLeft(1500); // 25 mins limit
    } else {
      // Specific Exam: filter by category code
      pool = QUESTIONS_DATA.filter(q => q.category === examId);
      setTimeLeft(pool.length * 60); // 60 seconds per question allocated
    }

    setQuestions(pool);
    setExamStarted(true);

    // Initialize/Increment session count in LocalStorage
    const sessions = parseInt(localStorage.getItem('study_sessions') || '1', 10);
    localStorage.setItem('study_sessions', (sessions + 1).toString());
  };

  // Timer loop initialization
  useEffect(() => {
    if (examStarted && !examCompleted) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            submitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examStarted, examCompleted]);

  // Handle option select
  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (lockedQuestions[questionId]) return; // locked once selected

    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const isCorrect = question.answerIndex === optionIdx;

    // Local Storage Analytics logging
    const totalSolved = parseInt(localStorage.getItem('solved_questions') || '0', 10);
    const totalCorrect = parseInt(localStorage.getItem('correct_answers') || '0', 10);
    const totalWrong = parseInt(localStorage.getItem('wrong_answers') || '0', 10);
    
    localStorage.setItem('solved_questions', (totalSolved + 1).toString());
    
    if (isCorrect) {
      localStorage.setItem('correct_answers', (totalCorrect + 1).toString());
    } else {
      localStorage.setItem('wrong_answers', (totalWrong + 1).toString());
      setWrongSelections(prev => ({ ...prev, [questionId]: optionIdx }));
    }

    // Lock option and save selected choice
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
    setLockedQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  // Calculation score metrics
  const getExamScoreMetrics = () => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    const weakTopicsList: string[] = [];

    questions.forEach(q => {
      const selected = selectedAnswers[q.id];
      if (selected === undefined) {
        unanswered++;
      } else if (selected === q.answerIndex) {
        correct++;
      } else {
        wrong++;
        if (!weakTopicsList.includes(q.category)) {
          weakTopicsList.push(q.category);
        }
      }
    });

    const percentage = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    
    return {
      correct,
      wrong,
      unanswered,
      percentage,
      weakTopicsList
    };
  };

  const metrics = getExamScoreMetrics();

  // Helper to format remaining timer
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  // Visibility rules for Programmatic Network Diagram SVG:
  // Sohag Final 2023 (IP: 195.150.100.0/28) -> display ONLY between Questions 23-30
  // Sohag Final 2024 (IP: 200.100.100.5/28) -> display ONLY between Questions 26-30
  // Hide elsewhere.
  const shouldDisplayDiagram = (question: Question, idx: number) => {
    const qNum = idx + 1; // 1-indexed question number
    if (question.category === 'final2023' && qNum >= 23 && qNum <= 30) {
      return true;
    }
    if (question.category === 'final2024' && qNum >= 26 && qNum <= 30) {
      return true;
    }
    return false;
  };

  const getDiagramIP = (question: Question) => {
    return question.category === 'final2024' ? '200.100.100.5/28' : '195.150.100.0/28';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      
      {/* 1. SELECTION HUB VIEW */}
      {!examStarted && (
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary-500" />
              {t('exams')}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
              {isRtl ? "مجموعة من الامتحانات الرسمية والمحاكي العشوائي مع قفل فوري وشرح تفصيلي" : "Solve past exams or practice with the dynamic random simulator"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Exam Cards */}
            {examsList.map((exam) => (
              <div 
                key={exam.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between hover:shadow-lg hover:border-primary-500/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-500 dark:text-primary-400 rounded-full text-xs font-bold font-mono">
                      {isRtl ? exam.tagAr : exam.tagEn}
                    </span>
                    <span className="text-[10px] font-mono text-slate-450 dark:text-slate-500 uppercase tracking-widest">
                      {exam.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-extrabold text-slate-950 dark:text-white leading-tight">
                    {isRtl ? exam.titleAr : exam.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mt-1 font-mono">
                    {exam.count} {isRtl ? "سؤال كامل" : "Questions total"}
                  </p>
                </div>

                <div className="mt-6">
                  <button 
                    onClick={() => startExam(exam.id)}
                    className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-slate-950 font-bold rounded-xl shadow-sm transition active:scale-95 duration-100"
                  >
                    {t('startExam')}
                  </button>
                </div>
              </div>
            ))}

            {/* Random Simulator Card */}
            <div 
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white shadow-xl flex flex-col justify-between hover:border-teal-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs font-bold font-mono">
                    {t('simulator')}
                  </span>
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest animate-pulse">
                    Dynamic
                  </span>
                </div>
                
                <h3 className="text-lg font-extrabold text-white leading-tight">
                  {t('randomSim')}
                </h3>
                <p className="text-xs text-slate-450 mt-1 font-mono leading-relaxed">
                  {t('examSimulatorDesc')}
                </p>
              </div>

              <div className="mt-6">
                <button 
                  onClick={() => startExam('simulator')}
                  className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl shadow-md transition active:scale-95 duration-100"
                >
                  {t('startExam')}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. LIVE PLAYGROUND VIEW */}
      {examStarted && !examCompleted && (
        <div className="space-y-6">
          
          {/* Header Panel */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
            <button 
              onClick={quitExam}
              className="flex items-center gap-1 text-slate-650 dark:text-slate-400 hover:text-red-500 text-xs font-bold font-mono"
            >
              <ArrowLeft className="h-4 w-4" />
              {isRtl ? "خروج" : "Quit"}
            </button>

            <div className="flex items-center gap-2 font-mono">
              <Clock className="h-4 w-4 text-primary-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
                {formatTime(timeLeft)}
              </span>
            </div>

            <div className="text-xs font-mono font-bold text-slate-500">
              Q: {currentIndex + 1} / {questions.length}
            </div>
          </div>

          {/* Core Question Card */}
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative"
          >
            {/* SVG Network Diagram injection */}
            {shouldDisplayDiagram(questions[currentIndex], currentIndex) && (
              <div className="my-4">
                <ProgrammaticNetworkDiagram targetNet={getDiagramIP(questions[currentIndex])} />
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <span className="text-xs font-mono bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded text-slate-550 dark:text-slate-400">
                  {questions[currentIndex].id.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                  {questions[currentIndex].category}
                </span>
              </div>

              {/* Question Text */}
              <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-relaxed text-right md:text-left">
                {isRtl ? questions[currentIndex].questionAr : questions[currentIndex].questionEn}
              </h2>

              {/* Selection Options List */}
              <div className="space-y-3 pt-3">
                {(isRtl ? questions[currentIndex].optionsAr : questions[currentIndex].optionsEn).map((option, idx) => {
                  const qId = questions[currentIndex].id;
                  const isAnswered = selectedAnswers[qId] !== undefined;
                  const isCorrectAnswer = questions[currentIndex].answerIndex === idx;
                  const isWrongSelected = wrongSelections[qId] === idx;

                  let optClass = "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200";
                  
                  if (isAnswered) {
                    if (isCorrectAnswer) {
                      optClass = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-300 font-bold shadow-md shadow-green-500/5";
                    } else if (isWrongSelected) {
                      optClass = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-300 animate-shake";
                    } else {
                      optClass = "opacity-40 border-slate-100 dark:border-slate-850 text-slate-400 dark:text-slate-550 cursor-not-allowed";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(qId, idx)}
                      className={`w-full p-4 rounded-xl border text-right sm:text-left transition-all duration-200 text-xs md:text-sm font-semibold flex items-center justify-between ${optClass}`}
                    >
                      <span>{option}</span>
                      {isAnswered && isCorrectAnswer && <Check className="h-4 w-4 text-green-500" />}
                      {isAnswered && isWrongSelected && <X className="h-4 w-4 text-red-500" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Reveal */}
              {selectedAnswers[questions[currentIndex].id] !== undefined && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800/80 space-y-2 text-xs md:text-sm leading-relaxed"
                >
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800/60 pb-2">
                    <HelpCircle className="h-4 w-4 text-primary-500" />
                    {t('scientificExplanation')}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    {isRtl ? questions[currentIndex].explanationAr : questions[currentIndex].explanationEn}
                  </p>
                </motion.div>
              )}

            </div>
          </motion.div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white rounded-xl shadow-sm text-xs font-bold disabled:opacity-40 transition"
            >
              {isRtl ? "السابق" : "Prev"}
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={submitExam}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-md transition"
              >
                {isRtl ? "إنهاء وتسليم الاختبار" : "Submit Exam"}
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white rounded-xl shadow-sm text-xs font-bold transition"
              >
                {isRtl ? "التالي" : "Next"}
              </button>
            )}
          </div>

        </div>
      )}

      {/* 3. EXAM COMPLETED SUMMARY & REVIEW */}
      {examStarted && examCompleted && (
        <div className="space-y-8">
          
          {/* Result Banner Card */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-center space-y-4"
          >
            <Award className="h-12 w-12 text-primary-500 mx-auto" />
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t('examScore')}
            </h2>
            
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-primary-500 font-mono tracking-tight">
                {metrics.percentage}%
              </span>
              <span className="text-xs text-slate-500 mt-2 font-semibold uppercase tracking-wider font-mono">
                {metrics.correct} / {questions.length} {isRtl ? "إجابات صحيحة" : "Correct Answers"}
              </span>
            </div>

            {/* Score Grid stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-855/80 pt-6 my-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t('correctAnswers')}</span>
                <span className="text-lg font-bold text-green-500 font-mono mt-1 block">{metrics.correct}</span>
              </div>
              
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t('wrongAnswers')}</span>
                <span className="text-lg font-bold text-red-500 font-mono mt-1 block">{metrics.wrong}</span>
              </div>

              <div className="col-span-2 md:col-span-1 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">{isRtl ? "لم يتم حلها" : "Unanswered"}</span>
                <span className="text-lg font-bold text-slate-500 font-mono mt-1 block">{metrics.unanswered}</span>
              </div>
            </div>

            {/* Weak Topics Warnings */}
            {metrics.weakTopicsList.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-right md:text-left space-y-2">
                <h4 className="text-xs font-bold text-amber-500 flex items-center gap-1.5 font-mono">
                  <AlertTriangle className="h-4 w-4" />
                  {t('weakTopics')}
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {metrics.weakTopicsList.map((topic, i) => (
                    <span key={i} className="px-2 py-1 bg-amber-500/10 text-amber-500 dark:text-amber-400 text-[10px] rounded-lg font-bold font-mono uppercase">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={quitExam}
              className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-slate-950 font-bold rounded-xl shadow-md text-xs md:text-sm transition-all"
            >
              {t('backToExams')}
            </button>
          </motion.div>

          {/* 4. POST EXAM REVIEW MODE */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary-500" />
                {t('reviewMode')}
              </h3>

              {/* Review Filters */}
              <div className="flex gap-2">
                {[
                  { id: 'all' as const, label: t('allQuestions') },
                  { id: 'correct' as const, label: t('correctOnly') },
                  { id: 'wrong' as const, label: t('incorrectOnly') }
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setReviewFilter(f.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                      reviewFilter === f.id 
                        ? 'bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-950 font-bold' 
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions list review */}
            <div className="space-y-4">
              {questions.map((q, idx) => {
                const selected = selectedAnswers[q.id];
                const isUnanswered = selected === undefined;
                const isCorrect = selected === q.answerIndex;
                const matchesFilter = 
                  reviewFilter === 'all' || 
                  (reviewFilter === 'correct' && isCorrect) || 
                  (reviewFilter === 'wrong' && !isCorrect);

                if (!matchesFilter) return null;

                return (
                  <div 
                    key={q.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                  >
                    {/* SVG network diagrams for review */}
                    {shouldDisplayDiagram(q, idx) && (
                      <div className="my-4">
                        <ProgrammaticNetworkDiagram targetNet={getDiagramIP(q)} />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Q. {idx + 1} ({q.id.toUpperCase()})</span>
                      {isUnanswered ? (
                        <span className="text-slate-500 dark:text-slate-400 font-bold">[Unanswered]</span>
                      ) : isCorrect ? (
                        <span className="text-green-500 font-bold flex items-center gap-1">
                          <Check className="h-3.5 w-3.5" /> Correct
                        </span>
                      ) : (
                        <span className="text-red-500 font-bold flex items-center gap-1">
                          <X className="h-3.5 w-3.5" /> Incorrect
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base leading-relaxed text-right md:text-left">
                      {isRtl ? q.questionAr : q.questionEn}
                    </h4>

                    {/* Options status */}
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {(isRtl ? q.optionsAr : q.optionsEn).map((opt, oIdx) => {
                        let optBorder = "border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400";
                        let checkIcon = null;

                        if (oIdx === q.answerIndex) {
                          optBorder = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-300 font-semibold";
                          checkIcon = <Check className="h-4 w-4 text-green-500" />;
                        } else if (selected === oIdx) {
                          optBorder = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-300 font-semibold";
                          checkIcon = <X className="h-4 w-4 text-red-500" />;
                        }

                        return (
                          <div 
                            key={oIdx}
                            className={`p-3 rounded-lg border text-xs md:text-sm flex items-center justify-between text-right md:text-left ${optBorder}`}
                          >
                            <span>{opt}</span>
                            {checkIcon}
                          </div>
                        );
                      })}
                    </div>

                    {/* Scientific Explanation */}
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 text-xs md:text-sm leading-relaxed space-y-1">
                      <span className="block font-bold text-slate-900 dark:text-white">{t('scientificExplanation')}:</span>
                      <p className="text-slate-700 dark:text-slate-300">
                        {isRtl ? q.explanationAr : q.explanationEn}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

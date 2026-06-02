import React, { useState } from 'react';
import { questions as questionsEn } from '../data/questions';
import { roadmaps as roadmapsEn } from '../data/roadmaps';
import { questions as questionsMm } from '../data/questions_mm';
import { roadmaps as roadmapsMm } from '../data/roadmaps_mm';
import type { RoleId, Option } from '../types';
import { QuestionCard } from './QuestionCard';
import { ResultView } from './ResultView';
import { LiveInsights } from './LiveInsights';
import type { Language } from '../App';

interface QuizEngineProps {
  language: Language;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ language }) => {
  const questions = language === 'en' ? questionsEn : questionsMm;
  const roadmaps = language === 'en' ? roadmapsEn : roadmapsMm;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [history, setHistory] = useState<Option[]>([]);
  const [scores, setScores] = useState<Record<RoleId, number>>({
    architect: 0,
    devops: 0,
    pm: 0,
    tech_lead: 0,
    backend: 0,
    software_engineer: 0,
    ai_engineer: 0,
    data_analyst: 0,
    other: 0,
  });
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option: Option) => {
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([roleId, score]) => {
      newScores[roleId as RoleId] += (score || 0);
    });
    setScores(newScores);
    setHistory([...history, option]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    
    const lastOption = history[history.length - 1];
    const newScores = { ...scores };
    Object.entries(lastOption.scores).forEach(([roleId, score]) => {
      newScores[roleId as RoleId] -= (score || 0);
    });
    
    setScores(newScores);
    setHistory((prev) => prev.slice(0, -1));
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setHistory([]);
    setScores({
      architect: 0,
      devops: 0,
      pm: 0,
      tech_lead: 0,
      backend: 0,
      software_engineer: 0,
      ai_engineer: 0,
      data_analyst: 0,
      other: 0,
    });
    setIsFinished(false);
  };

  if (isFinished) {
    return <ResultView scores={scores} roadmaps={roadmaps} onRestart={handleRestart} language={language} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-center">
      <div className="flex-grow w-full lg:max-w-2xl">
        <QuestionCard
          question={currentQuestion}
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
          onAnswer={handleAnswer}
          language={language}
          onBack={handleBack}
          canGoBack={currentQuestionIndex > 0}
        />
      </div>
      <LiveInsights scores={scores} totalQuestionsAnswered={currentQuestionIndex} language={language} roadmaps={roadmaps} />
    </div>
  );
};

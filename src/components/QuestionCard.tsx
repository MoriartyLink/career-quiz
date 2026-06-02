import React from 'react';
import type { Question, Option } from '../types';
import type { Language } from '../App';
import { ArrowLeft } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onAnswer: (option: Option) => void;
  language: Language;
  onBack?: () => void;
  canGoBack?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentStep,
  totalSteps,
  onAnswer,
  language,
  onBack,
  canGoBack
}) => {
  const progress = (currentStep / totalSteps) * 100;

  const questionText = language === 'en' 
    ? `Question ${currentStep} of ${totalSteps}` 
    : `မေးခွန်း ${totalSteps} တွင် ${currentStep}`;

  const backText = language === 'en' ? 'Back' : 'နောက်သို့';

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-800 shadow-xl rounded-2xl overflow-hidden mt-8 transition-colors duration-300">
      <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between transition-colors duration-300">
        <div className="flex items-center space-x-4">
          {canGoBack && onBack ? (
            <button 
              onClick={onBack}
              className="flex items-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {backText}
            </button>
          ) : (
            <div className="w-16"></div> /* Placeholder for alignment */
          )}
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {questionText}
          </span>
        </div>
        <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2 hidden sm:block overflow-hidden">
          <div
            className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="p-8">
        <h2 className={`text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 ${language === 'mm' ? 'leading-relaxed' : 'leading-snug'}`}>
          {question.text}
        </h2>
        
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className="w-full text-left p-5 rounded-xl border-2 border-slate-100 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all duration-200 group flex items-start"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-indigo-600 dark:group-hover:border-indigo-500 flex items-center justify-center mr-4 mt-0.5 transition-colors">
                <span className="text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-medium transition-colors">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
              <span className={`text-slate-700 dark:text-slate-300 font-medium text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors ${language === 'mm' ? 'leading-loose' : 'leading-relaxed'}`}>
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

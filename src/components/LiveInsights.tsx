import React from 'react';
import type { RoleId, CareerRoadmap } from '../types';
import type { Language } from '../App';

interface LiveInsightsProps {
  scores: Record<RoleId, number>;
  totalQuestionsAnswered: number;
  language: Language;
  roadmaps: CareerRoadmap[];
}

export const LiveInsights: React.FC<LiveInsightsProps> = ({ scores, totalQuestionsAnswered, language, roadmaps }) => {
  const texts = {
    titlePlaceholder: language === 'en' ? 'Live Career Insights' : 'တိုက်ရိုက် အသက်မွေးဝမ်းကျောင်း ထိုးထွင်းသိမြင်မှုများ',
    descPlaceholder: language === 'en' 
      ? 'Answer a question to see how your choices shape your potential career paths in real-time.'
      : 'သင့်ရွေးချယ်မှုများသည် သင်၏အသက်မွေးဝမ်းကျောင်းလမ်းကြောင်းများကို အချိန်နှင့်တစ်ပြေးညီ မည်သို့ပုံဖော်ကြောင်း သိရန် မေးခွန်းကို ဖြေဆိုပါ။',
    titleActive: language === 'en' ? 'Live Analysis' : 'တိုက်ရိုက် ခွဲခြမ်းစိတ်ဖြာမှု',
    pts: language === 'en' ? 'pts' : 'မှတ်',
    indicator: language === 'en' 
      ? `* Leading indicator based on ${totalQuestionsAnswered} answer${totalQuestionsAnswered !== 1 ? 's' : ''}.`
      : `* အဖြေ ${totalQuestionsAnswered} ခုအပေါ် အခြေခံထားသော ဦးဆောင်ညွှန်ကိန်း။`
  };

  // Only show insights after the first couple of questions to avoid noise
  if (totalQuestionsAnswered < 1) {
    return (
      <div className="w-80 hidden lg:block bg-white shadow-xl rounded-2xl p-6 ml-8 h-fit sticky top-8 border border-slate-100">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center">
          <span className="w-2 h-2 rounded-full bg-slate-300 mr-2"></span>
          {texts.titlePlaceholder}
        </h3>
        <p className={`text-slate-500 text-sm ${language === 'mm' ? 'leading-relaxed' : ''}`}>
          {texts.descPlaceholder}
        </p>
      </div>
    );
  }

  // Sort scores descending
  const sortedScores = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0)
    .slice(0, 5); // Show top 5

  const highestScore = sortedScores.length > 0 ? sortedScores[0][1] : 1;

  return (
    <div className="w-80 hidden lg:block bg-white shadow-xl rounded-2xl p-6 ml-8 h-fit sticky top-8 border border-indigo-50">
      <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-6 flex items-center">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse mr-2"></span>
        {texts.titleActive}
      </h3>

      <div className="space-y-5">
        {sortedScores.map(([roleId, score], index) => {
          const role = roadmaps.find((r) => r.id === roleId);
          if (!role) return null;
          
          // Calculate relative percentage based on the highest current score
          const percentage = Math.min(100, Math.max(5, (score / highestScore) * 100));

          return (
            <div key={roleId} className="relative">
              <div className="flex justify-between items-end mb-1">
                <span className={`text-sm font-semibold ${index === 0 ? 'text-indigo-900' : 'text-slate-700'}`}>
                  {role.title.split('/')[0].split('(')[0].trim()}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {score} {texts.pts}
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                    index === 0 ? 'bg-indigo-500' : 'bg-slate-300'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {sortedScores.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-xs text-slate-500 italic">
            {texts.indicator}
          </p>
        </div>
      )}
    </div>
  );
};

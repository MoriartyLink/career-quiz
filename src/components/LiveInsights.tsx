import React from 'react';
import type { RoleId, CareerRoadmap } from '../types';
import type { Language } from '../App';
import { GitMerge } from 'lucide-react';

interface LiveInsightsProps {
  scores: Record<RoleId, number>;
  totalQuestionsAnswered: number;
  language: Language;
  roadmaps: CareerRoadmap[];
}

// Tree branches mapping logic
const treeBranches = [
  {
    id: 'systems',
    en: 'Systems & Infrastructure',
    mm: 'စနစ်များနှင့် အခြေခံအဆောက်အအုံ',
    roles: ['architect', 'devops'] as RoleId[]
  },
  {
    id: 'data',
    en: 'Data & Intelligence',
    mm: 'ဒေတာနှင့် ဉာဏ်ရည်တု',
    roles: ['ai_engineer', 'data_analyst'] as RoleId[]
  },
  {
    id: 'engineering',
    en: 'Core Engineering',
    mm: 'အဓိက အင်ဂျင်နီယာပညာ',
    roles: ['backend', 'software_engineer'] as RoleId[]
  },
  {
    id: 'leadership',
    en: 'Leadership & Strategy',
    mm: 'ခေါင်းဆောင်မှုနှင့် မဟာဗျူဟာ',
    roles: ['tech_lead', 'pm'] as RoleId[]
  },
  {
    id: 'specialized',
    en: 'Specialized Fields',
    mm: 'အထူးပြုနယ်ပယ်',
    roles: ['other'] as RoleId[]
  }
];

export const LiveInsights: React.FC<LiveInsightsProps> = ({ scores, totalQuestionsAnswered, language, roadmaps }) => {
  const texts = {
    titlePlaceholder: language === 'en' ? 'Live Career Tree' : 'တိုက်ရိုက် အသက်မွေးဝမ်းကျောင်း သစ်ပင်',
    descPlaceholder: language === 'en' 
      ? 'Answer a question to watch your career branches grow in real-time based on your cognitive profile.'
      : 'သင့်ရွေးချယ်မှုများအပေါ်မူတည်၍ အသက်မွေးဝမ်းကျောင်းလမ်းကြောင်းများ အချိန်နှင့်တစ်ပြေးညီ ကြီးထွားလာမှုကို မြင်တွေ့ရန် မေးခွန်းကို ဖြေဆိုပါ။',
    titleActive: language === 'en' ? 'Live Engine Analysis' : 'တိုက်ရိုက် ခွဲခြမ်းစိတ်ဖြာမှု',
    pts: language === 'en' ? 'pts' : 'မှတ်'
  };

  // Only show insights after the first couple of questions to avoid noise
  if (totalQuestionsAnswered < 1) {
    return (
      <div className="w-96 hidden lg:block bg-white shadow-xl rounded-2xl p-6 h-fit sticky top-8 border border-slate-100">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center">
          <GitMerge className="w-4 h-4 mr-2" />
          {texts.titlePlaceholder}
        </h3>
        <p className={`text-slate-500 text-sm ${language === 'mm' ? 'leading-relaxed' : ''}`}>
          {texts.descPlaceholder}
        </p>
      </div>
    );
  }

  // Calculate the highest score to scale the progress bars
  const maxScore = Math.max(...Object.values(scores), 1);
  
  // Find top role to highlight it
  const topRoleEntry = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b));
  const topRoleId = topRoleEntry[1] > 0 ? topRoleEntry[0] : null;

  return (
    <div className="w-96 hidden lg:block bg-white shadow-xl rounded-2xl p-6 h-fit max-h-[calc(100vh-4rem)] overflow-y-auto sticky top-8 border border-indigo-50 tree-scrollbar">
      <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-6 flex items-center sticky top-0 bg-white z-10 pb-2 border-b border-indigo-50">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse mr-2"></span>
        {texts.titleActive}
      </h3>

      <div className="relative pl-2 font-mono text-sm">
        {/* Root node */}
        <div className="flex items-center text-slate-800 font-bold mb-4">
          <span className="bg-slate-800 text-white px-2 py-0.5 rounded text-xs mr-2">ROOT</span>
          <span>{language === 'en' ? 'Your Profile' : 'သင်၏ ကိုယ်ရေးအချက်အလက်'}</span>
        </div>

        <div className="border-l-2 border-slate-200 ml-3 space-y-6 pb-2">
          {treeBranches.map((branch, bIndex) => {
            const isLastBranch = bIndex === treeBranches.length - 1;
            return (
              <div key={branch.id} className="relative">
                {/* Branch line */}
                <div className="absolute -left-[2px] top-3 w-4 border-b-2 border-slate-200"></div>
                {/* Hide the vertical line dropping past the last item */}
                {isLastBranch && (
                  <div className="absolute -left-[2px] top-3 bottom-0 w-[4px] bg-white -ml-[1px]"></div>
                )}
                
                <h4 className="pl-6 font-semibold text-slate-600 mb-3 pt-0.5">
                  {language === 'en' ? branch.en : branch.mm}
                </h4>

                <div className="pl-6 space-y-4">
                  {branch.roles.map((roleId, rIndex) => {
                    const role = roadmaps.find((r) => r.id === roleId);
                    if (!role) return null;
                    const score = scores[roleId];
                    const isTop = roleId === topRoleId;
                    const percentage = Math.max(2, (score / maxScore) * 100);
                    const isLastRole = rIndex === branch.roles.length - 1;

                    return (
                      <div key={roleId} className="relative">
                        {/* Leaf node connecting lines */}
                        <div className="absolute -left-4 top-3 w-3 border-b-2 border-slate-200"></div>
                        <div className={`absolute -left-4 top-0 ${isLastRole ? 'h-3' : 'h-full'} border-l-2 border-slate-200`}></div>

                        <div className="pl-2">
                          <div className="flex justify-between items-end mb-1">
                            <span className={`text-xs truncate max-w-[140px] ${isTop ? 'font-bold text-indigo-700' : 'font-medium text-slate-500'}`} title={role.title}>
                              {role.title.split('/')[0].split('(')[0].trim()}
                            </span>
                            <span className={`text-[10px] font-bold ${isTop ? 'text-indigo-600' : 'text-slate-400'}`}>
                              {score} {texts.pts}
                            </span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden flex">
                            <div
                              className={`h-full transition-all duration-700 ease-out ${
                                isTop ? 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-slate-300'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .tree-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .tree-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .tree-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

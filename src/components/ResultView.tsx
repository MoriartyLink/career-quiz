import React, { useRef } from 'react';
import type { CareerRoadmap, RoleId } from '../types';
import { Download, RefreshCcw, CheckCircle, ExternalLink, Users } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import type { Language } from '../App';
import { getExampleFigures } from '../utils/figureGenerator';

interface ResultViewProps {
  scores: Record<RoleId, number>;
  roadmaps: CareerRoadmap[];
  onRestart: () => void;
  language: Language;
}

export const ResultView: React.FC<ResultViewProps> = ({ scores, roadmaps, onRestart, language }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Find the top scoring role
  const topRoleEntry = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b));
  const topRoleId = topRoleEntry[0] as RoleId;
  const roadmap = roadmaps.find((r) => r.id === topRoleId);

  const texts = {
    title: language === 'en' ? 'Your Results' : 'သင်၏ ရလဒ်များ',
    retakeBtn: language === 'en' ? 'Retake Quiz' : 'ပဟေဠိကို ပြန်ဖြေပါ',
    pdfBtn: language === 'en' ? 'Save as PDF' : 'PDF အဖြစ် သိမ်းဆည်းပါ',
    recommended: language === 'en' ? 'Recommended Career Path' : 'အကြံပြုထားသော အသက်မွေးဝမ်းကျောင်း လမ်းကြောင်း',
    whyFits: language === 'en' ? 'Why this fits you:' : 'ဒါက သင့်အတွက် ဘာကြောင့် သင့်တော်တာလဲ။',
    actionPlan: language === 'en' ? 'Your Action Plan' : 'သင်၏ လုပ်ဆောင်ချက် အစီအစဉ်',
    resources: language === 'en' ? 'Recommended Resources' : 'အကြံပြုထားသော အရင်းအမြစ်များ',
    figuresTitle: language === 'en' ? 'People Like You (Global & Local)' : 'သင့်ကဲ့သို့သော ပုဂ္ဂိုလ်များ (ကမ္ဘာလုံးဆိုင်ရာနှင့် ဒေသတွင်း)',
    figuresDesc: language === 'en' ? 'Explore how leaders with similar cognitive profiles are shaping the tech industry across different regions:' : 'အလားတူ သိမြင်မှုဆိုင်ရာ စရိုက်လက္ခဏာရှိသော ခေါင်းဆောင်များသည် ဒေသအသီးသီးရှိ နည်းပညာလုပ်ငန်းကို မည်သို့ပုံဖော်နေသည်ကို လေ့လာကြည့်ပါ -'
  };

  const figures = roadmap ? getExampleFigures(roadmap, language) : [];

  const handleDownloadPdf = () => {
    if (!contentRef.current || !roadmap) return;

    const opt = {
      margin: 10,
      filename: `${roadmap.title.split('(')[0].trim().replace(/\s+/g, '_')}_Roadmap.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(contentRef.current).save();
  };

  if (!roadmap) return <div>Error loading roadmap</div>;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 pb-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800">{texts.title}</h1>
        <div className="space-x-4">
          <button
            onClick={onRestart}
            className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <RefreshCcw className="mr-2 -ml-1 h-4 w-4" />
            {texts.retakeBtn}
          </button>
          <button
            onClick={handleDownloadPdf}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Download className="mr-2 -ml-1 h-4 w-4" />
            {texts.pdfBtn}
          </button>
        </div>
      </div>

      <div 
        ref={contentRef} 
        className="bg-white shadow-xl rounded-2xl overflow-hidden p-8 sm:p-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">
            {texts.recommended}
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-4">
            {roadmap.title}
          </h3>
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto ${language === 'mm' ? 'leading-loose' : ''}`}>
            {roadmap.description}
          </p>
        </div>

        <div className="bg-indigo-50 rounded-xl p-6 mb-12 border border-indigo-100">
          <h4 className="text-lg font-bold text-indigo-900 mb-2">{texts.whyFits}</h4>
          <p className={`text-indigo-800 ${language === 'mm' ? 'leading-relaxed' : ''}`}>
            {roadmap.traits}
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <h4 className="text-2xl font-bold text-slate-800 border-b pb-4">
            {texts.actionPlan}
          </h4>
          
          <div className="relative border-l-4 border-slate-200 ml-3 md:ml-6 space-y-12 pb-4">
            {roadmap.steps.map((step, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                <span className="absolute -left-3.5 md:-left-4 bg-indigo-600 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white flex items-center justify-center">
                   <span className="text-white text-xs font-bold">{index + 1}</span>
                </span>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h5 className={`text-xl font-bold text-slate-800 mb-2 ${language === 'mm' ? 'leading-relaxed' : ''}`}>
                    {step.title}
                  </h5>
                  <p className={`text-slate-600 mb-4 ${language === 'mm' ? 'leading-relaxed' : ''}`}>
                    {step.description}
                  </p>
                  
                  {step.resources && step.resources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                        {texts.resources}
                      </span>
                      <ul className="space-y-2">
                        {step.resources.map((resource, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-slate-700">{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-slate-100 pt-12">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-slate-800 flex items-center mb-3">
              <Users className="w-6 h-6 text-indigo-600 mr-2" />
              {texts.figuresTitle}
            </h4>
            <p className="text-slate-600">{texts.figuresDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {figures.map((figure, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {figure.region}
                  </span>
                  <a 
                    href={figure.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-600 transition-colors"
                    title="Search on LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h5 className="text-lg font-bold text-slate-800 mb-1">{figure.name}</h5>
                <div className="text-sm font-medium text-slate-500 mb-3">{figure.role}</div>
                <p className={`text-slate-600 text-sm ${language === 'mm' ? 'leading-relaxed' : 'leading-relaxed'}`}>
                  {figure.similarity}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

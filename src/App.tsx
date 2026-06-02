import { useState } from 'react';
import { QuizEngine } from './components/QuizEngine';
import { BrainCircuit, Languages } from 'lucide-react';

export type Language = 'en' | 'mm';

function App() {
  const [started, setStarted] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mm' : 'en');
  };

  const texts = {
    title: language === 'en' ? 'Cognitive Career Compass' : 'သိမြင်မှုဆိုင်ရာ အသက်မွေးဝမ်းကျောင်း လမ်းညွှန်',
    heading: language === 'en' ? 'Discover Your Engineering Path' : 'သင်၏ အင်ဂျင်နီယာ လမ်းကြောင်းကို ရှာဖွေပါ',
    desc: language === 'en' 
      ? 'This assessment is deeply tailored for individuals with an INTJ personality, ADHD traits, and high Belbin "Plant" / "Resource Investigator" scores. Answer 20 targeted questions to discover the technical role where your unique mind will thrive the most.'
      : 'ဤအကဲဖြတ်မှုသည် INTJ ကိုယ်ရည်ကိုယ်သွေး၊ ADHD စရိုက်လက္ခဏာများနှင့် Belbin "Plant" / "Resource Investigator" ရမှတ်များမြင့်မားသူများအတွက် အထူးရည်ရွယ်ပါသည်။ သင့်အတွက် အသင့်တော်ဆုံး နည်းပညာအခန်းကဏ္ဍကို ရှာဖွေရန် မေးခွန်း ၂၀ ကို ဖြေဆိုပါ။',
    startBtn: language === 'en' ? 'Start the Assessment' : 'အကဲဖြတ်မှုကို စတင်ပါ',
    footer: language === 'en' ? 'Designed for INTJ • ADHD • High Plant (23) • Mod RI (10)' : 'INTJ • ADHD • High Plant (23) • Mod RI (10) အတွက် ရည်ရွယ်သည်'
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <header className="bg-white shadow-sm py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BrainCircuit className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-extrabold text-slate-800 tracking-tight hidden sm:inline-block">
            {texts.title}
          </span>
        </div>
        <button 
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
        >
          <Languages className="w-4 h-4" />
          <span>{language === 'en' ? 'မြန်မာ' : 'English'}</span>
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        {!started ? (
          <div className="max-w-2xl bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {texts.heading}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {texts.desc}
            </p>
            <button
              onClick={() => setStarted(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              {texts.startBtn}
            </button>
          </div>
        ) : (
          <QuizEngine language={language} />
        )}
      </main>
      
      <footer className="bg-white py-6 text-center text-slate-500 text-sm border-t border-slate-200">
        {texts.footer}
      </footer>
    </div>
  );
}

export default App;

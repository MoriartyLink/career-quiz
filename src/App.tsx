import { useState, useEffect } from 'react';
import { QuizEngine } from './components/QuizEngine';
import { BrainCircuit, Languages, Moon, Sun } from 'lucide-react';

export type Language = 'en' | 'mm';

function App() {
  const [started, setStarted] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isDark, setIsDark] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mm' : 'en');
  };

  const toggleDark = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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
    <div className={`min-h-screen bg-slate-100 dark:bg-slate-900 flex flex-col font-sans transition-colors duration-300`}>
      <header className="bg-white dark:bg-slate-800 shadow-sm py-4 px-6 md:px-12 flex items-center justify-between transition-colors duration-300">
        <div className="flex items-center space-x-3">
          <BrainCircuit className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight hidden sm:inline-block transition-colors duration-300">
            {texts.title}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleDark}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium transition-colors"
          >
            <Languages className="w-4 h-4" />
            <span>{language === 'en' ? 'မြန်မာ' : 'English'}</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        {!started ? (
          <div className="max-w-2xl bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl shadow-xl text-center transition-colors duration-300">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
              {texts.heading}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors duration-300">
              {texts.desc}
            </p>
            <button
              onClick={() => setStarted(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              {texts.startBtn}
            </button>
          </div>
        ) : (
          <QuizEngine language={language} />
        )}
      </main>
      
      <footer className="bg-white dark:bg-slate-800 py-6 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
        {texts.footer}
      </footer>
    </div>
  );
}

export default App;

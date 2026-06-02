import type { ExampleFigure, CareerRoadmap } from '../types';
import type { Language } from '../App';

export const getExampleFigures = (roadmap: CareerRoadmap, language: Language): ExampleFigure[] => {
  const roleName = roadmap.title.split('(')[0].split('/')[0].trim();
  
  if (language === 'mm') {
    return [
      {
        region: 'Global',
        name: 'Elon Musk / Demis Hassabis (Archetype)',
        role: `Global Visionary ${roleName}`,
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Visionary%20Founder%20Tech',
        similarity: 'INTJ အနေဖြင့် ရှုပ်ထွေးသော စနစ်များကို (system thinking) အမြော်အမြင်ရှိရှိ မြင်နိုင်စွမ်းရှိသည်။ ADHD ၏ အလွန်အမင်း အာရုံစူးစိုက်မှု (hyper-focus) ကို အသုံးပြု၍ ကြီးမားသော ပြဿနာများကို ဖြေရှင်းသည်။ Plant ရမှတ် (၂၃) မြင့်မားမှုကြောင့် လုံးဝအသစ်ဖြစ်သော တီထွင်ဖန်တီးမှုများကို ပြုလုပ်နိုင်သည်။'
      },
      {
        region: 'Japan',
        name: 'Yukihiro Matsumoto (Matz) / Ken Kutaragi (Archetype)',
        role: `Japanese Tech Pioneer`,
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Japanese%20Tech%20Architect',
        similarity: 'Plant စရိုက်လက္ခဏာဖြစ်သော တီထွင်ဖန်တီးနိုင်စွမ်းကို အပြည့်အဝအသုံးပြု၍ (ဥပမာ- Ruby programming language ဖန်တီးခြင်း) အခြားသူများ လိုက်နာအသုံးပြုရမည့် အခြေခံအုတ်မြစ်များကို တည်ဆောက်သူဖြစ်သည်။'
      },
      {
        region: 'Asia',
        name: 'Andrew Ng / Changpeng Zhao (Archetype)',
        role: `Asian Tech Leader`,
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Asia%20Tech%20Founder',
        similarity: 'Resource Investigator (၁၀) ရမှတ်ကို အသုံးပြု၍ ပတ်ဝန်းကျင်မှ အရင်းအမြစ်များကို စုဆောင်းကာ ကြီးမားသော အခွင့်အလမ်းများ (ဥပမာ- AI Education, Blockchain စနစ်များ) ဖန်တီးရာတွင် INTJ ၏ မဟာဗျူဟာကို အသုံးပြုသည်။'
      },
      {
        region: 'South-East Asia (SEA)',
        name: 'Grab / Gojek Tech Architects (Archetype)',
        role: `SEA Regional ${roleName}`,
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Grab%20Gojek%20Architect',
        similarity: 'ရှုပ်ထွေးသော အရှေ့တောင်အာရှ၏ အခြေခံအဆောက်အအုံ ပြဿနာများကို ဖြေရှင်းရာတွင် ADHD ၏ context-switching လုပ်နိုင်စွမ်းနှင့် INTJ ၏ စနစ်တကျ ပြဿနာဖြေရှင်းနိုင်စွမ်းကို ပေါင်းစပ်အသုံးပြုသည်။'
      },
      {
        region: 'Myanmar',
        name: 'Senior Tech Innovators in Yangon (Archetype)',
        role: `Myanmar National ${roleName}`,
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Myanmar%20Tech%20Lead',
        similarity: 'ကန့်သတ်ချက်များ (infrastructure limitations) အကြားတွင် Plant ၏ တီထွင်ဖန်တီးမှုကို အသုံးပြု၍ နိုင်ငံအဆင့် ထုတ်ကုန်များ (ဥပမာ- KBZPay, Oway ကဲ့သို့သော စနစ်များ) ကို တည်ဆောက်သူဖြစ်သည်။'
      },
      {
        region: 'Mandalay',
        name: 'Upper Myanmar Tech Pioneers (Archetype)',
        role: `Mandalay Regional ${roleName}`,
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Mandalay%20Software%20Architect',
        similarity: 'ဒေသတွင်း စီးပွားရေးလုပ်ငန်းများကို ဒစ်ဂျစ်တယ်စနစ်သို့ ကူးပြောင်းရာတွင် Resource Investigator (RI) အရည်အသွေးကို အသုံးပြု၍ သက်ဆိုင်သူများနှင့် ချိတ်ဆက်ပြီး၊ INTJ အမြင်ဖြင့် အနာဂတ်အတွက် ခိုင်မာသော စနစ်များကို ဒီဇိုင်းဆွဲပေးသူဖြစ်သည်။'
      }
    ];
  }

  return [
    {
      region: 'Global',
      name: 'Elon Musk / Demis Hassabis (Archetype)',
      role: `Global Visionary ${roleName}`,
      linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Visionary%20Founder%20Tech',
      similarity: 'Shares your INTJ systems thinking and visionary outlook. Channels ADHD hyper-focus into solving massive, complex problems, mirroring your high Plant (23) trait for highly original, creative solutions.'
    },
    {
      region: 'Japan',
      name: 'Yukihiro Matsumoto (Matz) / Ken Kutaragi (Archetype)',
      role: `Japanese Tech Pioneer`,
      linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Japanese%20Tech%20Architect',
      similarity: 'Utilizes intense Plant creativity to invent entirely new foundations (like the Ruby language or PlayStation architecture) that others build upon, aligning with your desire to architect overarching systems.'
    },
    {
      region: 'Asia',
      name: 'Andrew Ng / Changpeng Zhao (Archetype)',
      role: `Asian Tech Leader`,
      linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Asia%20Tech%20Founder',
      similarity: 'Leverages moderate Resource Investigator (10) traits to spot massive regional opportunities and uses INTJ strategic planning to execute them flawlessly on a continental scale.'
    },
    {
      region: 'South-East Asia (SEA)',
      name: 'Grab / Gojek Tech Architects (Archetype)',
      role: `SEA Regional ${roleName}`,
      linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Grab%20Gojek%20Architect',
      similarity: 'Thrives in chaotic environments by applying INTJ structural thinking. Uses ADHD traits to rapidly context-switch and solve the unique infrastructure challenges of the SEA region.'
    },
    {
      region: 'Myanmar',
      name: 'Senior Tech Innovators in Yangon (Archetype)',
      role: `Myanmar National ${roleName}`,
      linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Myanmar%20Tech%20Lead',
      similarity: 'Applies deep Plant creativity to hack and engineer robust systems despite national infrastructure limitations, proving that INTJ strategic design can overcome resource scarcity.'
    },
    {
      region: 'Mandalay',
      name: 'Upper Myanmar Tech Pioneers (Archetype)',
      role: `Mandalay Regional ${roleName}`,
      linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Mandalay%20Software%20Architect',
      similarity: 'Uses their Resource Investigator (RI) skills to network closely with local stakeholders, translating traditional business needs into scalable, modern technical architectures (INTJ).'
    }
  ];
};
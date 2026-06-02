import type { CareerRoadmap } from '../types';

export const roadmaps: CareerRoadmap[] = [
  {
    id: 'architect',
    title: 'Software Architect (ဆော့ဖ်ဝဲလ် ဗိသုကာပညာရှင်)',
    description: 'သင်သည် ရေဘုယျအခြေအနေကို မြင်နိုင်စွမ်းရှိပြီး ကြီးမားကျယ်ပြန့်ကာ ခိုင်မာသော စနစ်များကို ဒီဇိုင်းရေးဆွဲရာတွင် ထူးချွန်သည်။ သင့်၏ INTJ သဘာဝသည် ရေရှည်မဟာဗျူဟာမြောက် စီစဉ်ခြင်းကို နှစ်သက်ပြီး၊ သင့်၏ Plant စရိုက်လက္ခဏာက ဆန်းသစ်သော ဗိသုကာပိုင်းဆိုင်ရာ ဖြေရှင်းချက်များကို တီထွင်နိုင်စေသည်။',
    traits: 'INTJ (မဟာဗျူဟာမြောက်၊ စနစ်တကျ တွေးခေါ်သူ) နှင့် High Plant (အလွန်ဖန်တီးနိုင်စွမ်းရှိသော၊ အလုံးစုံလွှမ်းခြုံပြဿနာဖြေရှင်းသူ) တို့နှင့် ကိုက်ညီသည်။ ADHD ၏ အာရုံစူးစိုက်မှု (hyper-focus) ကို ကြီးမားသော စနစ်ဒီဇိုင်းဆွဲခြင်းသို့ ဦးတည်ထားသည်။',
    steps: [
      {
        title: 'စနစ်ဒီဇိုင်းပုံစံများကို (System Design Patterns) ကျွမ်းကျင်အောင်လေ့လာပါ',
        description: 'Microservices, event-driven architecture နှင့် domain-driven design (DDD) တို့ကို လေ့လာပါ။',
        resources: ['Designing Data-Intensive Applications (Book)', 'Clean Architecture by Robert C. Martin']
      },
      {
        title: 'Cloud အခြေခံအဆောက်အအုံ ကျွမ်းကျင်မှု',
        description: 'AWS, GCP သို့မဟုတ် Azure တို့ကို နက်နက်ရှိုင်းရှိုင်း လေ့လာပါ။ High availability နှင့် fault tolerance အတွက် မည်သို့ ဒီဇိုင်းဆွဲရမည်ကို နားလည်ပါ။',
        resources: ['AWS Certified Solutions Architect']
      },
      {
        title: 'လမ်းညွှန်ပေးခြင်းနှင့် နည်းပညာပိုင်းဆိုင်ရာ ခေါင်းဆောင်မှု',
        description: 'ကုဒ်ရေးခြင်းမှ အဖွဲ့များကို လမ်းညွှန်ပေးခြင်းသို့ ပြောင်းလဲပါ။ သင်၏ အမြင်များကို ထိရောက်စွာ ဆက်သွယ်ပြောဆိုတတ်အောင် လေ့လာပါ။',
        resources: ['Staff Engineer: Leadership beyond the management track']
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps / Platform Engineer',
    description: 'သင်သည် ထိရောက်မှုမရှိခြင်းနှင့် လက်ဖြင့်လုပ်ရသော အလုပ်များကို မုန်းတီးသည်။ စက်များကို တည်ဆောက်မည့် စက်ကြီးကို သင်တည်ဆောက်ချင်သည်။ သင်၏ ADHD သည် အလိုအလျောက်လုပ်ဆောင်ခြင်း (automation) နှင့် ချက်ချင်း deploy လုပ်ခြင်းများမှ ရရှိသော dopamine ကြောင့် ပိုမိုတက်ကြွလာသည်။',
    traits: 'ADHD (ထပ်ခါတလဲလဲလုပ်ရသော အလုပ်များကို အလိုအလျောက်လုပ်လိုစိတ်၊ မြန်ဆန်သော တုံ့ပြန်မှုကွင်းဆက်များ) နှင့် INTJ (ထိရောက်မှု၊ ဖွဲ့စည်းပုံအကောင်းဆုံးဖြစ်အောင်လုပ်ခြင်း) တို့နှင့် ကိုက်ညီသည်။',
    steps: [
      {
        title: 'Infrastructure as Code (IaC)',
        description: 'အခြေခံအဆောက်အအုံကို declarative ပုံစံဖြင့် သတ်မှတ်ရန် Terraform, Ansible သို့မဟုတ် Pulumi ကို ကျွမ်းကျင်အောင်လေ့လာပါ။',
        resources: ['Terraform Up & Running']
      },
      {
        title: 'Containerization & Orchestration',
        description: 'Docker နှင့် Kubernetes တွင် ကျွမ်းကျင်သူတစ်ဦးဖြစ်လာအောင် လုပ်ပါ။ ကြီးမားသော clusters များကို မည်သို့ deploy လုပ်ရမည်ကို နားလည်ပါ။',
        resources: ['Kubernetes Up and Running']
      },
      {
        title: 'CI/CD Pipelines',
        description: 'GitHub Actions, GitLab CI သို့မဟုတ် Jenkins ကို အသုံးပြု၍ ခိုင်မာသော ပိုက်လိုင်းများကို တည်ဆောက်ပါ။ စမ်းသပ်ခြင်းနှင့် deployment ကို အလိုအလျောက်ဖြစ်အောင် လုပ်ပါ။',
        resources: ['Continuous Delivery (Book)']
      }
    ]
  },
  {
    id: 'pm',
    title: 'Technical Project Manager (နည်းပညာပိုင်းဆိုင်ရာ ပရောဂျက်မန်နေဂျာ)',
    description: 'သင်သည် ရှုပ်ထွေးမှုများကို စနစ်ကျသော အစီအစဉ်များအဖြစ် ဖွဲ့စည်းတည်ဆောက်သည်။ အလုပ်ပြီးမြောက်ရန် မှန်ကန်သော လူများနှင့် ကိရိယာများကို ရှာဖွေရာတွင် သင်၏ Resource Investigator စရိုက်လက္ခဏာကို အသုံးပြုသည်။',
    traits: 'Resource Investigator (ကွန်ရက်ချိတ်ဆက်ခြင်း၊ အခွင့်အလမ်းများရှာဖွေခြင်း) နှင့် INTJ (မဟာဗျူဟာမြောက် စီစဉ်ခြင်း၊ ဖွဲ့စည်းခြင်း) တို့နှင့် ကိုက်ညီသည်။',
    steps: [
      {
        title: 'Agile & Scrum ကျွမ်းကျင်မှု',
        description: 'Framework များကို နားလည်သော်လည်း ပို၍အရေးကြီးသည်မှာ ၎င်းတို့ကို သင့်အဖွဲ့၏ လက်တွေ့အခြေအနေနှင့် မည်သို့ လိုက်လျောညီထွေဖြစ်အောင် အသုံးပြုရမည်ကို နားလည်ပါ။',
        resources: ['Scrum: The Art of Doing Twice the Work in Half the Time']
      },
      {
        title: 'အန္တရာယ် စီမံခန့်ခွဲမှု (Risk Management)',
        description: 'ပရောဂျက်၏ အန္တရာယ်များကို ကြိုတင်မြင်နိုင်ရန် (INTJ အားသာချက်) နှင့် ၎င်းတို့မဖြစ်ပေါ်မီ လျော့ပါးသက်သာစေရန် လေ့လာပါ။',
        resources: ['PMI Risk Management Professional Certification']
      },
      {
        title: 'သက်ဆိုင်သူများနှင့် ဆက်သွယ်ပြောဆိုခြင်း',
        description: 'အင်ဂျင်နီယာပိုင်းနှင့် စီးပွားရေးပိုင်းအကြား ကွာဟချက်ကို ပေါင်းကူးပေးပါ။ နည်းပညာဆိုင်ရာ ကန့်သတ်ချက်များကို စီးပွားရေးဆိုင်ရာ သက်ရောက်မှုများအဖြစ် ဘာသာပြန်ဆိုပါ။',
        resources: ['Crucial Conversations (Book)']
      }
    ]
  },
  {
    id: 'tech_lead',
    title: 'Tech Lead / Engineering Manager',
    description: 'သင်သည် နည်းပညာပိုင်းဆိုင်ရာ ထူးချွန်မှုနှင့် အဖွဲ့၏ အရှိန်အဟုန်ကို ညီမျှအောင် ထိန်းညှိပေးသည်။ စနစ်များကို ဒီဇိုင်းဆွဲရုံသာမက ၎င်းတို့ကို တည်ဆောက်ရန် လိုအပ်သော အဖွဲ့အစည်းဖွဲ့စည်းပုံကိုပါ ဒီဇိုင်းဆွဲသည်။',
    traits: 'INTJ (လူများနှင့်သက်ဆိုင်သော စနစ်တကျတွေးခေါ်မှု) နှင့် Plant (အဖွဲ့ကို စိတ်အားထက်သန်စေရန်နှင့် အခက်အခဲများကို ဖြေရှင်းရန် တီထွင်ဖန်တီးမှုရှိသော နည်းလမ်းများ) တို့နှင့် ကိုက်ညီသည်။',
    steps: [
      {
        title: 'အဆင့်မြင့် ဆော့ဖ်ဝဲလ် အင်ဂျင်နီယာပညာ',
        description: 'ကုဒ်နှင့် ဗိသုကာပုံစံကို ထိရောက်စွာ ပြန်လည်သုံးသပ်နိုင်ရန် (review) နက်ရှိုင်းသော နည်းပညာဆိုင်ရာ နားလည်မှုကို ထိန်းသိမ်းပါ။',
        resources: ['A Philosophy of Software Design']
      },
      {
        title: 'အင်ဂျင်နီယာ စီမံခန့်ခွဲမှု',
        description: '1-on-1s များကို မည်သို့လုပ်ဆောင်ရမည်၊ စွမ်းဆောင်ရည်ကို မည်သို့ စီမံခန့်ခွဲရမည်နှင့် အင်ဂျင်နီယာများကို မည်သို့ ဖွံ့ဖြိုးတိုးတက်အောင် လုပ်ဆောင်ရမည်ကို လေ့လာပါ။',
        resources: ['The Manager\'s Path by Camille Fournier']
      },
      {
        title: 'လုပ်ငန်းစဉ် ပိုမိုကောင်းမွန်အောင် ပြုလုပ်ခြင်း (Process Optimization)',
        description: 'သင်၏အဖွဲ့ အလုပ်လုပ်ပုံတွင် အဟန့်အတားဖြစ်စေသော အရာများကို ရှာဖွေပြီး ၎င်းတို့ကို လုံးဝဖယ်ရှားပစ်ပါ။',
        resources: ['The Phoenix Project']
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'သင်သည် အက်ပလီကေးရှင်းများ၏ ယုတ္တိဗေဒ၊ ဒေတာစီးဆင်းမှုနှင့် လျှို့ဝှက်ရှုပ်ထွေးမှုများကို နှစ်သက်သည်။ UI အစိတ်အပိုင်းများကို ချိန်ညှိခြင်းထက် သန့်ရှင်းပြီး ထိရောက်သော API များရေးသားခြင်းကို သင်ပိုနှစ်သက်သည်။',
    traits: 'INTJ (ယုတ္တိဗေဒ၊ နက်နဲမှု၊ ဖွဲ့စည်းပုံ) နှင့် ADHD (ရှုပ်ထွေးသော အယ်လဂိုရီသမ်များနှင့် ဒေတာဘေ့စ် အကောင်းဆုံးဖြစ်အောင်လုပ်ခြင်းကို အလွန်အမင်း အာရုံစိုက်ခြင်း) တို့နှင့် ကိုက်ညီသည်။',
    steps: [
      {
        title: 'အဆင့်မြင့် ဒေတာဘေ့စ် ဒီဇိုင်း',
        description: 'SQL, indexing, query optimization နှင့် NoSQL trade-offs များကို ကျွမ်းကျင်အောင်လေ့လာပါ။',
        resources: ['Use The Index, Luke!']
      },
      {
        title: 'API ဒီဇိုင်းပုံစံများ (API Design Patterns)',
        description: 'REST အကောင်းဆုံးအလေ့အကျင့်များ၊ GraphQL နှင့် gRPC တို့ကို လေ့လာပါ။',
        resources: ['Build APIs You Won\'t Hate']
      },
      {
        title: 'စွမ်းဆောင်ရည်နှင့် လုံခြုံရေး',
        description: 'Caching နည်းဗျူဟာများ (Redis)၊ message queues (RabbitMQ/Kafka) နှင့် လုံခြုံသော ကုဒ်ရေးသားခြင်း အလေ့အကျင့်များကို နားလည်ပါ။',
        resources: ['Web Application Hacker\'s Handbook']
      }
    ]
  },
  {
    id: 'software_engineer',
    title: 'Full Stack Software Engineer',
    description: 'သင်သည် လက်တွေ့ကျသော ပြဿနာဖြေရှင်းသူ ဖြစ်သည်။ အစအဆုံး (end-to-end) feature များကို တည်ဆောက်ခြင်းနှင့် သင်၏အလုပ်သည် အသုံးပြုသူအပေါ် တိုက်ရိုက်သက်ရောက်မှုရှိသည်ကို မြင်တွေ့ရခြင်းကို သင်နှစ်သက်သည်။',
    traits: 'Resource Investigator (မှန်ကန်သော library/framework များကို ရှာဖွေခြင်း) နှင့် ADHD (စုံလင်ကွဲပြားမှုနှင့် မြန်ဆန်သော feature တည်ဆောက်မှုကို နှစ်သက်ခြင်း) တို့နှင့် ကိုက်ညီသည်။',
    steps: [
      {
        title: 'Frontend Frameworks',
        description: 'React, Vue သို့မဟုတ် Angular ဗဟုသုတကို နက်ရှိုင်းအောင်လုပ်ပါ။ State management နှင့် စွမ်းဆောင်ရည်ကို နားလည်ပါ။',
        resources: ['React Documentation', 'Frontend Masters']
      },
      {
        title: 'Backend ပေါင်းစပ်ခြင်း (Integration)',
        description: 'ခိုင်မာသော API များတည်ဆောက်နည်းနှင့် ၎င်းတို့ကို သင်၏ frontend သို့ လုံခြုံစွာ ချိတ်ဆက်နည်းကို လေ့လာပါ။',
        resources: ['Fullstack Open']
      },
      {
        title: 'စမ်းသပ်ခြင်းနှင့် အရည်အသွေး (Testing & Quality)',
        description: 'Unit, integration နှင့် end-to-end စမ်းသပ်ခြင်းများ (Jest, Cypress, Playwright) ကို ကျွမ်းကျင်အောင်လုပ်ပါ။',
        resources: ['Testing JavaScript']
      }
    ]
  },
  {
    id: 'ai_engineer',
    title: 'AI / Machine Learning Engineer',
    description: 'သင်သည် ရှုပ်ထွေးသော မော်ဒယ်များနှင့် ခေတ်မီနည်းပညာများကို အလွန်စိတ်ဝင်စားသည်။ အသစ်အဆန်းဖြစ်သော ပြဿနာများတွင် AI ကို အသုံးပြုရန် သင်၏ Plant တီထွင်ဖန်တီးမှုကို အသုံးပြုသည်။',
    traits: 'High Plant (အလွန်ဖန်တီးနိုင်စွမ်းရှိသော၊ သီအိုရီဆန်သော) နှင့် INTJ (ရှုပ်ထွေးပြီး ဉာဏ်ရည်တုစနစ်များကို စိတ်ဝင်စားခြင်း) တို့နှင့် ကိုက်ညီသည်။',
    steps: [
      {
        title: 'သင်္ချာနှင့် အယ်လဂိုရီသမ်များ',
        description: 'Linear Algebra, Calculus နှင့် Probability တို့ကို ပြန်လည်မွမ်းမံပါ။',
        resources: ['Mathematics for Machine Learning']
      },
      {
        title: 'Deep Learning Frameworks',
        description: 'PyTorch သို့မဟုတ် TensorFlow ကို ကျွမ်းကျင်အောင်လုပ်ပါ။ Neural network ဗိသုကာများ (Transformers, CNNs) ကို နားလည်ပါ။',
        resources: ['Fast.ai Practical Deep Learning']
      },
      {
        title: 'MLOps',
        description: 'Production တွင် မော်ဒယ်များကို မည်သို့ deploy လုပ်ရမည်နှင့် စောင့်ကြည့်ရမည်ကို လေ့လာပါ။',
        resources: ['Designing Machine Learning Systems']
      }
    ]
  },
  {
    id: 'data_analyst',
    title: 'Data Analyst / Data Engineer (ဒေတာ ခွဲခြမ်းစိတ်ဖြာသူ / ဒေတာ အင်ဂျင်နီယာ)',
    description: 'ဆူညံသံများကြားမှ ပုံစံများကို သင်ရှာဖွေတွေ့ရှိသည်။ လက်တွေ့အသုံးချနိုင်သော ဉာဏ်ရည်ကို ထုတ်ယူရန် ကြီးမားသော ဒေတာအစုအဝေးများထဲသို့ နက်နက်ရှိုင်းရှိုင်း ဝင်ရောက်ခြင်းကို သင်နှစ်သက်သည်။',
    traits: 'INTJ (ခွဲခြမ်းစိတ်ဖြာတတ်သော၊ ဓမ္မဓိဋ္ဌာန်ကျကျ အမှန်တရားကို ရှာဖွေသော) နှင့် ADHD (သီးခြား ဒေတာမမှန်ကန်မှုများကို ရှာဖွေဖော်ထုတ်ခြင်းကို အလွန်အမင်း အာရုံစိုက်ခြင်း) တို့နှင့် ကိုက်ညီသည်။',
    steps: [
      {
        title: 'Data Wrangling',
        description: 'Python (Pandas, NumPy) နှင့် အဆင့်မြင့် SQL ကို ကျွမ်းကျင်အောင်လုပ်ပါ။',
        resources: ['Python for Data Analysis']
      },
      {
        title: 'ဒေတာ ပုံဖော်ပြသခြင်း (Data Visualization)',
        description: 'Tableau, PowerBI သို့မဟုတ် D3.js ကဲ့သို့သော ကိရိယာများကို အသုံးပြု၍ ဒေတာများဖြင့် ပုံပြင်ပြောပြရန် (tell stories) လေ့လာပါ။',
        resources: ['Storytelling with Data']
      },
      {
        title: 'Data Pipelines',
        description: 'ETL လုပ်ငန်းစဉ်များ၊ Airflow နှင့် data warehousing (Snowflake, BigQuery) တို့ကို နားလည်ပါ။',
        resources: ['Fundamentals of Data Engineering']
      }
    ]
  },
  {
    id: 'other',
    title: 'Specialized Engineer (ဥပမာ - Security, QA, Embedded)',
    description: 'သင်သည် ထိပ်တန်းနယ်ပယ်ကျွမ်းကျင်သူတစ်ဦး ဖြစ်လာနိုင်သည့် အလွန်အထူးပြုထားသော နယ်ပယ်တစ်ခုဆီသို့ ဦးတည်နေသော ထူးခြားသည့် ကိုယ်ရေးအချက်အလက် (profile) ရှိသည်။',
    traits: 'သီးခြား နက်နက်ရှိုင်းရှိုင်း လေ့လာမှုများအပေါ် မူတည်၍ အလွန်ကွဲပြားနိုင်သည်။',
    steps: [
      {
        title: 'သင့်နယ်ပယ်ကို ခွဲခြားသတ်မှတ်ပါ',
        description: 'Cybersecurity, Embedded Systems သို့မဟုတ် Game Development ကို လေ့လာစူးစမ်းပါ။',
        resources: ['Explore industry-specific roadmaps on roadmap.sh']
      },
      {
        title: 'နက်ရှိုင်းသော နယ်ပယ်ကျွမ်းကျင်မှု (Deep Domain Mastery)',
        description: 'သင်ရွေးချယ်ထားသော နယ်ပယ်၏ အခြေခံနည်းပညာများအပေါ် ပြင်းပြင်းထန်ထန် အာရုံစိုက်ပါ။',
        resources: ['Specialized certifications or textbooks']
      }
    ]
  }
];

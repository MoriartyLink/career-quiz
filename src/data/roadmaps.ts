import type { CareerRoadmap } from '../types';

export const roadmaps: CareerRoadmap[] = [
  {
    id: 'architect',
    title: 'Software Architect',
    description: 'You excel at seeing the big picture and designing scalable, robust systems. Your INTJ nature loves long-term strategic planning, while your Plant trait allows you to innovate novel architectural solutions.',
    traits: 'Fits INTJ (Strategic, systems-thinker) and High Plant (Highly creative, overarching problem solver). ADHD hyper-focus is channeled into massive system design.',
    steps: [
      {
        title: 'Master System Design Patterns',
        description: 'Learn microservices, event-driven architecture, and domain-driven design (DDD).',
        resources: ['Designing Data-Intensive Applications (Book)', 'Clean Architecture by Robert C. Martin']
      },
      {
        title: 'Cloud Infrastructure Mastery',
        description: 'Deep dive into AWS, GCP, or Azure. Understand how to design for high availability and fault tolerance.',
        resources: ['AWS Certified Solutions Architect']
      },
      {
        title: 'Mentorship and Technical Leadership',
        description: 'Transition from writing code to guiding teams. Learn to communicate your visions effectively.',
        resources: ['Staff Engineer: Leadership beyond the management track']
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps / Platform Engineer',
    description: 'You hate inefficiency and manual tasks. You want to build the machine that builds the machine. Your ADHD thrives on the dopamine of automation and instant deployments.',
    traits: 'Fits ADHD (desire to automate repetitive tasks, fast feedback loops) and INTJ (efficiency, structural optimization).',
    steps: [
      {
        title: 'Infrastructure as Code (IaC)',
        description: 'Master Terraform, Ansible, or Pulumi to define infrastructure declaratively.',
        resources: ['Terraform Up & Running']
      },
      {
        title: 'Containerization & Orchestration',
        description: 'Become an expert in Docker and Kubernetes. Understand how to deploy scalable clusters.',
        resources: ['Kubernetes Up and Running']
      },
      {
        title: 'CI/CD Pipelines',
        description: 'Build robust pipelines using GitHub Actions, GitLab CI, or Jenkins. Automate testing and deployment.',
        resources: ['Continuous Delivery (Book)']
      }
    ]
  },
  {
    id: 'pm',
    title: 'Technical Project Manager',
    description: 'You organize chaos into structured plans. You leverage your Resource Investigator trait to find the right people and tools to get the job done.',
    traits: 'Fits Resource Investigator (Networking, finding opportunities) and INTJ (Strategic planning, organizing).',
    steps: [
      {
        title: 'Agile & Scrum Mastery',
        description: 'Understand the frameworks but more importantly, how to adapt them to your team\'s reality.',
        resources: ['Scrum: The Art of Doing Twice the Work in Half the Time']
      },
      {
        title: 'Risk Management',
        description: 'Learn to foresee project risks (INTJ strength) and mitigate them before they happen.',
        resources: ['PMI Risk Management Professional Certification']
      },
      {
        title: 'Stakeholder Communication',
        description: 'Bridge the gap between engineering and business. Translate technical constraints into business impact.',
        resources: ['Crucial Conversations (Book)']
      }
    ]
  },
  {
    id: 'tech_lead',
    title: 'Tech Lead / Engineering Manager',
    description: 'You balance technical excellence with team velocity. You design systems but also design the team structure needed to build them.',
    traits: 'Fits INTJ (Systems thinking applied to people) and Plant (Creative ways to motivate and solve team bottlenecks).',
    steps: [
      {
        title: 'Advanced Software Engineering',
        description: 'Maintain a deep technical understanding so you can review code and architecture effectively.',
        resources: ['A Philosophy of Software Design']
      },
      {
        title: 'Engineering Management',
        description: 'Learn how to run 1-on-1s, manage performance, and grow engineers.',
        resources: ['The Manager\'s Path by Camille Fournier']
      },
      {
        title: 'Process Optimization',
        description: 'Find the bottlenecks in how your team works and ruthlessly eliminate them.',
        resources: ['The Phoenix Project']
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'You enjoy the logic, data flow, and hidden complexity of applications. You prefer writing clean, efficient APIs over tweaking UI components.',
    traits: 'Fits INTJ (Logic, depth, structure) and ADHD (Hyper-focusing on complex algorithms and database optimization).',
    steps: [
      {
        title: 'Advanced Database Design',
        description: 'Master SQL, indexing, query optimization, and NoSQL trade-offs.',
        resources: ['Use The Index, Luke!']
      },
      {
        title: 'API Design Patterns',
        description: 'Learn REST best practices, GraphQL, and gRPC.',
        resources: ['Build APIs You Won\'t Hate']
      },
      {
        title: 'Performance & Security',
        description: 'Understand caching strategies (Redis), message queues (RabbitMQ/Kafka), and secure coding practices.',
        resources: ['Web Application Hacker\'s Handbook']
      }
    ]
  },
  {
    id: 'software_engineer',
    title: 'Full Stack Software Engineer',
    description: 'You are a pragmatic problem solver. You enjoy building end-to-end features and seeing your work directly impact the user.',
    traits: 'Fits Resource Investigator (finding the right libraries/frameworks) and ADHD (enjoying variety and fast-paced feature development).',
    steps: [
      {
        title: 'Frontend Frameworks',
        description: 'Deepen your knowledge of React, Vue, or Angular. Understand state management and performance.',
        resources: ['React Documentation', 'Frontend Masters']
      },
      {
        title: 'Backend Integration',
        description: 'Learn how to build robust APIs and connect them securely to your frontend.',
        resources: ['Fullstack Open']
      },
      {
        title: 'Testing & Quality',
        description: 'Master unit, integration, and end-to-end testing (Jest, Cypress, Playwright).',
        resources: ['Testing JavaScript']
      }
    ]
  },
  {
    id: 'ai_engineer',
    title: 'AI / Machine Learning Engineer',
    description: 'You are fascinated by complex models and the bleeding edge of tech. You use your Plant creativity to apply AI to novel problems.',
    traits: 'Fits High Plant (Highly creative, theoretical) and INTJ (Fascination with complex, intelligent systems).',
    steps: [
      {
        title: 'Mathematics & Algorithms',
        description: 'Brush up on Linear Algebra, Calculus, and Probability.',
        resources: ['Mathematics for Machine Learning']
      },
      {
        title: 'Deep Learning Frameworks',
        description: 'Master PyTorch or TensorFlow. Understand neural network architectures (Transformers, CNNs).',
        resources: ['Fast.ai Practical Deep Learning']
      },
      {
        title: 'MLOps',
        description: 'Learn how to deploy and monitor models in production.',
        resources: ['Designing Machine Learning Systems']
      }
    ]
  },
  {
    id: 'data_analyst',
    title: 'Data Analyst / Data Engineer',
    description: 'You find patterns in the noise. You love diving deep into massive datasets to extract actionable intelligence.',
    traits: 'Fits INTJ (Analytical, objective truth-seeking) and ADHD (Hyper-focusing on hunting down specific data anomalies).',
    steps: [
      {
        title: 'Data Wrangling',
        description: 'Master Python (Pandas, NumPy) and advanced SQL.',
        resources: ['Python for Data Analysis']
      },
      {
        title: 'Data Visualization',
        description: 'Learn to tell stories with data using tools like Tableau, PowerBI, or D3.js.',
        resources: ['Storytelling with Data']
      },
      {
        title: 'Data Pipelines',
        description: 'Understand ETL processes, Airflow, and data warehousing (Snowflake, BigQuery).',
        resources: ['Fundamentals of Data Engineering']
      }
    ]
  },
  {
    id: 'other',
    title: 'Specialized Engineer (e.g., Security, QA, Embedded)',
    description: 'You have a unique profile that leans towards a highly specialized niche where you can become the ultimate domain expert.',
    traits: 'Highly varied based on specific deep dives.',
    steps: [
      {
        title: 'Identify Your Niche',
        description: 'Explore Cybersecurity, Embedded Systems, or Game Development.',
        resources: ['Explore industry-specific roadmaps on roadmap.sh']
      },
      {
        title: 'Deep Domain Mastery',
        description: 'Focus intensely on the foundational technologies of your chosen niche.',
        resources: ['Specialized certifications or textbooks']
      }
    ]
  }
];

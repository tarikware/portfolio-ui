export const portfolioData = {
  profile: {
    name: 'Hasan Tarik Yumbul',
    title: 'Full-Stack Developer',
    summary: 'Computer Engineering graduate with professional experience in full-stack development, cloud infrastructure, and autonomous systems. Currently developing mission-critical web applications for Turkish Airlines using Java and modern frontend frameworks. Proven ability to design scalable backend services, manage cloud environments, and implement AI-based solutions.',
    email: 'hasantarikyumbul@gmail.com',
    phone: null,
    location: 'Istanbul, Turkey',
    githubUrl: 'https://github.com/tarikware',
    linkedinUrl: 'https://linkedin.com/in/hasan-tarik-yumbul',
    websiteUrl: 'https://tarikware.dev'
  },
  experiences: [
    {
      id: 1,
      company: 'Turkish Technology (THY)',
      role: 'Full-Stack Developer',
      location: 'Istanbul, Turkey',
      roles: [
        {
          title: 'Junior Full-Stack Developer',
          startDate: '2026-08-01',
          endDate: null,
          currentJob: true
        },
        {
          title: 'Part-time Full-Stack Developer',
          startDate: '2025-09-22',
          endDate: '2026-08-01',
          currentJob: false
        }
      ],
      description: 'Developing mission-critical applications for Turkish Cargo (THY Cargo), focusing on logistics and operational efficiency.',
      bullets: [
        'Develop and maintain full-stack web applications for Turkish Cargo (THY Cargo), focusing on logistics and operational efficiency.',
        'Build robust backend services using Java, Spring Boot, and Spring Data JPA.',
        'Implement asynchronous messaging and event-driven architecture using Kafka and JMS.',
        'Design and manage enterprise databases with PostgreSQL and Oracle SQL.',
        'Develop dynamic user interfaces using React and Angular.',
        'Deploy and manage applications in a containerized environment via OpenShift and WebLogic.',
        'Collaborate in an Agile environment using Jira, Confluence, and Bitbucket.'
      ]
    },
    {
      id: 2,
      company: 'Turkish Technology (THY)',
      role: 'Java Developer Intern',
      location: 'Istanbul, Turkey',
      startDate: '2024-07-01',
      endDate: '2024-08-31',
      currentJob: false,
      description: 'Summer internship focusing on full-stack Java development for internal tools.',
      bullets: [
        'Developed a full-stack web application using Spring Boot and Angular for internal data management.',
        'Implemented JWT-based authentication via Spring Security to ensure secure data access.',
        'Integrated Swagger UI and Javadoc for standardized API documentation and testing.'
      ]
    },
    {
      id: 3,
      company: 'Turkcell',
      role: 'Cloud Platform Administrator',
      location: 'Istanbul, Turkey',
      startDate: '2022-11-01',
      endDate: '2023-11-30',
      currentJob: false,
      description: 'Part-time cloud administration managing virtual and physical infrastructure.',
      bullets: [
        'Managed internal virtual and physical servers, ensuring high availability for corporate services.',
        'Automated routine server tasks and VM provisioning using VMware Orchestrator and Shell scripting.',
        'Fulfilled departmental network and server requests using vCenter and vSphere.'
      ]
    },
    {
      id: 4,
      company: 'Turkcell',
      role: 'Cloud Platform Administration Intern',
      location: 'Istanbul, Turkey',
      startDate: '2022-08-01',
      endDate: '2022-09-30',
      currentJob: false,
      description: 'Introductory internship in cloud and data center operations.',
      bullets: [
        'Supported data center operations and learned virtualization infrastructure fundamentals.'
      ]
    }
  ],
  educations: [
    {
      id: 1,
      institution: 'Marmara University',
      degree: 'Bachelor of Science',
      field: 'Computer Engineering (English)',
      location: 'Istanbul, Turkey',
      startDate: '2020-09-01',
      endDate: '2025-06-30',
      gpa: null,
      description: 'Graduation Project: Precise Self-localization and Improved Obstacle Detection for Autonomous Vehicles. Coursework: AI, deep learning, NLP, data mining, algorithm design, data structures, software engineering, operating systems, microprocessors, digital logic, networking, databases.'
    }
  ],
  skillsByCategory: {
    'Programming Languages': [
      { id: 1, name: 'Java', level: 5 },
      { id: 2, name: 'Python', level: 4 },
      { id: 3, name: 'SQL', level: 4 },
      { id: 4, name: 'C', level: 3 },
      { id: 5, name: 'Assembly', level: 2 }
    ],
    'Frameworks & Libraries': [
      { id: 6, name: 'Spring Boot', level: 5 },
      { id: 7, name: 'Spring Data JPA', level: 5 },
      { id: 8, name: 'React', level: 4 },
      { id: 9, name: 'Angular', level: 4 },
      { id: 10, name: 'Spring Security', level: 4 },
      { id: 11, name: 'JWT', level: 4 },
      { id: 12, name: 'OpenCV', level: 3 },
      { id: 13, name: 'Thymeleaf', level: 3 }
    ],
    'Middleware & Tools': [
      { id: 14, name: 'Postman', level: 5 },
      { id: 15, name: 'Kafka', level: 4 },
      { id: 16, name: 'JMS', level: 4 },
      { id: 17, name: 'Docker', level: 4 },
      { id: 18, name: 'OpenShift', level: 4 },
      { id: 19, name: 'Swagger', level: 4 },
      { id: 20, name: 'WebLogic', level: 3 }
    ],
    'Cloud & Infrastructure': [
      { id: 21, name: 'VMware vCenter/vSphere', level: 4 },
      { id: 22, name: 'VMware Orchestrator', level: 4 },
      { id: 23, name: 'Linux Administration', level: 4 },
      { id: 24, name: 'Bash Scripting', level: 3 }
    ],
    'Version Control & Collaboration': [
      { id: 25, name: 'Git', level: 5 },
      { id: 26, name: 'Bitbucket', level: 4 },
      { id: 27, name: 'Jira', level: 4 },
      { id: 28, name: 'Confluence', level: 4 }
    ],
    'Databases': [
      { id: 29, name: 'PostgreSQL', level: 5 },
      { id: 30, name: 'Oracle SQL', level: 4 }
    ]
  },
  projects: [
    {
      id: 1,
      name: 'Autonomous Vehicle Platform',
      description: 'Designed a self-driving miniature vehicle for my graduation project at Marmara University. Built real-time object detection and self-localization systems from the ground up.',
      techStack: 'Python, OpenCV, Jetson Nano, Raspberry Pi 5, Deep Learning',
      featured: true,
      githubUrl: null,
      liveUrl: null
    },
    {
      id: 2,
      name: 'Unmanned Surface Vehicle (Teknofest)',
      description: 'Collaborated with a multi-disciplinary team of 15 engineers (ALESTA Engineering Team) to build an autonomous water vehicle for Teknofest 2023. Developed computer vision algorithms for obstacle detection on embedded hardware.',
      techStack: 'Python, OpenCV, Embedded Systems, Computer Vision',
      featured: true,
      githubUrl: null,
      liveUrl: null
    }
  ]
};

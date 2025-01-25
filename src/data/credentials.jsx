import { nanoid } from 'nanoid';
import {
  FaReact,
  FaJava,
  FaDocker,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaHtml5,
  FaJs,
} from 'react-icons/fa';
import { FiBriefcase, FiBook, FiAward } from 'react-icons/fi';

export const credentials = [
  {
    id: nanoid(),
    type: 'education',
    title: 'Post graduation: DevOps for Cloud Computing',
    organization: 'Lambton College',
    duration: '2022 - 2024',
    description: 'Specialized in Distributed Systems and Cloud Computing.',
    icon: FiBook,
    year: 2024,
  },
  {
    id: nanoid(),
    type: 'experience',
    title: 'Full Stack Developer',
    organization: 'Tata Consultancy Services',
    duration: 'Aug 2019 - Sep 2022',
    description:
      'Led development of microservices architecture, mentored junior developers, implemented CI/CD pipelines.',
    icon: FiBriefcase,
    year: 2022,
  },

  {
    id: nanoid(),
    type: 'certification',
    title: 'Azure Developer Associate',
    organization: 'Microsoft',
    duration: 'Obtained 2022',
    description:
      'Professional level certification for AWS architecture and services.',
    icon: FiAward,
    year: 2022,
  },
  {
    id: nanoid(),
    type: 'education',
    title: 'Bachelor of Technology: Computer Science and Engineering',
    organization: 'Deenbandhu Chhotu Ram University of Science & Technology',
    duration: '2015 - 2019',
    description:
      'Gained a deep understanding of Computer System Architecture, Software Development Life Cycle, Computer Networks, Linux/Windows Server administration, and acquired skills in Data Structures and Algorithm (DSA) Design.',
    year: 2019,
    icon: FiBook,
  },
];

export const skills = [
  {
    id: nanoid(),
    name: 'Frontend Development',
    technologies: [
      'React',
      'Redux',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
    icon: FaReact,
    color: 'text-blue-500',
  },
  {
    id: nanoid(),
    name: 'Backend Development',
    technologies: [
      'JavaEE',
      'Java17',
      'Spring Boot (IOC, MVC, Data, Security)',
      'Express',
      'Node.js',
    ],
    icon: FaJava,
    color: 'text-green-500',
  },
  {
    id: nanoid(),
    name: 'DevOps & Cloud',
    technologies: [
      'Docker',
      'Kubernetes',
      'AWS',
      'Microsoft Azure',
      'Ansible',
      'Jenkins',
      'Terraform',
    ],
    icon: FaDocker,
    color: 'text-blue-600',
  },
  {
    id: nanoid(),
    name: 'Database',
    technologies: [
      'Microsoft SQL Server',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Redis',
    ],
    icon: FaDatabase,
    color: 'text-green-600',
  },
];

export const certificates = [
  {
    id: nanoid(),
    name: 'Azure Developer Associate',
    issuer: 'Microsoft',
    date: '2022',
    url: 'https://learn.microsoft.com/en-in/users/rohitrana043/credentials/c1318504c1f63eba?ref=https%3A%2F%2Fwww.rohitrana.dev',
  },
  {
    id: nanoid(),
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2021',
    url: 'https://learn.microsoft.com/en-in/users/rohitrana043/credentials/ac8c5b696cf5637c?ref=https%3A%2F%2Fwww.rohitrana.dev',
  },
];

export const achievements = [
  {
    id: nanoid(),
    name: 'Service and Commitment Award',
    year: 2022,
    company: 'Tata Consultancy Services',
    url: '/images/service-commitment-2022.jpg',
    thumbnailUrl: '/images/service-commitment-2022-thumbnail.jpg',
  },
  {
    id: nanoid(),
    name: 'Applause Award',
    year: 2021,
    company: 'Tata Consultancy Services',
    url: '/images/applause-award-2021.jpg',
    thumbnailUrl: '/images/applause-award-2021-thumbnail.jpg',
  },
  {
    id: nanoid(),
    name: 'On the Spot (Team) Award',
    year: 2021,
    company: 'Tata Consultancy Services',
    url: '/images/on-the-spot-2021.jpg',
    thumbnailUrl: '/images/on-the-spot-2021-thumbnail.jpg',
  },
  {
    id: nanoid(),
    name: 'On the Spot Award',
    year: 2020,
    company: 'Tata Consultancy Services',
    url: '/images/on-the-spot-2020.jpg',
    thumbnailUrl: '/images/on-the-spot-2020-thumbnail.jpg',
  },
  {
    id: nanoid(),
    name: 'Applause for Team Award',
    year: 2020,
    company: 'Tata Consultancy Services',
    url: '/images/applause-award-2020.jpg',
    thumbnailUrl: '/images/applause-award-2020-thumbnail.jpg',
  },
];

export const education = [
  {
    id: nanoid(),
    courseName: 'Post Graduation: DevOps for Cloud Computing',
    institute: 'Lambton College',
    location: 'Toronto, ON, Canada',
    logoUrl: '/images/lambton-logo.svg',
  },
  {
    id: nanoid(),
    courseName: 'Bachelor of Technology: Computer Science and Engineering',
    institute: 'Deenbandhu Chhotu Ram University of Science & Technology',
    location: 'India',
    logoUrl: '/images/dcrust-logo.png',
  },
];

export const experiences = [
  {
    id: nanoid(),
    companyName: 'Tata Consultancy Services',
    jobTitle: 'Full Stack Devloper',
    startDate: 'Sep 2020',
    endDate: 'Sep 2022',
    logoUrl: '/images/tcs-logo.svg',
    responsibilities: [
      {
        id: nanoid(),
        text: 'Led e-commerce platform migration from Java EE (JSP/Servlet) to Salesforce B2C Commerce Platform – SFRA (Node.js – Express), ensuring 50% enhanced enterprise-level software performance with robust, high availability and scalability.',
      },
      {
        id: nanoid(),
        text: 'Developed and maintained critical ecommerce features including shopping cart functionality, checkout process optimization, and inventory management systems.',
      },
      {
        id: nanoid(),
        text: 'Implemented track items in cart functionality, along with integrating third-party APIs like shipping carriers, tax calculations etc.',
      },
      {
        id: nanoid(),
        text: 'Spearheaded comprehensive website improvements, focusing on UI/UX enhancements, product catalog optimization, security and workflow streamlining to drive 40% more user satisfaction and revenue growth.',
      },
      {
        id: nanoid(),
        text: 'Collaborated and communicate detailed information with clients and solution architects to develop Spring boot microservices for Salesforce integration with intranet systems, implementing RESTful APIs and developed packages on the Microsoft SSIS ETL tool to extract, transform and load data.',
      },
      {
        id: nanoid(),
        text: 'Analyzed 400+ user requirements to derive technical solutions throughout the development phase using Agile Scrum technology.',
      },
      {
        id: nanoid(),
        text: 'Led development of 200+ essential business functionalities, including backend coding, configuring, unit testing and debugging implementation of controllers, models, bash shell scripts, configuration, form validations and templates.',
      },
    ],
  },
  {
    id: nanoid(),
    companyName: 'Tata Consultancy Services',
    jobTitle: 'Java EE Developer',
    startDate: 'Aug 2019',
    endDate: 'Sep 2022',
    logoUrl: '/images/tcs-logo.svg',
    responsibilities: [
      {
        id: nanoid(),
        text: 'Designed, developed, implemented, and maintained full-stack application using Java J2EE, implementing business requirements for front end, and back-end components in JSP and Servlet built with Ant, Maven tools.',
      },
      {
        id: nanoid(),
        text: 'Managed database operations for deployments and feature rollouts, creating update queries and rollback procedures, mentored team members on database relationship and assisted in writing stored procedures for improved data management.',
      },
      {
        id: nanoid(),
        text: 'Utilized Microsoft SSIS to generate comprehensive Product Catalog and Orders reports.',
      },
      {
        id: nanoid(),
        text: 'Managed deployments, troubleshooting and configuration of 8+ complex production system servers for platform rollouts, feature releases and data changes.',
      },
      {
        id: nanoid(),
        text: 'Collaborated in an Agile environment with multi-cultural management to deliver high-quality code through QA/PTE/Production environment testing, debugging and code reviews.',
      },
    ],
  },
];

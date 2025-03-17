import { nanoid } from 'nanoid';

export const projects = [
  {
    id: nanoid(),
    title: 'Real Estate Management Platform',
    description:
      'I developed a comprehensive real estate management system with Next.js, TypeScript, and Material UI, backed by Spring Boot microservices. The platform features property listings with advanced search, role-based access control, favorites system, and analytics dashboards. I implemented a microservices architecture for users, properties, analytics, and contact management, ensuring scalability and maintainability. The application includes multi-language support and responsive design across all devices. My focus on security best practices and API integration resulted in a robust solution that streamlines property management for agents, administrators, and clients.',
    image: '/images/real-estate-project.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'Material UI',
      'Spring Boot',
      'Microservices',
    ],
    githubUrl: 'https://github.com/rohitrana043/real-estate-management',
    liveUrl: 'https://real-estatehub.rohitrana.dev/',
    featured: true,
  },
  {
    id: nanoid(),
    title: 'Microservices E-Commerce Platform',
    description:
      'I built a high-performance e-commerce platform using a microservices architecture. This platform leverages Express.js (Node.js), MongoDB, and React.js for a seamless user experience. To ensure continuous delivery and minimize downtime, I implemented CI/CD pipelines with Azure DevOps, resulting in a 70% reduction in deployment time. Furthermore, I utilized Terraform for efficient cloud resource management and integrated ELK/Prometheus for robust monitoring and logging, achieving 99.9% uptime.',
    image: '/images/e-comm-project.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/rohitrana043/react-e-commerce',
    liveUrl: 'https://comfy-e-comm.rohitrana.dev',
    featured: true,
  },
  {
    id: 'nanoid()',
    title: 'Project Tree Generator',
    description:
      'I built a dual-purpose tool with React and Node.js/Express that generates project tree structures from GitHub repositories or ZIP files and creates downloadable empty project scaffolds from tree text files. The application features GitHub API integration, file upload processing, and an interactive tree editor with syntax highlighting. This tool streamlines developer workflows by simplifying project documentation and facilitating quick structure replication for new projects.',
    image: '/images/project-tree-generator.png',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'GitHub API',
      'RESTful APIs',
      'File System Operations',
      'Monaco Editor',
    ],
    githubUrl: 'https://github.com/rohitrana043/project-tree-generator',
    liveUrl: 'http://project-tree-generator.rohitrana.dev/',
    featured: false,
  },
  {
    id: nanoid(),
    title: 'Backroads Tours & Travel',
    description:
      'I developed the Backroads App, a React-based travel application featuring a modern, user-friendly interface. To enhance maintainability and code reusability, I employed a component-based architecture. Additionally, I implemented centralized data handling for seamless navigation, social media integration, and service information. Finally, I automated the development and deployment process by implementing CI/CD pipelines and deploying the app on Netlify.',
    image: '/images/backroads-project.png',
    technologies: ['HTML', 'CSS', 'React.js'],
    githubUrl: 'https://github.com/rohitrana043/react-backroads-app',
    liveUrl: 'https://backroads-web-react.rohitrana.dev/',
    featured: false,
  },
  {
    id: nanoid(),
    title: 'Unsplash Images',
    description:
      'I built a dynamic image exploration application using React that leverages the Unsplash Images API. To facilitate seamless data sharing across components, I utilized the React Context API. Furthermore, I integrated React Query to efficiently cache API responses, significantly improving performance and minimizing redundant network requests. The application adheres to responsive design principles, ensuring a smooth and enjoyable user experience across various devices.',
    image: '/images/unsplash-project.png',
    technologies: ['React.js', 'Context API', 'React Query'],
    githubUrl: 'https://github.com/rohitrana043/react-unsplash-images',
    liveUrl: 'https://react-unsplash-img.rohitrana.dev/',
    featured: false,
  },
];

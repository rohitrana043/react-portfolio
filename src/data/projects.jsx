import { nanoid } from 'nanoid';

export const projects = [
  {
    id: nanoid(),
    title: 'Microservices E-Commerce Platform',
    description:
      'A scalable microservices-based e-commerce platform using Express(Node.js), MongoDB, and React.js, with seamless deployment on Azure Kubernetes Services (AKS). Implemented CI/CD pipelines with Azure DevOps, achieving 70% faster deployments and zero downtime. Leveraged Terraform for cloud resource management, and ELK/Prometheus for 99.9% uptime monitoring and logging.',
    image: '/images/e-comm-project.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/rohitrana043/react-e-commerce',
    liveUrl: 'https://comfy-e-comm.netlify.app',
    featured: true,
  },
  {
    id: nanoid(),
    title: 'Automated Cloud-Native Blog Platform',
    description:
      'Developed a cloud-native blog platform using Spring Boot, PostgreSQL and React.js, reducing page load times by 60% with AWS CloudFront and ElastiCache. Designed RESTful APIs and implemented CI/CD pipelines with GitHub Actions and AWS CodePipeline for automated testing and deployment. Integrated AWS CloudWatch for monitoring, and Secrets Manager for secure credential management.',
    image: '/images/blog-project.png',
    technologies: ['Spring Boot', 'PostgreSQL', 'React.js'],
    githubUrl: 'https://github.com/rohitrana043/springboot-blog',
    liveUrl: 'https://www.example.com',
    featured: true,
  },
  {
    id: nanoid(),
    title: 'Backroads Tours & Travel',
    description:
      'The Backroads App is a React-based project designed to showcase destinations and services with a modern, user-friendly interface. It features a component-based architecture for modular and reusable UI design, centralized data handling for navigation, social icons, and services, and smooth scrolling for an enhanced user experience. With automated CI/CD pipelines and deployment on Netlify',
    image: '/images/backroads-project.png',
    technologies: ['HTML', 'CSS', 'React.js'],
    githubUrl: 'https://github.com/rohitrana043/react-backroads-app',
    liveUrl: 'https://backroads-web-react.netlify.app/',
    featured: false,
  },
  {
    id: nanoid(),
    title: 'Unsplash Images',
    description:
      'React application that leverages the Unsplash Images API to dynamically display curated image collections. It showcases advanced React concepts such as Context API for seamless data sharing across deeply nested components and React Query for efficient API response caching to enhance performance and reduce redundant network requests. The app demonstrates responsive design principles, ensuring a smooth user experience.',
    image: '/images/unsplash-project.png',
    technologies: ['React.js', 'Context API', 'React Query'],
    githubUrl: 'https://github.com/rohitrana043/react-unsplash-images',
    liveUrl: 'https://react-unsplash-img.netlify.app/',
    featured: false,
  },
];

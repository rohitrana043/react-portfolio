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
    liveUrl: 'https://www.example.com',
    featured: true,
  },
  {
    id: nanoid(),
    title: 'Automated Cloud-Native Blog Platform',
    description:
      'Developed a cloud-native blog platform using Spring Boot, PostgreSQL and React.js, reducing page load times by 60% with AWS CloudFront and ElastiCache. Designed RESTful APIs and implemented CI/CD pipelines with GitHub Actions and AWS CodePipeline for automated testing and deployment. Integrated AWS CloudWatch for monitoring, Cognito for authentication, and Secrets Manager for secure credential management.',
    image: '/images/blog-project.png',
    technologies: ['Spring Boot', 'PostgreSQL', 'React.js', 'Tailwind'],
    githubUrl: 'https://github.com/rohitrana043/springboot-blog',
    liveUrl: 'https://www.example.com',
    featured: true,
  },
];

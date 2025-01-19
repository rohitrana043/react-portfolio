import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';
import ProjectCard from '../components/shared/ProjectCard';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function Projects() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Projects | Rohit Rana | Full Stack Developer & DevOps Engineer',
    }); // non interaction event
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Projects | Rohit Rana | Full Stack Developer & DevOps Engineer
        </title>
        <meta
          name="description"
          content="Explore my web development and cloud computing projects. From full stack applications to cloud-based solutions, view my work here."
        />

        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Projects | Rohit Rana | Full Stack Developer & DevOps Engineer"
        />
        <meta
          property="og:description"
          content="Check out the latest web development projects and cloud-based solutions I've worked on, including full stack applications and DevOps implementations."
        />
        <meta property="og:url" content="https://www.rohitrana.dev" />
        <meta
          property="og:image"
          content="https://www.rohitrana.dev/images/portfolio-projects.png"
        />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects | Rohit Rana | Full Stack Developer & DevOps Engineer"
        />
        <meta
          name="twitter:description"
          content="Explore my web development and cloud computing projects, including full stack applications and DevOps implementations."
        />
        <meta name="twitter:creator" content="@rohitrana043" />
        <meta
          name="twitter:image"
          content="https://www.rohitrana.dev/images/portfolio-projects.png"
        />
        {/* End Twitter tags */}
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;

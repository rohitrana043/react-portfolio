import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Credentials from '../components/sections/Credentials';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname); // non interaction event
  }, []);
  return (
    <>
      <Helmet>
        <title>Rohit Rana | Full Stack Developer & DevOps Engineer</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I am Rohit Rana, Full Stack Developer & DevOps Engineer specializing in Java, Spring Boot, React, and Cloud Technologies. Experienced in AWS, Azure, and modern DevOps practices."
        />

        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rohit Rana | Full Stack Developer & DevOps Engineer"
        />
        <meta
          property="og:description"
          content="Explore my portfolio to learn about my skills in web development, cloud computing, and DevOps"
        />
        <meta property="og:url" content="https://www.rohitrana.dev" />
        <meta
          property="og:image"
          content="https://www.rohitrana.dev/images/portfolio-home.png"
        />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rohit Rana | Full Stack Developer & DevOps Engineer"
        />
        <meta
          name="twitter:description"
          content="Explore my portfolio showcasing my work as a Full Stack Developer and DevOps Expert."
        />
        <meta name="twitter:creator" content="@rohitrana043" />
        <meta
          name="twitter:image"
          content="https://www.rohitrana.dev/images/portfolio-home.png"
        />
        {/* End Twitter tags */}
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Skills />
        <FeaturedProjects />
        <Credentials />
      </motion.div>
    </>
  );
}

export default Home;

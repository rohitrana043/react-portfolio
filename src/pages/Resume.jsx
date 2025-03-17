import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiDownload } from 'react-icons/fi';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function Resume() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Resume | Rohit Rana',
    }); // non interaction event
  }, []);
  const resumeUrl =
    'https://drive.google.com/file/d/1HGaRjpAKdHHmku54ND4ssKN0BpKPdL1G/view?usp=sharing';

  const handleClick = () => {
    ReactGA.event({
      category: 'Resume Page',
      action: 'Download Resume',
      label: 'Download Resume Clicked',
      value: 1,
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Resume | Rohit Rana | Full Stack Developer & DevOps Engineer
        </title>
        <link
          rel="canonical"
          href={`https://www.rohitrana.dev${window.location.pathname}`}
        />
        <meta
          name="title"
          content="Resume | Rohit Rana | Full Stack Developer & DevOps Engineer"
        />
        <meta
          name="description"
          content="View my professional resume. Learn about my experience, skills, and educational background as a Full Stack Developer and DevOps Expert."
        />
        <meta name="author" content="Rohit Rana" />

        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Resume | Rohit Rana | Full Stack Developer & DevOps Engineer"
        />
        <meta
          property="og:description"
          content="Explore my professional journey as a Full Stack Developer and DevOps Expert. Download my resume for more details."
        />
        <meta property="og:url" content="https://www.rohitrana.dev/resume" />
        <meta
          property="og:image"
          content="https://www.rohitrana.dev/images/portfolio-resume.png"
        />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Resume | Rohit Rana | Full Stack Developer & DevOps Engineer"
        />
        <meta property="twitter:url" content="https://rohitrana.dev/resume" />
        <meta
          name="twitter:description"
          content="Explore my professional journey as a Full Stack Developer and DevOps Expert. Download my resume for more details."
        />
        <meta name="twitter:creator" content="@rohitrana043" />
        <meta
          name="twitter:image"
          content="https://www.rohitrana.dev/images/portfolio-resume.png"
        />
        {/* End Twitter tags */}
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            My Resume
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-colors duration-200"
              onClick={handleClick}
            >
              <FiDownload />
              Download Resume
            </a>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <h2>Summary</h2>
            <p>
              Full Stack Developer and DevOps Engineer with expertise in
              building scalable, cloud-native applications. Proficient in
              implementing CI/CD pipelines, containerization, and infrastructure
              as code. Experienced in Agile methodologies and cross-functional
              collaboration to deliver high-quality software solutions.
            </p>
          </div>
          {/* <div className="prose dark:prose-invert max-w-none">
            <h2>Experience</h2>
            <p>
              Full Stack Developer and DevOps Engineer with expertise in
              building scalable, cloud-native applications. Proficient in
              implementing CI/CD pipelines, containerization, and infrastructure
              as code. Experienced in Agile methodologies and cross-functional
              collaboration to deliver high-quality software solutions.
            </p>
          </div> */}
        </motion.div>
      </section>
    </>
  );
}

export default Resume;

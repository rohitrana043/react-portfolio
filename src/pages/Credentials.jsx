import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  certificates,
  achievements,
  education,
  experiences,
} from '../data/credentials';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function Credentials() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Credentials | Rohit Rana',
    }); // non interaction event
  }, []);
  return (
    <>
      <Helmet>
        <title>Credentials | Rohit Rana</title>
        <meta name="title" content="Credentials | Rohit Rana" />
        <meta
          name="description"
          content="View my professional credentials, including certifications, training, and expertise in full stack web development and cloud computing."
        />
        <meta name="author" content="Rohit Rana" />

        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Credentials | Rohit Rana" />
        <meta
          property="og:description"
          content="Explore my credentials and certifications that showcase my expertise in full stack web development, cloud computing, and DevOps."
        />
        <meta
          property="og:url"
          content="https://www.rohitrana.dev/credentials"
        />
        <meta
          property="og:image"
          content="https://www.rohitrana.dev/images/portfolio-credentials.png"
        />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Credentials | Rohit Rana" />
        <meta
          property="twitter:url"
          content="https://rohitrana.dev/credentials"
        />
        <meta
          name="twitter:description"
          content="Explore my credentials and certifications in full stack development and cloud computing."
        />
        <meta name="twitter:creator" content="@rohitrana043" />
        <meta
          name="twitter:image"
          content="https://www.rohitrana.dev/images/portfolio-credentials.png"
        />
        {/* End Twitter tags */}
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          My Credentials
        </motion.h1>
        {/* Experience */}
        <div className="max-w-3xl mx-auto grid gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Experience
          </motion.h2>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <img
                  src={exp.logoUrl}
                  alt={exp.companyName}
                  className="flex-none w-32 relative"
                />
                <div className="flex-auto">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.jobTitle}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {exp.companyName} • {exp.startDate} - {exp.endDate}
                  </p>
                  <ul className="list-disc list-inside">
                    {exp.responsibilities.map((resp) => {
                      return (
                        <li
                          className="text-gray-600 dark:text-gray-300 mb-2"
                          key={resp.id}
                        >
                          {resp.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <div className="max-w-3xl mx-auto grid gap-8 mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Certificates
          </motion.h2>
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center gap-4">
                <FiAward className="text-3xl text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiExternalLink />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="max-w-3xl mx-auto grid gap-8 mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Education
          </motion.h2>

          {education.map((ed, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              key={ed.id}
              className="flex flex-col md:flex-row gap-4 md:item-center items-start bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <img
                src={ed.logoUrl}
                alt={ed.institute}
                className="flex-none w-48 relative"
              />
              <div className="flex-auto">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {ed.courseName}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {ed.institute} • {ed.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="max-w-3xl mx-auto grid gap-8 mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Achievements
          </motion.h2>
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row gap-4 md:item-center items-start">
                <img
                  src={ach.thumbnailUrl}
                  alt={ach.name}
                  className="flex-none w-48 relative"
                />
                <div className="flex-auto">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {ach.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {ach.company} • {ach.year}
                  </p>
                  <a
                    href={ach.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiExternalLink />
                    View Achievement
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Credentials;

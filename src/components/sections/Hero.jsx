import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';
import ReactGA from 'react-ga4';

function Hero() {
  const resumeUrl =
    'https://drive.google.com/file/d/1HGaRjpAKdHHmku54ND4ssKN0BpKPdL1G/view?usp=sharing';

  const handleResumeDownload = () => {
    ReactGA.event({
      category: 'Hero Section',
      action: 'Download Resume',
      label: 'Download Resume from Hero',
      value: 1,
    });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/images/profile.jpg"
          alt="Rohit Rana"
          className="w-1/3 h-1/3 md:w-1/5 mdh-1/5 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Hi, I'm Rohit Rana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"
        >
          Full Stack Developer & DevOps Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-l md:text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          <MdOutlineLocationOn className="inline" /> Toronto, ON, Canada
        </motion.p>

        {/* Resume Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg
                     hover:shadow-xl transform transition-all"
          >
            <FiDownload className="text-lg" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            {
              Icon: FiGithub,
              href: 'https://github.com/rohitrana043',
              label: 'GitHub',
            },
            {
              Icon: FiLinkedin,
              href: 'https://linkedin.com/in/rohitrana043',
              label: 'LinkedIn',
            },
            {
              Icon: FiMail,
              href: 'mailto:connect@rohitrana.dev',
              label: 'Email',
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={label}
            >
              <Icon className="inline" />{' '}
              <span className="text-xl">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm passionate about building software that makes a difference. I
            have experience designing and building scalable, cloud-native
            applications using microservices architecture, DevOps practices, and
            full-stack development. Throughout my career, I've had the
            opportunity to work on some really interesting projects, like
            migrating an e-commerce platform to the Salesforce B2C Commerce
            platform and developing a cloud-native blog platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

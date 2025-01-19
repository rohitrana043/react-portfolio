import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';

function Hero() {
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
          className="text-l md:text-xl text-gray-600 dark:text-gray-300 mb-4"
        >
          <MdOutlineLocationOn className="inline" /> Toronto, ON, Canada
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
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
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate software developer with expertise in designing and
            building scalable, cloud-native applications. With hands-on
            experience in microservices architecture, DevOps practices, and
            full-stack development, I specialize in creating high-performance
            solutions that deliver impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

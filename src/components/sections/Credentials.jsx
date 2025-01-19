// src/components/sections/Credentials.jsx
import { motion } from 'framer-motion';
import { credentials } from '../../data/credentials';

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  const containerVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  const Icon = item.icon;

  return (
    <div className="relative flex justify-center md:justify-between items-center w-full">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-1 bg-blue-200 dark:bg-blue-900"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`relative z-10 w-full md:w-[45%] ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        }`}
      >
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Icon */}
          <div
            className="absolute top-6 -mt-14 flex justify-center w-11/12 md:w-auto
                        md:relative md:top-0 md:mt-0 md:mb-4"
          >
            <div className="p-4 bg-blue-500 rounded-full text-white">
              <Icon size={24} />
            </div>
          </div>

          {/* Year Badge */}
          <div className="mb-4">
            <span
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                           rounded-full text-sm font-semibold"
            >
              {item.year}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
            {item.organization}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {item.duration}
          </p>
          <p className="text-gray-700 dark:text-gray-400">{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

function Credentials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey, educational background, and certifications.
          </p>
        </motion.div>

        <div className="space-y-24">
          {credentials.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;

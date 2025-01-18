import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt={title}
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 
                       text-blue-600 dark:text-blue-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 
                     hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FiGithub />
            <span>Code</span>
          </motion.a>

          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 
                       hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiExternalLink />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

import { motion } from 'framer-motion';

function SkillCard({ skill }) {
  const { name, technologies, icon: Icon, color } = skill;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <Icon className={`text-3xl ${color}`} />
        <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 
                     text-gray-700 dark:text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;

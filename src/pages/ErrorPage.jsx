import { useRouteError, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Oops! Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            {error?.message ||
              "Sorry, the page you're looking for doesn't exist."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors duration-200"
            >
              <FiHome />
              Go Home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;

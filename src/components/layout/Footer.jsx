import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              &lt;Rohit Rana /&gt;
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Developer & DevOps Engineer
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/rohitrana043"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rohitrana043"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/rohitrana043"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Rohit Rana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

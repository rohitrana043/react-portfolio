import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/sections/ContactForm';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Rohit Rana</title>
        <meta
          name="description"
          content="Get in touch with me for web development or DevOps projects. Reach out to discuss potential collaborations or inquiries."
        />

        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | Rohit Rana" />
        <meta
          property="og:description"
          content="Contact me for web development, cloud computing, or DevOps services. Let's discuss how I can help with your next project."
        />
        <meta property="og:url" content="https://www.rohitrana.dev" />
        <meta
          property="og:image"
          content="https://www.rohitrana.dev/images/resume-thumbnail.jpg"
        />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Rohit Rana" />
        <meta
          name="twitter:description"
          content="Get in touch with me for web development or cloud computing services. I'm ready to collaborate on your next project."
        />
        <meta name="twitter:creator" content="@rohitrana043" />
        <meta
          name="twitter:image"
          content="https://www.rohitrana.dev/images/resume-thumbnail.jpg"
        />
        {/* End Twitter tags */}
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <FiMail className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      connect@rohitrana.dev
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiMapPin className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Toronto, ON, Canada
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;

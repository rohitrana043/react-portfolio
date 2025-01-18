import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import { validateContactForm } from '../../utils/helpers';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Validate form data
      const validationErrors = validateContactForm(data);
      if (Object.keys(validationErrors).length > 0) {
        throw new Error('Validation failed');
      }

      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully!',
      });
      reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto space-y-6"
    >
      {submitStatus && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div>
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
          <FiUser />
          <span>Name</span>
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600
                   focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          placeholder="Your name"
          disabled={isSubmitting}
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
          <FiMail />
          <span>Email</span>
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
          })}
          type="email"
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600
                   focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
          <FiMessageSquare />
          <span>Message</span>
        </label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600
                   focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          rows={5}
          placeholder="Your message"
          disabled={isSubmitting}
        />
        {errors.message && (
          <span className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </span>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700
                 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>Processing...</>
        ) : (
          <>
            <FiSend />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;

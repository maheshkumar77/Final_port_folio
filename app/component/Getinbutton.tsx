"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter, FaSlack } from 'react-icons/fa';

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface Topic {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const GetinPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });

  const topics: Topic[] = [
    { id: 'audio-video', label: 'Audio & Video', icon: <FiHelpCircle /> },
    { id: 'billing', label: 'Billing & Plans', icon: <FiHelpCircle /> },
    { id: 'connection', label: 'Connection Trouble', icon: <FiHelpCircle /> },
    { id: 'channels', label: 'Managing Channels', icon: <FiHelpCircle /> },
    { id: 'members', label: 'Managing Members', icon: <FiHelpCircle /> },
    { id: 'notifications', label: 'Notifications', icon: <FiHelpCircle /> },
    { id: 'signin', label: 'Signing In', icon: <FiHelpCircle /> },
    { id: 'connect', label: 'Slack Connect', icon: <FaSlack /> }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen p-4 md:p-8 relative">
      {/* Background with 3D design effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')"
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full max-w-4xl rounded-xl bg-gray-900/80 backdrop-blur-md shadow-2xl overflow-hidden border border-gray-700"
        >
          <div className="relative overflow-hidden py-12 px-6 md:px-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
            />
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-center text-white font-sans tracking-tight"
              >
                Contact Us
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-center text-gray-300 max-w-2xl"
              >
                Questions, bug reports, feedback — we're here for it all.
              </motion.p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Select a topic:</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
               
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center mb-2"
                >
                  <div className="w-full border-t border-gray-700"></div>
                  <span className="px-4 text-gray-400 text-sm">OR</span>
                  <div className="w-full border-t border-gray-700"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us what you need help with:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder='Enter a topic, like "notifications"'
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 transition-all pr-12"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <FiHelpCircle />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {(selectedTopic || searchQuery) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Tell us more</h3>
                
                <form className="space-y-6">
                  {[
                    { id: 'fullName', label: 'Full Name', icon: <FiUser />, type: 'text' },
                    { id: 'email', label: 'Email Address', icon: <FiMail />, type: 'email' },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.4 + index * 0.1 }
                      }}
                    >
                      <label 
                        htmlFor={field.id} 
                        className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
                      >
                        <span className="mr-2">{field.icon}</span>
                        {field.label}
                      </label>
                      <motion.div whileHover={{ scale: 1.01 }}>
                        <input
                          type={field.type}
                          id={field.id}
                          value={formData[field.id as keyof FormData]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 transition-all"
                          placeholder={field.label}
                        />
                      </motion.div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.6 }
                    }}
                  >
                    <label 
                      htmlFor="message" 
                      className="text-sm font-medium text-gray-300 mb-2 flex items-center"
                    >
                      <span className="mr-2"><FiMessageSquare /></span>
                      Your Message
                    </label>
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      className="relative"
                    >
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 transition-all min-h-[120px]"
                        placeholder="Please describe your issue in detail..."
                      ></textarea>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.8 }
                    }}
                    className="mt-8"
                  >
                    <button
                      type="submit"
                      className="w-full group relative overflow-hidden py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all"
                    >
                      <div className="relative z-10 flex items-center justify-center">
                        <span className="font-medium text-white">GET HELP</span>
                      </div>
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 pt-6 border-t border-gray-800 flex flex-col items-center"
            >
              <p className="text-sm text-gray-400 mb-4">Or connect with us directly</p>
              <div className="flex space-x-4">
                {[
                  { icon: <FaLinkedin className="text-lg" />, url: "#", color: "bg-blue-600" },
                  { icon: <FaGithub className="text-lg" />, url: "#", color: "bg-gray-700" },
                  { icon: <FaTwitter className="text-lg" />, url: "#", color: "bg-cyan-500" },
                  { icon: <FiMail className="text-lg" />, url: "#", color: "bg-red-500" },
                  { icon: <FiPhone className="text-lg" />, url: "#", color: "bg-green-500" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${social.color} rounded-full text-white shadow-lg`}
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetinPage;
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, ShieldCheck } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full Stack Engineering",
      description:
        "Skilled in developing robust web applications using React.js,Vue.js, JavaScript,Python, Node.js, and REST APIs.",
    },
    {
      icon: <Database size={24} />,
      title: "Database & Caching",
      description:
        "Hands-on experience with MongoDB, PostgreSQL, Redis, and efficient data modelling for high-performance systems.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & DevOps",
      description:
        "Experience deploying and managing applications using AWS, Docker.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Secure & Scalable Systems",
      description:
        "Built resilient microservices with JWT authentication, AES-256 encryption, RabbitMQ messaging, and real-time monitoring with Grafana.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Research & Development",
      description:
        "Showcases expertise in developing AI-driven applications with RAG and CAG architectures.",
    },
  ];

  return (
    <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a results-driven Full Stack Engineer with 2.7+ years of
            experience developing scalable web applications, secure APIs, and
            robust backend systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I began my professional career at CarTrade Tech Limited as a
                Junior Full Stack Engineer, where I was involved in backend
                development using Python , NodeJs and PHP. Over time, I expanded
                my capabilities into frontend engineering with Vue.js and
                contributed to high-impact projects in the auto-finance and
                vehicle-tech domain.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Within two years, I was promoted to Senior Engineer – Full Stack
                in recognition of my ability to lead feature development,
                integrate scalable microservices, and build secure, cloud-native
                solutions. I thrive in Agile teams, enjoy turning complex
                requirements into reliable code, and take pride in building
                systems that make a measurable difference.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Education</h4>
              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-white"
                } shadow-md`}
              >
                <h5 className="font-medium">
                  Bachelor of Technology in Computer Science and Engineering
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ideal Institute of Technology • 2023
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:shadow-xl"
                }`}
              >
                <div className="text-blue-600 mb-3">{highlight.icon}</div>
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

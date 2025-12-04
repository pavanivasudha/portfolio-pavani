import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: "Senior Engineer – Full Stack",
      company: "CarTrade Tech Limited",
      location: "Kakinada, Andhra Pradesh, India",
      period: "April 2025 – Present",
      type: "Full-time",
      description:
        "Leading development of Mahindra’s Genie Portal for auto loan digitization and financial reporting.",
      achievements: [
        "Built a high-performance loan management portal (B2C & D2C) for Mahindra Finance.",
        "Developed role-based modules for dealers, users, leads, masters, and reports.",
        "Integrated APIs with HDFC, ICICI, Kotak, and Axis banks, reducing verification time by 40%.",
        "Enhanced UI/UX with Vuejs.js and Figma, improving engagement by 20%.",
        "Enabled real-time monitoring and resilience using AWS Lambda and Grafana.",
      ],
      technologies: [
        "React.js",
        "Vue.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "AWS (S3, Lambda)",
        "Bootstrap",
        "Git",
      ],
    },
    {
      title: "Junior Engineer – Full Stack",
      company: "CarTrade Tech Limited",
      location: "Kakinada, Andhra Pradesh, India",
      period: "May 2023 – Feb 2025",
      type: "Full-time",
      description:
        "Developed scalable microservices and web features for CarTrade and CarWale vehicle finance portals.",
      achievements: [
        "Migrated legacy systems to Python,React.js and Vue.js, improving maintainability and speed.",
        "Implemented secure loan applications with AES-256 encryption and JWT authentication.",
        "Built CRM admin panels for leads, masters, user access, and reporting.",
        "Developed Business Rule Engine for dynamic validations and reusable logic across services.",
        "Streamlined microservice integration using Redis and Docker for local development.",
      ],
      technologies: [
        "Python",
        "Node.js",
        "Vue.js",
        "React.js",
        "MongoDB",
        "Redis",
        "Microservices",
        "Docker",
        "REST APIs",
        "Git",
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Full-time":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Internship":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

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
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through various roles and experiences that have shaped my
            expertise in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full ${
              darkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          ></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                    darkMode
                      ? "bg-gray-800 border-blue-500"
                      : "bg-white border-blue-600"
                  } z-10`}
                ></div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-white hover:shadow-xl"
                    }`}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                            exp.type
                          )}`}
                        >
                          {exp.type}
                        </span>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>

                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <Building size={16} className="mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin size={14} className="mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              darkMode
                                ? "bg-gray-600 text-gray-200"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

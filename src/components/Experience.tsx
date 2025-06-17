
import { Clock, Code, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
    achievements: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Implemented CI/CD pipelines"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    duration: "2020 - 2022",
    location: "New York, NY",
    description: "Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 15+ production applications",
      "Reduced bug reports by 30%",
      "Introduced automated testing"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    duration: "2019 - 2020",
    location: "Austin, TX",
    description: "Specialized in creating responsive and interactive user interfaces. Worked closely with designers to implement pixel-perfect designs and enhance user experience.",
    achievements: [
      "Increased user engagement by 25%",
      "Optimized website loading speed",
      "Implemented responsive design patterns"
    ],
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Junior Developer",
    company: "Code Academy Pro",
    duration: "2018 - 2019",
    location: "Remote",
    description: "Started my professional journey learning best practices in software development. Contributed to various projects while building foundational skills in web development.",
    achievements: [
      "Completed 20+ coding challenges",
      "Contributed to open source projects",
      "Learned agile development practices"
    ],
    color: "from-orange-500 to-red-500"
  }
];

export const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg mb-6">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-4 bg-gradient-to-r ${exp.color}`}>
                      {exp.duration}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Code className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

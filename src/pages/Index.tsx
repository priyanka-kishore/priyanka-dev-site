import { Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-8 h-screen">
        {/* Left Column - Personal Info */}
        <div className="col-span-1 space-y-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Priyanka Kishore</h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">Software Engineer</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate developer with 5+ years of experience creating scalable applications and user-centric solutions.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div>📧 priyankacancode@gmail.com</div>
              <div>
                🔗 <a 
                  href="https://linkedin.com/in/priyanka-m-kishore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
                >
                  linkedin.com/in/priyanka-m-kishore
                </a>
              </div>
              {/* <div>📱 (555) 123-4567</div> */}
              <div>📍 Germantown, MD</div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Skills</h3>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Node.js</span>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">AWS</span>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Git</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Docker</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Linux</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Experience & Education */}
        <div className="col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">Professional Experience</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Data Engineer</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">June 2021 - Present</span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Enlighten • Columbia, MD</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Monitor and manage 6-8 customer-facing data pipelines using Airflow and NiFi, maintaining >99% ingest cluster uptime, proactively identify and resolve ingest failures (e.g., parser errors, S3 issues, Kubernetes pods limit), reducing customer-impacting incidents by 50%.</li>
                  {(() => {
                    const description = '• Develop and maintain 20+ custom Java parsers to ingest client-defined and commercial data types (e.g., PAI, news archives) into Enlighten\'s proprietary platform, IONIC; enable scalable ingest across 6 customer deployments through reusable parser components.';
                    return <li>{description}</li>;
                  })()}
                  <li>• Designed the team's first Superset dashboards of 15-20 visualizations, enabling 5+ engineers and PMs to monitor ingest quality and catch missing/duplicate data, errors, and slowdowns before impacting customers.</li>
                  <li>• Collaborate directly with clients to define and deliver parser transformations aligning with their data ingest needs; deliver compressed parser packages and ensure clean, validated output for ingest.</li>
                  <li>• Tech stack: Java, SQL, IONIC, NiFi, Airflow, Superset, S3, ECR, SQS, Kubernetes/K9s, Docker, Git, Maven</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Frontend Engineer</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2022 - 2024</span>
                </div>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Enlighten • Columbia, MD</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Built and extended Vue.js components for Avalanche, a Big Data Platform (BDP) application used by government clients to request, restore, and share archived S3 data across the Unified Platform.</li>
                  <li>• Improved UI responsiveness and consistency across tabs and modals, enhancing user experience across critical workflows using Vue 3, TypeScript, Naive UI, Apex Charts, Pinia, and Element+.</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Backend Engineer</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2021 - 2022</span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">Enlighten • Columbia, MD</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Maintained and improved the Records backend service of the BDP to support data ingest and service integration for 3 BDP applications using Java and Maven.</li>
                  <li>• Implemented new data fields in Java object model and wrote SQL migration scripts to support upcoming feature changes and schema updates.</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Board Member, Code Her Rising, 501(c)(3) non-profit</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2024 - Present</span>
                </div>
                <p className="text-sm text-orange-600 dark:text-orange-400 mb-2">Boyds, MD</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Design branded graphics and digital assets for event marketing and merchandise, supporting outreach for tech events with 50-100+ attendees.</li>
                  <li>• Engage in outreach and networking initiatives to promote organizational mission of supporting women in tech, resulting in press coverage and 3-4 media features that boosted visibility and membership interest.</li>
                </ul>
              </div>

              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Full Stack Engineer Intern</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2020 - 2021</span>
                </div>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-2">Enlighten • Linthicum Heights, MD</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Developed an internal notifications system enabling cross-platform event notifications across 5+ Big Data Platform applications, email, and Mattermost using Java, Kafka, Maven, and Spring APIs.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">Education & Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">B.S. Computer Science</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">University of Technology, 2018</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Certifications</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">AWS Solutions Architect</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">React Developer Certified</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Notable Projects</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">E-commerce Platform</h4>
                <p className="text-gray-600 dark:text-gray-300">React, Node.js, PostgreSQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400">Analytics Dashboard</h4>
                <p className="text-gray-600 dark:text-gray-300">TypeScript, Python, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

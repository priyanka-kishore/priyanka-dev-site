
import { Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-8 h-screen">
        {/* Left Column - Personal Info */}
        <div className="col-span-1 space-y-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h1>
            <p className="text-lg text-blue-600 font-semibold mb-4">Software Engineer</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Passionate developer with 5+ years of experience creating scalable applications and user-centric solutions.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
            <div className="space-y-2 text-sm">
              <div>📧 your.email@example.com</div>
              <div>🔗 linkedin.com/in/yourprofile</div>
              <div>📱 (555) 123-4567</div>
              <div>📍 San Francisco, CA</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Key Skills</h3>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Node.js</span>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">AWS</span>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Git</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Docker</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Linux</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Experience & Education */}
        <div className="col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">Professional Experience</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">Senior Software Engineer</h3>
                  <span className="text-sm text-gray-600">2022 - Present</span>
                </div>
                <p className="text-sm text-blue-600 mb-2">Tech Innovators Inc. • San Francisco, CA</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Leading development of scalable web applications using React and Node.js</li>
                  <li>• Improved application performance by 40% through optimization</li>
                  <li>• Mentoring team of 5 developers and implementing CI/CD pipelines</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">Full Stack Developer</h3>
                  <span className="text-sm text-gray-600">2020 - 2022</span>
                </div>
                <p className="text-sm text-purple-600 mb-2">Digital Solutions Ltd. • New York, NY</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Developed 15+ production applications using modern JavaScript frameworks</li>
                  <li>• Reduced bug reports by 30% through automated testing implementation</li>
                  <li>• Collaborated with cross-functional teams on high-quality solutions</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">Frontend Developer</h3>
                  <span className="text-sm text-gray-600">2019 - 2020</span>
                </div>
                <p className="text-sm text-green-600 mb-2">StartupXYZ • Austin, TX</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Created responsive and interactive user interfaces</li>
                  <li>• Increased user engagement by 25% through UX improvements</li>
                  <li>• Implemented responsive design patterns and optimized loading speed</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">Education & Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                <p className="text-sm text-blue-600">B.S. Computer Science</p>
                <p className="text-xs text-gray-600">University of Technology, 2018</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Certifications</h3>
                <p className="text-sm text-purple-600">AWS Solutions Architect</p>
                <p className="text-xs text-gray-600">React Developer Certified</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Notable Projects</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <h4 className="font-semibold text-blue-600">E-commerce Platform</h4>
                <p className="text-gray-600">React, Node.js, PostgreSQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600">Analytics Dashboard</h4>
                <p className="text-gray-600">TypeScript, Python, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

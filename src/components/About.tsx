
import { User, Code } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg mb-6">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-lg flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center">
                  <Code className="w-24 h-24 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Hello, I'm a passionate developer</h3>
              <p className="text-gray-600 leading-relaxed">
                With expertise in modern web technologies, I specialize in creating scalable applications 
                and user-centric solutions. My journey in software engineering has been driven by 
                curiosity and a commitment to continuous learning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I thrive in collaborative environments and enjoy tackling complex problems with 
                innovative approaches. When I'm not coding, you'll find me exploring new technologies 
                or contributing to open-source projects.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import { Link, User } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-6">
          <Link className="w-8 h-8 text-blue-600" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
        
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to bring your next project to life? I'm always excited to discuss new opportunities 
          and challenges. Let's create something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a 
            href="mailto:your.email@example.com"
            className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Send Email
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            View LinkedIn
          </a>
        </div>
        
        <div className="text-blue-200 text-sm">
          © 2024 Software Engineer Portfolio. Built with React & Tailwind CSS.
        </div>
      </div>
    </section>
  );
};

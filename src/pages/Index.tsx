import { Code } from "lucide-react";

/*
TODO 
1 - Add profile picture
2 - Add months to dates
3 - Update colors
4 - Try to nest all Enlighten roles under 1 Enlighten?
5 - Make everything fit in 1 page
6 - Fix the background color
7 - Match the tag colors from the Skills section?
8 - Deploy!
*/

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Personal Info */}
        <div className="col-span-1 space-y-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <img
                  src="/profile-notion.png"
                  alt="Priyanka Kishore profile"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Priyanka Kishore</h1>
            <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block text-transparent bg-clip-text font-semibold">Software Engineer</p>
            <p className="text-xs text-gray-400 mb-4"><i>(she/they)</i></p>
            {/* <p className="text-xs text-gray-400 mb-4"><i>5 years of experience</i></p> */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">semi-passionate developer with 5 years of attempts to build scalable applications and user-centric solutions</p> */}
          </div>

          {/* Contact section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Let's connect!</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">

              <div>
                🔗 <a
                  href="https://linkedin.com/in/priyanka-m-kishore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-800 dark:hover:text-blue-300 hover:font-semibold transition-colors"
                >
                  linkedin.com/in/priyanka-m-kishore
                </a>
              </div>
              <div>
                🧑🏽‍💻 <a
                  href="https://github.com/priyanka-kishore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-800 dark:hover:text-blue-300 hover:font-semibold transition-colors"
                >
                  github.com/priyanka-kishore
                </a>
              </div>
              <div>📍 Germantown, MD</div>
              <div>
                📧{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    if (window.confirm("Would you like to copy my email address?")) {
                      navigator.clipboard.writeText("priyankacancode@gmail.com");
                      alert("Copied!");
                    }
                  }}
                >
                  <i>Click to reveal email</i>
                </span>
              </div>
            </div>
          </div>

          {/* Skills section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">My techy skills</h3>
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Languages</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Java</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">SQL</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">TypeScript/JavaScript</span>
              </div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Tools</h4>
              <div className="flex flex-wrap gap-1">
                {/* Apache tools */}
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Maven</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">NiFi</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Airflow</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Superset</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Kafka</span>
                {/* AWS tools */}
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">S3</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">SQS</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">SNS</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">ECR</span>
                {/* Orchestration/management tools */}
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Kubernetes/K9s</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Docker/Colima</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Git</span>
              </div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Frameworks & Databases</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Vue.js</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">React.js</span>

                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Trino</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Elasticsearch</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Supabase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Experience & Education */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">Professional Experience <span className="text-xs text-gray-400 font-light ml-1"><i>of 5 years</i></span></h2>
            <div className="space-y-4">

              {/* Data Engineer - Purple */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Data Engineer</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2024 - <i>Current</i></span>
                </div>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Enlighten • Columbia, MD</p>
                <div className="flex flex-wrap gap-1 mt-2 mb-2">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Java</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">SQL</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Trino</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">NiFi</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Airflow</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Superset</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">S3</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">ECR</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">SQS</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Kubernetes/K9s</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Docker</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Git</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Maven</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5 marker:text-purple-500 dark:marker:text-purple-400">
                  <li>Monitor and manage <span className="hover:text-black hover:font-semibold">6-8 customer-facing data pipelines</span> using Airflow and NiFi, <span className="hover:text-black hover:font-semibold">maintaining &gt;99% ingest cluster uptime</span>; proactively identify and resolve ingest failures (e.g., parser errors, S3 issues, Kubernetes pods limit), <span className="hover:text-black hover:font-semibold">reducing customer-impacting incidents by 50%.</span></li>
                  <li>Develop and maintain 20+ custom Java parsers to ingest client-defined and commercial data types (e.g., PAI, news archives) into Enlighten's proprietary platform, <i>IONIC</i>; enable scalable ingest across 6 customer deployments through reusable parser components.</li>
                  <li>Designed the team's first Superset dashboards of 15-20 visualizations, enabling 5+ engineers and PMs to monitor ingest quality and catch missing/duplicate data, errors, and slowdowns before impacting customers.</li>
                  <li>Collaborate directly with clients to define and deliver parser transformations aligning with their data ingest needs; deliver compressed parser packages and ensure clean, validated output for ingest.</li>
                </ul>
              </div>

              {/* Frontend Engineer - Violet */}
              <div className="border-l-4 border-violet-500 pl-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Frontend Engineer</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2022 - 2024</span>
                </div>
                <p className="text-sm text-violet-600 dark:text-violet-400 mb-2">Enlighten • Columbia, MD</p>
                <div className="flex flex-wrap gap-1 mt-2 mb-2">
                  <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-xs rounded">Vue 3</span>
                  <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-xs rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-xs rounded">Naive UI</span>
                  <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-xs rounded">Apex Charts</span>
                  <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-xs rounded">Pinia</span>
                  <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-xs rounded">Element+</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5 marker:text-violet-500 dark:marker:text-violet-400">
                  <li>Built and extended Vue.js components for Avalanche, a Big Data Platform (BDP) application used by government clients to request, restore, and share archived S3 data across the Unified Platform.</li>
                  <li>Improved UI responsiveness and consistency across tabs and modals, enhancing user experience across critical workflows using Vue 3, TypeScript, Naive UI, Apex Charts, Pinia, and Element+.</li>
                </ul>
              </div>

              {/* Backend Engineer - Indigo */}
              <div className="border-l-4 border-indigo-500 pl-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Backend Engineer</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2021 - 2022</span>
                </div>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">Enlighten • Columbia, MD</p>
                <div className="flex flex-wrap gap-1 mt-2 mb-2">
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded">Java</span>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded">SQL</span>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded">Maven</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5 marker:text-indigo-500 dark:marker:text-indigo-400">
                  <li>Maintained and improved the Records backend service of the BDP to support data ingest and service integration for 3 BDP applications using Java and Maven.</li>
                  <li>Implemented new data fields in Java object model and wrote SQL migration scripts to support upcoming feature changes and schema updates.</li>
                </ul>
              </div>

              {/* Board Member - Blue */}
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Board Member</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2024 - <i>Current</i></span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Code Her Rising, <i>501(c)(3) non-profit</i> • Boyds, MD</p>
                <div className="flex flex-wrap gap-1 mt-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Canva</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Affinity Designer 2</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5 marker:text-blue-500 dark:marker:text-blue-400">
                  <li>Design branded graphics and digital assets for event marketing and merchandise, supporting outreach for tech events with 50–100+ attendees.</li>
                  <li>Engage in outreach and networking initiatives to promote organizational mission of supporting women in tech, resulting in press coverage and 3–4 media features that boosted visibility and membership interest.</li>
                </ul>
              </div>

              {/* UMD TA - Green */}
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Undergraduate Teaching Assistant (Computer Science)</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Jan 2021 - May 2021</span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">University of Maryland • College Park, MD</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5 marker:text-green-500 dark:marker:text-green-400">
                  <li>Teaching recitations to 15 computer science students for the introductory object-oriented programming course in Java (CMSC 131)</li>
                  <li>Facilitating 4 office hours a week to answer questions and provide help to students regarding coding projects and course concepts</li>
                  <li>Grading and proctoring projects, quizzes, and exams for 45 students</li>
                </ul>
              </div>

              {/* Full Stack Engineer Intern - Yellow */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Full Stack Engineer Intern</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2020 - 2021</span>
                </div>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">Enlighten • Linthicum Heights, MD</p>
                <div className="flex flex-wrap gap-1 mt-2 mb-2">
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Java</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Kafka</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Maven</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Spring API</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5 marker:text-yellow-500 dark:marker:text-yellow-400">
                  <li>Developed an internal notifications system enabling cross-platform event notifications across 5+ Big Data Platform applications, email, and the <i>Mattermost</i> messaging platform</li>
                </ul>
              </div>

              {/* UMD TA - Orange */}
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Undergraduate Teaching Assistant (Computer Science)</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Jan 2020 - May 2020</span>
                </div>
                <p className="text-sm text-orange-600 dark:text-orange-400 mb-2">University of Maryland • College Park, MD</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5 marker:text-orange-500 dark:marker:text-orange-400">
                  <li>Facilitate a discussion section of 20-30 computer science students on the topic of Computer Systems (CMSC 216)</li>
                  <li>Hold 4 office hours a week to answer questions and provide help to students regarding concepts and projects</li>
                  <li>Grade and proctor projects, quizzes, and exams on a weekly basis</li>
                </ul>
              </div>

              {/* Girls Who Code TA - Red */}
              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Teaching Assistant</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2019 - 2020</span>
                </div>
                <p className="text-sm text-red-600 dark:text-red-400 mb-2">Girls Who Code • College Park, MD</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5 marker:text-red-500 dark:marker:text-red-400">
                  <li>Provide guidance to middle and high school girls on topics surrounding programming in an effort to support and increase the number of young women in the field of Computer Science</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">Education & Certifications</h2>

            <div className="bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 rounded-lg p-4 mb-4">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-red-600 dark:text-red-400">B.S. Computer Science & Minor in Statistics</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">University of Maryland, College Park</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">🎓 2021</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400">A.S. General Engineering</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Montgomery College</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">🎓 2018</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Certifications</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">CompTIA Security+ Certified, <i>Oct 2023</i></p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Demonstrated knowledge of core cybersecurity principles, risk management, and network security</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Index;

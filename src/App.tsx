import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import profileImage from './assets/profile.jpg';

const PortfolioWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleExperience = (role: string) => {
    setExpandedExperience((prev) => (prev === role ? null : role));
  };

  const themeClasses = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen ${themeClasses}`}>
      {/* Dark Mode Toggle */}
      <header className="bg-emerald-900">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">JB.</h1>
          <div className="flex gap-6">
            <a href="#experience" className="text-emerald-100 hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-emerald-100 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-emerald-100 hover:text-white transition-colors">Projects</a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600"
          >
            {darkMode ? '🌙' : '🌞'}
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <div className="mb-8 flex justify-center">
            <img 
              src={profileImage}
              alt="Jayesh Bhojwani" 
              className="w-48 h-48 rounded-full border-4 border-emerald-600 object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">Jayesh Bhojwani</h1>
          <p className="text-xl text-emerald-700 mb-6">Software Engineer @ Goldman Sachs</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:jayeshbhojwani1@gmail.com" 
               className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/jayesh-bhojwani" 
               className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Experience</h2>
          <div className="space-y-12">
            {/* Software Engineer Associate */}
            <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 cursor-pointer"
                    onClick={() => toggleExperience('associate')}
                  >
                    Software Engineer Associate
                  </h3>
                  <p className="text-emerald-600">Goldman Sachs</p>
                </div>
                <p className="text-emerald-600">Dec 2023 – Present</p>
              </div>
              {expandedExperience === 'associate' && (
                <ul className="space-y-3 text-emerald-700">
                  <li>• Led the migration of the Salesforce ETL pipeline to AWS Glue, reducing operational downtime by 25%, improving scalability, and enabling seamless data flow between systems.</li>
                  <li>• Spearheaded the development of a custom TypeScript AWS CDK library and a Python CLI tool, reducing onboarding code by 80% and simplifying the process for developers integrating with our services.</li>
                  <li>• Collaborated closely with cross-functional teams to streamline cloud infrastructure and ensure the security and efficiency of the AWS environment.</li>
                  <li>• Contributed to optimizing automated workflows, resulting in reduced resource consumption and improved cost-efficiency across various platforms.</li>
                </ul>
              )}
            </div>

            {/* Software Engineer Analyst */}
            <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 cursor-pointer"
                    onClick={() => toggleExperience('analyst')}
                  >
                    Software Engineer Analyst
                  </h3>
                  <p className="text-emerald-600">Goldman Sachs</p>
                </div>
                <p className="text-emerald-600">Jul 2022 – Dec 2023</p>
              </div>
              {expandedExperience === 'analyst' && (
                <ul className="space-y-3 text-emerald-700">
                  <li>• Led the successful migration of an asset management marketing solution to AWS, resulting in a 30% reduction in operational costs and a 40% improvement in deployment times.</li>
                  <li>• Played a key role in implementing a Redis multi-cluster setup, which achieved a 99% reduction in read/write times and contributed to significant performance improvements for our data-intensive applications.</li>
                  <li>• Collaborated with cross-disciplinary teams to ensure optimal integration of distributed systems, utilizing tools like Kubernetes, Docker, and AWS Lambda for increased flexibility and reliability.</li>
                  <li>• Implemented robust monitoring and alerting systems, improving proactive incident management and minimizing system downtimes during critical deployments.</li>
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'TypeScript', 'Python', 'C', 'C++'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
            <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Redis', 'Kubernetes', 'Docker', 'Spring Boot', 'FastAPI', 'React.js'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Featured Project</h2>
          <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
            <h3 className="text-xl font-bold text-emerald-800 mb-2">Efficient Face Mask Detection using Caffe Model</h3>
            <p className="text-emerald-600 mb-4">January 2022 – May 2022</p>
            <ul className="space-y-3 text-emerald-700">
              <li>• Implemented MobileNetV2 for enhanced face mask detection</li>
              <li>• Achieved 0.99 F1 score accuracy using Caffe Model with SSD and ResNet-10</li>
              <li>• Superior performance in handling occlusion, rapid movements, and low-light conditions</li>
            </ul>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
              <p className="text-emerald-700">Department Ranker in multiple semesters</p>
            </div>
            <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
              <p className="text-emerald-700">Ranked 37th nationally in Math Olympiad</p>
            </div>
            <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
              <p className="text-emerald-700">98.67% in 12th Standard PCM</p>
            </div>
            <div className="border border-emerald-100 p-6 rounded-lg hover:border-emerald-200 transition-colors">
              <p className="text-emerald-700">2nd place in State Talent Search Examination</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center">© 2025 Jayesh Bhojwani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;

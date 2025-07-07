
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Database, Globe, Brain, Calculator, ChevronRight } from "lucide-react";
import Navigation from "@/components/navigation";

export default function Notes() {
  const [, setLocation] = useLocation();

  const subjects = [
    {
      id: 'programming',
      title: 'Programming Fundamentals',
      icon: Code,
      color: 'blue',
      description: 'Java, Python, C++ basics and best practices',
      topics: ['Variables & Data Types', 'Control Structures', 'Functions & Methods', 'Object-Oriented Programming', 'Data Structures', 'Algorithms']
    },
    {
      id: 'databases',
      title: 'Database Systems',
      icon: Database,
      color: 'green',
      description: 'SQL, database design, and management',
      topics: ['Relational Model', 'SQL Queries', 'Database Design', 'Normalization', 'Transactions', 'Performance Optimization']
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: Globe,
      color: 'purple',
      description: 'HTML, CSS, JavaScript, and frameworks',
      topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'DOM Manipulation', 'React Basics', 'Backend APIs', 'Responsive Design']
    },
    {
      id: 'algorithms',
      title: 'Algorithms & Data Structures',
      icon: Brain,
      color: 'red',
      description: 'Algorithm analysis and implementation',
      topics: ['Big O Notation', 'Sorting Algorithms', 'Search Algorithms', 'Trees & Graphs', 'Dynamic Programming', 'Greedy Algorithms']
    },
    {
      id: 'math',
      title: 'Mathematics for CS',
      icon: Calculator,
      color: 'orange',
      description: 'Discrete math, statistics, and calculus',
      topics: ['Logic & Proofs', 'Set Theory', 'Graph Theory', 'Probability', 'Statistics', 'Linear Algebra']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 border-blue-200',
      green: 'from-green-50 to-green-100 border-green-200',
      purple: 'from-purple-50 to-purple-100 border-purple-200',
      red: 'from-red-50 to-red-100 border-red-200',
      orange: 'from-orange-50 to-orange-100 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      red: 'text-red-600',
      orange: 'text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Study Notes & Resources
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive study materials, code examples, and explanations for all your CS courses
          </motion.p>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="max-w-4xl mx-auto px-8 -mt-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-yellow-100 border border-yellow-300 rounded-lg p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">📚 Study Notes Coming Soon!</h3>
          <p className="text-yellow-800">
            We're currently working on comprehensive study notes for all CS subjects. Check back soon for detailed explanations, code examples, and study guides.
          </p>
        </motion.div>
      </div>

      {/* Subject Cards */}
      <div className="max-w-6xl mx-auto px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`bg-gradient-to-br ${getColorClasses(subject.color)} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
              onClick={() => {/* Future: navigate to subject detail */}}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <subject.icon className={`${getIconColor(subject.color)}`} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{subject.title}</h3>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" size={20} />
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {subject.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {subject.topics.slice(0, 4).map((topic, topicIndex) => (
                    <div key={topicIndex} className="text-xs text-gray-600 flex items-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                      {topic}
                    </div>
                  ))}
                </div>
                {subject.topics.length > 4 && (
                  <div className="text-xs text-gray-500 mt-2">
                    +{subject.topics.length - 4} more topics
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Study Tips Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Use These Notes Effectively
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Maximize your learning with these proven study strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-blue-50 rounded-lg p-6"
            >
              <h4 className="font-semibold text-gray-900 mb-3">📖 Active Reading</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Take notes while reading</li>
                <li>• Summarize concepts in your own words</li>
                <li>• Create mind maps for complex topics</li>
                <li>• Ask yourself questions about the material</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-50 rounded-lg p-6"
            >
              <h4 className="font-semibold text-gray-900 mb-3">💻 Practice Coding</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Type out all code examples</li>
                <li>• Modify examples to test understanding</li>
                <li>• Build small projects using concepts</li>
                <li>• Debug and troubleshoot actively</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-purple-50 rounded-lg p-6"
            >
              <h4 className="font-semibold text-gray-900 mb-3">🔄 Spaced Repetition</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Review notes regularly</li>
                <li>• Use flashcards for key concepts</li>
                <li>• Space out review sessions</li>
                <li>• Test yourself frequently</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-orange-50 rounded-lg p-6"
            >
              <h4 className="font-semibold text-gray-900 mb-3">👥 Collaborative Learning</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Explain concepts to others</li>
                <li>• Join study groups</li>
                <li>• Participate in forums</li>
                <li>• Teach to reinforce learning</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your CS Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore our study resources and start planning your academic path
            </p>
            <div className="space-x-4">
              <Button 
                onClick={() => setLocation("/")}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300"
              >
                <BookOpen className="mr-2" size={18} />
                Back to Home
              </Button>
              <Button 
                onClick={() => setLocation("/course-planning")}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300"
              >
                Plan Your Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

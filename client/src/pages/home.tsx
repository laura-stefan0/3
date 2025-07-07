
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Code, Target, Users, Lightbulb, Clock, Award } from "lucide-react";
import Guestbook from "@/components/guestbook";
import Navigation from "@/components/navigation";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleCoursePlanning = () => {
    setLocation("/course-planning");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-[90vh] flex items-center justify-center bg-white pt-20">
        <div className="text-center px-8 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-medium mb-6 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UoPeople CS Notes & Course Planning
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-12 text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            An all-in-one platform to plan your CS degree at UoPeople. Built by a student who got tired of spreadsheets and Reddit threads.
          </motion.p>
          
          {/* Creative presentation card with gradient border and animation */}
          <motion.div 
            className="mb-12 relative max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-75 animate-pulse"></div>
            
            {/* Main card */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-40"></div>
              
              {/* Avatar and intro */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  L
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Hi! I'm Laura 👋
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">
                    🎓 Starting CS at UoPeople
                  </div>
                </div>
              </div>
              
              {/* Main message */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <p className="text-gray-700 leading-relaxed text-lg">
                  I made this site to organize my study notes and share what I've learned about using 
                  <span className="font-semibold text-blue-600"> Sophia courses</span> to save money on Gen Ed requirements. 
                  Feel free to use anything that helps! 🚀
                </p>
              </div>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">💰</div>
                  <div className="text-sm text-gray-600 mt-1">Save Money</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">📚</div>
                  <div className="text-sm text-gray-600 mt-1">Study Notes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">🎯</div>
                  <div className="text-sm text-gray-600 mt-1">Course Planning</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleCoursePlanning}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 text-base"
            >
              Check Out Course Planning
            </Button>
            <Button 
              onClick={() => setLocation("/study-resources")}
              variant="outline"
              className="font-medium py-3 px-6 text-base"
            >
              See My Notes
            </Button>
          </motion.div>
        </div>
      </div>

      {/* What This Tool Does */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              What This Tool Does
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Helps you plan your UoPeople CS degree using Sophia courses for Gen Ed requirements. 
              Same courses everyone uses, just organized so you don't have to hunt through spreadsheets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Programming Notes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive notes for Java, Python, C++, and web development courses with examples and best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Study Strategies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proven study techniques specifically for CS subjects, time management tips, and exam preparation strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Course Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Smart course selection tool to optimize your degree path, save money, and graduate faster.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Project Ideas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Inspiring project ideas for your portfolio, capstone projects, and skill development with implementation guides.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Time Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Balance work, studies, and life effectively with proven time management techniques for busy students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Tips
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from fellow students' experiences, networking tips, and collaborative study approaches.
              </p>
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
              Ready to Excel in Your CS Studies?
            </h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Access comprehensive study resources, smart course planning, and proven strategies
            </p>
            <div className="space-x-4">
              <Button 
                onClick={() => setLocation("/notes")}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300"
              >
                <BookOpen className="mr-2" size={18} />
                Start Studying
              </Button>
              <Button 
                onClick={handleCoursePlanning}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300"
              >
                <Target className="mr-2" size={18} />
                Plan Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

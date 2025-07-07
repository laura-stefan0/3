
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
            className="text-lg mb-8 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Just a CS student sharing my notes and what I've learned about course planning. 
            Maybe it'll save you some time figuring things out.
          </motion.p>
          
          <motion.div 
            className="mb-8 bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 leading-relaxed">
              Hi! I'm Laura, starting my CS degree at UoPeople. I made this site to organize my study notes 
              and share what I've learned about using Sophia courses to save money on Gen Ed requirements. 
              Feel free to use anything that helps.
            </p>
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

      {/* Guestbook Section */}
      <Guestbook />

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

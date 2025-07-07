
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, Brain, Code, Target, Users, Lightbulb, Clock, Award } from "lucide-react";
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
            className="text-5xl font-bold mb-6 leading-tight text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UoPeople CS Study Hub
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-10 text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your go-to resource for CS notes, course planning, and proven strategies to save time and money 
            on your UoPeople degree. Made by a student, for students.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleCoursePlanning}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Target className="mr-2" size={20} />
              Start Course Planning
            </Button>
            <Button 
              onClick={() => setLocation("/study-resources")}
              variant="outline"
              className="font-semibold py-4 px-8 text-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 rounded-xl transition-all duration-300"
            >
              <BookOpen className="mr-2" size={20} />
              Browse Study Notes
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

      {/* About Laura Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              About This Site
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A personal project born from the need to organize study materials and share knowledge with fellow students.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg border-4 border-white flex items-center justify-center relative overflow-hidden">
                {/* Notion-style geometric pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30"></div>
                <div className="absolute top-2 left-2 w-6 h-6 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-white/30 rounded-sm rotate-45"></div>
                <div className="absolute top-1/2 right-1 w-2 h-8 bg-white/20 rounded-full transform -translate-y-1/2"></div>
                <span className="relative text-white text-2xl font-bold z-10">L</span>
              </div>
              
              <div className="relative flex-1">
                {/* Chat bubble tail */}
                <div className="absolute left-0 top-6 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-white transform -translate-x-4"></div>
                
                {/* Chat bubble */}
                <div className="bg-white rounded-3xl rounded-tl-lg p-8 shadow-xl border border-gray-100 max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">Laura</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Online</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Hi! I'm starting my CS degree at UoPeople in September 2025. I created this website to organize 
                    and share my study notes and materials, plus everything I've learned about using Sophia courses 
                    to save money on your degree. Feel free to use anything that helps with your studies — and if 
                    it does help, I'd really appreciate a thank you message on the guestbook! 😊
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Computer Science Student
                    </div>
                    <Button 
                      onClick={() => setLocation("/guestbook")}
                      size="sm" 
                      variant="outline"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      Leave a message 💬
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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

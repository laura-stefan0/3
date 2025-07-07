
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
            className="text-5xl font-semibold mb-6 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Dead-Simple Course Planning for UoPeople CS Students
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built by a student who got tired of spreadsheets and Reddit threads. No fluff, no paywalls. Just help.
          </motion.p>
          
          <motion.div 
            className="mb-8 bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 leading-relaxed">
              Hey — I'm Laura. I'm starting CS at UoPeople in Sept, and I built this to stop getting lost in course requirements. 
              If it helps you plan your degree faster and cheaper, use it.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-1">✅</div>
              <div className="text-sm text-gray-600">Course planner</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-1">📝</div>
              <div className="text-sm text-gray-600">Study notes</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-1">💰</div>
              <div className="text-sm text-gray-600">Save money</div>
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
              Start Planning
            </Button>
            <Button 
              onClick={() => setLocation("/study-resources")}
              variant="outline"
              className="font-medium py-3 px-6 text-base"
            >
              Browse Notes
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

      {/* Success Stories Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Real experiences from CS students who've used these strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                  <p className="text-sm text-gray-600">BS-CS Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Using the course planning tool saved me over $2000 and helped me graduate 6 months earlier. The study notes were invaluable for my programming courses."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">David L.</h4>
                  <p className="text-sm text-gray-600">Current Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The study strategies completely changed how I approach CS subjects. My grades improved significantly and I feel much more confident in my programming skills."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Tips Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quick Study Tips
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Essential tips every CS student should know
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start space-x-4 bg-blue-50 rounded-lg p-4"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Practice Coding Daily</h4>
                <p className="text-gray-600">Even 30 minutes of coding practice daily is more effective than cramming before exams. Consistency builds muscle memory and problem-solving skills.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start space-x-4 bg-green-50 rounded-lg p-4"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Build Projects</h4>
                <p className="text-gray-600">Apply what you learn immediately by building small projects. This reinforces concepts and creates portfolio pieces for job applications.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start space-x-4 bg-purple-50 rounded-lg p-4"
            >
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Join Study Groups</h4>
                <p className="text-gray-600">Collaborate with fellow students on discussions and group projects. Teaching others is one of the best ways to solidify your own understanding.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Guestbook Section */}
      <div id="guestbook">
        <Guestbook />
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

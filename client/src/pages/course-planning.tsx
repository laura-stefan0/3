
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, University, Rocket, Plus } from "lucide-react";
import Navigation from "@/components/navigation";

export default function CoursePlanning() {
  const [, setLocation] = useLocation();

  const handleStartPlanning = () => {
    setLocation("/wizard");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Welcome Screen */}
      <div className="min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-40">
        <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 rounded-3xl p-40 mx-4 max-w-7xl">
          <div className="text-center px-8 max-w-6xl mx-auto">
            <motion.h1 
              className="text-6xl font-bold mb-6 leading-tight text-white tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              BS CS Course Planner
            </motion.h1>
            
            <motion.p 
              className="text-2xl mb-4 max-w-4xl mx-auto text-blue-100 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              A simple tool to help Computer Science students at UoPeople plan their academic journey, with General Education and Elective courses to take, and where to take them.
            </motion.p>
          
          <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/30">
                <University className="mr-2" size={20} />
                <span className="font-medium">UoPeople Courses</span>
              </div>
              <div className="text-2xl text-white/60">
                <Plus size={24} />
              </div>
              <div className="flex items-center bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/30">
                <GraduationCap className="mr-2" size={20} />
                <span className="font-medium">Sophia Courses</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={handleStartPlanning}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Rocket className="mr-2" size={20} />
                Start Course Planning
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Four Steps Section */}
      <div id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Four steps to plan your CS degree
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                General Education
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Compare UoPeople and Sophia courses and pick what works best for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Core CS Pathway
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Review the Computer Science courses you'll take at UoPeople.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Elective Courses
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Choose from CS-related or other electives to fulfill your credit requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Download Plan
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get your complete course roadmap with UoPeople and Sophia courses.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Simple How It Works Section */}
      <div className="py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              All Course Information in One Place
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Many students already use Sophia Learning to complete General Education requirements faster and cheaper. 
              This tool simply organizes all the course information in one place, since navigating UoPeople's requirements can be confusing.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">What you'll find here:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• All transferable Sophia courses</li>
                    <li>• UoPeople course requirements</li>
                    <li>• Credit requirements per category</li>
                    <li>• Course selection guidance</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Typical savings:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Sophia: $99/month + $17/course</li>
                    <li>• UoPeople: $160 per exam</li>
                    <li>• First 20 credits transfer free</li>
                    <li>• Self-paced vs 6-week terms</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleStartPlanning}
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              <Rocket className="mr-2" size={18} />
              Start Planning Your Courses
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Simple Info Section */}
      <div id="info" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Quick Reference
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Official Transfer List</h3>
                <p className="text-sm text-gray-600">
                  All courses listed are officially recognized by UoPeople for credit transfer
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
                <p className="text-sm text-gray-600">
                  No need to research each course individually or navigate confusing requirements
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Complete Plan</h3>
                <p className="text-sm text-gray-600">
                  Get a clear roadmap with all required courses for your degree
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-yellow-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                Important Disclaimer
              </h3>
              <p className="text-sm text-yellow-800 leading-relaxed">
                This tool is created by a student for educational purposes only. Always verify course transfer eligibility with UoPeople directly before enrolling in any courses. Transfer policies and course equivalencies may change without notice. The information provided here is based on publicly available transfer guides and student experiences, but individual results may vary.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-gray-300 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">UoPeople CS Study Hub</h3>
              <p className="text-sm leading-relaxed">
                Resources and tools to help Computer Science students succeed at University of the People.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation("/course-planner")} className="hover:text-white transition-colors">Course Planning</button></li>
                <li><button onClick={() => setLocation("/study-resources")} className="hover:text-white transition-colors">Study Resources</button></li>
                <li><button onClick={() => setLocation("/study-tips")} className="hover:text-white transition-colors">Study Tips</button></li>
                <li><button onClick={() => setLocation("/faqs")} className="hover:text-white transition-colors">FAQs</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation("/about")} className="hover:text-white transition-colors">About This Project</button></li>
                <li><button onClick={() => setLocation("/guestbook")} className="hover:text-white transition-colors">Guestbook</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 UoPeople CS Study Hub. Created by a student, for students. ♥</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

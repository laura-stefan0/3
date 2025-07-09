
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100">
      <Navigation />
      
      {/* Welcome Screen */}
      <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 pt-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-300 to-red-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-20 blur-xl"></div>
        
        <div className="text-center px-8 max-w-6xl mx-auto relative z-10">
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border-4 border-gradient-to-r from-yellow-400 to-pink-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Course Planning Wizard
            </motion.h1>
          
            <motion.p 
              className="text-2xl mb-6 max-w-4xl mx-auto text-gray-800 leading-relaxed font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              🎯 The ultimate tool to plan your UoPeople CS degree with smart course selection and savings strategies!
            </motion.p>
          
            <motion.div 
              className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-4 rounded-2xl mb-8 inline-block font-bold text-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              💰 Save $1000s + Hours of Research
            </motion.div>
          
            <motion.div 
              className="mb-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 max-w-3xl mx-auto border-2 border-purple-300 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-xl text-purple-800 font-bold">
                🎓 Designed for UoPeople Computer Science Students
              </p>
              <p className="text-lg text-purple-700 mt-2">
                Plan your General Education & Electives with confidence!
              </p>
            </motion.div>
          
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg font-bold text-lg">
                <University className="mr-3" size={24} />
                <span>UoPeople Courses</span>
              </div>
              <div className="text-4xl text-orange-500 font-bold">
                <Plus size={32} />
              </div>
              <div className="flex items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg font-bold text-lg">
                <GraduationCap className="mr-3" size={24} />
                <span>Sophia Courses</span>
              </div>
            </motion.div>
          
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                onClick={handleStartPlanning}
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-black py-6 px-12 rounded-3xl text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-3" size={28} />
                🚀 START PLANNING NOW!
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Three Steps Section */}
      <div id="how-it-works" className="py-24 bg-gradient-to-b from-cyan-100 to-blue-100">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ⚡ How It Works
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed font-semibold">
              Three simple steps to plan your academic path at UoPeople
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-black text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Choose General Education Courses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Select from UoPeople courses or Sophia Learning equivalents for each General Education category. Compare options and pick what works best for your schedule and budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-black text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Choose Elective Courses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pick between major-related courses at UoPeople that advance your CS knowledge, or other elective courses that interest you. Fill your remaining credit requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-black text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Download Your Plan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get a complete overview of your course selections with credit counts, cost estimates, and a clear roadmap for your degree completion.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Simple How It Works Section */}
      <div className="py-32 bg-gradient-to-br from-lime-200 via-green-200 to-emerald-200">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              📚 All Course Information in One Place
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Many students already use Sophia Learning to complete General Education requirements faster and cheaper. 
              This tool simply organizes all the course information in one place, since navigating UoPeople's requirements can be confusing.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-10 shadow-xl border-2 border-green-300">
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
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-black py-4 px-8 rounded-2xl text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-3" size={24} />
              🚀 START PLANNING NOW!
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

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full opacity-20 blur-xl"></div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
              🎉 Ready to Plan Your Courses?
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-semibold">
              Use this tool to organize your course selections and see all your options in one place
            </p>
            <Button 
              onClick={handleStartPlanning}
              className="bg-white text-orange-600 hover:bg-gray-100 font-black py-6 px-12 rounded-3xl text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-3" size={28} />
              🚀 LET'S DO THIS!
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

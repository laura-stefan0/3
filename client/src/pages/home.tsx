import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, University, Rocket, Plus } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleStartPlanning = () => {
    setLocation("/wizard");
  };

  return (
    <div className="min-h-screen">
      {/* Welcome Screen */}
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="text-center text-white px-8 max-w-6xl mx-auto">
          <motion.h1 
            className="text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            BS-CS Course Planning Helper
          </motion.h1>
          
          <motion.p 
            className="text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A simple tool to help Computer Science students at UoPeople figure out which General Education and Elective courses to take, and where to take them.
          </motion.p>
          
          <motion.div 
            className="mb-6 bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg opacity-90">
              <strong>For:</strong> Bachelor of Science in Computer Science students at University of the People
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
              <University className="text-yellow-300 mr-2" size={20} />
              <span>UoPeople Courses</span>
            </div>
            <div className="text-2xl">
              <Plus size={24} />
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
              <GraduationCap className="text-green-300 mr-2" size={20} />
              <span>Sophia Courses</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={handleStartPlanning}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Rocket className="mr-2" size={20} />
              Start Planning
            </Button>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How This Helper Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to create your course roadmap
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Pick General Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from UoPeople and Sophia courses across categories like Math, Science, and Humanities to fulfill your requirements.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Select Electives
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete your degree with elective courses that match your interests and career goals from both platforms.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Download Your Plan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get your personalized course roadmap instantly. Save time and money with an optimized academic path.
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button 
              onClick={handleStartPlanning}
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Rocket className="mr-2" size={20} />
              Start Your Plan Now
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Free to use • No registration required
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cost Savings Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Understanding the Cost Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what other students have figured out about course costs and timing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Cost Comparison */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Cost Comparison</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-100">
                  <div>
                    <span className="font-medium text-gray-900">UoPeople Only</span>
                    <p className="text-sm text-gray-600">$160 per exam</p>
                  </div>
                  <span className="text-lg font-bold text-red-600">More Expensive</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100">
                  <div>
                    <span className="font-medium text-gray-900">Sophia + Transfer</span>
                    <p className="text-sm text-gray-600">$99/month + $17/course</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">Significant Savings</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800">
                  <strong>Bonus:</strong> First 20 credit transfers are FREE!
                </p>
              </div>
            </motion.div>

            {/* Time Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Time Efficiency</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <h4 className="font-medium text-gray-900 mb-2">UoPeople Courses</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fixed 6-week duration</li>
                    <li>• Weekly discussion requirements</li>
                    <li>• Structured timeline</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <h4 className="font-medium text-gray-900 mb-2">Sophia Courses</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Self-paced learning</li>
                    <li>• Complete faster if motivated</li>
                    <li>• Some courses: tests only, no final exam</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Strategy Recommendation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              💡 What Other Students Do
            </h3>
            <p className="text-lg mb-4 opacity-90">
              Many students take General Education and Elective courses at Sophia since they're not really relevant to Computer Science anyway
            </p>
            <p className="text-base opacity-80">
              This lets you focus your energy on the actual CS courses at UoPeople while knocking out the required general education credits more efficiently
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why This Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why This Approach Makes Sense
            </h2>
            <p className="text-xl text-gray-600">
              Based on what current students have learned
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Officially Recognized</h3>
              <p className="text-gray-600">
                All Sophia courses listed are officially recognized by UoPeople for credit transfer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Focus on What Matters</h3>
              <p className="text-gray-600">
                Get through general education requirements quickly so you can focus on the Computer Science courses that actually matter for your career
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Proven</h3>
              <p className="text-gray-600">
                This strategy is recommended by current students who've successfully saved money and time
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Important Disclaimer */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-8"
          >
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Disclaimers</h3>
                <div className="text-yellow-700 space-y-2">
                  <p>
                    <strong>This is a student-made tool.</strong> I'm not affiliated with UoPeople or Sophia Learning - just another CS student who found their course selection confusing and wanted to help others.
                  </p>
                  <p>
                    This website was last updated in <strong>July 2025</strong>. Course recognition and transfer policies may change over time.
                  </p>
                  <p>
                    <strong>Always verify current information before making decisions:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>Check the official transfer page: <a href="https://uopeople.sophia.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">uopeople.sophia.org</a></li>
                    <li>Contact UoPeople admissions directly</li>
                    <li>Confirm course equivalencies before enrolling</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Figure Out Your Courses?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Use this tool to create your course roadmap and see your options
            </p>
            <Button 
              onClick={handleStartPlanning}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Rocket className="mr-2" size={20} />
              Start Planning
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

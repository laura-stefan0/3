
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Plus, GraduationCap, University } from "lucide-react";
import Navigation from "@/components/navigation";

export default function HowItWorks() {
  const [, setLocation] = useLocation();

  const handleStartPlanning = () => {
    setLocation("/wizard");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Three simple steps to plan your academic path at UoPeople and save time and money
          </motion.p>
        </div>
      </div>

      {/* Three Steps Section - Detailed */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Choose General Education Courses
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Select from UoPeople courses or Sophia Learning equivalents for each General Education category. 
                Compare options and pick what works best for your schedule and budget.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Categories include:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mathematics</li>
                  <li>• Natural Sciences</li>
                  <li>• Values & Ethical Reasoning</li>
                  <li>• Civic Literacy</li>
                  <li>• English Composition</li>
                  <li>• Communication</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Choose Elective Courses
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pick between major-related courses at UoPeople that advance your CS knowledge, 
                or other elective courses that interest you. Fill your remaining credit requirements.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Options include:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CS-related UoPeople courses</li>
                  <li>• Additional Sophia courses</li>
                  <li>• Courses from other Gen Ed categories</li>
                  <li>• Fill remaining credit requirements</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Download Your Plan
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get a complete overview of your course selections with credit counts, 
                cost estimates, and a clear roadmap for your degree completion.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Your plan includes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Complete course list</li>
                  <li>• Credit breakdown</li>
                  <li>• Cost estimates</li>
                  <li>• Recommended sequence</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Platform Comparison */}
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
              UoPeople vs Sophia Learning
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Understanding the differences helps you make informed decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <University className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">UoPeople</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cost Structure</h4>
                  <p className="text-sm text-gray-600">$160 per exam</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Course Format</h4>
                  <p className="text-sm text-gray-600">6-week structured terms with weekly discussions</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Best For</h4>
                  <p className="text-sm text-gray-600">Major-specific courses and foundational CS requirements</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Sophia Learning</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cost Structure</h4>
                  <p className="text-sm text-gray-600">$99/month + $17/course transfer (first 20 free)</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Course Format</h4>
                  <p className="text-sm text-gray-600">Self-paced with flexible completion times</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Best For</h4>
                  <p className="text-sm text-gray-600">General Education requirements and electives</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why This Approach Works */}
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
              Why This Strategy Works
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Many successful UoPeople students use this approach to complete their degree faster and more affordably
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
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost Savings</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sophia's monthly subscription model often costs less than individual UoPeople exams, 
                especially when completing multiple courses quickly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Faster Completion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Self-paced learning allows you to complete courses faster than 6-week terms, 
                accelerating your overall degree timeline.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Focus on What Matters</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete Gen Ed requirements efficiently through Sophia, then focus your time and energy 
                on major-specific CS courses at UoPeople.
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
              Ready to Start Planning?
            </h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Use our course planning tool to organize your selections and create your personalized degree roadmap
            </p>
            <Button 
              onClick={handleStartPlanning}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300"
            >
              <Rocket className="mr-2" size={18} />
              Start Course Planning
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

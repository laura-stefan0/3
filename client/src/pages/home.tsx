
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, Target } from "lucide-react";
import { HiOutlineSparkles, HiOutlineLightBulb, HiOutlineHeart, HiOutlineStar, HiOutlineFire, HiOutlinePuzzle } from "react-icons/hi";
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
      <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
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
            className="text-xl mb-4 text-gray-600 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Study materials, notes, Sophia tips and a course planner to help you in your CS degree at the University of the People.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleCoursePlanning}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Target className="mr-2" size={20} />
              Start Course Planning
            </Button>
            <Button 
              onClick={() => setLocation("/study-resources")}
              variant="outline"
              className="font-medium py-4 px-8 text-lg border-2 border-gray-300 hover:border-green-600 hover:text-green-600 rounded-lg transition-all duration-300"
            >
              <BookOpen className="mr-2" size={20} />
              Browse Study Notes
            </Button>
          </motion.div>
          
          {/* Expanded Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Main Featured Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-green-50 border-b border-green-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">CS 1101 - Programming Fundamentals</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">UoPeople</span>
                    <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">8 weeks</span>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Python</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Complete Study Package</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Week 1-4 Notes & All Assignments
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Final Project Template & Code
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Comprehensive Exam Study Guide
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Discussion Forum Templates
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 italic leading-relaxed">
                      "This complete study package saved me weeks of preparation time. Everything you need to succeed in CS 1101 is here, organized and ready to use."
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Preview Cards */}
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium text-orange-600">SOPHIA LEARNING</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">College Algebra Alternative</h4>
                  <p className="text-sm text-gray-600 mb-3">Complete in 3-4 weeks instead of 8 weeks at UoPeople</p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>💰 $99 total cost</span>
                    <span>⭐ Easy difficulty</span>
                    <span>📝 Study guide included</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium text-purple-600">TRANSFER GUIDE</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Credit Transfer Process</h4>
                  <p className="text-sm text-gray-600 mb-3">Step-by-step guide with all required documents</p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>✅ Complete process</span>
                    <span>📋 All forms</span>
                    <span>💡 Pro tips</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-600">COURSE PLANNER</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Degree Planning</h4>
                  <p className="text-sm text-gray-600 mb-3">Optimize your course sequence to save time and money</p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>🎯 Personalized</span>
                    <span>💰 Cost optimization</span>
                    <span>⏰ Time efficient</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Real study materials and guidance from a student who's been there
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Study Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete course notes, assignments, and study guides for Computer Science courses. Everything organized and ready to use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart recommendations for mixing UoPeople and Sophia courses to save time and money on your degree.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Honest reviews, difficulty ratings, and practical tips from someone actually taking these courses.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-12">
              Join students who are already saving time and money
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-green-600 text-4xl mb-4">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2">Save thousands</h3>
                <p className="text-gray-600 text-sm">
                  "Using Sophia courses instead of UoPeople saved me over $2,000 on my gen-ed requirements."
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-green-600 text-4xl mb-4">⏰</div>
                <h3 className="font-semibold text-gray-900 mb-2">Study smarter</h3>
                <p className="text-gray-600 text-sm">
                  "Having all the assignments and notes ready cut my study time in half."
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-green-600 text-4xl mb-4">🎓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Graduate faster</h3>
                <p className="text-gray-600 text-sm">
                  "The course planning tool helped me map out my entire degree efficiently."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to get organized?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Start planning your degree with courses and materials that actually work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCoursePlanning}
                className="bg-white hover:bg-gray-100 text-green-600 font-medium py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start course planning
              </Button>
              <Button 
                onClick={() => setLocation("/study-resources")}
                variant="outline"
                className="font-medium py-4 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-green-600 rounded-lg transition-all duration-300"
              >
                Explore resources
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Built by a student, for students
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A personal project to organize and share everything I'm learning during my Computer Science degree journey.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-start gap-6">
              <Avatar className="w-16 h-16 flex-shrink-0">
                <AvatarImage 
                  src="/images/my-notion-face-portrait.png" 
                  alt="Laura's profile picture" 
                />
                <AvatarFallback className="bg-green-600 text-white text-xl font-semibold">
                  L
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Laura</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hi! I'm starting my CS degree at University of the People in September 2025. I created this hub to document and share my study materials, course experiences, and everything I've learned about using Sophia courses strategically.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Everything here is free to use. If it helps with your studies, I'd love to hear about it in the <a href="/guestbook" className="text-green-600 hover:underline font-medium">guestbook</a>.
                </p>
              </div>
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
                <li><button onClick={() => setLocation("/course-planning")} className="hover:text-white transition-colors">Course Planning</button></li>
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

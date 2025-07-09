
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
        <div className="text-center px-8 max-w-4xl mx-auto ml-[290px] mr-[290px]">
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Target className="mr-2" size={20} />
              Start Course Planning
            </Button>
            <Button 
              onClick={() => setLocation("/study-resources")}
              variant="outline"
              className="font-semibold py-4 px-8 text-lg border-2 border-gray-300 hover:border-black hover:bg-black hover:text-white rounded-xl transition-all duration-300"
            >
              <BookOpen className="mr-2" size={20} />
              Browse Study Notes
            </Button>
          </motion.div>

          {/* Sample Materials Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <p className="text-center text-gray-500 mb-8 text-sm">
              Sample study materials I'm sharing
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* CS 1101 Study Notes Preview */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">CS 1101 - Programming Fundamentals</h3>
                    <span className="text-xs bg-blue-400 px-2 py-1 rounded">Week 3</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-200 pl-3">
                    <h4 className="font-medium text-sm text-gray-800">Control Structures</h4>
                    <p className="text-xs text-gray-600 mt-1">• If-else statements and nested conditions</p>
                    <p className="text-xs text-gray-600">• For and while loops with examples</p>
                    <p className="text-xs text-gray-600">• Break and continue statements</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    <span className="text-purple-600">for</span> i <span className="text-purple-600">in</span> <span className="text-blue-600">range</span>(10):
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-600">print</span>(f"Number: {'{i}'}")
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">📝 My actual study notes</span>
                  <span className="text-xs text-blue-600 font-medium">View full notes →</span>
                </div>
              </div>

              {/* Sophia Course Transfer Guide */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">Sophia → UoPeople Transfer</h3>
                    <span className="text-xs bg-green-400 px-2 py-1 rounded">✓ Verified</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span className="text-sm font-medium">College Algebra</span>
                    <span className="text-xs text-green-700 bg-green-200 px-2 py-1 rounded">3 Credits</span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p><strong>Completion time:</strong> 4 weeks (my experience)</p>
                    <p><strong>Difficulty:</strong> ⭐⭐⭐ Moderate</p>
                    <p><strong>Study tip:</strong> Focus on practice tests</p>
                    <p><strong>Cost saved:</strong> $1,890 vs UoPeople equivalent</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-2 rounded text-xs">
                    💡 <strong>Pro tip:</strong> Screenshot your completion certificate immediately
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">🎯 Transfer confirmed</span>
                  <span className="text-xs text-green-600 font-medium">See all courses →</span>
                </div>
              </div>

              {/* Course Planning Tool Preview */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">Degree Planning Wizard</h3>
                    <span className="text-xs bg-purple-400 px-2 py-1 rounded">Interactive</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-blue-50 p-2 rounded text-center">
                      <div className="font-medium text-blue-700">Communication</div>
                      <div className="text-blue-600">2/2 courses</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded text-center">
                      <div className="font-medium text-green-700">Mathematics</div>
                      <div className="text-green-600">3/3 courses</div>
                    </div>
                    <div className="bg-orange-50 p-2 rounded text-center">
                      <div className="font-medium text-orange-700">Science</div>
                      <div className="text-orange-600">1/1 courses</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="font-medium">Total Progress</span>
                      <span className="text-purple-600">68% complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">
                    <p><strong>Estimated savings:</strong> $4,320 with Sophia</p>
                    <p><strong>Time to completion:</strong> 8 months</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">🎯 Plan your path</span>
                  <span className="text-xs text-purple-600 font-medium">Try the wizard →</span>
                </div>
              </div>

              {/* Study Resource Preview */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">Study Resources Hub</h3>
                    <span className="text-xs bg-orange-400 px-2 py-1 rounded">Updated</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 border border-gray-100 rounded">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">📚</span>
                        <span className="text-xs font-medium">CS 1101 Textbook Notes</span>
                      </div>
                      <span className="text-xs text-gray-500">PDF</span>
                    </div>
                    <div className="flex items-center justify-between p-2 border border-gray-100 rounded">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">🎥</span>
                        <span className="text-xs font-medium">Python Tutorial Playlist</span>
                      </div>
                      <span className="text-xs text-gray-500">Video</span>
                    </div>
                    <div className="flex items-center justify-between p-2 border border-gray-100 rounded">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">✅</span>
                        <span className="text-xs font-medium">Final Exam Checklist</span>
                      </div>
                      <span className="text-xs text-gray-500">Guide</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-2 rounded text-xs">
                    <strong>Latest addition:</strong> MATH 1201 practice problems with solutions
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">📖 Free resources</span>
                  <span className="text-xs text-orange-600 font-medium">Browse all →</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* What I'm Sharing */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              What I'm Sharing With You
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              As I work through my Computer Science degree, I'm documenting everything that could help other students save time and money
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Study Notes & Resources</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Course materials, study guides, and helpful resources I'm collecting as I take each class. Real insights from a real student.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Course Choices</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The specific UoPeople and Sophia courses I'm taking, with honest reviews about difficulty, time commitment, and transfer process.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200 p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why This Helps You
            </h3>
            <div className="max-w-2xl mx-auto space-y-3 text-gray-700">
              <p>• <strong>Save money</strong> by knowing which Sophia courses actually transfer</p>
              <p>• <strong>Save time</strong> with study materials that work</p>
              <p>• <strong>Make better choices</strong> with real student experiences</p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* What This Tool Does */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              What You'll Find Here
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-8 border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <HiOutlineFire className="text-blue-500 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                Study Resources (coming)
              </h3>
              <p className="text-gray-600 leading-relaxed text-center text-sm">
                Study materials, notes, and resources I'm using for Computer Science courses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-8 border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <HiOutlinePuzzle className="text-purple-500 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                Course Planning (coming)
              </h3>
              <p className="text-gray-600 leading-relaxed text-center text-sm">
                A tool to help you choose the best mix of UoPeople and Sophia courses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-8 border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <HiOutlineStar className="text-orange-500 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                FAQs & Answers (coming)
              </h3>
              <p className="text-gray-600 leading-relaxed text-center text-sm">
                Common questions about UoPeople, course transfers, and degree planning.
              </p>
            </motion.div>


          </div>
        </div>
      </div>
      {/* About Laura Section */}
      <div className="py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 relative">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-left"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-left">
              About This Project
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A personal project born from the need to plan my degree journey and organize resources and study materials.
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
              <Avatar className="w-20 h-20 flex-shrink-0 border-4 border-white shadow-lg">
                <AvatarImage 
                  src="/images/my-notion-face-portrait.png" 
                  alt="Laura's profile picture" 
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-semibold">
                  L
                </AvatarFallback>
              </Avatar>
              
              <div className="relative flex-1">
                {/* Chat bubble tail */}
                <div className="absolute left-0 top-6 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-white transform -translate-x-4"></div>
                
                {/* Chat bubble */}
                <div className="bg-white rounded-3xl rounded-tl-lg p-8 shadow-xl border border-gray-100 max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">Laura</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Hi! I'm starting my CS degree at UoPeople in September 2025. I created this website to organize and share my study notes and materials, plus everything I've learned about using Sophia courses to save money on your degree. Feel free to use anything that helps with your studies. And if it does help, I'd really appreciate a thank you message on the <a href="/guestbook" className="text-blue-500 hover:underline">guestbook</a>! 😊
                  </p>
                </div>
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

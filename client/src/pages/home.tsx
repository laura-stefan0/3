
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
      <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center px-8 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Currently helping CS students save time & money</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UoPeople CS
            </span>
            <br />
            Study Hub
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-600 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Study materials, notes, Sophia tips and a course planner to help you in your CS degree at the University of the People.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button 
              onClick={handleCoursePlanning}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-5 px-10 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
            >
              <Target className="mr-3" size={22} />
              Start Course Planning
            </Button>
            <Button 
              onClick={() => setLocation("/study-resources")}
              variant="outline"
              className="font-semibold py-5 px-10 text-lg border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-500 hover:text-white rounded-2xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <BookOpen className="mr-3" size={22} />
              Browse Study Notes
            </Button>
          </motion.div>

          
        </div>
      </div>
      {/* What I'm Sharing */}
      <div className="py-32 bg-gradient-to-b from-white to-blue-50/50 relative">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                Everything You Need
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              What You'll Find Here
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              As I work through my Computer Science degree, I'm documenting everything that could help other students save time and money
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Study Notes & Resources</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Course materials, study guides, notes and helpful resources I'm collecting as I take each class.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Course Choices</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                The specific UoPeople and Sophia courses I'm taking, with honest reviews about difficulty and time commitment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold text-2xl">🧩</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">A Course Planner</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                A tool to help you choose the best mix of UoPeople and Sophia courses.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Laura Section */}
      <div className="py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
        
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-left"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                Behind the Project
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              About This Project
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              A personal project born from the need to plan my degree journey and organize resources and study materials.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Avatar className="w-24 h-24 flex-shrink-0 border-4 border-white shadow-2xl ring-4 ring-blue-100">
                  <AvatarImage 
                    src="/images/my-notion-face-portrait.png" 
                    alt="Laura's profile picture" 
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-semibold">
                    L
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              
              <div className="relative flex-1">
                {/* Enhanced chat bubble tail */}
                <div className="absolute left-0 top-8 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[18px] border-r-white transform -translate-x-4 drop-shadow-sm"></div>
                
                {/* Enhanced chat bubble */}
                <div className="bg-white rounded-3xl rounded-tl-2xl p-10 shadow-2xl border border-gray-100 max-w-4xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Laura</h3>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-xl mb-6">
                    Hi! I'm starting my CS degree at UoPeople in September 2025. I created this website to organize and share my study notes and materials, plus everything I've learned about using Sophia courses to save money on your degree. Feel free to use anything that helps with your studies. And if it does help, I'd really appreciate a thank you message on the <a href="/guestbook" className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-2">guestbook</a>! 😊
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

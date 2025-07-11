
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
    setLocation("/course-planner");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      {/* Hero Section */}
      <div className="min-h-[60vh] flex items-center justify-center pt-20">
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

          
        </div>
      </div>
      {/* What I'm Sharing */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl shadow-xl border border-indigo-200 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                What You'll Find Here
              </h2>
            </motion.div>

            <div className="space-y-6 mb-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📚</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">My Study Notes & Resources</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Course materials, study guides, notes and helpful resources I'm collecting as I take each class.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">My Course Choices</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The UoPeople and Sophia courses I'm taking, with ratings about difficulty and time commitment.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🧩</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">A Course Planner</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A tool to help you choose the best mix of UoPeople and Sophia courses.
                  </p>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* About Laura Section */}
      <div className="py-32 relative">
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

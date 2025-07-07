
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
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-60 right-40 w-14 h-14 bg-pink-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="text-center px-8 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 tracking-tight relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative">
              UoPeople CS Study Hub
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-[scaleX_1.5s_ease-in-out_0.8s_forwards]"></div>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-10 text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Study materials, notes, Sophia tips and a course planner to help you in your degree. Made by a student, for students.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleCoursePlanning}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Target className="mr-2 relative z-10" size={20} />
              <span className="relative z-10">Start Course Planning</span>
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
      {/* What This Tool Does */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-8 w-24 h-24 border-4 border-purple-100 rounded-full opacity-30"></div>
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
              className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                  <HiOutlineFire className="text-blue-500 text-4xl group-hover:scale-110 transition-transform duration-300" />
                </div>
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
              className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors duration-300">
                  <HiOutlinePuzzle className="text-purple-500 text-4xl group-hover:scale-110 transition-transform duration-300" />
                </div>
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
              className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors duration-300">
                  <HiOutlineStar className="text-orange-500 text-4xl group-hover:scale-110 transition-transform duration-300" />
                </div>
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
      <div className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Creative background elements */}
        <div className="absolute top-20 left-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-60 h-60 bg-gradient-to-tl from-indigo-100 to-pink-100 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-blue-200 rounded-full opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10">
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
              <Avatar className="w-20 h-20 flex-shrink-0 border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
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
                <div className="bg-white rounded-3xl rounded-tl-lg p-8 shadow-xl border border-gray-100 max-w-3xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-50 transform translate-x-10 -translate-y-10"></div>
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <h3 className="text-xl font-semibold text-gray-900">Laura</h3>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg mb-6 relative z-10">
                    Hi! I'm starting my CS degree at UoPeople in September 2025. I created this website to organize and share my study notes and materials, plus everything I've learned about using Sophia courses to save money on your degree. Feel free to use anything that helps with your studies. And if it does help, I'd really appreciate a thank you message on the <a href="/guestbook" className="text-blue-500 hover:underline">guestbook</a>! 😊
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-gray-300 py-12">
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
            <p>&copy; 2025 UoPeople CS Study Hub. Created by a student, for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

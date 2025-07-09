
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
        </div>
      </div>

      {/* Quick Preview */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              See what students are sharing
            </h2>
            <p className="text-gray-600">Real study materials and course insights</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="text-xs text-green-600 font-medium mb-2">SOPHIA</div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">College Algebra</h3>
              <p className="text-xs text-gray-500">3 weeks • Study guide included</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="text-xs text-blue-600 font-medium mb-2">UOPEOPLE</div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">CS 1101 Programming</h3>
              <p className="text-xs text-gray-500">8 weeks • All assignments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="text-xs text-purple-600 font-medium mb-2">NOTES</div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">Statistics Cheat Sheet</h3>
              <p className="text-xs text-gray-500">4 pages • Visual formulas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="text-xs text-orange-600 font-medium mb-2">GUIDE</div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">Transfer Process</h3>
              <p className="text-xs text-gray-500">Step-by-step • Documents</p>
            </motion.div>
          </div>
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

      {/* Course & Materials Preview */}
      <div className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              A Peek at What's Inside
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Real courses, real notes, real experiences
            </p>
          </motion.div>

          {/* Collage Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Sophia Course Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Sophia Learning</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                College Algebra
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>⏱️ 3-4 weeks • 💰 $99</p>
                <p>⭐ Easy difficulty</p>
                <p className="italic">"Finished in 3 weeks studying 1hr/day. Great alternative to UoPeople math!"</p>
              </div>
            </motion.div>

            {/* UoPeople Course Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-700">UoPeople</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                CS 1101 - Programming 1
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📅 8 weeks • 💰 $137 (exam fee)</p>
                <p>⭐⭐ Moderate difficulty</p>
                <p className="italic">"Python basics. Study guide with all assignments and solutions included."</p>
              </div>
            </motion.div>

            {/* Study Material Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-purple-700">Study Notes</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Statistics Cheat Sheet
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📝 4 pages • 📊 Visual formulas</p>
                <p>🎯 Covers all exam topics</p>
                <p className="italic">"Everything you need for the final exam in one place."</p>
              </div>
            </motion.div>

            {/* Tips Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-yellow-700">Pro Tips</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Transfer Credits Guide
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✅ Step-by-step process</p>
                <p>📋 Required documents</p>
                <p className="italic">"Exactly what I wish I knew before starting my degree."</p>
              </div>
            </motion.div>

            {/* Course Comparison Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-sm font-medium text-indigo-700">Comparison</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                English Comp: UoPeople vs Sophia
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>⚖️ Cost, time, difficulty</p>
                <p>📝 Assignment examples</p>
                <p className="italic">"Side-by-side breakdown to help you choose."</p>
              </div>
            </motion.div>

            {/* Resource Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Resources</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Free Textbooks & Tools
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🔗 Curated links</p>
                <p>💾 Software recommendations</p>
                <p className="italic">"Save hundreds on textbooks with these alternatives."</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <p className="text-gray-500 italic">...and much more as I progress through my degree</p>
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

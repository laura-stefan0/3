
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
        <div className="text-center px-8 max-w-5xl mx-auto">
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
            Study materials, notes, Sophia tips and a course planner to help you in your degree.
          </motion.p>
          
          <motion.p 
            className="text-gray-500 mb-10 flex items-center justify-center gap-1 text-[16px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Made by a student, for students <span className="text-red-500">♥</span>
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

      {/* Why We Built This */}
      <div className="py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Why I Built This
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Course planning shouldn't feel like detective work
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: The Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  When I started planning my courses at University of the People and looking at transferring credits from Sophia, I found the information scattered in different places and not always consistent.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      The official website lists all the degree requirements, but isn't always clear on which courses are mandatory, which ones aren't, and which can be transferred in
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      The credit transfer process isn't straightforward and is not clearly explained
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      It usually isn't clear if the best choice for a course is taking it at UoPeople or at Sophia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Real Reddit Posts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">r/UoPeople • 1yr ago</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">
                  UoPeople and Sophia course issue
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  I'm having trouble figuring out which Sophia courses are actually accepted by UoPeople. The transfer guides seem outdated and I keep getting conflicting information...
                </p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>24 comments</span>
                  <span>↑ 45</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">r/UoPeople • 11mo ago</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">
                  How do electives work and another question
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  I'm confused about how electives work at UoPeople. Are major electives different from general electives? Which courses count for what?
                </p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>8 comments</span>
                  <span>↑ 12</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">r/UoPeople • 10mo ago</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Sophia course difficulty and time?
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Can someone tell me how long College Algebra takes on Sophia? I've heard anywhere from 2 weeks to 2 months. Also is it harder than the UoPeople version?
                </p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>15 comments</span>
                  <span>↑ 28</span>
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="text-sm text-gray-500 italic">
                  ...and hundreds more like these
                </span>
              </div>
            </motion.div>
          </div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              {/* Background with subtle pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl"></div>
              <div className="absolute inset-0 opacity-10 rounded-3xl" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              
              <div className="relative p-12 text-white">
                <div className="max-w-6xl mx-auto">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold mb-4 tracking-tight">
                      So I Built a Better Way
                    </h3>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                      I built this site to keep things simple and organized, in one place, for other students like me. What you'll find here:
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                        <h4 className="text-xl font-bold mb-4">✓ Organized Information</h4>
                        <p className="text-blue-100 leading-relaxed">
                          Current course information and transfer requirements from my own planning process, including difficulty ratings and time estimates for Sophia courses.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                        <h4 className="text-xl font-bold mb-4">🎯 Course Planning</h4>
                        <p className="text-blue-100 leading-relaxed">
                          A course planning tool I'm building based on my own degree planning research, to help you choose the best mix of UoPeople and Sophia courses.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                        <h4 className="text-xl font-bold mb-4">📚 Study Resources</h4>
                        <p className="text-blue-100 leading-relaxed">
                          Course notes, study materials, study maps, resources and insights I'm collecting as I work through my CS degree.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Course Planner CTA */}
      <div className="py-12 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <div className="flex items-center text-gray-600">
              <Target className="w-5 h-5 mr-2 text-blue-500" />
              <span>Need help choosing courses?</span>
            </div>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <a href="/course-planning" className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Try the Course Planner
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
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
            <p>&copy; 2025 UoPeople CS Study Hub. Created by a student, for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

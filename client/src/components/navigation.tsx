
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, MessageSquare, BookOpen, Library, Lightbulb, HelpCircle, Info } from "lucide-react";

export default function Navigation() {
  const [location, setLocation] = useLocation();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <button
            onClick={() => setLocation("/")}
            className="flex items-center space-x-2 text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <GraduationCap size={24} />
            <span>UoPeople CS Study Hub</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setLocation("/study-resources")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Study Resources
            </button>

            <button
              onClick={() => setLocation("/study-tips")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Study Tips
            </button>

            <button
              onClick={() => setLocation("/faqs")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              FAQs
            </button>

            <button
              onClick={() => setLocation("/about")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>

            <button
              onClick={() => setLocation("/guestbook")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Guestbook
            </button>

            <Button
              onClick={() => setLocation("/course-planner")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Planning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setLocation("/course-planner")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-xl"
            >
              Start Planning
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

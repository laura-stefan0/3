
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, Home, MessageSquare, BookOpen } from "lucide-react";

export default function Navigation() {
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      setLocation("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
            className="flex items-center space-x-2 text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <GraduationCap size={24} />
            <span>UoPeople Helper</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setLocation("/")}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Home size={16} />
              <span>Home</span>
            </button>

            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollToSection("info")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("guestbook")}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <MessageSquare size={16} />
              <span>Guestbook</span>
            </button>

            <Button
              onClick={() => setLocation("/wizard")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
            >
              <BookOpen className="mr-2" size={16} />
              Start Planning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setLocation("/wizard")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg"
            >
              <BookOpen className="mr-1" size={16} />
              Plan
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

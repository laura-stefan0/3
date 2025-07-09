
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import Navigation from "@/components/navigation";

export default function CoursePlanning() {
  const [, setLocation] = useLocation();

  const handleStartPlanning = () => {
    setLocation("/wizard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-[85vh] flex items-center justify-center pt-20">
        <div className="text-center px-8 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl font-bold mb-6 leading-tight text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Course Planning Wizard
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Plan your UoPeople Computer Science degree with the optimal mix of university courses and Sophia Learning transfers. Save time and money on your General Education requirements.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              onClick={handleStartPlanning}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Target className="mr-2" size={20} />
              Start Course Planning
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

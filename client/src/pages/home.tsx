import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, University, Rocket, Plus } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleStartPlanning = () => {
    setLocation("/wizard");
  };

  return (
    <div className="min-h-screen">
      {/* Welcome Screen */}
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="text-center text-white px-8 max-w-6xl mx-auto">
          <motion.h1 
            className="text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            UoPeople Course Selection Wizard
          </motion.h1>
          
          <motion.p 
            className="text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Smart course planning for your General Education requirements. Compare options, save money, and graduate faster with the optimal mix of UoPeople and Sophia Learning courses.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
              <University className="text-yellow-300 mr-2" size={20} />
              <span>UoPeople Courses</span>
            </div>
            <div className="text-2xl">
              <Plus size={24} />
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
              <GraduationCap className="text-green-300 mr-2" size={20} />
              <span>Sophia Courses</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={handleStartPlanning}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Rocket className="mr-2" size={20} />
              Start Planning
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

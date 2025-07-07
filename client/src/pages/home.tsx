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
          {/* Hero image */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
              alt="University students studying together" 
              className="hero-image mb-8"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Plan Your Academic Journey
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose the perfect combination of UoPeople and Sophia courses to complete your General Education requirements efficiently and affordably.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            transition={{ duration: 0.8, delay: 0.8 }}
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

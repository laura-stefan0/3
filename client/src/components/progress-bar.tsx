import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  categories: Array<{ id: string; name: string }>;
}

export default function ProgressBar({ currentStep, totalSteps, categories }: ProgressBarProps) {
  // Start at 0% for first step, then increase progressively
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  
  const steps = [
    ...categories.map((category, index) => ({
      id: index + 1,
      name: category.name,
      isActive: currentStep >= index + 1,
      isComplete: currentStep > index + 1
    })),
    {
      id: totalSteps,
      name: 'Summary',
      isActive: currentStep >= totalSteps,
      isComplete: false
    }
  ];

  return (
    <div className="bg-white shadow-md py-6 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Website Name with Icon */}
        <div className="flex items-center mb-6">
          <BookOpen className="text-primary mr-3" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">UoPeople Course Planner</h2>
        </div>
        
        {/* Steps Counter */}
        <div className="flex items-center justify-center mb-3">
          <span className="text-sm text-gray-600 font-medium">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden shadow-inner">
          <motion.div 
            className="bg-gradient-to-r from-primary via-primary to-secondary h-6 rounded-full shadow-sm relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full" />
          </motion.div>
          
          {/* Progress percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

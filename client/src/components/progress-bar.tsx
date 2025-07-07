import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  categories: Array<{ id: string; name: string }>;
}

export default function ProgressBar({ currentStep, totalSteps, categories }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  
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
    <div className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Course Selection Wizard</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <motion.div 
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  step.isActive 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-300 text-gray-600'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {step.id}
              </motion.div>
              <span className={`ml-2 text-sm font-medium ${
                step.isActive ? 'text-gray-700' : 'text-gray-500'
              }`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

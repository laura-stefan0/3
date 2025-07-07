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
            Plan Your Academic Journey at UoPeople
          </motion.h1>
          
          <motion.p 
            className="text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the perfect combination of UoPeople and Sophia courses to complete your General Education and Elective requirements efficiently and affordably.
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

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your personalized course plan in just three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Pick General Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from UoPeople and Sophia courses across categories like Math, Science, and Humanities to fulfill your requirements.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Select Electives
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete your degree with elective courses that match your interests and career goals from both platforms.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Download Your Plan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get your personalized course roadmap instantly. Save time and money with an optimized academic path.
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button 
              onClick={handleStartPlanning}
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Rocket className="mr-2" size={20} />
              Start Your Plan Now
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Free to use • No registration required
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

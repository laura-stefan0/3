
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Rocket, 
  ExternalLink, 
  AlertCircle, 
  GraduationCap, 
  Target, 
  Clock, 
  DollarSign,
  Users,
  BookOpen,
  CheckCircle,
  Globe,
  Heart
} from "lucide-react";
import Navigation from "@/components/navigation";

export default function About() {
  const [, setLocation] = useLocation();

  const handleStartPlanning = () => {
    setLocation("/wizard");
  };

  const teamMembers = [
    {
      name: "Course Planning Team",
      role: "Educational Consultants",
      description: "Former UoPeople students who understand the challenges of course planning",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Academic Advisors",
      role: "Educational Guidance",
      description: "Professionals who help students navigate academic requirements",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "Tech Team",
      role: "Platform Development",
      description: "Developers committed to making education more accessible",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const features = [
    {
      title: "Official Course Data",
      description: "All courses are verified and officially recognized by UoPeople",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "text-green-600"
    },
    {
      title: "Cost Optimization",
      description: "Find the most affordable path to complete your degree",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-blue-600"
    },
    {
      title: "Time Efficiency",
      description: "Complete Gen Ed requirements faster with strategic planning",
      icon: <Clock className="w-6 h-6" />,
      color: "text-purple-600"
    },
    {
      title: "Global Accessibility",
      description: "Available to students worldwide, completely free to use",
      icon: <Globe className="w-6 h-6" />,
      color: "text-orange-600"
    }
  ];

  const stats = [
    {
      number: "50,000+",
      label: "UoPeople Students Worldwide",
      description: "Active students from over 200 countries"
    },
    {
      number: "$1,300+",
      label: "Average Savings",
      description: "Typical cost reduction using our approach"
    },
    {
      number: "2-3 months",
      label: "Gen Ed Completion",
      description: "Time to finish all General Education requirements"
    },
    {
      number: "100%",
      label: "Free Tool",
      description: "No hidden fees or premium features"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About UoPeople Helper
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering students worldwide to achieve their educational goals through smart course planning and strategic degree completion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" onClick={handleStartPlanning} className="bg-blue-600 hover:bg-blue-700">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Planning Your Degree
            </Button>
          </motion.div>
        </div>
      </div>

      {/* What This Tool Does */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              All Course Information in One Place
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Many students already use Sophia Learning to complete General Education requirements faster and cheaper. 
              This tool simply organizes all the course information in one place, since navigating UoPeople's requirements can be confusing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-center">Official Transfer List</h3>
              <p className="text-sm text-gray-600 text-center">
                All courses listed are officially recognized by UoPeople for credit transfer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm border"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-center">Save Time</h3>
              <p className="text-sm text-gray-600 text-center">
                No need to research each course individually or navigate confusing requirements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-sm border"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-center">Complete Plan</h3>
              <p className="text-sm text-gray-600 text-center">
                Get a clear roadmap with all required courses for your degree
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cost Comparison
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Understanding the financial benefits of strategic course selection
            </p>
          </motion.div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">UoPeople Costs</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Assessment fee per course:</span>
                    <span className="font-medium">$160</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Application fee (one-time):</span>
                    <span className="font-medium">$60</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Course format:</span>
                    <span className="font-medium">6-week terms</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weekly participation:</span>
                    <span className="font-medium">Required</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sophia Learning Costs</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monthly subscription:</span>
                    <span className="font-medium">$99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Transfer fee per course:</span>
                    <span className="font-medium">$17</span>
                  </li>
                  <li className="flex justify-between">
                    <span>First 20 transfers:</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Course format:</span>
                    <span className="font-medium">Self-paced</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Typical Savings Example:</h4>
              <p className="text-sm text-green-800">
                Completing 10 Gen Ed courses through Sophia (in 2-3 months) vs UoPeople: 
                <span className="font-medium"> $198-297 vs $1,600 = Save ~$1,300+</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Course Information Details
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              What you need to know about taking courses at each platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">UoPeople Experience</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>6-week structured course terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Weekly discussion forum participation required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Peer assessments and traditional exams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Fixed schedule with deadlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Direct transcript credit (no transfer needed)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sophia Learning Experience</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Self-paced learning (complete anytime)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>No weekly discussions or peer assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Some courses have only tests, no final exam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Complete multiple courses per month possible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Credit transfer required after completion</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Student Recommendations */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Students Recommend This Approach
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based on experiences shared by UoPeople Computer Science students
            </p>
          </motion.div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Focus on Your Major</h4>
                <p className="text-gray-600">
                  "If you're studying Computer Science, you don't need to spend extensive time on 'Introduction to Ethics' 
                  or 'Art History' - these aren't part of your major anyway. Complete them efficiently through Sophia 
                  and focus your energy on CS courses that matter for your career."
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Faster Graduation</h4>
                <p className="text-gray-600">
                  "By completing Gen Ed requirements quickly through Sophia, you can graduate faster overall. 
                  Many students complete their entire Gen Ed requirements in 2-3 months instead of 2-3 years."
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Financial Benefits</h4>
                <p className="text-gray-600">
                  "The cost savings are significant. Instead of paying $160 per course for 20+ Gen Ed courses ($3,200+), 
                  you can complete them for under $300 total through Sophia."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Links */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Official Resources
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Always verify information with official sources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">UoPeople Official</h3>
              <div className="space-y-3">
                <a 
                  href="https://uopeople.sophia.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Official Sophia Transfer Guide
                </a>
                <a 
                  href="https://www.uopeople.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  UoPeople Website
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sophia Learning</h3>
              <div className="space-y-3">
                <a 
                  href="https://www.sophia.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Sophia Learning Platform
                </a>
                <a 
                  href="https://www.sophia.org/pathways/university-of-the-people" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  UoPeople Pathway
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-yellow-100 rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <AlertCircle className="text-yellow-600 mr-2" size={24} />
                <h3 className="text-lg font-semibold text-yellow-900">
                  Important Disclaimer
                </h3>
              </div>
              <p className="text-sm text-yellow-800 leading-relaxed mb-4">
                This tool is created by a student for educational purposes only. Always verify course transfer eligibility 
                with UoPeople directly before enrolling in any courses. Transfer policies and course equivalencies may change 
                without notice. The information provided here is based on publicly available transfer guides and student experiences, 
                but individual results may vary.
              </p>
              <p className="text-xs text-yellow-700">
                Last updated: July 2025. Information may become outdated - always check official sources.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Plan Your Courses?
            </h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Use this tool to organize your course selections and see all your options in one place
            </p>
            <Button 
              onClick={handleStartPlanning}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300"
            >
              <Rocket className="mr-2" size={18} />
              Start Course Planning
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

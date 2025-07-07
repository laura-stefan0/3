import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Brain, 
  Target, 
  Users, 
  BookOpen, 
  Lightbulb,
  Calendar,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Coffee,
  Moon
} from "lucide-react";

export default function StudyTips() {
  const studyStrategies = [
    {
      category: "Time Management",
      icon: <Clock className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-800",
      tips: [
        {
          title: "Work in 25-minute chunks",
          description: "Set a timer for 25 minutes, focus completely, then take a 5-minute break. Repeat.",
          difficulty: "Start here",
          time: "25 min sessions"
        },
        {
          title: "Block your calendar",
          description: "Treat study time like meetings. Block 2-3 hour chunks and protect them.",
          difficulty: "When you're consistent",
          time: "2-3 hours"
        },
        {
          title: "Focus on what matters",
          description: "20% of the material covers 80% of what you'll actually use. Find that 20%.",
          difficulty: "When you know the subject",
          time: "Variable"
        }
      ]
    },
    {
      category: "Memory & Retention",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-green-100 text-green-800",
      tips: [
        {
          title: "Spaced Repetition",
          description: "Review material at increasing intervals to strengthen memory",
          difficulty: "Intermediate",
          time: "15-30 min daily"
        },
        {
          title: "The Feynman Technique",
          description: "Explain concepts in simple terms as if teaching someone else",
          difficulty: "Advanced",
          time: "30-45 min"
        },
        {
          title: "Mind Mapping",
          description: "Create visual representations of information and connections",
          difficulty: "Beginner",
          time: "20-30 min"
        }
      ]
    },
    {
      category: "Note-Taking",
      icon: <BookOpen className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-800",
      tips: [
        {
          title: "Cornell Note-Taking System",
          description: "Divide notes into cues, notes, and summary sections",
          difficulty: "Beginner",
          time: "During lectures"
        },
        {
          title: "The Outline Method",
          description: "Organize information hierarchically with main points and subpoints",
          difficulty: "Beginner",
          time: "During lectures"
        },
        {
          title: "Digital Note Integration",
          description: "Combine handwritten and digital notes for maximum effectiveness",
          difficulty: "Intermediate",
          time: "Post-lecture"
        }
      ]
    }
  ];

  const quickTips = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Stay Hydrated",
      description: "Drink water regularly to maintain focus and cognitive function"
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Get Adequate Sleep",
      description: "Aim for 7-9 hours of sleep for optimal learning and memory consolidation"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Set SMART Goals",
      description: "Make goals Specific, Measurable, Achievable, Relevant, and Time-bound"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Study Groups",
      description: "Collaborate with peers to gain different perspectives and stay motivated"
    }
  ];

  const examTips = [
    {
      phase: "Before the Exam",
      icon: <Calendar className="w-5 h-5" />,
      strategies: [
        "Create a study schedule 2-3 weeks before the exam",
        "Practice with past papers and sample questions",
        "Form study groups for discussion and clarification",
        "Get adequate sleep the night before",
        "Prepare all materials the day before"
      ]
    },
    {
      phase: "During the Exam",
      icon: <CheckCircle className="w-5 h-5" />,
      strategies: [
        "Read all instructions carefully before starting",
        "Budget your time based on question weights",
        "Start with questions you're most confident about",
        "Keep track of time throughout the exam",
        "Review your answers if time permits"
      ]
    },
    {
      phase: "After the Exam",
      icon: <TrendingUp className="w-5 h-5" />,
      strategies: [
        "Reflect on what worked well and what didn't",
        "Note topics that need more review",
        "Don't dwell on mistakes - focus on the next exam",
        "Celebrate your effort and preparation",
        "Use feedback to improve future performance"
      ]
    }
  ];

  const motivationalTips = [
    "Break large tasks into smaller, manageable chunks",
    "Reward yourself after completing study sessions",
    "Create a dedicated study space free from distractions",
    "Use positive self-talk and affirmations",
    "Track your progress visually with charts or apps",
    "Connect with your 'why' - remember your long-term goals",
    "Take regular breaks to prevent burnout",
    "Stay flexible and adjust your methods as needed"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Study Tips That Actually Work
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Here's what I learned from CS students who finished their degrees. No fluff, just what works.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-8">

          {/* Main Content Tabs */}
          <Tabs defaultValue="strategies" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="strategies">Study Strategies</TabsTrigger>
              <TabsTrigger value="exam-tips">Exam Tips</TabsTrigger>
              <TabsTrigger value="motivation">Motivation</TabsTrigger>
              <TabsTrigger value="quick-tips">Quick Tips</TabsTrigger>
            </TabsList>

            {/* Study Strategies Tab */}
            <TabsContent value="strategies" className="space-y-8">
              {studyStrategies.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tips.map((tip, tipIndex) => (
                      <Card key={tipIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{tip.title}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {tip.difficulty}
                            </Badge>
                          </div>
                          <CardDescription>{tip.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              <Clock className="w-4 h-4 inline mr-1" />
                              {tip.time}
                            </span>
                            <Button size="sm" variant="outline">
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </TabsContent>

            {/* Exam Tips Tab */}
            <TabsContent value="exam-tips" className="space-y-8">
              {examTips.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                          {phase.icon}
                        </div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {phase.strategies.map((strategy, strategyIndex) => (
                          <li key={strategyIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            {/* Motivation Tab */}
            <TabsContent value="motivation" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Lightbulb className="w-6 h-6 mr-3" />
                      Stay Motivated
                    </CardTitle>
                    <CardDescription className="text-purple-100">
                      Practical tips to maintain motivation throughout your academic journey
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {motivationalTips.map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start">
                            <div className="p-2 bg-purple-100 text-purple-600 rounded-full mr-4">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            <p className="text-gray-700">{tip}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Quick Tips Tab */}
            <TabsContent value="quick-tips" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {quickTips.map((tip, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center">
                          <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-4">
                            {tip.icon}
                          </div>
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                        </div>
                        <CardDescription>{tip.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Start Studying?</CardTitle>
                <CardDescription className="text-blue-100">
                  Apply these strategies to your course planning and see the difference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" variant="secondary" asChild>
                  <a href="/course-planning">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Plan Your Courses
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  FileText, 
  Calculator, 
  Microscope, 
  Users, 
  Globe, 
  Lightbulb,
  ExternalLink,
  Download,
  GraduationCap,
  Clock,
  Star,
  CheckCircle,
  Trophy,
  Target
} from "lucide-react";

export default function StudyResources() {
  const sophiaMaterials = [
    {
      category: "Mathematics",
      icon: <Calculator className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-800",
      courses: [
        {
          courseName: "Introduction to College Mathematics",
          difficulty: "Easier",
          difficultyColor: "bg-green-100 text-green-800",
          description: "Complete study guide with practice problems and formula shortcuts",
          completionTime: "2-3 weeks",
          keyTopics: ["Basic Algebra", "Linear Equations", "Problem Solving"],
          tips: "Focus on the practice quizzes - they're very similar to the final exam"
        },
        {
          courseName: "College Algebra", 
          difficulty: "Recommended",
          difficultyColor: "bg-blue-100 text-blue-800",
          description: "Comprehensive notes covering all algebra concepts with exam strategies",
          completionTime: "3-4 weeks",
          keyTopics: ["Polynomials", "Factoring", "Systems of Equations"],
          tips: "The touchstone assignments are key - master them for easy A's"
        },
        {
          courseName: "Precalculus",
          difficulty: "Harder", 
          difficultyColor: "bg-orange-100 text-orange-800",
          description: "Advanced study materials with trigonometry and function analysis",
          completionTime: "4-5 weeks",
          keyTopics: ["Trigonometry", "Functions", "Exponentials"],
          tips: "Take your time with the unit circle - it's heavily tested"
        },
        {
          courseName: "Introduction to Statistics",
          difficulty: "Moderate",
          difficultyColor: "bg-yellow-100 text-yellow-800", 
          description: "Statistical concepts with real-world examples and calculation guides",
          completionTime: "3-4 weeks",
          keyTopics: ["Probability", "Distributions", "Hypothesis Testing"],
          tips: "Use the provided formulas sheet - memorization isn't required"
        }
      ]
    },
    {
      category: "Communication",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-800",
      courses: [
        {
          courseName: "English Composition I",
          difficulty: "Easy",
          difficultyColor: "bg-green-100 text-green-800",
          description: "Essay writing templates and grading rubric analysis",
          completionTime: "2-3 weeks",
          keyTopics: ["Essay Structure", "Citations", "Grammar"],
          tips: "Follow the rubric exactly - Sophia graders are very systematic"
        },
        {
          courseName: "English Composition II", 
          difficulty: "Moderate",
          difficultyColor: "bg-yellow-100 text-yellow-800",
          description: "Research paper guide with source evaluation and advanced writing",
          completionTime: "3-4 weeks",
          keyTopics: ["Research Methods", "Critical Analysis", "Advanced Writing"],
          tips: "Start early on research - finding good sources takes time"
        }
      ]
    },
    {
      category: "Science", 
      icon: <Microscope className="w-5 h-5" />,
      color: "bg-green-100 text-green-800",
      courses: [
        {
          courseName: "Environmental Science",
          difficulty: "Easy",
          difficultyColor: "bg-green-100 text-green-800",
          description: "Comprehensive study guide with key concepts and terminology",
          completionTime: "2-3 weeks", 
          keyTopics: ["Ecosystems", "Pollution", "Sustainability"],
          tips: "Lots of reading but straightforward - focus on vocabulary"
        },
        {
          courseName: "Introduction to Biology",
          difficulty: "Moderate",
          difficultyColor: "bg-yellow-100 text-yellow-800",
          description: "Detailed notes on cellular processes and biological systems",
          completionTime: "3-4 weeks",
          keyTopics: ["Cell Biology", "Genetics", "Evolution"],
          tips: "The lab simulations are fun and help with understanding"
        }
      ]
    }
  ];

  const uopeopleCourses = [
    {
      courseCode: "MATH 1201",
      courseName: "College Algebra",
      credits: 3,
      icon: <Calculator className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-800",
      materials: [
        {
          title: "Chapter 1-3: Linear Equations & Inequalities",
          description: "Comprehensive notes covering solving linear equations, graphing, and system of equations",
          type: "Study Notes",
          pages: "24 pages",
          updated: "2 weeks ago"
        },
        {
          title: "Chapter 4-6: Polynomials & Factoring",
          description: "Detailed explanations of polynomial operations, factoring techniques, and applications",
          type: "Study Notes", 
          pages: "18 pages",
          updated: "1 week ago"
        },
        {
          title: "Final Exam Review Guide",
          description: "Complete review with practice problems and formula sheet",
          type: "Exam Prep",
          pages: "12 pages",
          updated: "3 days ago"
        }
      ]
    },
    {
      courseCode: "BIOL 1301",
      courseName: "Introduction to Biology",
      credits: 4,
      icon: <Microscope className="w-5 h-5" />,
      color: "bg-green-100 text-green-800",
      materials: [
        {
          title: "Cell Structure & Function",
          description: "Detailed notes on cell organelles, membrane transport, and cellular processes",
          type: "Study Notes",
          pages: "32 pages",
          updated: "1 week ago"
        },
        {
          title: "Genetics & Heredity",
          description: "Comprehensive coverage of DNA, RNA, protein synthesis, and inheritance patterns",
          type: "Study Notes",
          pages: "28 pages", 
          updated: "4 days ago"
        },
        {
          title: "Lab Report Templates",
          description: "Pre-formatted templates for biology lab reports with examples",
          type: "Templates",
          pages: "8 pages",
          updated: "1 week ago"
        }
      ]
    },
    {
      courseCode: "ENGL 1102",
      courseName: "English Composition II",
      credits: 3,
      icon: <FileText className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-800",
      materials: [
        {
          title: "Research Paper Writing Guide",
          description: "Step-by-step guide for writing research papers, including citation and formatting",
          type: "Writing Guide",
          pages: "16 pages",
          updated: "5 days ago"
        },
        {
          title: "Literary Analysis Techniques",
          description: "Methods for analyzing literature, identifying themes, and writing critical essays",
          type: "Study Notes",
          pages: "20 pages",
          updated: "1 week ago"
        },
        {
          title: "Grammar & Style Reference",
          description: "Quick reference for common grammar rules and writing style guidelines",
          type: "Reference",
          pages: "14 pages",
          updated: "2 weeks ago"
        }
      ]
    },
    {
      courseCode: "CS 1101",
      courseName: "Programming Fundamentals",
      credits: 3,
      icon: <Lightbulb className="w-5 h-5" />,
      color: "bg-indigo-100 text-indigo-800",
      materials: [
        {
          title: "Python Basics & Syntax",
          description: "Variables, data types, control structures, and basic programming concepts",
          type: "Study Notes",
          pages: "30 pages",
          updated: "2 days ago"
        },
        {
          title: "Functions & Data Structures",
          description: "Writing functions, lists, dictionaries, and common algorithms",
          type: "Study Notes",
          pages: "22 pages",
          updated: "1 week ago"
        },
        {
          title: "Project Examples & Code",
          description: "Complete code examples and project solutions with explanations",
          type: "Code Examples",
          pages: "28 pages",
          updated: "3 days ago"
        }
      ]
    }
  ];

  const sophiaStats = {
    totalCourses: sophiaMaterials.reduce((sum, category) => sum + category.courses.length, 0),
    avgCompletionTime: "2-4 weeks",
    successRate: "95%"
  };

  const uopeopleStats = {
    totalCourses: uopeopleCourses.length,
    totalMaterials: uopeopleCourses.reduce((sum, course) => sum + course.materials.length, 0),
    totalPages: uopeopleCourses.reduce((sum, course) => 
      sum + course.materials.reduce((matSum, mat) => 
        matSum + parseInt(mat.pages.split(' ')[0]), 0), 0),
    lastUpdated: "3 days ago"
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Study Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete study materials for both Sophia Learning and UoPeople courses. 
              Get the resources you need to succeed in your degree journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Side by Side Layout */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Platform Headers */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Sophia Section Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-3">
                  <Trophy className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Sophia Learning</h2>
              </div>
              <p className="text-gray-600 mb-6">Fast-track your general education requirements</p>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-lg font-bold text-orange-600">{sophiaStats.totalCourses}</div>
                  <div className="text-xs text-gray-600">Course Guides</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-lg font-bold text-green-600">{sophiaStats.avgCompletionTime}</div>
                  <div className="text-xs text-gray-600">Avg. Time</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-lg font-bold text-purple-600">{sophiaStats.successRate}</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </motion.div>

            {/* UoPeople Section Header */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">UoPeople</h2>
              </div>
              <p className="text-gray-600 mb-6">In-depth study materials for core courses</p>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-lg font-bold text-blue-600">{uopeopleStats.totalCourses}</div>
                  <div className="text-xs text-gray-600">Courses</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-lg font-bold text-green-600">{uopeopleStats.totalMaterials}</div>
                  <div className="text-xs text-gray-600">Materials</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-lg font-bold text-purple-600">{uopeopleStats.totalPages}+</div>
                  <div className="text-xs text-gray-600">Pages</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sophia Materials Column */}
            <div className="space-y-8">
              {sophiaMaterials.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border p-6"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    <Badge className="ml-auto bg-orange-100 text-orange-800">Sophia</Badge>
                  </div>

                  <div className="space-y-4">
                    {category.courses.map((course, courseIndex) => (
                      <Card key={courseIndex} className="hover:shadow-md transition-shadow border-l-4 border-l-orange-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base leading-tight">{course.courseName}</CardTitle>
                            <Badge className={course.difficultyColor}>
                              {course.difficulty}
                            </Badge>
                          </div>
                          <CardDescription className="text-sm">
                            {course.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium">Time:</span>
                              <span className="text-gray-600">{course.completionTime}</span>
                            </div>

                            <div>
                              <p className="text-sm font-medium mb-2">Topics:</p>
                              <div className="flex flex-wrap gap-1">
                                {course.keyTopics.map((topic, topicIndex) => (
                                  <Badge key={topicIndex} variant="outline" className="text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="bg-orange-50 p-3 rounded-lg">
                              <p className="text-sm font-medium text-orange-900 mb-1">💡 Pro Tip:</p>
                              <p className="text-sm text-orange-800">{course.tips}</p>
                            </div>

                            <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                              <Download className="w-4 h-4 mr-1" />
                              Download Guide
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* UoPeople Materials Column */}
            <div className="space-y-8">
              {uopeopleCourses.map((course, courseIndex) => (
                <motion.div
                  key={course.courseCode}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: courseIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border p-6"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${course.color} mr-4`}>
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{course.courseName}</h3>
                      <p className="text-sm text-gray-600">{course.courseCode} • {course.credits} Credits</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">UoPeople</Badge>
                  </div>

                  <div className="space-y-4">
                    {course.materials.map((material, materialIndex) => (
                      <Card key={materialIndex} className="hover:shadow-md transition-shadow border-l-4 border-l-blue-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base leading-tight">{material.title}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {material.type}
                            </Badge>
                          </div>
                          <CardDescription className="text-sm">
                            {material.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-sm mb-3">
                            <span className="text-gray-600">{material.pages}</span>
                            <span className="text-gray-500">Updated {material.updated}</span>
                          </div>
                          
                          <Button size="sm" className="w-full">
                            <Download className="w-4 h-4 mr-1" />
                            Download Notes
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download All Section */}
      <div className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Get All Study Materials</CardTitle>
                <CardDescription className="text-blue-100">
                  Download the complete collection of both Sophia guides and UoPeople materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    <Download className="w-5 h-5 mr-2" />
                    Download All Materials
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-200 text-blue-100 hover:bg-blue-700">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View on Google Drive
                  </Button>
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  Includes {sophiaStats.totalCourses} Sophia course guides + {uopeopleStats.totalPages}+ pages of UoPeople materials
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

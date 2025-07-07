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
  Star
} from "lucide-react";

export default function StudyResources() {
  const courseNotes = [
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
      courseCode: "PSYC 1101",
      courseName: "Introduction to Psychology",
      credits: 3,
      icon: <Users className="w-5 h-5" />,
      color: "bg-orange-100 text-orange-800",
      materials: [
        {
          title: "Learning & Memory",
          description: "Notes on classical/operant conditioning, cognitive processes, and memory systems",
          type: "Study Notes",
          pages: "22 pages",
          updated: "6 days ago"
        },
        {
          title: "Personality Theories",
          description: "Overview of major personality theories from Freud to modern approaches",
          type: "Study Notes",
          pages: "18 pages",
          updated: "1 week ago"
        },
        {
          title: "Research Methods Summary",
          description: "Experimental design, statistical analysis, and ethical considerations in psychology",
          type: "Study Guide",
          pages: "12 pages",
          updated: "3 days ago"
        }
      ]
    },
    {
      courseCode: "HIST 1101",
      courseName: "World History I",
      credits: 3,
      icon: <Globe className="w-5 h-5" />,
      color: "bg-red-100 text-red-800",
      materials: [
        {
          title: "Ancient Civilizations Timeline",
          description: "Chronological overview of major ancient civilizations and their contributions",
          type: "Study Notes",
          pages: "26 pages",
          updated: "1 week ago"
        },
        {
          title: "Medieval Europe Analysis",
          description: "Political, social, and economic developments in medieval Europe",
          type: "Study Notes",
          pages: "24 pages",
          updated: "4 days ago"
        },
        {
          title: "Essay Writing for History",
          description: "Guide to writing historical essays with proper analysis and evidence",
          type: "Writing Guide",
          pages: "10 pages",
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

  const studyStats = {
    totalCourses: courseNotes.length,
    totalMaterials: courseNotes.reduce((sum, course) => sum + course.materials.length, 0),
    totalPages: courseNotes.reduce((sum, course) => 
      sum + course.materials.reduce((matSum, mat) => 
        matSum + parseInt(mat.pages.split(' ')[0]), 0), 0),
    lastUpdated: "3 days ago"
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-8">
          {/* Header */}
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
              Personal study notes and materials organized by course. 
              These handwritten notes and study guides have helped me succeed in my UoPeople journey.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{studyStats.totalCourses}</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-green-600">{studyStats.totalMaterials}</div>
                <div className="text-sm text-gray-600">Study Materials</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">{studyStats.totalPages}+</div>
                <div className="text-sm text-gray-600">Pages</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-orange-600">
                  <Clock className="w-6 h-6 inline" />
                </div>
                <div className="text-sm text-gray-600">Updated {studyStats.lastUpdated}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Course Notes Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-8">
            {courseNotes.map((course, index) => (
              <motion.div
                key={course.courseCode}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${course.color} mr-4`}>
                        {course.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{course.courseCode}</h2>
                        <p className="text-gray-600">{course.courseName}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        {course.credits} Credits
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        {course.materials.length} Materials
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {course.materials.map((material, materialIndex) => (
                      <Card key={materialIndex} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg leading-tight">{material.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs ml-2">
                              {material.type}
                            </Badge>
                          </div>
                          <CardDescription className="text-sm">
                            {material.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                            <span>{material.pages}</span>
                            <span>Updated {material.updated}</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full">
                            <Download className="w-4 h-4 mr-1" />
                            Download Notes
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Featured Notes Section */}
      <div className="py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Most Popular Study Materials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">College Algebra Final Review</CardTitle>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm ml-1">Popular</span>
                    </div>
                  </div>
                  <CardDescription>
                    Complete final exam preparation with practice problems and formula sheet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>12 pages</span>
                    <span>Downloaded 150+ times</span>
                  </div>
                  <Button size="sm" variant="default" className="w-full">
                    <Download className="w-4 h-4 mr-1" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Biology Lab Report Templates</CardTitle>
                    <div className="flex items-center text-green-600">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm ml-1">Template</span>
                    </div>
                  </div>
                  <CardDescription>
                    Pre-formatted lab report templates with examples and guidelines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>8 pages</span>
                    <span>Downloaded 120+ times</span>
                  </div>
                  <Button size="sm" variant="default" className="w-full">
                    <Download className="w-4 h-4 mr-1" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Research Paper Writing Guide</CardTitle>
                    <div className="flex items-center text-purple-600">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm ml-1">Guide</span>
                    </div>
                  </div>
                  <CardDescription>
                    Step-by-step guide for writing research papers with citation examples
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>16 pages</span>
                    <span>Downloaded 200+ times</span>
                  </div>
                  <Button size="sm" variant="default" className="w-full">
                    <Download className="w-4 h-4 mr-1" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Download All Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Download All Study Materials</CardTitle>
                <CardDescription className="text-blue-100">
                  Get the complete collection of study notes, guides, and templates in one convenient package
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    <Download className="w-5 h-5 mr-2" />
                    Download All Notes (ZIP)
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-200 text-blue-100 hover:bg-blue-700">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View on Google Drive
                  </Button>
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  Last updated: {studyStats.lastUpdated} • {studyStats.totalPages}+ pages of content
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { sophiaCourses, getDifficultyColor } from "../data/sophia-courses";
import { supabase, DatabaseCourse, hasRealCredentials } from "@/lib/supabase";
import { 
  ArrowRight,
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
  Target,
  Timer,
  BookMarked,
  FileDown,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface Course {
  id: string;
  courseName: string;
  courseCode?: string;
  difficulty?: string;
  difficultyColor?: string;
  description: string;
  completionTime: string;
  keyTopics: string[];
  tips: string;
  provider: 'sophia' | 'uopeople';
  category: string;
  categoryColor: string;
  categoryIcon: React.ReactNode;
  credits?: number;
  materials?: {
    title: string;
    description: string;
    type: string;
    pages: string;
    updated: string;
  }[];
}

const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Mathematics':
      return 'bg-blue-100 text-blue-800';
    case 'Communication':
      return 'bg-purple-100 text-purple-800';
    case 'Science':
      return 'bg-green-100 text-green-800';
    case 'Social Sciences':
      return 'bg-pink-100 text-pink-800';
    case 'History':
      return 'bg-amber-100 text-amber-800';
    case 'Philosophy':
      return 'bg-indigo-100 text-indigo-800';
    case 'Computer Science':
      return 'bg-cyan-100 text-cyan-800';
    case 'General Education':
      return 'bg-slate-100 text-slate-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryIcon = (category: string): React.ReactNode => {
  switch (category) {
    case 'Mathematics':
      return <Calculator className="w-5 h-5" />;
    case 'Communication':
      return <FileText className="w-5 h-5" />;
    case 'Science':
      return <Microscope className="w-5 h-5" />;
    case 'Social Sciences':
      return <Users className="w-5 h-5" />;
    case 'History':
      return <BookOpen className="w-5 h-5" />;
    case 'Philosophy':
      return <Lightbulb className="w-5 h-5" />;
    case 'Computer Science':
      return <Lightbulb className="w-5 h-5" />;
    case 'General Education':
      return <GraduationCap className="w-5 h-5" />;
    default:
      return <BookOpen className="w-5 h-5" />;
  }
};

export default function StudyResources() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAllSophia, setShowAllSophia] = useState(false);
  const [databaseCourses, setDatabaseCourses] = useState<DatabaseCourse[]>([]);
  const [isLoadingDb, setIsLoadingDb] = useState(true);

  useEffect(() => {
    fetchDatabaseCourses();
  }, []);

  const fetchDatabaseCourses = async () => {
    try {
      console.log('Fetching courses from Supabase database...');
      
      const { data, error } = await supabase
        .from('courses')
        .select('*');
      
      if (error) {
        console.error('Supabase error:', error);
        return;
      }
      
      if (data) {
        setDatabaseCourses(data);
        console.info(`Successfully loaded ${data.length} courses from Supabase database.`);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setIsLoadingDb(false);
    }
  };



  // Convert database courses to match the Course interface
  const databaseCoursesConverted = databaseCourses.map(course => {
    const materials = [
      course.material_1 && {
        title: course.material_1,
        description: 'Study material for this course',
        type: 'Resource',
        pages: 'N/A',
        updated: 'Recently'
      },
      course.material_2 && {
        title: course.material_2,
        description: 'Additional study material',
        type: 'Resource',
        pages: 'N/A',
        updated: 'Recently'
      },
      course.material_3 && {
        title: course.material_3,
        description: 'Supplementary material',
        type: 'Resource',
        pages: 'N/A',
        updated: 'Recently'
      }
    ].filter(Boolean);

    return {
      id: course.id.toString(),
      courseName: course.course_name,
      courseCode: course.course_code,
      credits: course.credits,
      description: course.description,
      completionTime: course.completion_time,
      keyTopics: [], // Not used in the current display
      tips: course.tips,
      provider: course.platform.toLowerCase().includes('sophia') ? "sophia" as const : "uopeople" as const,
      category: course.category,
      categoryColor: getCategoryColor(course.category),
      categoryIcon: getCategoryIcon(course.category),
      materials
    };
  });

  const allCourses: Course[] = [
    // Database courses (both Sophia and others)
    ...databaseCoursesConverted,
    // UoPeople Courses
    {
      id: "uopeople-math1201",
      courseName: "College Algebra",
      courseCode: "MATH 1201",
      credits: 3,
      description: "Comprehensive study materials for UoPeople's College Algebra course",
      completionTime: "8 weeks",
      keyTopics: ["Linear Equations", "Polynomials", "Quadratic Functions"],
      tips: "Practice problems are essential - work through all examples in the textbook",
      provider: "uopeople",
      category: "Mathematics",
      categoryColor: "bg-blue-100 text-blue-800",
      categoryIcon: <Calculator className="w-5 h-5" />,
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
      id: "uopeople-biol1301",
      courseName: "Introduction to Biology",
      courseCode: "BIOL 1301",
      credits: 4,
      description: "Complete study materials for UoPeople's Introduction to Biology course",
      completionTime: "8 weeks",
      keyTopics: ["Cell Structure", "Genetics", "Evolution"],
      tips: "Focus on understanding concepts rather than memorization - use diagrams extensively",
      provider: "uopeople",
      category: "Science",
      categoryColor: "bg-green-100 text-green-800",
      categoryIcon: <Microscope className="w-5 h-5" />,
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
      id: "uopeople-engl1102",
      courseName: "English Composition II",
      courseCode: "ENGL 1102",
      credits: 3,
      description: "Research writing and literary analysis materials for UoPeople's English Composition II",
      completionTime: "8 weeks",
      keyTopics: ["Research Writing", "Literary Analysis", "Critical Thinking"],
      tips: "Start research papers early and use the writing center for feedback",
      provider: "uopeople",
      category: "Communication",
      categoryColor: "bg-purple-100 text-purple-800",
      categoryIcon: <FileText className="w-5 h-5" />,
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
      id: "uopeople-cs1101",
      courseName: "Programming Fundamentals",
      courseCode: "CS 1101",
      credits: 3,
      description: "Python programming fundamentals with practical examples and projects",
      completionTime: "8 weeks",
      keyTopics: ["Python Basics", "Data Structures", "Algorithms"],
      tips: "Practice coding daily - consistency is key to mastering programming",
      provider: "uopeople",
      category: "Computer Science",
      categoryColor: "bg-indigo-100 text-indigo-800",
      categoryIcon: <Lightbulb className="w-5 h-5" />,
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

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const sophiaCoursesFiltered = allCourses.filter(course => course.provider === 'sophia');
  const uopeopleCourses = allCourses.filter(course => course.provider === 'uopeople');

  // Show only first 4 Sophia courses initially
  const displayedSophiaCourses = showAllSophia ? sophiaCoursesFiltered : sophiaCoursesFiltered.slice(0, 4);

  const sophiaStats = {
    totalCourses: sophiaCoursesFiltered.length,
    avgCompletionTime: "2-4 weeks",
    successRate: "95%"
  };

  const uopeopleStats = {
    totalCourses: uopeopleCourses.length,
    totalMaterials: uopeopleCourses.reduce((sum, course) => sum + (course.materials?.length || 0), 0),
    totalPages: uopeopleCourses.reduce((sum, course) => 
      sum + (course.materials?.reduce((matSum, mat) => {
        const pageCount = mat.pages && mat.pages.includes(' ') 
          ? parseInt(mat.pages.split(' ')[0]) 
          : 0;
        return matSum + (isNaN(pageCount) ? 0 : pageCount);
      }, 0) || 0), 0),
    lastUpdated: "3 days ago"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              Click on any course to see detailed materials, tips, and completion guides.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-3">
                  <Trophy className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Sophia Learning</h2>
              </div>
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
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">UoPeople</h2>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      {/* Course Planner CTA */}
      <div className="py-12 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <div className="flex items-center text-gray-600">
              <Target className="w-5 h-5 mr-2 text-blue-500" />
              <span>Need help choosing courses?</span>
            </div>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <a href="/course-planner" className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Try the Course Planner
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Sophia Learning Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Trophy className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Sophia Learning Courses</h2>
                  <p className="text-gray-600">Fast, affordable courses to complete your general education requirements</p>
                </div>
              </div>
              <Badge className="bg-orange-100 text-orange-800 text-sm px-3 py-1">
                {sophiaStats.totalCourses} Available
              </Badge>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {displayedSophiaCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => handleCourseClick(course)}
              >
                <Card className="h-full bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-400"></div>
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-start justify-end mb-3">
                      {course.difficulty && course.difficulty !== 'Recommended' && (
                        <Badge className={`text-xs px-2 py-1 rounded-full ${course.difficultyColor} border-0`}>
                          {course.difficulty}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-semibold leading-tight mb-1">
                      {course.courseName}
                    </CardTitle>
                    <div className="mb-2">
                      <p className="text-sm text-orange-600 font-medium">
                        {course.courseCode} • {course.credits} Credits
                      </p>
                    </div>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" />
                        <span>{course.completionTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {!showAllSophia && (
            <div className="text-center">
              <Button 
                onClick={() => setShowAllSophia(true)}
                variant="outline"
                className="px-8 py-3 text-orange-600 border-orange-300 hover:bg-orange-50 hover:border-orange-400"
              >
                Show All {sophiaStats.totalCourses} Sophia Courses
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {showAllSophia && (
            <div className="text-center">
              <Button 
                onClick={() => setShowAllSophia(false)}
                variant="outline"
                className="px-8 py-3 text-orange-600 border-orange-300 hover:bg-orange-50 hover:border-orange-400"
              >
                Show Less
                <ChevronUp className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* UoPeople Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">UoPeople Courses</h2>
                  <p className="text-gray-600">Comprehensive study materials for University of the People courses</p>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">
                {uopeopleStats.totalCourses} Courses
              </Badge>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {uopeopleCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => handleCourseClick(course)}
              >
                <Card className="h-full bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-start justify-end mb-3">
                      {/* Empty space to match Sophia layout structure */}
                    </div>
                    <CardTitle className="text-lg font-semibold leading-tight mb-2">
                      {course.courseName}
                    </CardTitle>
                    <p className="text-sm text-blue-600 font-medium mb-2">{course.courseCode} • {course.credits} Credits</p>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" />
                        <span>{course.completionTime}</span>
                      </div>
                      {course.materials && (
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-1.5" />
                          <span>{course.materials.length} Materials</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div>
                  <DialogTitle className="text-2xl">{selectedCourse.courseName}</DialogTitle>
                  <p className="text-gray-600 mt-1">{selectedCourse.courseCode} • {selectedCourse.credits} Credits</p>
                  <DialogDescription className="text-base mt-2">
                    {selectedCourse.description}
                  </DialogDescription>
                </div>
              </DialogHeader>

              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                    <BookMarked className="w-5 h-5 mr-2 text-blue-500" />
                    Course Details
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Platform:</span>
                      <Badge className={selectedCourse.provider === 'sophia' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}>
                        {/* Get platform from database course */}
                        {(() => {
                          const dbCourse = databaseCourses.find(dc => dc.id.toString() === selectedCourse.id);
                          return dbCourse ? dbCourse.platform : (selectedCourse.provider === 'sophia' ? 'Sophia Learning' : 'UoPeople');
                        })()}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Category:</span>
                      <Badge className={selectedCourse.categoryColor}>
                        {selectedCourse.category}
                      </Badge>
                    </div>
                    {selectedCourse.difficulty && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Difficulty:</span>
                        <Badge className={selectedCourse.difficultyColor}>
                          {selectedCourse.difficulty}
                        </Badge>
                      </div>
                    )}
                    {selectedCourse.completionTime && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{selectedCourse.completionTime}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-blue-500" />
                    Pro Tips
                  </h3>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {selectedCourse.tips || "Study tips will be available soon for this course."}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                    <FileDown className="w-5 h-5 mr-2 text-blue-500" />
                    Available Materials
                  </h3>
                  <div className="space-y-2">
                    {selectedCourse.materials && selectedCourse.materials.length > 0 ? (
                      selectedCourse.materials.map((material, index) => (
                        <Button key={index} variant="outline" className="w-full justify-start text-left h-auto p-3">
                          <FileText className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm">{material.title}</div>
                            <div className="text-xs text-gray-500">{material.description}</div>
                          </div>
                        </Button>
                      ))
                    ) : (
                      <div className="text-sm text-gray-500 p-3">
                        No materials available for this course.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
            </Card>          </motion.div>
        </div>
      </div>
    </div>
  );
}
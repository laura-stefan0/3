import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  BookMarked, 
  Calculator, 
  Lightbulb, 
  FileDown, 
  Target, 
  ArrowRight, 
  User, 
  Clock, 
  DollarSign,
  BookOpen, 
  FileText, 
  Microscope, 
  Users, 
  Globe, 
  ExternalLink,
  Download,
  GraduationCap,
  Star,
  CheckCircle,
  Trophy,
  Timer,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { sophiaCourses, SophiaCourse, getDifficultyColor } from "@/data/sophia-courses";
// import { supabase, DatabaseCourse } from "@/lib/supabase";

// Mock database courses interface
interface DatabaseCourse {
  id: number;
  course_name: string;
  platform: string;
  category: string;
  credits: number;
  equivalencies: string;
}
import { useState, useEffect } from "react";
import React from "react";
import Navigation from "@/components/navigation";

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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProvider, setSelectedProvider] = useState<string>('all');
  const [databaseCourses, setDatabaseCourses] = useState<DatabaseCourse[]>([]);
  const [isLoadingDb, setIsLoadingDb] = useState(true);

  useEffect(() => {
    fetchDatabaseCourses();
  }, []);

  const fetchDatabaseCourses = async () => {
    try {
      // Mock UoPeople courses data
      const mockData: DatabaseCourse[] = [
        {
          id: 1,
          course_name: "English Composition 1",
          platform: "UoPeople",
          category: "Communication",
          credits: 3,
          equivalencies: "Introduction to Academic Writing, Writing Fundamentals"
        },
        {
          id: 2,
          course_name: "College Algebra",
          platform: "UoPeople", 
          category: "Mathematics",
          credits: 3,
          equivalencies: "Algebra, Mathematical Functions, Problem Solving"
        },
        {
          id: 3,
          course_name: "Introduction to Psychology",
          platform: "UoPeople",
          category: "Social Sciences",
          credits: 3,
          equivalencies: "Psychology Fundamentals, Human Behavior, Research Methods"
        },
        {
          id: 4,
          course_name: "Principles of Biology",
          platform: "UoPeople",
          category: "Science",
          credits: 3,
          equivalencies: "Biology, Life Sciences, Scientific Method"
        },
        {
          id: 5,
          course_name: "World History",
          platform: "UoPeople",
          category: "History",
          credits: 3,
          equivalencies: "Historical Analysis, World Civilizations, Cultural Studies"
        },
        {
          id: 6,
          course_name: "Introduction to Philosophy",
          platform: "UoPeople",
          category: "Philosophy",
          credits: 3,
          equivalencies: "Critical Thinking, Ethics, Philosophical Methods"
        },
        {
          id: 7,
          course_name: "Computer Science Fundamentals",
          platform: "UoPeople",
          category: "Computer Science",
          credits: 3,
          equivalencies: "Programming Logic, Data Structures, Problem Solving"
        }
      ];
      
      setDatabaseCourses(mockData);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setIsLoadingDb(false);
    }
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAllSophia, setShowAllSophia] = useState(false);

  // Specific Sophia courses to display
  const selectedSophiaCourses = [
    "Foundations of English Composition",
    "College Algebra", 
    "Calculus",
    "Introduction to Statistics",
    "Introduction to Ethics",
    "Approaches to Studying Religions",
    "Introduction to Information Technology",
    "Environmental Science",
    "Art History I",
    "Art History II", 
    "Visual Communication",
    "Ancient Greek Philosophers",
    "U.S. History I",
    "U.S. History II",
    "Introduction to Psychology",
    "Introduction to Sociology",
    "Macroeconomics",
    "Microeconomics"
  ];

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  // Create Sophia courses mapped to Course interface
  const sophiaCoursesData: Course[] = sophiaCourses
    .filter(course => selectedSophiaCourses.includes(course.name))
    .map(course => ({
      id: course.id,
      courseName: course.name,
      courseCode: course.courseCode,
      difficulty: course.difficulty,
      difficultyColor: getDifficultyColor(course.difficulty),
      description: course.description,
      completionTime: course.completionTime,
      keyTopics: course.tips,
      tips: course.tips.join('\n'),
      provider: 'sophia' as const,
      category: course.category,
      categoryColor: getCategoryColor(course.category),
      categoryIcon: getCategoryIcon(course.category),
      credits: 3,
      materials: [{
        title: `${course.name} Study Guide`,
        description: 'Comprehensive study materials and practice exercises',
        type: 'PDF',
        pages: '45-60',
        updated: '2024'
      }]
    }));

  // Create UoPeople courses from database
  const uopeopleCoursesData: Course[] = databaseCourses.map(course => ({
    id: course.id.toString(),
    courseName: course.course_name,
    courseCode: `${course.platform}-${course.id}`,
    description: `${course.credits} credit course covering ${course.equivalencies}`,
    completionTime: '8-9 weeks',
    keyTopics: course.equivalencies.split(',').map(s => s.trim()),
    tips: `Focus on consistent weekly participation and timely assignment submissions. Utilize discussion forums for peer learning.`,
    provider: 'uopeople' as const,
    category: course.category,
    categoryColor: getCategoryColor(course.category),
    categoryIcon: getCategoryIcon(course.category),
    credits: course.credits,
    materials: [{
      title: `${course.course_name} Syllabus`,
      description: 'Course syllabus with weekly breakdown and requirements',
      type: 'PDF',
      pages: '12-15',
      updated: '2024'
    }]
  }));

  const allCourses = [...sophiaCoursesData, ...uopeopleCoursesData];

  const filteredCourses = allCourses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const providerMatch = selectedProvider === 'all' || course.provider === selectedProvider;
    return categoryMatch && providerMatch;
  });

  const categories = ['all', ...Array.from(new Set(allCourses.map(course => course.category)))];
  const providers = ['all', 'sophia', 'uopeople'];

  const getProviderDisplayName = (provider: string) => {
    switch (provider) {
      case 'sophia': return 'Sophia Learning';
      case 'uopeople': return 'UoPeople';
      case 'all': return 'All Providers';
      default: return provider;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Study Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Comprehensive course materials, study guides, and resources for both Sophia Learning and University of the People courses
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === 'all' ? 'All Categories' : category}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {providers.map(provider => (
              <Button
                key={provider}
                variant={selectedProvider === provider ? "default" : "outline"}
                onClick={() => setSelectedProvider(provider)}
                className="capitalize"
              >
                {getProviderDisplayName(provider)}
              </Button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => handleCourseClick(course)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={course.provider === 'sophia' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}>
                      {course.provider === 'sophia' ? 'Sophia Learning' : 'UoPeople'}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.completionTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2">{course.courseName}</CardTitle>
                  {course.courseCode && (
                    <p className="text-sm text-gray-600">{course.courseCode} • {course.credits} Credits</p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className={course.categoryColor}>
                      {course.categoryIcon}
                      <span className="ml-1">{course.category}</span>
                    </Badge>
                    {course.difficulty && (
                      <Badge className={course.difficultyColor}>
                        {course.difficulty}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {course.description.length > 120 
                      ? `${course.description.substring(0, 120)}...` 
                      : course.description
                    }
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <BookMarked className="w-4 h-4 mr-1" />
                      Study Materials
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more courses.</p>
          </div>
        )}
      </div>

      {/* Course Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div>
                  <DialogTitle className="text-2xl">{selectedCourse.courseName}</DialogTitle>
                  {selectedCourse.courseCode ? (
                    <p className="text-gray-600 mt-1">{selectedCourse.courseCode} • {selectedCourse.credits} Credits</p>
                  ) : selectedCourse.provider === 'sophia' ? (
                    <div className="mt-1">
                      <p className="text-gray-600">
                        {(() => {
                          const sophiaCourse = sophiaCourses.find(sc => sc.name === selectedCourse.courseName);
                          return sophiaCourse?.courseCode || 'SOPH-XXXX';
                        })()} • 3 Credits
                      </p>
                      {selectedCourse.courseName === 'College Algebra' && (
                        <p className="text-sm text-orange-600 mt-1">Fulfills UoPeople's MATH 1201 College Algebra</p>
                      )}
                    </div>
                  ) : null}
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
                        {selectedCourse.provider === 'sophia' ? 'Sophia Learning' : 'UoPeople'}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Category:</span>
                      <Badge className={selectedCourse.categoryColor}>
                        {selectedCourse.categoryIcon}
                        <span className="ml-1">{selectedCourse.category}</span>
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duration:</span>
                      <span className="text-gray-900">{selectedCourse.completionTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Credits:</span>
                      <span className="text-gray-900">{selectedCourse.credits}</span>
                    </div>
                    {selectedCourse.difficulty && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Difficulty:</span>
                        <Badge className={selectedCourse.difficultyColor}>
                          {selectedCourse.difficulty}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-500" />
                    Key Topics
                  </h3>
                  <div className="space-y-2 mb-6">
                    {selectedCourse.keyTopics.map((topic, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                    Study Tips
                  </h3>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-700 whitespace-pre-line">{selectedCourse.tips}</p>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                    <FileDown className="w-5 h-5 mr-2 text-purple-500" />
                    Study Materials
                  </h3>
                  <div className="space-y-3">
                    {selectedCourse.materials?.map((material, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">{material.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {material.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{material.description}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{material.pages} pages</span>
                          <span>Updated {material.updated}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
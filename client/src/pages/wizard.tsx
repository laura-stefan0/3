import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Edit, Download, Share2, University, GraduationCap } from "lucide-react";
import CourseCard from "@/components/course-card";
import ProgressBar from "@/components/progress-bar";
import SummaryCard from "@/components/summary-card";
import { useToast } from "@/hooks/use-toast";
import { nanoid } from "nanoid";

const categories = [
  { id: 'foundations', name: 'Foundation Courses', description: 'These mandatory UoPeople courses are automatically assigned to all new students.', maxSelections: 2, readonly: true },
  { id: 'communication', name: 'Communication', description: 'COM 2001 is mandatory. Pick one additional course option between UoPeople and Sophia.', maxSelections: 2 },
  { id: 'math', name: 'Mathematics', description: 'Pick one course from each of the three pairs (Algebra, Calculus, Statistics).', maxSelections: 3 },
  { id: 'values', name: 'Values and Ethical Reasoning', description: 'Pick one course option between UoPeople and Sophia.', maxSelections: 1 },
  { id: 'civilization', name: 'Civilization Studies, Cultures, and Beliefs', description: 'Pick only one course between these options.', maxSelections: 1 },
  { id: 'science', name: 'Natural Science', description: 'Pick only one course between these options.', maxSelections: 1 },
  { id: 'humanities', name: 'Humanities', description: 'Pick 2 courses from these options.', maxSelections: 2 },
  { id: 'social', name: 'Social and Behavioral Sciences', description: 'Pick 2 courses from these options.', maxSelections: 2 },
  { id: 'electives', name: 'Elective Courses', description: 'Choose elective courses to complete your degree requirements.', maxSelections: 6 }
];



export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [sessionId] = useState(() => nanoid());
  const { toast } = useToast();

  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  // Auto-select mandatory courses when courses are loaded
  useEffect(() => {
    if (courses && selectedCourses.length === 0) {
      const mandatoryCourses = courses.filter(course => 
        course.category === 'foundations' || 
        course.name === 'COM 2001 Professional Communication'
      );
      setSelectedCourses(mandatoryCourses);
    }
  }, [courses, selectedCourses.length]);

  const currentCategory = categories[currentStep - 1];
  const totalSteps = categories.length + 1; // +1 for summary

  const uopeopleCourses = courses?.filter(course => 
    course.provider === 'uopeople' && course.category === currentCategory?.id
  ) || [];

  const sophiaCourses = currentCategory?.id === 'electives' 
    ? [
        // Previously non-picked Sophia courses from other categories
        ...(courses?.filter(course => 
          course.provider === 'sophia' && 
          course.category !== 'electives' && 
          !selectedCourses.some(selected => selected.id === course.id)
        ) || []),
        // Dedicated elective courses
        ...(courses?.filter(course => 
          course.provider === 'sophia' && course.category === 'electives'
        ) || [])
      ]
    : courses?.filter(course => 
        course.provider === 'sophia' && course.category === currentCategory?.id
      ) || [];

  const handleCourseSelect = (course: Course) => {
    // Prevent deselection of mandatory courses
    if (course.category === 'foundations' || course.name === 'COM 2001 Professional Communication') {
      setTimeout(() => {
        toast({
          title: "Mandatory Course",
          description: "This course is mandatory and cannot be deselected.",
          variant: "destructive"
        });
      }, 0);
      return;
    }

    setSelectedCourses(prev => {
      const isSelected = prev.some(c => c.id === course.id);
      if (isSelected) {
        return prev.filter(c => c.id !== course.id);
      } else {
        const currentCategorySelections = prev.filter(c => c.category === course.category);
        const maxSelections = currentCategory.maxSelections;
        
        // Special handling for communication category (excluding mandatory course)
        if (course.category === 'communication') {
          const nonMandatorySelections = currentCategorySelections.filter(c => c.name !== 'COM 2001 Professional Communication');
          if (nonMandatorySelections.length >= 1) {
            // Replace the existing non-mandatory selection
            return prev.filter(c => c.category !== 'communication' || c.name === 'COM 2001 Professional Communication').concat(course);
          }
          return [...prev, course];
        }
        
        // Special handling for math pairs
        if (course.category === 'math') {
          let courseType = '';
          if (course.name.includes('Algebra') || course.name.includes('Introduction to College Mathematics') || course.name.includes('Precalculus')) {
            courseType = 'algebra';
          } else if (course.name.includes('Calculus')) {
            courseType = 'calculus';
          } else if (course.name.includes('Statistics')) {
            courseType = 'statistics';
          }
          
          // Remove any existing course of the same type (algebra, calculus, or statistics)
          const filteredPrev = prev.filter(c => {
            if (c.category !== 'math') return true;
            if (courseType === 'algebra' && (
              c.name.includes('Algebra') || 
              c.name.includes('Introduction to College Mathematics') || 
              c.name.includes('Precalculus')
            )) return false;
            if (courseType === 'calculus' && c.name.includes('Calculus')) return false;
            if (courseType === 'statistics' && c.name.includes('Statistics')) return false;
            return true;
          });
          
          return [...filteredPrev, course];
        }
        
        // Check if we've reached the limit for other categories
        if (currentCategorySelections.length >= maxSelections) {
          // For categories with limit 1, replace the existing selection
          if (maxSelections === 1) {
            return prev.filter(c => c.category !== course.category).concat(course);
          } else {
            // For categories with limit > 1, show a toast and don't add
            setTimeout(() => {
              toast({
                title: "Selection Limit Reached",
                description: `You can only select ${maxSelections} courses from this category.`,
                variant: "destructive"
              });
            }, 0);
            return prev;
          }
        }
        
        return [...prev, course];
      }
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleEditPlan = () => {
    setCurrentStep(1);
  };

  const handleDownloadPlan = () => {
    const planData = {
      uopeople: selectedCourses.filter(c => c.provider === 'uopeople'),
      sophia: selectedCourses.filter(c => c.provider === 'sophia'),
      totalCredits: selectedCourses.reduce((sum, course) => sum + course.credits, 0)
    };
    
    const blob = new Blob([JSON.stringify(planData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'course-plan.json';
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Plan Downloaded",
      description: "Your course plan has been downloaded successfully.",
    });
  };

  const handleSharePlan = () => {
    const planText = `My UoPeople Course Plan:\n\nUoPeople Courses:\n${selectedCourses.filter(c => c.provider === 'uopeople').map(c => `- ${c.name} (${c.credits} credits)`).join('\n')}\n\nSophia Courses:\n${selectedCourses.filter(c => c.provider === 'sophia').map(c => `- ${c.name} (${c.credits} credits)`).join('\n')}\n\nTotal Credits: ${selectedCourses.reduce((sum, course) => sum + course.credits, 0)}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My UoPeople Course Plan',
        text: planText
      });
    } else {
      navigator.clipboard.writeText(planText);
      toast({
        title: "Plan Copied",
        description: "Your course plan has been copied to the clipboard.",
      });
    }
  };

  const isCoursePage = currentStep <= categories.length;
  const isSummaryPage = currentStep === categories.length + 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar - Only show from step 2 onwards */}
      {currentStep > 1 && (
        <ProgressBar 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
          categories={categories}
        />
      )}

      <div className="max-w-6xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {isCoursePage ? (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {currentCategory.id === 'foundations' ? 'Mandatory UoPeople Courses' : `${currentCategory.name} Courses`}
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                  {currentCategory.id === 'foundations' 
                    ? 'These courses must be completed at UoPeople and cannot be exchanged with Sophia courses.'
                    : currentCategory.description}
                </p>
                
                {/* Selection Counter - Hide for foundations */}
                {currentCategory.id !== 'foundations' && (
                  <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-lg">
                    <span className="font-medium">
                      Selected: {selectedCourses.filter(c => c.category === currentCategory.id).length} / {currentCategory.maxSelections}
                    </span>
                  </div>
                )}
              </div>

              {/* Course Layout */}
              {currentCategory.id === 'foundations' ? (
                /* Introductory Page - How This Website Works */
                <div className="max-w-4xl mx-auto">
                  {/* Hero Section */}
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How This Course Planner Works</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      This wizard will guide you through selecting the optimal combination of courses from UoPeople and Sophia Learning to complete your General Education requirements efficiently and affordably.
                    </p>
                  </div>

                  {/* Steps Overview */}
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl font-bold text-blue-600">1</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">General Education Courses</h3>
                            <p className="text-gray-600">Select your required courses across multiple categories</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Mandatory Courses */}
                          <div className="bg-blue-50 rounded-lg p-6">
                            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                              Mandatory UoPeople Courses
                            </h4>
                            <ul className="space-y-2 text-sm text-blue-800">
                              <li>• 2 Foundation courses (UNIV 0001, UNIV 1001)</li>
                              <li>• 1 Communication course (COM 2001)</li>
                              <li className="font-medium">These cannot be substituted</li>
                            </ul>
                          </div>
                          
                          {/* Optional Courses */}
                          <div className="bg-green-50 rounded-lg p-6">
                            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                              </svg>
                              Choose Your Courses
                            </h4>
                            <ul className="space-y-2 text-sm text-green-800">
                              <li>• Mathematics (3 courses: Algebra, Calculus, Statistics)</li>
                              <li>• Science, Humanities, Social Sciences</li>
                              <li>• Values & Ethical Reasoning, Civilization Studies</li>
                              <li className="font-medium">Pick from UoPeople or Sophia Learning</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl font-bold text-purple-600">2</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Elective Courses</h3>
                            <p className="text-gray-600">Complete your degree requirements with additional courses</p>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg className="w-4 h-4 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-900 mb-2">Smart Course Availability</h4>
                              <p className="text-sm text-purple-800">
                                Any Sophia courses you didn't select for General Education will automatically become available as electives. 
                                Plus, you can choose from UoPeople Computer Science electives and additional Sophia general electives.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl font-bold text-green-600">3</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Download Your Plan</h3>
                            <p className="text-gray-600">Get your personalized course roadmap</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                              </svg>
                            </div>
                            <h4 className="font-medium text-gray-900">Download</h4>
                            <p className="text-xs text-gray-600">Save as JSON file</p>
                          </div>
                          
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                              </svg>
                            </div>
                            <h4 className="font-medium text-gray-900">Share</h4>
                            <p className="text-xs text-gray-600">Copy to clipboard</p>
                          </div>
                          
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                              </svg>
                            </div>
                            <h4 className="font-medium text-gray-900">Edit</h4>
                            <p className="text-xs text-gray-600">Modify anytime</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Why Use This Planner?</h3>
                      <div className="grid md:grid-cols-3 gap-6 text-sm">
                        <div>
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-900 mb-1">Save Money</h4>
                          <p className="text-gray-600">Choose affordable Sophia courses where possible</p>
                        </div>
                        <div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-900 mb-1">Save Time</h4>
                          <p className="text-gray-600">No need to research course equivalencies</p>
                        </div>
                        <div>
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-900 mb-1">Stay Compliant</h4>
                          <p className="text-gray-600">Ensure all degree requirements are met</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : currentCategory.id === 'communication' ? (
                /* Communication Category - Additional Course Selection Only */
                <div className="space-y-6">
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Choose One Additional Communication Course</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* UoPeople Option */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon uopeople-icon mr-3">
                              <University size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">UoPeople</h4>
                            <span className="text-sm text-gray-600 ml-2">(University of the People)</span>
                          </div>
                          <div className="space-y-3">
                            {uopeopleCourses.filter(c => c.name !== 'COM 2001 Professional Communication').map(course => (
                              <CourseCard
                                key={course.id}
                                course={course}
                                isSelected={selectedCourses.some(c => c.id === course.id)}
                                onSelect={() => handleCourseSelect(course)}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Sophia Option */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon sophia-icon mr-3">
                              <GraduationCap size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">Sophia</h4>
                            <span className="text-sm text-gray-600 ml-2">(Sophia Learning)</span>
                          </div>
                          <div className="space-y-3">
                            {sophiaCourses.map(course => (
                              <CourseCard
                                key={course.id}
                                course={course}
                                isSelected={selectedCourses.some(c => c.id === course.id)}
                                onSelect={() => handleCourseSelect(course)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : currentCategory.id === 'math' ? (
                /* Math Category - Separate Divs for Each Section */
                <div className="space-y-6">
                  {/* Algebra Section */}
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Algebra (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* UoPeople Algebra */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon uopeople-icon mr-3">
                              <University size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">UoPeople</h4>
                            <span className="text-sm text-gray-600 ml-2">(University of the People)</span>
                          </div>
                          <div className="space-y-3">
                            {uopeopleCourses.filter(c => c.name.includes('College Algebra')).map(course => (
                              <CourseCard
                                key={course.id}
                                course={course}
                                isSelected={selectedCourses.some(c => c.id === course.id)}
                                onSelect={() => handleCourseSelect(course)}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Sophia Algebra */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon sophia-icon mr-3">
                              <GraduationCap size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">Sophia</h4>
                            <span className="text-sm text-gray-600 ml-2">(Sophia Learning)</span>
                          </div>
                          <div className="space-y-3">
                            {sophiaCourses.filter(c => 
                              c.name.includes('Introduction to College Mathematics') || 
                              c.name.includes('College Algebra') || 
                              c.name.includes('Precalculus')
                            ).map(course => (
                              <div key={course.id} className="relative">
                                <CourseCard
                                  course={course}
                                  isSelected={selectedCourses.some(c => c.id === course.id)}
                                  onSelect={() => handleCourseSelect(course)}
                                />
                                {course.name === 'College Algebra' && (
                                  <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                    Recommended
                                  </div>
                                )}
                                {course.name === 'Introduction to College Mathematics' && (
                                  <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                    Easier
                                  </div>
                                )}
                                {course.name === 'Precalculus' && (
                                  <div className="absolute top-2 right-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                                    Harder
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Calculus Section */}
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Calculus (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* UoPeople Calculus */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon uopeople-icon mr-3">
                              <University size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">UoPeople</h4>
                            <span className="text-sm text-gray-600 ml-2">(University of the People)</span>
                          </div>
                          <div className="space-y-3">
                            {uopeopleCourses.filter(c => c.name.includes('Calculus')).map(course => (
                              <CourseCard
                                key={course.id}
                                course={course}
                                isSelected={selectedCourses.some(c => c.id === course.id)}
                                onSelect={() => handleCourseSelect(course)}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Sophia Calculus */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon sophia-icon mr-3">
                              <GraduationCap size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">Sophia</h4>
                            <span className="text-sm text-gray-600 ml-2">(Sophia Learning)</span>
                          </div>
                          <div className="space-y-3">
                            {sophiaCourses.filter(c => c.name.includes('Calculus')).map(course => (
                              <CourseCard
                                key={course.id}
                                course={course}
                                isSelected={selectedCourses.some(c => c.id === course.id)}
                                onSelect={() => handleCourseSelect(course)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Statistics Section */}
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Statistics (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* UoPeople Statistics */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon uopeople-icon mr-3">
                              <University size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">UoPeople</h4>
                            <span className="text-sm text-gray-600 ml-2">(University of the People)</span>
                          </div>
                          <div className="space-y-3">
                            {uopeopleCourses.filter(c => c.name.includes('Statistics')).map(course => (
                              <CourseCard
                                key={course.id}
                                course={course}
                                isSelected={selectedCourses.some(c => c.id === course.id)}
                                onSelect={() => handleCourseSelect(course)}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Sophia Statistics */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon sophia-icon mr-3">
                              <GraduationCap size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">Sophia</h4>
                            <span className="text-sm text-gray-600 ml-2">(Sophia Learning)</span>
                          </div>
                          <div className="space-y-3">
                            {sophiaCourses.filter(c => c.name.includes('Statistics')).map(course => (
                              <CourseCard
                                key={course.id}
                                course={course}
                                isSelected={selectedCourses.some(c => c.id === course.id)}
                                onSelect={() => handleCourseSelect(course)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : currentCategory.id === 'electives' ? (
                /* Electives Category - UoPeople Left, Sophia Right */
                <div className="space-y-6">
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Choose Your Elective Courses</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* UoPeople Computer Science Electives */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon uopeople-icon mr-3">
                              <University size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">UoPeople</h4>
                            <span className="text-sm text-gray-600 ml-2">(Computer Science Electives)</span>
                          </div>
                          <div className="space-y-3">
                            {isLoading ? (
                              <div className="space-y-3">
                                {[1, 2, 3].map(i => (
                                  <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
                                ))}
                              </div>
                            ) : (
                              uopeopleCourses.map(course => (
                                <CourseCard
                                  key={course.id}
                                  course={course}
                                  isSelected={selectedCourses.some(c => c.id === course.id)}
                                  onSelect={() => handleCourseSelect(course)}
                                />
                              ))
                            )}
                          </div>
                        </div>

                        {/* Sophia General Electives */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon sophia-icon mr-3">
                              <GraduationCap size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">Sophia</h4>
                            <span className="text-sm text-gray-600 ml-2">(General Electives)</span>
                          </div>
                          <div className="space-y-3">
                            {isLoading ? (
                              <div className="space-y-3">
                                {[1, 2, 3].map(i => (
                                  <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
                                ))}
                              </div>
                            ) : (
                              <>
                                {/* Previously non-picked courses */}
                                {sophiaCourses.filter(c => c.category !== 'electives').length > 0 && (
                                  <>
                                    <div className="text-sm font-medium text-gray-600 mb-2">
                                      Previously Available Courses:
                                    </div>
                                    {sophiaCourses.filter(c => c.category !== 'electives').map(course => (
                                      <div key={course.id} className="relative">
                                        <CourseCard
                                          course={course}
                                          isSelected={selectedCourses.some(c => c.id === course.id)}
                                          onSelect={() => handleCourseSelect(course)}
                                        />
                                        <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                          {course.category}
                                        </div>
                                      </div>
                                    ))}
                                    <div className="border-t border-gray-200 my-3"></div>
                                  </>
                                )}
                                
                                {/* Dedicated elective courses */}
                                <div className="text-sm font-medium text-gray-600 mb-2">
                                  Additional Electives:
                                </div>
                                {sophiaCourses.filter(c => c.category === 'electives').map(course => (
                                  <CourseCard
                                    key={course.id}
                                    course={course}
                                    isSelected={selectedCourses.some(c => c.id === course.id)}
                                    onSelect={() => handleCourseSelect(course)}
                                  />
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                /* All Other Categories - UoPeople Left, Sophia Right */
                <div className="space-y-6">
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{currentCategory.name} (Pick {currentCategory.maxSelections === 1 ? 'One' : currentCategory.maxSelections})</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* UoPeople Section */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon uopeople-icon mr-3">
                              <University size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">UoPeople</h4>
                            <span className="text-sm text-gray-600 ml-2">(University of the People)</span>
                          </div>
                          <div className="space-y-3">
                            {isLoading ? (
                              <div className="space-y-3">
                                {[1, 2, 3].map(i => (
                                  <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
                                ))}
                              </div>
                            ) : uopeopleCourses.length > 0 ? (
                              uopeopleCourses.map(course => (
                                <CourseCard
                                  key={course.id}
                                  course={course}
                                  isSelected={selectedCourses.some(c => c.id === course.id)}
                                  onSelect={() => handleCourseSelect(course)}
                                />
                              ))
                            ) : (
                              <div className="text-gray-500 text-center py-4">
                                No UoPeople courses available for this category
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Sophia Section */}
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="provider-icon sophia-icon mr-3">
                              <GraduationCap size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">Sophia</h4>
                            <span className="text-sm text-gray-600 ml-2">(Sophia Learning)</span>
                          </div>
                          <div className="space-y-3">
                            {isLoading ? (
                              <div className="space-y-3">
                                {[1, 2, 3].map(i => (
                                  <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
                                ))}
                              </div>
                            ) : sophiaCourses.length > 0 ? (
                              sophiaCourses.map(course => (
                                <CourseCard
                                  key={course.id}
                                  course={course}
                                  isSelected={selectedCourses.some(c => c.id === course.id)}
                                  onSelect={() => handleCourseSelect(course)}
                                />
                              ))
                            ) : (
                              <div className="text-gray-500 text-center py-4">
                                No Sophia courses available for this category
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="summary"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Summary Screen */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Course Plan</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Here's your personalized course selection to complete your General Education requirements.
                </p>
              </div>

              {/* Summary Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <SummaryCard 
                  title="UoPeople Courses"
                  icon={<University size={20} />}
                  courses={selectedCourses.filter(c => c.provider === 'uopeople')}
                  colorClass="text-primary"
                />
                <SummaryCard 
                  title="Sophia Courses"
                  icon={<GraduationCap size={20} />}
                  courses={selectedCourses.filter(c => c.provider === 'sophia')}
                  colorClass="text-accent"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 flex-wrap gap-4">
                <Button 
                  onClick={handleEditPlan}
                  variant="outline"
                  className="font-semibold py-3 px-6 rounded-xl"
                >
                  <Edit className="mr-2" size={16} />
                  Edit Plan
                </Button>
                <Button 
                  onClick={handleDownloadPlan}
                  className="bg-primary hover:bg-primary/90 font-semibold py-3 px-6 rounded-xl"
                >
                  <Download className="mr-2" size={16} />
                  Download Plan
                </Button>
                <Button 
                  onClick={handleSharePlan}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-6 rounded-xl"
                >
                  <Share2 className="mr-2" size={16} />
                  Share Plan
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          {currentStep === 1 ? (
            /* Foundation page navigation - No back button, custom next button */
            <div className="flex justify-center w-full">
              <Button 
                onClick={handleNext}
                className="bg-primary hover:bg-primary/90 font-semibold py-3 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Planning
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          ) : (
            /* Regular navigation for other pages */
            <>
              <Button 
                onClick={handleBack}
                variant="outline"
                className="font-semibold py-3 px-6 rounded-xl"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back
              </Button>
              
              <div className="flex-1" />
              
              {currentStep < totalSteps && (
                <Button 
                  onClick={handleNext}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Next Step
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

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
      {/* Progress Bar */}
      <ProgressBar 
        currentStep={currentStep} 
        totalSteps={totalSteps} 
        categories={categories}
      />

      <div className="max-w-6xl mx-auto px-6 py-6">
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
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {currentCategory.name} Courses
                </h1>
                <p className="text-base text-gray-600 max-w-2xl mx-auto mb-3">
                  {currentCategory.description}
                </p>
                
                {/* Selection Counter */}
                <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-lg">
                  <span className="font-medium">
                    Selected: {selectedCourses.filter(c => c.category === currentCategory.id).length} / {currentCategory.maxSelections}
                  </span>
                </div>
              </div>

              {/* Course Layout */}
              {currentCategory.id === 'foundations' ? (
                /* Foundations Category - Read-only Information */
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">
                      📚 Mandatory Foundation Courses
                    </h3>
                    <p className="text-blue-700 mb-4">
                      These courses are automatically assigned to all new UoPeople students and must be completed first. 
                      They cannot be substituted with Sophia courses.
                    </p>
                    <div className="grid gap-4">
                      {uopeopleCourses.map(course => (
                        <div key={course.id} className="bg-white rounded-lg p-4 border border-blue-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-800">{course.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
                                {course.credits} Credits • UoPeople Only
                              </span>
                            </div>
                            <div className="text-green-600">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : currentCategory.id === 'communication' ? (
                /* Communication Category - With Mandatory Course */
                <div className="space-y-6">
                  {/* Mandatory Course */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">
                      📝 Mandatory Communication Course
                    </h3>
                    <p className="text-orange-700 mb-4">
                      This course is required for all students and must be taken at UoPeople.
                    </p>
                    {courses?.filter(c => c.name === 'COM 2001 Professional Communication').map(course => (
                      <div key={course.id} className="bg-white rounded-lg p-4 border border-orange-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-800">{course.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                            <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mt-2">
                              {course.credits} Credits • UoPeople Only
                            </span>
                          </div>
                          <div className="text-green-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Communication Course Choice */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      ➕ Choose One Additional Communication Course
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* UoPeople Option */}
                      <div>
                        <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                          <University size={20} className="mr-2 text-primary" />
                          UoPeople Option
                        </h4>
                        {uopeopleCourses.filter(c => c.name !== 'COM 2001 Professional Communication').map(course => (
                          <CourseCard
                            key={course.id}
                            course={course}
                            isSelected={selectedCourses.some(c => c.id === course.id)}
                            onSelect={() => handleCourseSelect(course)}
                          />
                        ))}
                      </div>
                      
                      {/* Sophia Option */}
                      <div>
                        <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                          <GraduationCap size={20} className="mr-2 text-accent" />
                          Sophia Option
                        </h4>
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
                </div>
              ) : currentCategory.id === 'math' ? (
                /* Math Category - Special Pairs Layout */
                <div className="space-y-6">
                  {/* Algebra Pair */}
                  {uopeopleCourses.find(c => c.name.includes('College Algebra')) && (
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Algebra (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-4">
                        {/* UoPeople Option */}
                        <div>
                          <div className="flex items-center mb-3">
                            <div className="provider-icon uopeople-icon mr-3">
                              <University size={20} />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-gray-800">UoPeople</h4>
                              <p className="text-gray-600 text-xs">University of the People</p>
                            </div>
                          </div>
                          <CourseCard
                            course={uopeopleCourses.find(c => c.name.includes('College Algebra'))!}
                            isSelected={selectedCourses.some(c => c.id === uopeopleCourses.find(uo => uo.name.includes('College Algebra'))?.id)}
                            onSelect={() => handleCourseSelect(uopeopleCourses.find(c => c.name.includes('College Algebra'))!)}
                          />
                        </div>

                        {/* Sophia Options */}
                        <div>
                          <div className="flex items-center mb-3">
                            <div className="provider-icon sophia-icon mr-3">
                              <GraduationCap size={20} />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-gray-800">Sophia</h4>
                              <p className="text-gray-600 text-xs">Sophia Learning</p>
                            </div>
                          </div>
                          <div className="space-y-2">
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
                    </div>
                  )}

                  {/* Calculus Pair */}
                  {uopeopleCourses.find(c => c.name.includes('Calculus')) && sophiaCourses.find(c => c.name.includes('Calculus')) && (
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Calculus (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-4">
                        <CourseCard
                          course={uopeopleCourses.find(c => c.name.includes('Calculus'))!}
                          isSelected={selectedCourses.some(c => c.id === uopeopleCourses.find(uo => uo.name.includes('Calculus'))?.id)}
                          onSelect={() => handleCourseSelect(uopeopleCourses.find(c => c.name.includes('Calculus'))!)}
                        />
                        <CourseCard
                          course={sophiaCourses.find(c => c.name.includes('Calculus'))!}
                          isSelected={selectedCourses.some(c => c.id === sophiaCourses.find(s => s.name.includes('Calculus'))?.id)}
                          onSelect={() => handleCourseSelect(sophiaCourses.find(c => c.name.includes('Calculus'))!)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Statistics Pair */}
                  {uopeopleCourses.find(c => c.name.includes('Statistics')) && sophiaCourses.find(c => c.name.includes('Statistics')) && (
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Statistics (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-4">
                        <CourseCard
                          course={uopeopleCourses.find(c => c.name.includes('Statistics'))!}
                          isSelected={selectedCourses.some(c => c.id === uopeopleCourses.find(uo => uo.name.includes('Statistics'))?.id)}
                          onSelect={() => handleCourseSelect(uopeopleCourses.find(c => c.name.includes('Statistics'))!)}
                        />
                        <CourseCard
                          course={sophiaCourses.find(c => c.name.includes('Statistics'))!}
                          isSelected={selectedCourses.some(c => c.id === sophiaCourses.find(s => s.name.includes('Statistics'))?.id)}
                          onSelect={() => handleCourseSelect(sophiaCourses.find(c => c.name.includes('Statistics'))!)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : currentCategory.id === 'electives' ? (
                /* Electives Category - Special Layout */
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* UoPeople Computer Science Electives */}
                  <Card className="shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="provider-icon uopeople-icon mr-3">
                          <University size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Computer Science Electives</h3>
                          <p className="text-gray-600 text-xs">UoPeople Major-Related Courses</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {isLoading ? (
                          <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse" />
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
                    </CardContent>
                  </Card>

                  {/* Sophia General Electives + Previously Non-picked */}
                  <Card className="shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="provider-icon sophia-icon mr-3">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">General Electives</h3>
                          <p className="text-gray-600 text-xs">Sophia Non-Major Courses</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {isLoading ? (
                          <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse" />
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
                                <hr className="my-4" />
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
                    </CardContent>
                  </Card>
                </div>
              ) : (
                /* All Other Categories - Standard Split Layout */
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* UoPeople Courses */}
                  <Card className="shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="provider-icon uopeople-icon mr-3">
                          <University size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">UoPeople Courses</h3>
                          <p className="text-gray-600 text-xs">University of the People</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {isLoading ? (
                          <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse" />
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
                    </CardContent>
                  </Card>

                  {/* Sophia Courses */}
                  <Card className="shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="provider-icon sophia-icon mr-3">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Sophia Courses</h3>
                          <p className="text-gray-600 text-xs">Sophia Learning</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {isLoading ? (
                          <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse" />
                            ))}
                          </div>
                        ) : (
                          sophiaCourses.map(course => (
                            <CourseCard
                              key={course.id}
                              course={course}
                              isSelected={selectedCourses.some(c => c.id === course.id)}
                              onSelect={() => handleCourseSelect(course)}
                            />
                          ))
                        )}
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
          <Button 
            onClick={handleBack}
            disabled={currentStep === 1}
            variant="outline"
            className={`font-semibold py-3 px-6 rounded-xl ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
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
        </div>
      </div>
    </div>
  );
}

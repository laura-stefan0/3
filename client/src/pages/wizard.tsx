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
  { id: 'communication', name: 'Communication', description: 'Pick one course option between UoPeople and Sophia.', maxSelections: 1 },
  { id: 'math', name: 'Mathematics', description: 'Pick one course from each of the three pairs (Algebra, Calculus, Statistics).', maxSelections: 3 },
  { id: 'values', name: 'Values and Ethical Reasoning', description: 'Pick one course option between UoPeople and Sophia.', maxSelections: 1 },
  { id: 'civilization', name: 'Civilization Studies, Cultures, and Beliefs', description: 'Pick only one course between these options.', maxSelections: 1 },
  { id: 'science', name: 'Natural Science', description: 'Pick only one course between these options.', maxSelections: 1 },
  { id: 'humanities', name: 'Humanities', description: 'Pick 2 courses from these options.', maxSelections: 2 },
  { id: 'social', name: 'Social and Behavioral Sciences', description: 'Pick 2 courses from these options.', maxSelections: 2 }
];

const categoryImages = {
  communication: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300",
  math: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300",
  values: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300",
  civilization: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300",
  science: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300",
  humanities: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300",
  social: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300"
};

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [sessionId] = useState(() => nanoid());
  const { toast } = useToast();

  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  const currentCategory = categories[currentStep - 1];
  const totalSteps = categories.length + 1; // +1 for summary

  const uopeopleCourses = courses?.filter(course => 
    course.provider === 'uopeople' && course.category === currentCategory?.id
  ) || [];

  const sophiaCourses = courses?.filter(course => 
    course.provider === 'sophia' && course.category === currentCategory?.id
  ) || [];

  const handleCourseSelect = (course: Course) => {
    setSelectedCourses(prev => {
      const isSelected = prev.some(c => c.id === course.id);
      if (isSelected) {
        return prev.filter(c => c.id !== course.id);
      } else {
        const currentCategorySelections = prev.filter(c => c.category === course.category);
        const maxSelections = currentCategory.maxSelections;
        
        // Special handling for math pairs
        if (course.category === 'math') {
          let courseType = '';
          if (course.name.includes('Algebra')) courseType = 'algebra';
          else if (course.name.includes('Calculus')) courseType = 'calculus';
          else if (course.name.includes('Statistics')) courseType = 'statistics';
          
          // Remove any existing course of the same type (algebra, calculus, or statistics)
          const filteredPrev = prev.filter(c => {
            if (c.category !== 'math') return true;
            if (courseType === 'algebra' && c.name.includes('Algebra')) return false;
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
                <img 
                  src={categoryImages[currentCategory.id as keyof typeof categoryImages]} 
                  alt={`${currentCategory.name} education planning`}
                  className="category-image mb-6"
                />
                
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {currentCategory.name} Courses
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
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
              {currentCategory.id === 'math' ? (
                /* Math Category - Special Pairs Layout */
                <div className="space-y-8">
                  {/* Algebra Pair */}
                  {uopeopleCourses.find(c => c.name.includes('College Algebra')) && sophiaCourses.find(c => c.name.includes('College Algebra')) && (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Algebra (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <CourseCard
                          course={uopeopleCourses.find(c => c.name.includes('College Algebra'))!}
                          isSelected={selectedCourses.some(c => c.id === uopeopleCourses.find(uo => uo.name.includes('College Algebra'))?.id)}
                          onSelect={() => handleCourseSelect(uopeopleCourses.find(c => c.name.includes('College Algebra'))!)}
                        />
                        <CourseCard
                          course={sophiaCourses.find(c => c.name.includes('College Algebra'))!}
                          isSelected={selectedCourses.some(c => c.id === sophiaCourses.find(s => s.name.includes('College Algebra'))?.id)}
                          onSelect={() => handleCourseSelect(sophiaCourses.find(c => c.name.includes('College Algebra'))!)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Calculus Pair */}
                  {uopeopleCourses.find(c => c.name.includes('Calculus')) && sophiaCourses.find(c => c.name.includes('Calculus')) && (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Calculus (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
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
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Statistics (Pick One)</h3>
                      <div className="grid lg:grid-cols-2 gap-6">
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
              ) : (
                /* All Other Categories - Standard Split Layout */
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* UoPeople Courses */}
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="provider-icon uopeople-icon mr-4">
                          <University size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">UoPeople Courses</h3>
                          <p className="text-gray-600 text-sm">University of the People</p>
                        </div>
                      </div>

                      <div className="space-y-4">
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
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="provider-icon sophia-icon mr-4">
                          <GraduationCap size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Sophia Courses</h3>
                          <p className="text-gray-600 text-sm">Sophia Learning</p>
                        </div>
                      </div>

                      <div className="space-y-4">
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
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300" 
                  alt="Stack of academic textbooks and materials"
                  className="category-image mb-6"
                />
                
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

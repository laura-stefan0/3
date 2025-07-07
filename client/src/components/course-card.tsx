import { motion } from "framer-motion";
import { Course } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface CourseCardProps {
  course: Course;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CourseCard({ course, isSelected, onSelect }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card 
        className={`cursor-pointer transition-all duration-300 ${
          isSelected ? 'ring-2 ring-primary' : 'hover:shadow-md'
        }`}
        style={isSelected ? { backgroundColor: 'hsl(var(--primary) / 0.05)' } : {}}
        onClick={onSelect}
      >
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 mb-1">{course.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{course.description}</p>
              <Badge variant="secondary" className="text-xs">
                {course.credits} Credits
              </Badge>
            </div>
            <div className="ml-4">
              <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                isSelected 
                  ? 'bg-primary border-primary' 
                  : 'border-gray-300 hover:border-primary/50'
              }`}>
                {isSelected && <Check className="text-white" size={14} />}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

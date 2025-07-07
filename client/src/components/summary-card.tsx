import { Course } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface SummaryCardProps {
  title: string;
  icon: React.ReactNode;
  courses: Course[];
  colorClass: string;
}

export default function SummaryCard({ title, icon, courses, colorClass }: SummaryCardProps) {
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <span className={colorClass}>{icon}</span>
          <span className="ml-2">{title}</span>
          <Badge variant="secondary" className="ml-auto">
            {totalCredits} Credits
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {courses.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No courses selected yet
            </p>
          ) : (
            courses.map(course => (
              <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{course.name}</h4>
                  <p className="text-sm text-gray-600">{course.credits} Credits</p>
                </div>
                <Check className={colorClass} size={20} />
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}

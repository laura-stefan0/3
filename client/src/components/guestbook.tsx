
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, User, Calendar, AlertTriangle, ExternalLink, GraduationCap } from "lucide-react";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  role: string;
}

// Sample entries to show how it works
const sampleEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "Sarah M.",
    message: "This tool saved me so much time! Finally found a clear path through all the course requirements. Thank you for creating this!",
    timestamp: "2 days ago",
    role: "Graduate"
  },
  {
    id: "2", 
    name: "Alex K.",
    message: "Just finished my Gen Ed requirements using this planner. The Sophia courses were much faster than I expected. Great resource!",
    timestamp: "1 week ago",
    role: "Current Student"
  },
  {
    id: "3",
    name: "Maria L.",
    message: "Amazing work! This tool helped me save over $1000 on my degree. Thank you to whoever built this!",
    timestamp: "1 week ago",
    role: "Graduate"
  },
  {
    id: "4",
    name: "Jordan T.",
    message: "Perfect for planning my degree path. Really appreciate having all the information in one place.",
    timestamp: "2 weeks ago",
    role: "Current Student"
  },
  {
    id: "5",
    name: "David K.",
    message: "Thank you for making this free and accessible to everyone. This is exactly what UoPeople students need!",
    timestamp: "3 weeks ago",
    role: "Future Student"
  }
];

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(sampleEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !role) return;

    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      const newEntry: GuestbookEntry = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        timestamp: "just now",
        role: role
      };
      
      setEntries([newEntry, ...entries]);
      setName("");
      setMessage("");
      setRole("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Student Guestbook
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Share your appreciation, success stories, or thank you messages with the community. 
            Your positive experiences inspire and help other students on their academic journey.
          </p>
        </motion.div>



        {/* Add New Entry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2" size={20} />
                Leave a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your name (first name + last initial is fine)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={50}
                    required
                  />
                </div>
                <div>
                  <Select value={role} onValueChange={setRole} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Future Student">Future Student</SelectItem>
                      <SelectItem value="Current Student">Current Student</SelectItem>
                      <SelectItem value="Graduate">Graduate</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    placeholder="Share your success story, thank the creator, or leave an encouraging message for other students..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    maxLength={500}
                    required
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {message.length}/500 characters
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !name.trim() || !message.trim() || !role}
                    className="flex-1 sm:flex-none"
                  >
                    {isSubmitting ? "Posting..." : "Post Message"}
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="border-orange-300 text-orange-700 hover:bg-orange-100 flex-1 sm:flex-none"
                    asChild
                  >
                    <a href="https://forms.gle/coursechanges" target="_blank" rel="noopener noreferrer">
                      <AlertTriangle className="mr-2" size={16} />
                      Report Course Changes
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Existing Entries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-4">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <User size={16} className="text-blue-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">{entry.name}</span>
                          <div className="flex items-center text-xs text-gray-500">
                            <GraduationCap size={12} className="mr-1" />
                            {entry.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {entry.timestamp}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{entry.message}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note about tool */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is a student-created tool. For official course information, 
              always verify with UoPeople directly or check the{" "}
              <a 
                href="https://uopeople.sophia.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                official transfer guide
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

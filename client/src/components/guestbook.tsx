
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Calendar } from "lucide-react";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

// Sample entries to show how it works
const sampleEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "Sarah M.",
    message: "This tool saved me so much time! Finally found a clear path through all the course requirements. Thank you for creating this!",
    timestamp: "2 days ago"
  },
  {
    id: "2", 
    name: "Alex K.",
    message: "Just finished my Gen Ed requirements using this planner. The Sophia courses were much faster than I expected. Great resource!",
    timestamp: "1 week ago"
  },
  {
    id: "3",
    name: "Jordan T.",
    message: "Could you add estimated completion times for each course? Otherwise this is perfect for planning my degree path.",
    timestamp: "2 weeks ago"
  }
];

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(sampleEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      const newEntry: GuestbookEntry = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        timestamp: "just now"
      };
      
      setEntries([newEntry, ...entries]);
      setName("");
      setMessage("");
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
            Share your experience, leave feedback, or let us know about course changes you've noticed. 
            Your input helps improve this tool for future students.
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
                  <Textarea
                    placeholder="Share your experience, feedback, or report course changes..."
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
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !name.trim() || !message.trim()}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Posting..." : "Post Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Existing Entries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                        <span className="font-medium text-gray-900">{entry.name}</span>
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

        {/* Note about feedback */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
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

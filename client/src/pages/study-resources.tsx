import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Calculator, 
  Microscope, 
  Users, 
  Globe, 
  Lightbulb,
  ExternalLink,
  Download
} from "lucide-react";

export default function StudyResources() {
  const resources = [
    {
      category: "Mathematics",
      icon: <Calculator className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-800",
      items: [
        {
          title: "Khan Academy - Algebra",
          description: "Free comprehensive algebra courses with practice exercises",
          type: "Interactive Course",
          link: "https://www.khanacademy.org/math/algebra",
          provider: "Khan Academy"
        },
        {
          title: "MIT OpenCourseWare - Calculus",
          description: "MIT's complete calculus course materials and lectures",
          type: "University Course",
          link: "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/",
          provider: "MIT"
        },
        {
          title: "Statistics Handbook",
          description: "Comprehensive statistics reference and formulas",
          type: "Reference",
          link: "#",
          provider: "Internal"
        }
      ]
    },
    {
      category: "Natural Sciences",
      icon: <Microscope className="w-5 h-5" />,
      color: "bg-green-100 text-green-800",
      items: [
        {
          title: "Biology Online Textbook",
          description: "Open-source biology textbook covering all major topics",
          type: "Textbook",
          link: "https://openstax.org/books/biology-2e/pages/1-introduction",
          provider: "OpenStax"
        },
        {
          title: "Chemistry LibreTexts",
          description: "Comprehensive chemistry resources and practice problems",
          type: "Reference Library",
          link: "https://chem.libretexts.org/",
          provider: "LibreTexts"
        },
        {
          title: "Physics Simulations",
          description: "Interactive physics simulations and experiments",
          type: "Interactive Tool",
          link: "https://phet.colorado.edu/",
          provider: "PhET"
        }
      ]
    },
    {
      category: "Communication & Writing",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-800",
      items: [
        {
          title: "Purdue OWL Writing Lab",
          description: "Writing resources, citation guides, and grammar help",
          type: "Writing Guide",
          link: "https://owl.purdue.edu/owl/purdue_owl.html",
          provider: "Purdue University"
        },
        {
          title: "Grammarly Handbook",
          description: "Grammar rules, writing tips, and style guides",
          type: "Reference",
          link: "https://www.grammarly.com/blog/",
          provider: "Grammarly"
        },
        {
          title: "APA Style Guide",
          description: "Official APA formatting and citation guidelines",
          type: "Style Guide",
          link: "https://apastyle.apa.org/",
          provider: "APA"
        }
      ]
    },
    {
      category: "Social & Behavioral Sciences",
      icon: <Users className="w-5 h-5" />,
      color: "bg-orange-100 text-orange-800",
      items: [
        {
          title: "Psychology Today Resources",
          description: "Psychology articles, research, and educational content",
          type: "Articles",
          link: "https://www.psychologytoday.com/",
          provider: "Psychology Today"
        },
        {
          title: "Sociology Central",
          description: "Sociology theories, research methods, and case studies",
          type: "Educational Site",
          link: "https://www.sociology.org.uk/",
          provider: "Sociology Central"
        },
        {
          title: "Anthropology Resources",
          description: "Cultural anthropology studies and research papers",
          type: "Research Database",
          link: "#",
          provider: "Academic"
        }
      ]
    },
    {
      category: "Humanities",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-red-100 text-red-800",
      items: [
        {
          title: "World History Encyclopedia",
          description: "Comprehensive historical articles and timelines",
          type: "Encyclopedia",
          link: "https://www.worldhistory.org/",
          provider: "World History"
        },
        {
          title: "Philosophy Basics",
          description: "Introduction to philosophical concepts and thinkers",
          type: "Educational Guide",
          link: "https://www.philosophybasics.com/",
          provider: "Philosophy Basics"
        },
        {
          title: "Literature Study Guides",
          description: "Analysis and summaries of classic literature",
          type: "Study Guides",
          link: "#",
          provider: "SparkNotes"
        }
      ]
    }
  ];

  const studyTools = [
    {
      name: "Anki Flashcards",
      description: "Spaced repetition flashcard system for effective memorization",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://apps.ankiweb.net/"
    },
    {
      name: "Notion Templates",
      description: "Pre-made study templates for note-taking and organization",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.notion.so/templates"
    },
    {
      name: "Pomodoro Timer",
      description: "Time management technique for focused study sessions",
      icon: <Lightbulb className="w-6 h-6" />,
      link: "https://pomofocus.io/"
    },
    {
      name: "Study Music Playlists",
      description: "Curated playlists for concentration and focus",
      icon: <Video className="w-6 h-6" />,
      link: "https://open.spotify.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Study Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of study materials, reference guides, and learning tools 
              to support your academic journey at University of the People and beyond.
            </p>
          </motion.div>

          {/* Resource Categories */}
          <div className="space-y-12">
            {resources.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.provider}</span>
                          <Button size="sm" variant="outline" asChild>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Access
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <Separator className="my-16" />

          {/* Study Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Recommended Study Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studyTools.map((tool, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        {tool.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <a href={tool.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Try Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Download Study Guide</CardTitle>
                <CardDescription className="text-blue-100">
                  Get our comprehensive PDF study guide with all resources organized by subject
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" variant="secondary">
                  <Download className="w-5 h-5 mr-2" />
                  Download Study Guide (PDF)
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
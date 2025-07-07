import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  HelpCircle, 
  GraduationCap, 
  DollarSign, 
  Clock, 
  BookOpen, 
  Users,
  AlertCircle,
  CheckCircle,
  MessageSquare,
  Mail
} from "lucide-react";

export default function FAQs() {
  const generalFAQs = [
    {
      question: "What is UoPeople?",
      answer: "Tuition-free, accredited online university. You only pay assessment fees ($160 per course) when you're ready to take exams. No tuition, no monthly fees."
    },
    {
      question: "How does this tool work?",
      answer: "Shows you which Gen Ed courses to take at Sophia vs UoPeople. Same courses everyone uses, just organized so you don't have to dig through forums and spreadsheets."
    },
    {
      question: "Is UoPeople actually free?",
      answer: "Free tuition, yes. You pay assessment fees (~$160 per course) only when you take exams. Total for a bachelor's degree is around $2,460 in fees."
    },
    {
      question: "What is Sophia Learning?",
      answer: "Self-paced online courses that transfer to UoPeople. $99/month, finish courses in 1-4 weeks each. Much faster than UoPeople's 9-week terms."
    },
    {
      question: "How much do I actually save?",
      answer: "Most students save $1,000-1,500 on Gen Ed requirements. Exact amount depends on how many Sophia courses you take vs UoPeople courses."
    }
  ];

  const courseFAQs = [
    {
      question: "Which courses should I take at UoPeople vs Sophia?",
      answer: "Generally, take foundational and required courses at UoPeople, and elective or prerequisite courses at Sophia. Our tool provides specific recommendations based on cost, time, and academic rigor for each category."
    },
    {
      question: "Will Sophia courses transfer to UoPeople?",
      answer: "Yes, Sophia courses are widely accepted by UoPeople through their partnerships and transfer agreements. However, always confirm specific course transfers with UoPeople admissions before enrollment."
    },
    {
      question: "How long does it take to complete a course?",
      answer: "UoPeople courses typically take 9 weeks per term. Sophia courses are self-paced and can be completed in 1-4 weeks depending on your schedule and the course complexity."
    },
    {
      question: "Can I take courses from both platforms simultaneously?",
      answer: "Yes, you can take Sophia courses while enrolled at UoPeople. Many students complete Sophia courses during UoPeople breaks or alongside lighter UoPeople terms."
    },
    {
      question: "What if I fail a course?",
      answer: "At UoPeople, you can retake courses, but there may be additional fees. Sophia courses can be retaken within your subscription period. Both platforms offer support to help you succeed."
    }
  ];

  const admissionsFAQs = [
    {
      question: "What are the admission requirements for UoPeople?",
      answer: "UoPeople requires a high school diploma or equivalent, English proficiency (TOEFL/IELTS for non-native speakers), and completion of foundation courses. Some programs may have additional requirements."
    },
    {
      question: "How do I apply to UoPeople?",
      answer: "Visit the UoPeople website, complete the online application, submit required documents (transcripts, English proficiency scores if applicable), and complete the foundation courses once accepted."
    },
    {
      question: "When are application deadlines?",
      answer: "UoPeople has multiple enrollment periods throughout the year. Check their website for specific deadlines, but generally applications are accepted on a rolling basis."
    },
    {
      question: "Do I need to complete prerequisite courses before applying?",
      answer: "Some prerequisite courses can be completed at Sophia before applying to UoPeople, which can strengthen your application and reduce your overall course load."
    },
    {
      question: "Can international students apply?",
      answer: "Yes, UoPeople welcomes international students. You may need to provide additional documentation such as transcript evaluations and English proficiency scores."
    }
  ];

  const technicalFAQs = [
    {
      question: "Is this tool free to use?",
      answer: "Yes, our course planning tool is completely free to use. We provide this service to help students make informed decisions about their educational path."
    },
    {
      question: "How accurate is the course information?",
      answer: "We regularly update our course database with the latest information from UoPeople and Sophia. However, always verify specific details with the institutions before making final decisions."
    },
    {
      question: "Can I save my course selections?",
      answer: "Yes, your course selections are saved in your session. You can return to review and modify your choices before finalizing your academic plan."
    },
    {
      question: "Does the tool work on mobile devices?",
      answer: "Yes, our tool is fully responsive and works on all devices including smartphones and tablets. You can plan your courses anywhere, anytime."
    },
    {
      question: "How do I get support if I have issues?",
      answer: "You can reach out through our guestbook, contact form, or email. We're here to help you succeed in your educational journey."
    }
  ];

  const categories = [
    {
      id: "general",
      title: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      faqs: generalFAQs
    },
    {
      id: "courses",
      title: "Course Planning",
      icon: <BookOpen className="w-5 h-5" />,
      faqs: courseFAQs
    },
    {
      id: "admissions",
      title: "Admissions",
      icon: <GraduationCap className="w-5 h-5" />,
      faqs: admissionsFAQs
    },
    {
      id: "technical",
      title: "Technical Support",
      icon: <Users className="w-5 h-5" />,
      faqs: technicalFAQs
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Questions Everyone Asks
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Common questions about UoPeople, Sophia, and course planning. Straight answers, no marketing speak.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-8">

          {/* FAQ Categories */}
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                  <span className="hidden sm:inline mr-2">{category.icon}</span>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category, categoryIndex) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-3">
                          {category.icon}
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Quick Stats */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">$2,460</CardTitle>
                <CardDescription>Total UoPeople assessment fees for bachelor's degree</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">1-4 weeks</CardTitle>
                <CardDescription>Average time to complete Sophia courses</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">30-50%</CardTitle>
                <CardDescription>Typical savings on Gen Ed requirements</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Still Have Questions?</CardTitle>
                <CardDescription className="text-purple-100 text-center">
                  Can't find the answer you're looking for? We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="/guestbook">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Leave a Message
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
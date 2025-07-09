import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Wizard from "@/pages/wizard";
import CoursePlanning from "@/pages/course-planning";
import Notes from "@/pages/notes";
import HowItWorks from "@/pages/how-it-works";
import About from "@/pages/about";
import GuestbookPage from "@/pages/guestbook-page";
import StudyResources from "@/pages/study-resources";
import StudyTips from "@/pages/study-tips";
import FAQs from "@/pages/faqs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
        <Route path="/" component={Home} />
        <Route path="/wizard" component={Wizard} />
        <Route path="/course-planner" component={CoursePlanning} />
        <Route path="/notes" component={Notes} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/about" component={About} />
        <Route path="/guestbook" component={GuestbookPage} />
        <Route path="/study-resources" component={StudyResources} />
        <Route path="/study-tips" component={StudyTips} />
        <Route path="/faqs" component={FAQs} />
        <Route component={NotFound} />
      </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Wizard from "@/pages/wizard";
import HowItWorks from "@/pages/how-it-works";
import About from "@/pages/about";
import GuestbookPage from "@/pages/guestbook-page";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
        <Route path="/" component={Home} />
        <Route path="/wizard" component={Wizard} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/about" component={About} />
        <Route path="/guestbook" component={GuestbookPage} />
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
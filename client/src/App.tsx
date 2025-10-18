import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Electricity from "@/pages/Electricity";
import Gas from "@/pages/Gas";
import Water from "@/pages/Water";
import GreenEnergy from "@/pages/GreenEnergy";
import Quote from "@/pages/Quote";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Support from "@/pages/Support";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/electricity" component={Electricity} />
      <Route path="/gas" component={Gas} />
      <Route path="/water" component={Water} />
      <Route path="/green-energy" component={GreenEnergy} />
      <Route path="/quote" component={Quote} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/support" component={Support} />
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

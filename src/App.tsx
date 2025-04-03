import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy01 from "./pages/CaseStudy01";
import CaseStudy02 from "./pages/CaseStudy02";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import License from "./pages/License";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Wrap the routes with a component that scrolls to top
const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<ScrollToTop><Index /></ScrollToTop>} path="/" />
          <Route element={<ScrollToTop><HowItWorks /></ScrollToTop>} path="/how-it-works" />
          <Route element={<ScrollToTop><Features /></ScrollToTop>} path="/features" />
          <Route element={<ScrollToTop><CaseStudies /></ScrollToTop>} path="/case-studies" />
          <Route element={<ScrollToTop><CaseStudy01 /></ScrollToTop>} path="/case-studies/real-time-automation" />
          <Route element={<ScrollToTop><CaseStudy02 /></ScrollToTop>} path="/case-studies/randomised-trial" />
          <Route element={<ScrollToTop><Blog /></ScrollToTop>} path="/blog" />
          <Route element={<ScrollToTop><Contact /></ScrollToTop>} path="/contact" />
          <Route element={<ScrollToTop><Terms /></ScrollToTop>} path="/terms" />
          <Route element={<ScrollToTop><Privacy /></ScrollToTop>} path="/privacy" />
          <Route element={<ScrollToTop><Cookies /></ScrollToTop>} path="/cookies" />
          <Route element={<ScrollToTop><License /></ScrollToTop>} path="/license" />
          <Route element={<ScrollToTop><Sitemap /></ScrollToTop>} path="/sitemap" />
          <Route element={<ScrollToTop><NotFound /></ScrollToTop>} path="*" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

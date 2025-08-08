
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nutrition from "./pages/Nutrition";
import NutritionArticle from "./pages/NutritionArticle";
import Workouts from "./pages/Workouts";
import WorkoutArticle from "./pages/WorkoutArticle";
import Hormones from "./pages/Hormones";
import DoctorAdvice from "./pages/DoctorAdvice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/nutrition/pravilnoe-pitanie-dlya-zhenshchin-posle-30" element={<NutritionArticle />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/trenirovki-posle-30-let-dlya-zhenshchin" element={<WorkoutArticle />} />
          <Route path="/hormones" element={<Hormones />} />
          <Route path="/doctor-advice" element={<DoctorAdvice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
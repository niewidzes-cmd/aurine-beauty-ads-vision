import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
    <h1 className="text-7xl font-bold">AURINE</h1>
    <p className="mt-4 text-2xl">Website under construction</p>
  </div>
);

export default App;

import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Index from "./pages/Index";
import AboutUsPage from "./pages/AboutUsPage";
import BlogIndex from "./pages/BlogIndex";
import PostVsReklama from "./pages/blog/PostVsReklama";
import JakProwadzicProfil from "./pages/blog/JakProwadzicProfil";
import KiedyWartoReklamowac from "./pages/blog/KiedyWartoReklamowac";
import JakPrzygotowacSieDoKampanii from "./pages/blog/JakPrzygotowacSieDoKampanii";
import JakOcenicSkutecznoscReklamy from "./pages/blog/JakOcenicSkutecznoscReklamy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// 🔥 FIX DLA GITHUB PAGES (ODCZYT Z 404.html → ?p=/o-nas)
function GithubPagesRedirectFix() {
  const navigate = useNavigate();

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const redirectPath = search.get("p");

    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GithubPagesRedirectFix />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="o-nas" element={<AboutUsPage />} />
          <Route path="porady" element={<BlogIndex />} />
          <Route path="porady/post-vs-reklama" element={<PostVsReklama />} />
          <Route path="porady/jak-prowadzic-profil-salonu" element={<JakProwadzicProfil />} />
          <Route path="porady/kiedy-warto-reklamowac" element={<KiedyWartoReklamowac />} />
          <Route path="porady/jak-przygotowac-sie-do-kampanii" element={<JakPrzygotowacSieDoKampanii />} />
          <Route path="porady/jak-ocenic-skutecznosc-reklamy" element={<JakOcenicSkutecznoscReklamy />} />
          <Route path="polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="regulamin" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

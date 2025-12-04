import { HashRouter, Routes, Route } from "react-router-dom";
// ...

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<AboutUsPage />} />
          <Route path="/porady" element={<BlogIndex />} />
          <Route path="/porady/post-vs-reklama" element={<PostVsReklama />} />
          <Route path="/porady/jak-prowadzic-profil-salonu" element={<JakProwadzicProfil />} />
          <Route path="/porady/kiedy-warto-reklamowac" element={<KiedyWartoReklamowac />} />
          <Route path="/porady/jak-przygotowac-sie-do-kampanii" element={<JakPrzygotowacSieDoKampanii />} />
          <Route path="/porady/jak-ocenic-skutecznosc-reklamy" element={<JakOcenicSkutecznoscReklamy />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="/regulamin" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

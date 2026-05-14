import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Staffing from "@/pages/Staffing";
import CloudMigration from "@/pages/CloudMigration";
import ManagedServices from "@/pages/ManagedServices";
import LegalStaffing from "@/pages/LegalStaffing";
import Careers from "@/pages/Careers";
import CeoMessage from "@/pages/CeoMessage";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import ForCandidates from "@/pages/ForCandidates";
import ForCompanies from "@/pages/ForCompanies";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/staffing" element={<Staffing />} />
        <Route path="/cloud-migration" element={<CloudMigration />} />
        <Route path="/managed-services" element={<ManagedServices />} />
        <Route path="/legal-staffing" element={<LegalStaffing />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/ceo-message" element={<CeoMessage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/candidates" element={<ForCandidates />} />
        <Route path="/companies" element={<ForCompanies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

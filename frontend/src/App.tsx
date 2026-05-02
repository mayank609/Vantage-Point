import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

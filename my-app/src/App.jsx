import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import AboutPage from "./pages/AboutPage"
import PricingPage from "./pages/PricingPage"
import HelpSupportPage from "./pages/HelpSupportPage"
import BlogsPage from "./pages/BlogsPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import CareersPage from "./pages/CareersPage"
import ContactPage from "./pages/ContactPage"
import HelpCenterPage from "./pages/HelpCenterPage"
import CaseStudiesPage from "./pages/CaseStudiesPage"
import DocumentationPage from "./pages/DocumentationPage"
import TermsConditionsPage from "./pages/TermsConditionsPage"
import MerchantLoginPage from "./pages/MerchantLoginPage"
import ScrollToTop from "./components/ScrollToTop"
function App() {
  return (
   <Router>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/help-support" element={<HelpSupportPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/merchant-login" element={<MerchantLoginPage />} />
      </Routes>
    </Router>
    
  );
}



export default App

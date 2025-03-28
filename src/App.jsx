import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/Landingpage";
import PrivacyPolicy from "./pages/privacyPolicy";
import AccountDeletion from "./pages/accountDeletion";
import TermsOfUse from "./pages/TermsofUse";

function App() {

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        
      </Routes>
    </Router>
  );
}

export default App;

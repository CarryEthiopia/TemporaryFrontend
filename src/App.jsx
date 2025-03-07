import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/Landingpage";
import GetInTouch from "./pages/Landing/Contactus";
import AskQuestions from "./pages/Landing/AskQuestions";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import AccountDeletion from "./pages/AccountDeletion"; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/ask-questions" element={<AskQuestions />} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
        <Route path="/delete-account" element={<AccountDeletion />} />{" "}
        {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;

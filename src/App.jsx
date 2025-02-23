
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/Landingpage";
import GetInTouch from "./pages/Landing/Contactus";
import AskQuestions from "./pages/Landing/AskQuestions";

function App() {

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/ask-questions" element={<AskQuestions />} />
        
      </Routes>
    </Router>
  );
}

export default App;

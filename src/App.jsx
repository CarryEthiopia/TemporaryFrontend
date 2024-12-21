import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Signin from "./pages/Registration/Signin";
import GetInTouch from "./pages/Contactus";
import AskQuestions from "./pages/AskQuestions";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/ask-questions" element={<AskQuestions />} />
      </Routes>
    </Router>
  );
}

export default App;

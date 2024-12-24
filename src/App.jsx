import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Signin from "./pages/Registration/Signin";
import GetInTouch from "./pages/Contactus";
import AskQuestions from "./pages/AskQuestions";
import SignUp from "./pages/Registration/Signup";
import Home from "./pages/Home/Home";
import Request from "./pages/Request/Request"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/ask-questions" element={<AskQuestions />} />
        <Route path="/home" element={<Home />} /> {/* Fixed this line */}
        <Route path="/request" element={<Request />} />
      </Routes>
    </Router>
  );
}

export default App;

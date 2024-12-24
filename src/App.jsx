import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Signin from "./pages/Registration/Signin";
import GetInTouch from "./pages/Contactus";
import AskQuestions from "./pages/AskQuestions";
import SignUp from "./pages/Registration/Signup";
import Home from "./pages/Home/Home";
import Request from "./pages/Request/Request";
import Delivery from "./pages/Delivery/Delivery";
import ProcessDetail from "./pages/Delivery/ProcessDetail";
import DeliveredDetail from "./pages/Delivery/DeliveredDetail"; // Import the DeliveredDetail component
import CancelledDetail from "./pages/Delivery/CancelledDetail"; // Import the CancelledDetail component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/ask-questions" element={<AskQuestions />} />
        <Route path="/home" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/process-detail" element={<ProcessDetail />} />
        <Route path="/delivered-detail" element={<DeliveredDetail />} />{" "}
        {/* Route for DeliveredDetail */}
        <Route path="/cancelled-detail" element={<CancelledDetail />} />{" "}
        {/* Route for CancelledDetail */}
      </Routes>
    </Router>
  );
}

export default App;

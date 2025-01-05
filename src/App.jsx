import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/Landingpage";
import Signin from "./pages/Landing/Registration/Signin";
import GetInTouch from "./pages/Landing/Contactus";
import AskQuestions from "./pages/Landing/AskQuestions";
import SignUp from "./pages/Landing/Registration/Signup";
import Sidebar from "./pages/Sender/Shared/Sidebar";
import Delivery from "./pages/Sender/Delivery/Delivery";
import Home from "./pages/Sender/Dashboard/Home/Home";
import Profile from "./pages/Sender/Profile/Profile";
import Report from "./pages/Sender/Report/Report";
import ItemRequest from "./pages/Sender/Request/ItemRequest";
import TravelerSidebar from "./pages/Traveler/Shared/Sidebar";
import TravelerHome from "./pages/Traveler/Dashboard/Home/Home";
import TravelerProfile from "./pages/Traveler/Profile/Profile";
import TravelerReport from "./pages/Traveler/Report/Report";
import TravelerDelivery from "./pages/Traveler/Deliveries/Deliveries";
import History from "./pages/Sender/History/History"
import Tracking from "./pages/Sender/Tracking/Tracking"

function App() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [TactiveComponent, TsetActiveComponent] = useState("TDashboard");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Home setActiveComponent={setActiveComponent} />;
      case "Delivery":
        return <Delivery />;
      case "Reports":
        return <Report />;
      case "Profile":
        return <Profile />;
      case "History":
        return <History />;
      case "Tracking":
        return <Tracking />;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };


  const TrenderActiveComponent = () => {
    switch (TactiveComponent) {
      case "TDashboard":
        return <TravelerHome setActiveComponent={TsetActiveComponent} />;
      case "TDelivery":
        return <TravelerDelivery />;
      case "TReports":
        return <TravelerReport />;
      case "TProfile":
        return <TravelerProfile />;
      case "History":
        return <History />;
      case "Tracking":
        return <Tracking />;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/ask-questions" element={<AskQuestions />} />
        <Route path="/request" element={<ItemRequest />} />

        {/* Sender Routes */}
        <Route
          path="/home"
          element={
            <div className="flex h-screen">
              <Sidebar setActiveComponent={setActiveComponent} />
              <main className="flex-1 bg-gray-100">
                {renderActiveComponent()}
              </main>
            </div>
          }
        />

        {/* Traveler Routes */}
        <Route
          path="/traveler-home"
          element={
            <div className="flex h-screen">
              <TravelerSidebar TsetActiveComponent={TsetActiveComponent} />
              <main className="flex-1 bg-gray-100">
                {TrenderActiveComponent()}
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

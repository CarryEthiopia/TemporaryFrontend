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
import Message from "./pages/Sender/Message/Left";
import Profile from "./pages/Sender/Profile/Profile";

const Team = () => <div>Team Component</div>;
const Reports = () => <div>Reports Component</div>;
const Statistics = () => <div>Statistics Component</div>;
const Settings = () => <div>Settings Component</div>;

function App() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Home />;
      case "Delivery":
        return <Delivery />;
      case "Messages":
        return <Message />;
      case "Team":
        return <Team />;
      case "Reports":
        return <Reports />;
      case "Statistics":
        return <Statistics />;
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/ask-questions" element={<AskQuestions />} />

        {/* Route for Home */}
        <Route
          path="/home"
          element={
            <div className="flex h-screen">
              <Sidebar setActiveComponent={setActiveComponent} />
              <main className="flex-1 p-6 bg-gray-100">
                {renderActiveComponent()}
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

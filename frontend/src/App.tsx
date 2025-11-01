import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import SelectPreset from "./pages/NewProject/SelectPreset";
import SocialMediaPreset from "./pages/NewProject/SocialMediaPreset";
import TemplateStudio from "./pages/NewProject/TemplateStudio";
import SelectSizePage from "./pages/NewProject/TemplateStudio";
import "./data/templatesDB";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />

        {/* Main App Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* New Project Flow */}
        <Route path="/select-preset" element={<SelectPreset />} />
        <Route
          path="/new-project/social-media"
          element={<SocialMediaPreset />}
        />
        <Route
          path="/new-project/template-studio"
          element={<TemplateStudio />}
        />
        <Route path="/new-project/select-size" element={<SelectSizePage />} />
      
      </Routes>
    </Router>
  );
}

export default App;

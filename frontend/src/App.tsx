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

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
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

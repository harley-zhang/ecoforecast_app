import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LaunchApp from "./pages/LaunchApp";
import STEPWAT2 from "./pages/STEPWAT2";
import AppOverview from "./pages/AppOverview";

import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/app" element={<LaunchApp />} />
          <Route path="/stepwat2" element={<STEPWAT2 />} />
          <Route path="/overview" element={<AppOverview />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/app" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

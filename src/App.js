import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LaunchApp from "./pages/LaunchApp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/app" element={<LaunchApp />} />
          <Route path="*" element={<Navigate to="/app" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

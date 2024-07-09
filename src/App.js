import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LaunchApp from "./pages/LaunchApp";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/app" element={<LaunchApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

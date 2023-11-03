import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<h1>Chat</h1>} />
        <Route path="/announcements" element={<h1>Announcements</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

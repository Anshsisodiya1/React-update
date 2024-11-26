import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Student from "./Component/Student";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

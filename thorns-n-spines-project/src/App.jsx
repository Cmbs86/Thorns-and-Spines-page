import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Artists from "./pages/Artists.jsx";
import Contact from "./pages/Contact.jsx";
import Studio from "./pages/Studio.jsx";
import UpcomingGuests from "./pages/UpcomingGuests.jsx";

function App() {
  return (
    <>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/artists" element={<Artists />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/studio" element={<Studio />} />
    <Route path="/upcoming-guests" element={<UpcomingGuests />}
  
    />

      </Routes>
    </>
  );
}
{/* <Home />
<Artists />
<Contact />
<Studio />
<UpcomingGuests /> */}

export default App;

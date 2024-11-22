
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.tsx";
import Artists from "./pages/Artists.tsx";
import Contact from "./pages/Contact.tsx";
import Studio from "./pages/Studio.tsx";
import UpcomingGuests from "./pages/UpcomingGuests.tsx";
import NotFound from "./pages/NotFound.tsx";
import BaseLayout from "./layouts/BaseLayout.tsx";

const App: React.FC = () => {
  return (
    <>
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upcoming-guests" element={<UpcomingGuests />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </BaseLayout>
    </>
  );
}


export default App;
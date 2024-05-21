import { Routes, Route } from "react-router-dom";

import HomePage from "./compositions/HomePage/HomePage";
import RegisterToEventPage from "./compositions/RegisterToEventPage";
import ParticipantsPage from "./compositions/ParticipantsPage";
import NotFound from "./compositions/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register/:eventId" element={<RegisterToEventPage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

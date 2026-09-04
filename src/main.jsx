import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Squad from "./pages/Squad.jsx";
import Story from "./pages/Story.jsx";
import Movement from "./pages/Movement.jsx";
import Merch from "./pages/Merch.jsx";
import Hustles from "./pages/Hustles.jsx";
import Opportunities from "./pages/Opportunities.jsx";
import Contact from "./pages/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/squad" element={<Squad />} />
        <Route path="/story" element={<Story />} />
        <Route path="/movement" element={<Movement />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/hustles" element={<Hustles />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

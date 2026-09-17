import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Apps/Page/App.tsx";
import { Auth } from "./Auth/Page/Auth.tsx";
import { YourMaps } from "./YourMaps/Page/YourMaps.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/your-maps" element={<YourMaps />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
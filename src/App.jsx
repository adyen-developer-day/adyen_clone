import { Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import MyFlights from "./pages/MyFlights";
import FlightDetail from "./pages/FlightDetail";
import Stats from "./pages/Stats";
import Airport from "./pages/Airport";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<MyFlights />} />
        <Route path="/flight/:id" element={<FlightDetail />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/airport" element={<Airport />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

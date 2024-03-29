import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding/Onboarding";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ComparePage from "./pages/ComparePage/ComparePage";
import ComparePage2 from "./pages/ComparePage2/ComparePage2";
import ComparePage3 from "./pages/ComparePage3/ComparePage3";
import CruiseList from "./pages/CruiseList/CruiseList";
import CruiseDetails from "./pages/CruiseDetails/CruiseDetails";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/compare/:cruiseOne/:cruiseTwo"
          element={<ComparePage />}
        />
        <Route path="/cruise-list" element={<CruiseList />} />
        <Route path="/cruise-details/:id" element={<CruiseDetails />} />
        <Route path="/details" />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

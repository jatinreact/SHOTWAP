import "./App.css";
import { Routes, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutCompany from "./Components/AboutCompany/AboutCompany";
import Contact from "./Components/FooterPages/Contact";
import FAQ from "./Components/FooterPages/FAQ";
import PrivacyPolicy from "./Components/FooterPages/PrivacyPolicy";
import CompanyPage from "./Components/FooterPages/CompanyPage";
import NewOrder from "./Components/FormPages/NewOrder";
import Reconciliation from "./Components/FormPages/Reconciliation";
import AfterLoginHome from "./Components/AfterLogin/AftertLoginHome";
import PriceCalulator from "./Components/FormPages/PriceCalculatior.jsx/PriceCalulator";
import NDR from "./Components/FormPages/NDR/NDR";
import Billing from "./Components/FormPages/Billing/Billing";
import Manifests from "./Components/FormPages/Manifests/Manifests";
import DashBoard from "./Components/FormPages/DashBoard/DashBoard";
import COD from "./Components/FormPages/COD/COD";
import PricingOffers from "./Components/PricingOffers/PricingOffers";
import Shipmentdata from "./Components/FormPages/ShopmentPages/ShipmentPage";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/aboutCompany" element={<AboutCompany />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/faq" element={<FAQ />}></Route>
        <Route exact path="/privacy" element={<PrivacyPolicy />}></Route>
        <Route exact path="/Companyinfo" element={<CompanyPage />}></Route>
        <Route exact path="/newOrder" element={<NewOrder />}></Route>
        <Route
          exact
          path="/reconciliation"
          element={<Reconciliation />}
        ></Route>
        <Route exact path="/loginHome" element={<AfterLoginHome />}></Route>
        <Route
          exact
          path="/priceCalulator"
          element={<PriceCalulator />}
        ></Route>
        <Route exact path="/ndr" element={<NDR />}></Route>
        <Route exact path="/billing" element={<Billing />}></Route>
        <Route exact path="/manifests" element={<Manifests />}></Route>
        <Route exact path="/dashBoard" element={<DashBoard />}></Route>
        <Route exact path="/cod" element={<COD />}></Route>
        <Route exact path="/pricingOffers" element={<PricingOffers />}></Route>
        <Route exact path="/shipmentPage" element={<Shipmentdata />}></Route>
      </Routes>
    </>
  );
}

export default App;

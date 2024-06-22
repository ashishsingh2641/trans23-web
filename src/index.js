import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAgreement from "./components/UserAgreements/UserAgreement";
import VendorAgreement from "./components/vendor-agreement/VendorAgreement";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import AppsUserAgreement from "./components/AppsUserAgreement/AppsUserAgreement";
import AppsPrivacyPolicy from "./components/AppsPrivacyPolicy/AppsPrivacyPolicy";
import AppsContract from "./components/AppsContract";
import AppsAboutUs from "./components/AppsAboutUs";
import RefundPloicy from "./components/RefundPloicy/RefundPloicy";
import Subscription from "./components/Subscription/Subscription";
import { FormDataProvider } from "./Context/FormDataContext";

ReactDOM.render(
  <React.StrictMode>
        <FormDataProvider> 
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<App />} />
        <Route path="/terms-and-condition" element={<UserAgreement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPloicy />} />
        <Route path="/vendorAgreement" element={<VendorAgreement />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/app-about-us" element={<AppsAboutUs />} />
        <Route path="/app-contact" element={<AppsContract />} />
        <Route path="/app-terms-and-condition" element={<AppsUserAgreement />} />
        <Route path="/app-privacy-policy" element={<AppsPrivacyPolicy />} />
        <Route path="/subscription" element={<Subscription />} />
      
      </Routes>
    </BrowserRouter>
    </FormDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

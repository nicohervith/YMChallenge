import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Verification from "./Pages/Verification/Verification";
import Acredit from "./Pages/Acredit/Acredit";
import Awards from "./Pages/Awards/Awards";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/acredit" element={<Acredit />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </>
  );
};

export default PageRoutes;

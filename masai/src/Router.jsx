import React from "react";
import { Route, Routes } from "react-router-dom";
import { Preq } from "./components/Preq";
import { HomePage } from "./components/HomePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/preq" element={<Preq />} />
    </Routes>
  );
};

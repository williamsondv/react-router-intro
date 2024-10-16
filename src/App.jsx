import { useState } from "react";
import "./App.css";
import VendingMachine from "./VendingMachine.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chips from "./Chips.jsx";
import Candy from "./Candy.jsx";
import Soda from "./Soda.jsx";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

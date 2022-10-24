import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <main>
        <Header/>       
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;

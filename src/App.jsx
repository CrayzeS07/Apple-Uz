import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main_layout } from "./layout/main-layout";
import { Hoome } from "./layout/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main_layout />}>
          <Route index element={<Hoome />} />
          <Route
            path="*"
            element={<h1>Bunday page Mavjut emas ¯\_(ツ)_/¯</h1>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Javaedition from "./pages/Javaedition";
import BedRock from "./pages/BedRock";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage}>
            <Route path="/javaEdition" Component={Javaedition} />
            <Route path="/bedRock" Component={BedRock} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

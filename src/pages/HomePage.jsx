import React from "react";
import LandingP from "../components/LandingP";
import MiddlePage from "./MiddlePage";
import ThirdHeader from "../components/ThirdHeader";
import ThirdCards from "../components/ThirdCards";
import BottomPage from "./BottomPage";

const HomePage = () => {
  return (
    <div>
      <LandingP />
      <MiddlePage />
      <BottomPage />
    </div>
  );
};

export default HomePage;

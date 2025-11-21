import ThirdHeader from "../components/ThirdHeader";
import ThirdCards from "../components/ThirdCards";
import BottomPageHeader2 from "../components/BottomPageHeader2";
import Footer from "../components/Footer";
import CardSplit from "../components/CardSplit";
import Javaedition from "./Javaedition";
import BedRock from "./BedRock";
import { useSearchParams } from "react-router-dom";

const BottomPage = () => {
  const [searchParams] = useSearchParams();
  const codeSplit = searchParams.get("codesplit");

  return (
    <>
      <ThirdHeader />
      <ThirdCards />
      <BottomPageHeader2 />

      <CardSplit />
      {codeSplit == 1 && <Javaedition />}
      {codeSplit == 2 && <BedRock />}

      <Footer />
    </>
  );
};

export default BottomPage;

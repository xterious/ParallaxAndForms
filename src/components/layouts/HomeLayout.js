import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../Navbar";
import { Outlet } from "react-router";
import FirstPage from "../../pages/firstpage/FirstPage";
import SecondPage from "../../pages/secondpage/SecondPage";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.5}>
          <FirstPage />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.4}>
          <SecondPage />
        </ParallaxLayer>
      </Parallax>
      <Outlet />
    </>
  );
};

export default HomeLayout;

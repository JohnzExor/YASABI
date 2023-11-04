import background2 from "@/assets/backgrounds/background4.svg";

import { Outlet } from "react-router-dom";
import About from "./About";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <About />
      <Team />

      <div
        className=" min-h-screen w-full"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: "65em",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

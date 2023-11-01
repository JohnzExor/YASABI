import { Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <About />
      <Outlet />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;

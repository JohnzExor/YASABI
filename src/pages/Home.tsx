import { Outlet } from "react-router-dom";
import About from "./About";
import CaseStudies from "./CaseStudies";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <About />
      <CaseStudies />
      <Contact />
      <Outlet />
    </div>
  );
};

export default Home;

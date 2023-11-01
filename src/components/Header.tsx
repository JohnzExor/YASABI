import { Link } from "react-router-dom";
import { ModeToggle } from "./theme/Mode-Toggle";

const Header = () => {
  return (
    <nav className="fixed flex gap-4 justify-center items-center p-3 w-full border-b-2 backdrop-blur-md z-10 md:z-20">
      <Link to={"/"} className=" font-bold">
        YASABI
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Header;

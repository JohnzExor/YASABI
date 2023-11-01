import { Link } from "react-router-dom";
import { ModeToggle } from "./theme/Mode-Toggle";
import { easeInOut, motion } from "framer-motion";

const Header = () => {
  return (
    <motion.nav
      className="fixed flex gap-4 justify-center items-center p-3 w-full border-b-2 backdrop-blur-md z-10 md:z-20"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: 3, ease: easeInOut }}
    >
      <Link to={"/"} className=" font-bold">
        YASABI
      </Link>
      <ModeToggle />
    </motion.nav>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { ModeToggle } from "./theme/Mode-Toggle";
import { easeInOut, motion } from "framer-motion";

import icon from "@/assets/logo.svg";

import { FaBarsStaggered } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Sidebar from "@/components/Sidebar";
import { CaseStudyData, TeamData } from "@/store/Data";

const Header = () => {
  return (
    <motion.nav
      className="fixed flex gap-4 justify-between md:justify-center items-center p-3 w-full border-b-2 backdrop-blur-md z-10 md:z-20"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: 3, ease: easeInOut }}
    >
      <Link to={"/"} className=" font-bold gap-1 flex items-center">
        <img src={icon} className="w-10" />
        YASABI
      </Link>

      <div className="flex items-center gap-4">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Portfolios</NavigationMenuTrigger>
              <NavigationMenuContent className=" p-4 ">
                <h1 className="font-bold text-center">Team</h1>
                {TeamData.map((data, index) => (
                  <div key={index} className=" w-40  border-b-2 py-2">
                    <Link to={`/portfolio/${data.id}`}>{data.name}</Link>
                  </div>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
              <NavigationMenuContent className=" p-4 ">
                <h1 className="font-bold text-center">Case Studies</h1>
                {CaseStudyData.map((data, index) => (
                  <div key={index} className=" w-80  border-b-2 py-2">
                    <Link to={`/portfolio/casestudy/${data.id}`}>
                      {data.title}
                    </Link>
                  </div>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />

        <Sheet>
          <SheetTrigger className=" md:hidden">
            <FaBarsStaggered size={30} />
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle className=" flex items-center">
                <img src={icon} className="w-10" />
                YASABI
              </SheetTitle>
              <SheetDescription>Group Portfolio for UI/UX</SheetDescription>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Header;

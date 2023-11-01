import background from "@/assets/background.svg";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 h-screen border-b-2">
      <div className="flex flex-col items-center">
        <div className=" flex items-center">
          <h1 className=" font-bold text-7xl md:text-9xl">YASABI</h1>
          <p className=" w-16 break-words text-sm">Group Portfolio for UI/UX</p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <Button className=" dark:bg-slate-900 dark:text-white">
            <a href="#team">Our Team</a>
          </Button>
          <Button className="dark:bg-slate-900 dark:text-white">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>

      <img src={background} className="w-80 md:w-auto" />
    </div>
  );
};

export default About;

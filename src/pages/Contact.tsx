import background3 from "@/assets/backgrounds/background3.svg";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div
      className=" min-h-screen items-center flex flex-col md:flex-row justify-center border-b-2 gap-20"
      id="contact"
    >
      <img src={background3} className=" absolute md:relative md:80 -z-10" />
      <div>
        <h1 className=" text-6xl mt-10">Contact Us</h1>
        <form className=" w-80 backdrop-blur-md p-2 rounded-md space-y-4">
          <input
            type="text"
            placeholder="Enter your email address"
            className=" w-full p-4 bg-transparent border placeholder:text-black dark:placeholder:text-white"
          />
          <textarea
            placeholder="Send a Message"
            className=" w-full p-4 bg-transparent border placeholder:text-black h-96 dark:placeholder:text-white"
          />
          <Button className=" w-full dark:bg-slate-900 dark:text-white">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

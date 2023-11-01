import background3 from "@/assets/backgrounds/background3.svg";
import { Button } from "@/components/ui/button";
import { easeInOut, motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      className=" h-screen items-center flex flex-col md:flex-row justify-center border-b-2 gap-20"
      id="contact"
    >
      <img src={background3} className=" absolute md:relative md:80 -z-10" />
      <div>
        <motion.h1
          className=" text-6xl"
          whileInView={{ y: [200, 200, 0] }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          Contact Us
        </motion.h1>
        <motion.form
          className=" w-80 backdrop-blur-md p-2 rounded-md space-y-4"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2, delay: 2 }}
        >
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
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

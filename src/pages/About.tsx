import background from "@/assets/backgrounds/background.svg";
import { Button } from "@/components/ui/button";

import { easeInOut, motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const About = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const variants = matches
    ? {
        animate: { opacity: [0, 1], x: [300, 300, 0] },
        transition: { duration: 5, ease: easeInOut },
      }
    : {
        animate: { opacity: [0, 1], y: [180, 180, 0], x: [30, 30, 0] },
        transition: { duration: 5, ease: easeInOut },
      };
  return (
    <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 h-screen border-b-2">
      <div className="flex flex-col items-center">
        <div className=" flex items-center">
          <motion.h1
            className=" font-bold text-7xl md:text-9xl"
            animate={variants.animate}
            transition={variants.transition}
          >
            YASABI
          </motion.h1>
          <motion.p
            className=" w-16 break-words text-sm"
            whileInView={{ opacity: [0, 1], x: [-30, 0] }}
            transition={{ duration: 1, ease: easeInOut, delay: 5 }}
          >
            Group Portfolio for UI/UX
          </motion.p>
        </div>
        <motion.div
          className="flex gap-2 items-center mt-2"
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 5 }}
        >
          <Button className=" dark:bg-slate-900 dark:text-white">
            <a href="#team">Our Team</a>
          </Button>
          <Button className="dark:bg-slate-900 dark:text-white">
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>

      <motion.img
        src={background}
        className="w-80 md:w-auto"
        animate={{ y: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 3.5 }}
      />
    </motion.div>
  );
};

export default About;

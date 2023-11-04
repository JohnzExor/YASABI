import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { TeamData } from "@/store/Data";

import { motion } from "framer-motion";

const Team = () => {
  return (
    <div
      className="flex flex-col w-full items-center justify-center border-b-2 h-screen p-4 gap-10 absolute"
      id="team"
    >
      <h1 className=" text-5xl font-bold">Our Team</h1>
      <div className=" grid grid-cols-2 gap-2 md:grid-cols-4 text-sm">
        {TeamData.map((data, index) => (
          <motion.div
            key={index}
            className="text-center border rounded-md backdrop-blur-3xl md:w-52"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: [0, 1] }}
          >
            <img src={data.picture} className="rounded-full p-2" />
            <div className=" bg-white p-2 bg-opacity-10 h-fit">
              <h1 className="mb-2 font-bold">{data.name}</h1>
              <Link to={`/portfolio/${data.id}`}>
                <Button className=" dark:bg-slate-900 dark:text-white dark:border-white border dark:bg-transparent">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;

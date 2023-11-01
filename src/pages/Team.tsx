import background2 from "@/assets/background4.svg";

import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { Data } from "@/store/Data";

const Team = () => {
  return (
    <div
      className="flex flex-col items-center justify-center border-b-2 h-screen p-4 gap-10"
      id="team"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "65em",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className=" text-5xl font-bold">Our Team</h1>
      <div className=" grid grid-cols-2 gap-2 md:grid-cols-4 text-sm">
        {Data.map((data, index) => (
          <div
            key={index}
            className="text-center border rounded-md backdrop-blur-md md:w-52"
          >
            <img src={data.picture} className="rounded-full p-2" />
            <div className=" bg-white p-2 bg-opacity-10">
              <h1 className="mb-2 font-bold">{data.name}</h1>
              <Link to={`/portfolio/${data.id}`}>
                <Button className=" dark:bg-slate-900 dark:text-white">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

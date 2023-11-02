import { CaseStudyData, TeamData } from "@/store/Data";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  return (
    <ScrollArea className="h-screen pb-40">
      <div className=" flex flex-col text-left gap-2">
        <h1 className="font-bold text-2xl">Portfolios</h1>
        {TeamData.map((data, index) => (
          <Link
            key={index}
            to={`/portfolio/${data.id}`}
            className=" border-b pb-2"
          >
            {data.name}
          </Link>
        ))}
      </div>
      <div className=" flex flex-col text-left gap-2 mt-4">
        <h1 className="font-bold text-2xl">Case Studies</h1>
        {CaseStudyData.map((data, index) => (
          <Link
            key={index}
            to={`/portfolio/casestudy/${data.id}`}
            className=" border-b pb-2"
          >
            {data.title}
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Sidebar;

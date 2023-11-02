import { CaseStudyData, TeamData } from "@/store/Data";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  return (
    <ScrollArea className="h-screen pb-40">
      <h1 className="font-bold text-2xl pb-2">Portfolios</h1>
      {TeamData.map((data, index) => (
        <div key={index} className="text-left mb-2 border-t-2 py-2">
          <Link to={`/portfolio/${data.id}`}>{data.name}</Link>
        </div>
      ))}
      <h1 className="font-bold text-2xl pb-2">Case Studies</h1>
      {CaseStudyData.map((data, index) => (
        <div key={index} className="text-left mb-2 border-t-2 py-2">
          <Link to={`/portfolio/${data.id}`}>{data.title}</Link>
        </div>
      ))}
    </ScrollArea>
  );
};

export default Sidebar;

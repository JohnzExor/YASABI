import { Button } from "@/components/ui/button";
import { CaseStudyData } from "@/store/Data";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiDownload } from "react-icons/fi";
import { useEffect, useRef } from "react";

const CaseStudy = () => {
  const { id } = useParams();
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, [id]);
  return (
    <div
      className=" flex flex-col p-6 h-screen absolute w-full backdrop-blur-3xl z-10 gap-4 md:px-40 overflow-y-scroll md:pt-20"
      ref={divRef}
      tabIndex={0}
    >
      <Link to={`/portfolio/${id}`} className="text-sm">
        <Button className=" w-fit dark:bg-transparent dark:text-white dark:border-white border flex items-center">
          <MdArrowBackIosNew size={20} />
          Back
        </Button>
      </Link>
      {CaseStudyData.map(
        (data, index) =>
          data.id === Number(id) && (
            <div className=" flex flex-col gap-4 md:flex-row" key={index}>
              <div className=" md:w-96">
                <h1 className="text-4xl font-bold ">{data.title}</h1>
                <h1 className="font-semibold mt-2">Summary</h1>
                <p className=" text-sm">{data.summary}</p>
                <Button className=" w-fit mt-4 dark:bg-transparent dark:text-white dark:border-white border flex gap-2 items-center">
                  <FiDownload />
                  Download Case Study
                </Button>
              </div>
              <ScrollArea className="md:w-3/4 p-2 h-screen gap-4">
                <em className="text-sm text-gray-500">*Scroll Here</em>
                <h1 className="font-bold">Customer Journey Mapping</h1>
                <img src={data.customerJourneyMapping} className=" w-full" />
                <h1 className="font-bold">Storyboards</h1>
                <img src={data.storyBoard} className="w-full" />
                <h1 className="font-bold">User Flow</h1>
                <img src={data.userflow} className="w-full" />
                <h1 className="font-bold">Visual UI Design</h1>
                <img src={data.visualUIDesign} className="w-full" />
                <h1 className="font-bold">Prototype</h1>
                <p>{data.prototype}</p>
              </ScrollArea>
            </div>
          )
      )}
    </div>
  );
};

export default CaseStudy;

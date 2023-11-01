import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import { MdArrowBackIosNew } from "react-icons/md";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CaseStudyData, TeamData } from "@/store/Data";

const Portfolio = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams();
  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, []);

  return (
    <div
      className=" flex flex-col p-2 h-screen absolute w-full backdrop-blur-3xl z-10 overflow-y-scroll gap-4 md:p-40"
      ref={divRef}
      tabIndex={0}
    >
      <Link to={"/"} className="text-sm">
        <Button className=" w-fit dark:bg-transparent dark:text-white dark:border-white border flex items-center">
          <MdArrowBackIosNew size={20} />
          Home
        </Button>
      </Link>
      <div className="flex flex-col md:flex-row gap-4">
        {TeamData.map(
          (data, index) =>
            data.id === Number(id) && (
              <div className=" md:w-96" key={index}>
                <h1 className="text-6xl font-bold ">{data.name}</h1>
                {data.about && (
                  <>
                    <h1 className=" font-semibold mt-2">About me</h1>
                    <p className=" text-sm">{data.about}</p>
                    <Button className=" w-fit mt-4 dark:bg-transparent dark:text-white dark:border-white border">
                      Download Curriculum Vitae
                    </Button>
                  </>
                )}
              </div>
            )
        )}
        {CaseStudyData.map(
          (data, index) =>
            data.id === Number(id) && (
              <div className=" md:w-3/4" key={index}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <h1 className=" font-bold">Case Study</h1>
                    <AccordionTrigger className=" p-2 ">
                      {data.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col">
                      <p>{data.summary}</p>
                      <Link to={`/portfolio/${id}/casestudy/${id}`}>
                        <Button className=" w-fit mt-4 dark:bg-transparent dark:text-white dark:border-white border">
                          See More
                        </Button>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Portfolio;

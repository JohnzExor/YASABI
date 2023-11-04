import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import { MdArrowBackIosNew } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CaseStudyData, PersonalProjects, TeamData } from "@/store/Data";

const Portfolio = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams();
  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, [id]);

  return (
    <div
      className=" flex flex-col p-6 min-h-screen w-full backdrop-blur-3xl gap-4 md:px-40 md:pt-32 md:pb-4 border-b-2"
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
                    <h1 className=" font-semibold text-lg mt-2">About me</h1>
                    <p>{data.about}</p>
                    <a href={data.CVFile} target="_blank" download={data.name}>
                      <Button className=" w-fit mt-4 dark:bg-transparent dark:text-white dark:border-white border flex gap-2 items-center">
                        <FiDownload />
                        Download Curriculum Vitae
                      </Button>
                    </a>
                  </>
                )}
              </div>
            )
        )}
        <div className="w-full flex flex-col">
          <h1 className=" font-bold">Case Study</h1>
          {CaseStudyData.map(
            (data, index) =>
              data.id === Number(id) && (
                <div key={index}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" p-2 ">
                        {data.title}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col">
                        <p>{data.summary}</p>
                        <Link to={`/portfolio/casestudy/${id}`}>
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
          <h1 className=" font-bold">Personal Projects</h1>
          {PersonalProjects.map(
            (data, index) =>
              data.id === Number(id) && (
                <div key={index}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" p-2 ">
                        {data.title}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col">
                        <p>{data.description}</p>
                        <a
                          href={data.link}
                          target="_blank"
                          className="font-bold mb-2"
                        >
                          {data.link}
                        </a>
                        <img src={data.img} className="w-full rounded-md" />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import { Button } from "@/components/ui/button";
import { CaseStudyData } from "@/store/Data";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
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
      className=" flex flex-col p-6 min-h-screen w-full backdrop-blur-3xl  gap-4 md:px-40  md:pt-32 border-b-2"
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
                <h1 className="font-semibold mt-2 text-lg">Summary</h1>
                <p>{data.summary}</p>
                <a href={data.file} target="_blank" download={data.author}>
                  <Button className=" w-fit mt-4 dark:bg-transparent dark:text-white dark:border-white border flex gap-2 items-center">
                    <FiDownload />
                    Download Case Study
                  </Button>
                </a>
              </div>
              <div className="md:w-3/4 p-2">
                <em className="text-sm text-gray-500">*Scroll Here</em>
                <h1 className="font-bold text-lg mb-2">
                  Customer Journey Mapping
                </h1>
                <img
                  src={data.customerJourneyMapping}
                  className=" w-full rounded-md mb-4"
                />
                <h1 className="font-bold text-lg mb-2">User Flow</h1>
                <img src={data.userflow} className="w-full rounded-md mb-4" />
                <h1 className="font-bold text-lg mb-2">Visual UI Design</h1>
                <img
                  src={data.visualUIDesign}
                  className="w-full rounded-md mb-4"
                />
                <h1 className="font-bold text-lg mb-2">Prototype</h1>
                <p>{data.prototypeDescription}</p>
                {data.prototypeType === 1 && (
                  <a
                    className=" underline"
                    href={data.prototype}
                    target="_blank"
                  >
                    {data.prototype}
                  </a>
                )}
                {data.prototypeType === 2 && (
                  <img src={data.prototype} className="w-full rounded-md" />
                )}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CaseStudy;

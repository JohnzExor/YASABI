import { Button } from "@/components/ui/button";
import { CaseStudyData } from "@/store/Data";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const CaseStudy = () => {
  const { id } = useParams();
  return (
    <div className=" flex flex-col p-6 h-screen absolute w-full backdrop-blur-3xl z-10 overflow-y-scroll gap-4 md:px-40 md:pt-32">
      <Link to={`/portfolio/${id}`} className="text-sm">
        <Button className=" w-fit dark:bg-transparent dark:text-white dark:border-white border flex items-center">
          <MdArrowBackIosNew size={20} />
          Back
        </Button>
      </Link>
      {CaseStudyData.map(
        (data, index) =>
          data.id === Number(id) && (
            <div className=" flex flex-col gap-4" key={index}>
              <div className=" md:w-96">
                <h1 className="text-4xl font-bold ">{data.title}</h1>
                <h1 className="font-semibold mt-2">Summary</h1>
                <p className=" text-sm">{data.summary}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CaseStudy;

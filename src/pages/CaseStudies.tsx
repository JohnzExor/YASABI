import background2 from "@/assets/background2.svg";
import johnzyll from "@/assets/profiles/johnzyll.jpg";

const CaseStudies = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center h-fit p-4 border-b-2 gap-20 md:h-screen"
      id="caseStudies"
    >
      <div className=" flex flex-col items-center md:gap-10">
        <h1 className=" text-5xl font-medium ">Case Studies</h1>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className=" md:w-52 w-full h-fit flex flex-col items-center p-4 rounded-2xl backdrop-blur-md border">
            <img
              src={johnzyll}
              className=" w-44 h-44 border border-black rounded-lg"
            />
            <h1 className=" font-semibold text-sm mt-2 w-42">
              Comprehensive Driver Behavior Reporting System
            </h1>
            <p className=" text-sm mt-2">By: Johnzyll Jimeno</p>
          </div>
          <div className=" md:w-52 w-full h-fit flex flex-col items-center p-4 rounded-2xl backdrop-blur-md border">
            <img
              src={johnzyll}
              className=" w-44 h-44 border border-black rounded-lg"
            />
            <h1 className=" font-semibold text-sm mt-2 w-42">
              Optimizing Teacher Workflows using a Cross- Platform Class
              Scheduling with
            </h1>
            <p className=" text-sm mt-2">By: Francis Poliran</p>
          </div>
          <div className=" md:w-52 w-full h-fit flex flex-col items-center p-4 rounded-2xl backdrop-blur-md border">
            <img
              src={johnzyll}
              className=" w-44 h-44 border border-black rounded-lg"
            />
            <h1 className=" font-semibold text-sm mt-2 w-42">
              OuRSpace An Online Rental Space Management System for small or
              family owned rental spaces.
            </h1>
            <p className=" text-sm mt-2">By: Gideon Magno</p>
          </div>
          <div className=" md:w-52 w-full h-fit flex flex-col items-center p-4 rounded-2xl backdrop-blur-md border">
            <img
              src={johnzyll}
              className=" w-44 h-44 border border-black rounded-lg"
            />
            <h1 className=" font-semibold text-sm mt-2 w-42">
              Optimization of Canvas Website’s UI to Improve User Experience
            </h1>
            <p className=" text-sm mt-2">By: Emmanuel Cari-an</p>
          </div>
        </div>
      </div>
      <img src={background2} className=" absolute -z-10 " />
    </div>
  );
};

export default CaseStudies;

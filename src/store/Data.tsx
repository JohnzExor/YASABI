import johnzyll from "@/assets/profiles/johnzyll.jpg";
import emman from "@/assets/profiles/emman.jpg";
import francis from "@/assets/profiles/francis.jpg";
import gideon from "@/assets/profiles/gideon.jpg";

import CVJimeno from "@/assets/files/CV_Jimeno.pdf";
import CVCarian from "@/assets/files/CV_Cari-an.pdf";
import CVPoliran from "@/assets/files/CV_Poliran.pdf";
import CVMagno from "@/assets/files/CV_Magno.pdf";

import johnzyllCustomerJourneyMapping from "@/assets/pictures/johnzyll/customerJourneyMapping.png";
import johnzyllUserFlow from "@/assets/pictures/johnzyll/userFlow.png";
import johnzyllVisualUIDesign from "@/assets/pictures/johnzyll/visualUIDesign.png";
import johnzyllFile from "@/assets/files/johnzyll.pdf";

import johnzyllPersonalPic1 from "@/assets/pictures/johnzyll/personalProj/personalpic1.jpeg";

import emmanCustomerJourneyMapping from "@/assets/pictures/emman/customerJourneyMapping.png";
import emmanUserFlow from "@/assets/pictures/emman/userFlow.png";
import emmanVisualUIDesign from "@/assets/pictures/emman/visualUIDesign.png";
import emmanPrototype from "@/assets/pictures/emman/prototype.png";
import emmanFile from "@/assets/files/emman.pdf";

import francisCustomerJourneyMapping from "@/assets/pictures/francis/customerJourneyMapping.png";
import francisUserFlow from "@/assets/pictures/francis/userFlow.png";
import francisPrototype from "@/assets/pictures/francis/prototype.png";

import francisPersonalPic1 from "@/assets/pictures/francis/personalProj/personalpic1.jpg";
import francisPersonalPic2 from "@/assets/pictures/francis/personalProj/personalpic2.jpg";
import francisPersonalPic3 from "@/assets/pictures/francis/personalProj/personalpic3.jpg";

import gideonCustomerJourneyMapping from "@/assets/pictures/gideon/customerJourneyMapping.png";
import gideonUserFlow from "@/assets/pictures/gideon/userFlow.png";
import gideonVisualUIDesign from "@/assets/pictures/gideon/visualUIDesign.png";
import gideonPrototype from "@/assets/pictures/gideon/prototype.png";
import gideonFile from "@/assets/files/emman.pdf";

export const TeamData = [
  {
    id: 1,
    picture: johnzyll,
    role: "Frontend Developer",
    techStack: ["react", "typescript", "javascript", "tailwind", "firebase"],
    name: "Johnzyll Jimeno",
    about: `Greetings! I'm Johnzyll Jimeno, an avid front-end development learner with a keen interest in 
          mastering the intricacies of coding. Outside the realm of web development, you'll often find me immersed 
          in the exciting world of video games. Beyond front-end, I'm also dedicated to expanding my expertise in 
          back-end development. Welcome to my portfolio, where my passion for coding and digital exploration takes 
          center stage!`,
    CVFile: CVJimeno,
    personalProject: [
      {
        title: "Lumine",
        description:
          "Lumine is an Web Application where you can share your thoughts in life.",
        img: [johnzyllPersonalPic1],
        link: "https://lum1ne.web.app/",
      },
    ],
  },
  {
    id: 2,
    picture: emman,
    role: "Software Developer",
    techStack: ["python", "html", "css", "c#"],
    name: "Emmanuel Cari-an",
    about: `Greetings! I'm passionate about coding and creating digital experiences. Here's a bit about me.
      I thrive in the world of Python development. With a keen eye for detail and a love for problem-solving, 
      I enjoy crafting efficient and effective solutions using this versatile language. When automating tasks 
      Python is my go-to tool in the development arsenal. Recently, I've embarked on an exciting journey into 
      the realms of HTML and CSS. It's been an eye-opening experience to dive into the foundations of web 
      development. I'm eager to refine my skills in crafting visually appealing and user-friendly interfaces, 
      and I'm looking forward to the creative opportunities this skillset will unlock.`,
    CVFile: CVCarian,
  },
  {
    id: 3,
    picture: francis,
    role: "Frontend Developer",
    name: "Francis Poliran",
    about: `Designer with a passion for crafting seamless user experiences. With a background in UI and UX design, 
      I bring creativity and technical expertise to every project I undertake. Whether it's creating visually stunning 
      interfaces or optimizing user journeys, I thrive on turning concepts into compelling digital experiences. i am 
      eager to hone my skills to bring my vision to life!"`,
    CVFile: CVPoliran,
    personalProject: [
      {
        title: "PSU Canteen Reservation",
        description:
          "Canteen Food Reservation System of Palawan State University.",
        img: [francisPersonalPic1],
        link: "",
      },
      {
        title: "PALCONNECT",
        description:
          "A Web Platform for Hiring Status of Every Company for Applicants in Palawan",
        img: [francisPersonalPic2, francisPersonalPic3],
        link: "",
      },
    ],
  },
  {
    id: 4,
    picture: gideon,
    role: "Network Administrator",
    name: "Gideon Magno",
    about: `I'm a BSIT student who enjoys making something out of technically nothing. 
      I am an aspiring Network Administrator/Backend Developer with a passion for 
      learning anything about networks and databases, pushing myself to overcome 
      the challenges that comes with the said field. I am an avid fan of thinking 
      outside the box when problem solving, coming up with lazy solutions that 
      can make the problem a lot easier to solve. I am knowledgable in Java, C#, 
      and Python for programming, cisco cli commands for network administration, and 
      MySQL for database query structures and ERD construction and analysis. I'm quite
      eager to broaden my knowledge to have a better grasp of the basics and advance
      my skill set to further refine my skills in implementing networks and databases
      to better suite possible opportunities that my come my way in the near future.`,
    CVFile: CVMagno,
  },
];

export const CaseStudyData = [
  {
    id: 1,
    author: "Johnzyll Jimeno",
    updatedAt: "10-11-2023",
    file: johnzyllFile,
    title: `Implementation of a Comprehensive Driver Behavior Reporting System for Transportation Industry.`,
    summary: `The Comprehensive Driver Reporting System project was created in response to the urgent need for a customized solution 
      in the Philippine transportation sector. It intends to address issues of road safety and defensive driving techniques by developing 
      a user-friendly interface for tracking and reporting driver behavior. The impetus for this project came from alarming national 
      statistics on traffic infractions and accidents, which highlighted the need for an effective reporting system. The main goal is 
      to build a comprehensive platform that allows users to report incidents, enforce traffic laws, and promote safer roads. Through 
      this project, I hope to demonstrate my UI/UX design and development skills while also significantly improving road safety in the 
      Philippines.`,
    customerJourneyMapping: johnzyllCustomerJourneyMapping,
    userflow: johnzyllUserFlow,
    visualUIDesign: johnzyllVisualUIDesign,
    prototypeType: 1,
    prototypeDescription: "You can find it here",
    prototype: "https://cdbrs-system.web.app/",
  },
  {
    id: 2,
    author: "Emmanuel Cari-an",
    updatedAt: "10-11-2023",

    file: emmanFile,
    title: "Optimization of Canvas Website’s UI to Improve User Experience",
    summary: `As of now a plethora of schools and universities use canvas to give task, provide resources, and communicate to students, the 
      interface’s learning curve should be low so that students can focus more on their task rather than having a hard time locating 
      where resources are because of the unfamiliar platform and confusing. The improvement and redesign of the interface can improve 
      the overall user experience when using the product.  Redundancies exist in the product and the goal is to reduce if not remove 
      it completely.`,
    customerJourneyMapping: emmanCustomerJourneyMapping,
    userflow: emmanUserFlow,
    visualUIDesign: emmanVisualUIDesign,
    prototypeType: 2,
    prototypeDescription: "Prototype pictures",
    prototype: emmanPrototype,
  },
  {
    id: 3,
    author: "Francis Poliran",
    updatedAt: "10-11-2023",

    title:
      "NoteXpert: Optimizing Teacher Workflows using a Cross- Platform Class Scheduling with Note-taking system",
    summary: `The"NoteXpert" is a project focused on revolutionizing teacher workflows
      through the integration of a Cross-Platform Class Scheduling with Note-taking
      system. This project is designed to streamline administrative processes for teachers, allowing them to allocate more time to teaching and less on scheduling tasks.
      Inspired by the need for a more efficient and intuitive educational tool, NoteXpert
      aims to provide a seamless experience for teachers. The project's ultimate goal is to
      enhance the teaching experience by giving them space for productivity, ensuring
      that teachers have the resources they need to deliver quality education effectively. The anticipated results include improved time management, organized schedules, enhanced communication, fair distribution of classes, and increased flexibility in
      scheduling and allowing teachers to note, such as in text, images, and file for better
      work flow. NoteXpert is poised to be a game-changer in the field of education
      technology, other features that could be seen in this project are, class schedule
      notification, student grades calculation and attendance, and show who passed and
      failed.`,
    customerJourneyMapping: francisCustomerJourneyMapping,
    userflow: francisUserFlow,
    prototypeType: 2,
    prototypeDescription: "Prototype pictures",
    prototype: francisPrototype,
  },
  {
    id: 4,
    author: "Gideon Magno",
    updatedAt: "10-11-2023",
    file: gideonFile,
    title:
      "An Online Rental Space Management System for small or family owned rental spaces.",
    summary: `OuRSpace is a proposed project aimed to help small and/or family owned rental space business to 
      manage, maintain, and automate the workflow when it comes to managing a rental space business. It is 
      aimed to be a cheaper alternative management system that caters mainly to small and/or family owned 
      rental space business that is easier to use than corporate-type management systems that needs a 
      dedicated IT department to run, costing small businesses to spend more but only needing a fraction of 
      the features included for their businesses. I proposed this idea to the group as a project because we used 
      to rent a space for our business on a family owned rental space, and throughout the time we were there, 
      I observed that they use pen and paper for most transactions, and manually inputting their records on an 
      excel sheet, which in my opinion takes a lot of time, and when problems arises that needs the owners to 
      backlog, some data might already be lost or inconsistencies may rise. Thus with this, managing a rental 
      space business can become easier, and data queries to be faster.`,
    customerJourneyMapping: gideonCustomerJourneyMapping,
    userflow: gideonUserFlow,
    visualUIDesign: gideonVisualUIDesign,
    prototypeType: 2,
    prototypeDescription: "Prototype pictures",
    prototype: gideonPrototype,
  },
];

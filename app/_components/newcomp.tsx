import React from "react";
import "./Newcomp.css";
import Image from "next/image";
import Innovation from "../../public/images/intro3.jpg";
import CustomerCentricity from "../../public/images/intro10.jpg";
import Excellence from "../../public/images/intro11.jpg";
import Collaboration from "../../public/images/intro12.jpg";
import Integrity from "../../public/images/intro13.jpg";
import SocialResponsibility from "../../public/images/intro14.jpg";
import SocialResponsibility2 from "../../public/images/intro15.jpg";

const Newcomp = () => {
  const slideData = [
    {
      title: "The BHP Collective",
      description:
        "India’s Premier Classic Car and SuperCarClub Membership by Invite only, with some of India’s Most well known car owners collectors race Drivers and petroheads.",
      image: CustomerCentricity,
    },
    {
      title: "Hospitality Content and Bar Management",
      description:
        "Management Rights to the famed TLR ( TheLiving Room) we plan and execute content for bars and pubs. Our Business model includes f inancial planning , online marketing and guest list.",
      image: Innovation,
    },
    {
      title: "The Contemporary Arts Week 2016",
      description:
        "Produced and Executed the Contemporary Arts Week 2016 at Nehru Park and over 50 Venues in Delhi for FRIENDS OF ART.",
      image: Excellence,
    },
    {
      title: "Covered",
      description: "Our Own Music Property to Showcase the SLC43 AMG",
      image: Integrity,
    },
    {
      title: "Covered 2",
      description: "Our Own Music Property to Showcase the SLC43 AMG",
      image: Collaboration,
    },
    {
      title: "The Bob Dylan Tribute.",
      description: "Sponsored by Stay Uncle. A tribute to Bob Dylan –75 years",
      image: SocialResponsibility,
    },
    {
      title: "The Veer Marathas Wrestling Team",
      description:
        "Built, Managed and Marketed by Arjun Chopra Turnkey Project to create, build, brand,design, market and create fan engagement strategies.",
      image: SocialResponsibility2,
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "5vh",
          position: "sticky",
          top: "5rem",
        }}
        className=" tracking-tight bg-white text-gray-900 sm:text-4xl font-display text-5xl lg:text-8xl font-extrabold"
      >
        Our Best Events
      </h1>

      <p className="mt-6 text-lg  mx-auto text-center max-w-7xl leading-8 text-gray-600">
        We are proud to showcase some of our best events ,Events that were
        successfull
      </p>

      <div className="container8 w-full">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className="textdiv1 w-full flex flex-col-reverse sm:flex-row items-start"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignItems: "flex-start",
            // }}
          >
            <div
              className=" w-full"
              style={{ textAlign: "left", margin: "1rem" }}
            >
              <h1 style={{ fontSize: "1.4rem", color: "white" }}>
                {slide.title}
              </h1>
              <p>{slide.description}</p>
            </div>
            <div className="w-[200px] mx-auto ">
              <Image
                height={200}
                width={200}
                src={slide.image}
                alt={`slide_image_${index}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newcomp;

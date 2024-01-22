"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";

// import itImg from "../../images/itImg.png";
// import itImg2 from "../../images/itImg2.avif";
// import itImg3 from "../../images/itImg3.webp";
// import itInt from "../../images/itIntegration.jpeg";
// import img from "../../images/img.jpeg";

import Slide1 from "/public/images/img1.jpg";
import Slide2 from "/public/images/img2.jpg";
import Slide3 from "/public/images/img3.jpg";
import Slide4 from "/public/images/img4.jpg";
import Slide5 from "/public/images/img5.jpg";

import Image from "next/image";
import Link from "next/link";

// import { Carousel, Wrap } from "./components/style";
// import { Carousel, Wrap } from './style';

const Crousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Wrap = styled.div`
    cursor: pointer;
    height: 50dvh;
    img {
      //border: 4px solid black;
      width: 100%;
      height: 100%;

      transition-duration: 500ms;
      &:hover {
        border: 4px solid rgba (249, 249, 249, 0.8);
      }
    }
  `;

  const Carousel = styled(Slider)`
    .slick-list {
      overflow: hidden;
    }
    ul li button {
      &:before {
        font-size: 10px;
        color: ${(props) => props.theme.white};
      }
    }
    li.slick-active button:before {
      color: ${(props) => props.theme.white};
    }
    button {
      z-index: 1;
    }
    .slick-dots {
      bottom: 25px;
      padding-right: 20px;
    }
    .slick-dots li button:before {
      font-size: 10px;
    }

    .slick-next {
      right: 10px;
    }
    .slick-prev {
      left: 10px;
    }
    .slick-next:before {
    }
    .slick-prev:before {
    }
  `;
  return (
    <div className=" w-full overflow-hidden ">
      <Carousel {...settings} className=" -z-0 overflow-hidden h-[200px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <Wrap key={index} className="flex items-center justify-center">
            <div className="">
              <Image
                alt="src"
                src={`/images/intro${index + 4}.jpg`}
                width={200}
                height={200}
              />
            </div>
          </Wrap>
        ))}
        {/* <Wrap className="relative">
          <Image alt="img" src={Slide1} fill />
        </Wrap>
        <Wrap className=" relative">
          <Image alt="img" fill src={Slide2} />
        </Wrap>
        <Wrap className="relative">
          <Image alt="img" fill src={Slide3} />
        </Wrap>
        <Wrap className="relative">
          <Image fill src={Slide4} alt="scale" />
        </Wrap>
        <Wrap className="relative">
          <Image fill src={Slide5} alt="scale" />
        </Wrap> */}
      </Carousel>
    </div>
  );
};

export default Crousel;

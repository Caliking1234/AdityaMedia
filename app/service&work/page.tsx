"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className=" w-full h-full text-3xl flex justify-center items-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Page;

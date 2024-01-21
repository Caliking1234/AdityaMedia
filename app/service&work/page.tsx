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
          <CarouselItem className="basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
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

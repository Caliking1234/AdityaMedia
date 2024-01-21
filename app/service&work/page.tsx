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
import Ourevents from "../_components/ourevents";
import Newcomp from "../_components/newcomp";

const Page = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      <Ourevents />
      <div className=" w-full py-5 px-3">
        <Carousel
          className=" w-full shadow-sm shadow-black"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 flex items-center justify-center"
              >
                <div className="p-1">
                  <Image
                    alt="src"
                    src={`/images/intro${index + 4}.jpg`}
                    width={200}
                    height={200}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Newcomp />
    </div>
  );
};

export default Page;

"use client";
import { Esteban } from "next/font/google";
import Crousel from "./_components/crousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { useEffect, useState } from "react";
const inter = Esteban({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [mounted, setmounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setmounted(true);
    }, 2500);
  }, []);

  if (!mounted) {
    return (
      <main className=" w-full flex min-h-screen flex-col items-center p-5 space-y-5">
        <div className=" w-full flex flex-row items-center sm:items-start flex-wrap">
          <Skeleton className="h-10 w-full" />

          <Skeleton className="h-10 w-full" />

          <Skeleton className="h-10 w-full" />

          <Skeleton className="h-10 w-full" />

          <Skeleton className="h-10 w-full" />

          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className=" w-full h-[50vh]" />
      </main>
    );
  }
  return (
    <main className=" w-full flex min-h-screen flex-col items-center p-5">
      <div className=" w-full flex flex-row items-center sm:items-start flex-wrap">
        <h1 className=" text-[10px] text-[#EE6223] font-semibold p-1">
          Events
        </h1>
        <h1 className=" text-[10px] text-[#EE6223] font-semibold p-1">
          Activations
        </h1>
        <h1 className=" text-[10px] text-[#EE6223] font-semibold p-1">
          Sponsorship
        </h1>
        <h1 className=" text-[10px] text-[#EE6223] font-semibold p-1">
          Consulting
        </h1>
        <h1 className=" text-[10px] text-[#EE6223] font-semibold p-1">
          Intellectual
        </h1>
        <h1 className=" text-[10px] text-[#EE6223] font-semibold p-1">
          Property
        </h1>
      </div>
      <Crousel />
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5 py-5">
        <Card className=" shadow-sm shadow-black">
          <CardHeader className=" flex flex-row ">
            <Image
              alt="src"
              src={"/images/intro.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
            <CardTitle>
              <h1 className=" text-xl sm:text-3xl text-[#EE6223] font-semibold p-1 uppercase">
                introduction
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="  p-3 h-full uppercase">
              <b className="text-[#EE6223]">Imbibes Boutique Event</b> is a{" "}
              <b className="text-[#EE6223]">dynamic</b> and{" "}
              <b className="text-[#EE6223]">responsible</b> boutique event
              company driven by passion and creativity. Our unique work process
              reflects our commitment to{" "}
              <b className="text-[#EE6223]">accountability</b>, making it our
              key asset. We prioritize long-term{" "}
              <b className="text-[#EE6223]">relationships</b>, delivering value
              for money and ensuring a significant return on investment. With a
              focus on creating <b className="text-[#EE6223]">global access</b>,
              we strive to exceed expectations in every event we undertake.
            </p>
          </CardContent>
        </Card>
        <Card className=" shadow-sm shadow-black">
          <CardHeader className=" flex flex-row">
            <Image
              alt="src"
              src={"/images/intro2.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
            <CardTitle>
              <h1 className=" text-xl sm:text-3xl text-[#EE6223] font-semibold p-1 uppercase">
                services provided
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="  p-3 h-full uppercase">
              <b className="text-[#EE6223]">Strategically</b> navigating the
              realms of event planning,{" "}
              <b className="text-[#EE6223]">activations</b>,{" "}
              <b className="text-[#EE6223]">brand strategy</b>, and{" "}
              <b className="text-[#EE6223]">consulting</b>, we specialize in
              public relations and serve as adept{" "}
              <b className="text-[#EE6223]">social</b> and{" "}
              <b className="text-[#EE6223]">digital media</b> advertisers. Our
              unique expertise extends to television program funding, ensuring{" "}
              <b className="text-[#EE6223]">impactful</b> and engaging content
              creation.
            </p>
          </CardContent>
        </Card>
        <Card className=" shadow-sm shadow-black">
          <CardHeader className=" flex flex-row">
            <Image
              alt="src"
              src={"/images/intro3.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
            <CardTitle>
              <h1 className=" text-xl sm:text-3xl text-[#EE6223] font-semibold p-1 uppercase">
                the bhp collective
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="  p-3 h-full uppercase">
              <b className="text-[#EE6223]">India&apos;s Premier Classic</b> Car
              and SuperCarClub Membership by Invite only, with some of
              India&apos;s Most well known car owners collectors race Drivers
              and petroheads.{" "}
              <b className="text-[#EE6223]">The BHP Collective</b> is also a
              network of <b className="text-[#EE6223]">Uber High Networth</b>{" "}
              Individuals and High Networth Individuals We are a catalyst
              between brands and their need to meet such customers. Our
              Selection process of brands that we introduce to our customer is
              very detailed ensuring the privacy of our customers isn&apos;t
              Invaded yet brand get complete sales experience.
            </p>
          </CardContent>
        </Card>
        <Card className=" shadow-sm shadow-black">
          <CardHeader className=" flex flex-row">
            <Image
              alt="src"
              src={"/images/intro4.jpg"}
              width={200}
              height={200}
              className=" w-[50px] h-[50px] rounded-full shadow-sm shadow-black"
            />
            <CardTitle>
              <h1 className=" text-xl sm:text-3xl text-[#EE6223] font-semibold p-1 uppercase">
                because we love cars
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" p-3 h-full uppercase">
              <b className="text-[#EE6223]">ING Renault</b> F1{" "}
              <b className="text-[#EE6223]">Roadshow Founder</b>
              of <b className="text-[#EE6223]">The Supercar Club</b> of India
              Founder of the Claridges SuperCar Show Founder and Owner of The
              BHP Collective The Skoda Yeti Performance Drive All India The AMG
              Mixer The Renault Koleos Stunt Show The Renault Koleos Khardungla
              Drive The Toyota Liva Drive Experience The Agility Control Package
              Demo for Mercedes The{" "}
              <b className="text-[#EE6223]">Lamborghini Track </b>Experience The
              Rolls Royce Ghost–II Customer Drives. Design and Construction of
              “The Wonderspeed Way” Mercedes AMG Customer Experiences Track and
              Training Events for Enthusiasts
            </p>
          </CardContent>
        </Card>
      </div>
      {/* <div className=" w-full flex flex-col md:flex-row justify-center items-center py-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5">
          <div className="p-5 space-y-3 w-full">
            <h1 className=" text-xl sm:text-3xl text-[#EE6223] font-semibold p-1 uppercase">
              introduction
            </h1>
            <p className=" shadow-md shadow-black p-3 h-full uppercase">
              <b className="text-[#EE6223]">Imbibes Boutique Event</b> is a{" "}
              <b className="text-[#EE6223]">dynamic</b> and{" "}
              <b className="text-[#EE6223]">responsible</b> boutique event
              company driven by passion and creativity. Our unique work process
              reflects our commitment to{" "}
              <b className="text-[#EE6223]">accountability</b>, making it our
              key asset. We prioritize long-term{" "}
              <b className="text-[#EE6223]">relationships</b>, delivering value
              for money and ensuring a significant return on investment. With a
              focus on creating <b className="text-[#EE6223]">global access</b>,
              we strive to exceed expectations in every event we undertake.
            </p>
          </div>
          <div className="p-5 space-y-3 w-full">
            <h1 className=" text-xl sm:text-3xl text-[#EE6223] font-semibold p-1 uppercase">
              services provided
            </h1>
            <p className=" shadow-md shadow-black p-3 h-full uppercase">
              <b className="text-[#EE6223]">Strategically</b> navigating the
              realms of event planning,{" "}
              <b className="text-[#EE6223]">activations</b>,{" "}
              <b className="text-[#EE6223]">brand strategy</b>, and{" "}
              <b className="text-[#EE6223]">consulting</b>, we specialize in
              public relations and serve as adept{" "}
              <b className="text-[#EE6223]">social</b> and{" "}
              <b className="text-[#EE6223]">digital media</b> advertisers. Our
              unique expertise extends to television program funding, ensuring{" "}
              <b className="text-[#EE6223]">impactful</b> and engaging content
              creation.
            </p>
          </div>
          <div className="p-5 space-y-3 w-full">
            <h1 className=" text-xl sm:text-3xl text-[#EE6223] font-semibold p-1 uppercase">
              the bhp collective
            </h1>
            <p className=" shadow-md shadow-black p-3 h-full uppercase">
              <b className="text-[#EE6223]">India&apos;s Premier Classic</b> Car
              and SuperCarClub Membership by Invite only, with some of
              India&apos;s Most well known car owners collectors race Drivers
              and petroheads.{" "}
              <b className="text-[#EE6223]">The BHP Collective</b> is also a
              network of <b className="text-[#EE6223]">Uber High Networth</b>{" "}
              Individuals and High Networth Individuals We are a catalyst
              between brands and their need to meet such customers. Our
              Selection process of brands that we introduce to our customer is
              very detailed ensuring the privacy of our customers isn&apos;t
              Invaded yet brand get complete sales experience.
            </p>
          </div>
          <div className="p-5 space-y-3 w-full">
            <h1 className=" text-xl sm:text-3xl text-[#EE6223] font-semibold p-1 uppercase">
              because we love cars
            </h1>
            <p className=" shadow-md shadow-black p-3 h-full uppercase">
              <b className="text-[#EE6223]">ING Renault</b> F1{" "}
              <b className="text-[#EE6223]">Roadshow Founder</b>
              of <b className="text-[#EE6223]">The Supercar Club</b> of India
              Founder of the Claridges SuperCar Show Founder and Owner of The
              BHP Collective The Skoda Yeti Performance Drive All India The AMG
              Mixer The Renault Koleos Stunt Show The Renault Koleos Khardungla
              Drive The Toyota Liva Drive Experience The Agility Control Package
              Demo for Mercedes The{" "}
              <b className="text-[#EE6223]">Lamborghini Track </b>Experience The
              Rolls Royce Ghost–II Customer Drives. Design and Construction of
              “The Wonderspeed Way” Mercedes AMG Customer Experiences Track and
              Training Events for Enthusiasts
            </p>
          </div>
        </div>
      </div> */}
      <div
        className={cn(
          "flex flex-col gap-y-5 text-center py-10",
          inter.className
        )}
      >
        <div className=" flex flex-col">
          <p>
            <span className=" text-3xl">&quot;</span>The Aaditya Media is a new
            age communication services f irm.
          </p>
          <p>
            {" "}
            We partner with best in class communication experts to provide our
            clients with communication solutions
          </p>
        </div>
        <div className=" flex flex-col">
          <p>
            {" "}
            Our understanding of clients objectives in a price sensitive market
            is addressed by this method.
          </p>
          <p> Our Services Network Includes</p>
        </div>
        <div className=" flex flex-col">
          <p> Last Mile Acquisition , Events</p>
          <p> Branding , Design and Creative</p>
        </div>
        <div className=" flex flex-col">
          <p> Digital Marketing and Social Media </p>
          <p>
            {" "}
            Perception Managment and Press Relations
            <span className=" text-3xl">&quot;</span>
          </p>
        </div>
      </div>
    </main>
  );
}

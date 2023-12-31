import { CarouselPlugin } from "./_components/crousel";

export default function Home() {
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
      <div className=" w-full flex flex-col md:flex-row justify-around">
        <CarouselPlugin />
        <div className="p-5 w-full">
          <h1 className=" text-xl text-[#EE6223] font-semibold p-1">
            ...introduction
          </h1>
          <p className=" text-justify sm:text-balance">
            <b className="text-[#EE6223]">Passionate</b>, Creative & Responsible
            Boutique Event <b className="text-[#EE6223]">Company</b> Imbibes
            Boutique Event <b className="text-[#EE6223]">unique</b> work process
            Imbibes Boutique Event{" "}
            <b className="text-[#EE6223]">Accountability</b> is our key asset
            Prefer long term <b className="text-[#EE6223]">Relationships</b>{" "}
            <b className="text-[#EE6223]">Value</b> for Money Attitude return on{" "}
            <b className="text-[#EE6223]">Investment</b>
            <br /> <b className="text-[#EE6223]">Creating</b> Global Access
          </p>
        </div>
      </div>
    </main>
  );
}

import Crousel from "./_components/crousel";

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
      <Crousel />
      <div className=" w-full flex flex-col md:flex-row justify-center items-center">
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
        </div>
      </div>
    </main>
  );
}

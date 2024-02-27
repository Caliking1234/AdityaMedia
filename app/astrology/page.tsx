"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";

const Page = () => {
  const [load, setload] = useState(true);
  const [Name, setName] = useState("");
  const [Emails, setEmails] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [dob, setdob] = useState("");
  const [query, setquery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 2000);
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qjf3pee",
        "template_anxtuil",
        e.target,
        "Jha4ZIaNTb2Anm8Sg"
      )
      .then((res) => {
        // console.log(res);
        setName("");
        setEmails("");
        setPhoneno("");
        setdob("");
        setquery("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" w-full h-full">
      {load ? (
        <div className=" flex items-center justify-center w-full h-screen">
          <Image src={"/images/om1.png"} height={500} width={200} alt="asd" />
        </div>
      ) : (
        <div className=" w-full h-full flex sm:flex-row flex-col">
          <div className=" w-full sm:w-1/3 flex flex-col items-center justify-center py-10">
            <Image
              src={"/images/baba.jpg"}
              height={200}
              width={200}
              alt="asd"
            />
            <div>
              <p className=" font-bold text-xl">पाराशर ज्योतिष</p>
            </div>
            <div>
              <p>पंडित सी.एम. पांडे</p>
            </div>
            <div>
              <p className=" text-xs">जन्म दिन- 9-अगस्त-1959</p>
            </div>
            <div>
              <p className=" text-xs">एमएससी-बॉटनी-डीडीयू-गोरखपुर, 1985 में</p>
            </div>
          </div>
          <div className=" w-full sm:w-2/3 max-h-screen flex flex-col items-center justify-center py-10">
            <h1 className=" text-2xl sm:text-4xl font-bold md:text-6xl uppercase text-[#EE6223]">
              THE Play of the Planets
            </h1>
            <p className=" text-[#EE6223]">contact for astrological advisory</p>
            <div className=" w-full h-fit sm:mx-5 sm:w-1/2 py-5 flex flex-col items-center justify-center bg-gray-200 rounded-md">
              <form
                action=""
                className=" w-[90%] h-fit flex flex-col items-center justify-center gap-2 sm:gap-4"
                onSubmit={sendEmail}
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Date of Birth"
                  required
                  name="dob"
                  value={dob}
                  onChange={(e) => {
                    setdob(e.target.value);
                  }}
                  className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  placeholder="email"
                  required
                  name="email"
                  value={Emails}
                  onChange={(e) => {
                    setEmails(e.target.value);
                  }}
                  className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="number"
                  placeholder="phone number"
                  required
                  name="phoneno"
                  value={Phoneno}
                  onChange={(e) => {
                    setPhoneno(e.target.value);
                  }}
                  className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
                <textarea
                  placeholder="enter your query"
                  required
                  name="query"
                  value={query}
                  onChange={(e) => {
                    setquery(e.target.value);
                  }}
                  className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  onClick={() => {
                    toast.success(
                      "We have received you Query and We will reach out soon"
                    );
                  }}
                  className=" w-1/2 mt-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700  hover:border-black hover:border-solid hover:border-[1px] ease-in duration-150 delay-75"
                >
                  Submit
                </button>
                <Toaster richColors position="top-center" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

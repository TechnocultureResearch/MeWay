import React, { useState } from "react";
import Button from "./Button";
import { FormLabel } from "./FormLabel";
import { Footer } from "../Footer";
import { inputHandler } from "../../utils/general";
import { InputField } from "./InputField";
import Image from "next/image";
import mypic from "../../assets/emoji.png";

export const Form = () => {
  const [selectedAge, setSelectedAge] = useState<number>();
  const [ageArray] = useState<string[]>(new Array(100).fill(0));
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [destination, setDestination] = useState("");

  return (
    <>
      <div className="w-72 h-40 flex flex-col items-start p-0 gap-4">
        <div className="w-72 h-40 flex flex-row items-center p-0 gap-9">
          <FormLabel text={"Age"} />

          <div className="w-[137px] h-11 box-border relative">
            <div
              className={`rounded-xl absolute left-0 top-0 bg-neutral-800
                   w-[137px] h-11 border-solid border border-zinc-500 text-zinc-300
                   ${selectedAge && "border-white"}`}
            >
              {selectedAge ? (
                <div
                  className="w-[14px] h-[15px] left-[13px] top-[13px]
                  leading-[15px]
                  font-normal font-inter
                  font-medium text-xs absolute text-zinc-300"
                >
                  {selectedAge}
                </div>
              ) : (
                <div className="absolute w-[24px] h-[24px] top-[9px] left-[13px]">
                  <Image src={mypic} alt="Emoji icon" />
                </div>
              )}
            </div>

            <div
              className="w-[42px] h-11 rounded-r-lg absolute left-[95px] bg-zinc-300 top-0"
              onClick={() => setOpen(!open)}
            >
              <div className="w-[14px] h-[24px] left-[13px] top-[15px] absolute">
                <svg
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[7px]"
                >
                  <path
                    d="M15 1L8 8L1 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <ul
              className={`bg-white text-black w-32 mt-[48px] overflow-y-auto fixed z-30 ${
                open ? "max-h-40" : "max-h-0"
              }`}
            >
              {ageArray.map((item, index) => {
                return (
                  <div key={index}>
                    <li
                      className="text-center hover:bg-sky-600 hover:text-white"
                      onClick={() => {
                        if (index !== selectedAge) {
                          setSelectedAge(index);
                          setOpen(false);
                        }
                      }}
                    >
                      {index + 1}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-72 h-40 flex flex-row items-center p-0 gap-9 ">
          <FormLabel text={"Gender"} />

          <div className="flex flex-row items-start p-0 w-36 h-11 gap-2.5">
            <div className="w-11 h-10 relative">
              <Button
                onClick={() => setSelectedGender("F")}
                gender={`${
                  selectedGender === "F" ? "border-white" : "border-zinc-500"
                }`}
                text={"F"}
              />
            </div>

            <div className="w-11 h-10 relative">
              <Button
                onClick={() => setSelectedGender("M")}
                gender={`${
                  selectedGender === "M" ? "border-white" : "border-zinc-500"
                }`}
                text={"M"}
              />
            </div>
          </div>
        </div>

        <div className="w-72 h-40 flex flex-row items-center p-0 gap-9">
          <FormLabel text={"Destination"} />

          <div className="relative w-[137px] h-11">
            <InputField
              destination={destination}
              onChange={(event) => inputHandler(event, setDestination)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-0 gap-2.5 w-full h-14 self-stretch">
        <Footer
          age={selectedAge}
          destination={destination}
          gender={selectedGender}
        />
      </div>
    </>
  );
};

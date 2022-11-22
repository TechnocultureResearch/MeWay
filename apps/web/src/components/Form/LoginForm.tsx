import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer";
import Button from "./Button";
import { on } from "stream";

const LoginForm = () => {
  const [value, setValue] = useState<number>(0);
  const [destination, setDestination] = useState<string>("");
  const [ageArray] = useState(new Array(100).fill(0));
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedAge, setSelectedAge] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setDestination(enteredName);
    console.log(enteredName, value, selectedGender);
  };

  return (
    <>
      <div className="bg-black sm:flex flex-col items-center justify-between p-8 gap-24 h-screen relative">
        <div className="w-72 h-64 flex flex-col items-start p-0 gap-8">
          <Header />
        </div>

        <div className="w-72 h-40 flex flex-col items-start p-0 gap-4">
          <div className="w-72 h-40 flex flex-row items-center p-0 gap-9">
            <label className="w-28 h-5 text-white font-normal leading-[19px] text-base font-inter">
              Age
            </label>

            <div className="w-[137px] h-11 box-border relative">
              <div
                className={`rounded-xl absolute left-0 top-0 bg-neutral-800
                   w-[137px] h-11 border-solid border border-zinc-500 text-zinc-300
                   ${!selectedAge && "border-zinc-500"}`}
              >
                {selectedAge ? (
                  <div
                    className="pt-3 pl-3 pb-3.5 
                  font-normal font-inter
                  font-medium text-xs"
                  >
                    {selectedAge}
                  </div>
                ) : (
                  <div className="mt-[9px] mb-[9px] ml-[13px] ">
                    <a href="https://www.dictionary.com/e/wp-content/uploads/2018/03/Thinking_Face_Emoji-Emoji-Island.png"></a>
                    <img
                      height="24"
                      width="24"
                      alt="Enter your age"
                      src="https://www.dictionary.com/e/wp-content/uploads/2018/03/Thinking_Face_Emoji-Emoji-Island.png"
                    />
                  </div>
                )}

                <div
                  className="w-[42px] h-[42px] rounded-r-lg absolute left-[93px] bg-zinc-300 top-0"
                  onClick={() => setOpen(!open)}
                >
                  <div className="mt-[18px] ml-[14px] mr-[14px] absolute">
                    <svg
                      width="14"
                      height="7"
                      viewBox="0 0 16 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
              </div>

              <ul
                className={`bg-white text-black w-32 mt-[48px] overflow-y-auto fixed z-30 ${
                  open ? "max-h-60" : "max-h-0"
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
                        value={index}
                      >
                        {index}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="w-72 h-40 flex flex-row items-center p-0 gap-9 ">
            <label className="w-28 h-5 pr-9 pb-3 text-white font-normal leading-[19px] text-base font-inter">
              Gender
            </label>

            <div className="flex flex-row items-start p-0 w-36 h-11 gap-2.5">
              <div className="w-11 h-10 relative">
                <Button
                  onClick={() => setSelectedGender("F")}
                  gender={`${
                    selectedGender === "F" ? "border-white" : "border-zinc-500"
                  }`}
                >
                  F
                </Button>
              </div>
              <div className="w-11 h-10 relative">
                <Button
                  onClick={() => setSelectedGender("M")}
                  gender={`${
                    selectedGender === "M" ? "border-white" : "border-zinc-500"
                  }`}
                >
                  M
                </Button>
              </div>
            </div>
          </div>

          <div className="w-72 h-40 flex flex-row items-center p-0 gap-9">
            <label className="w-28 h-5 pb-3 text-white font-medium pr-9 leading-[19px] text-base font-inter">
              Destination
            </label>

            <div className="relative w-[137px] h-11">
              <input
                type="text"
                className="absolute bg-neutral-800 rounded-xl pl-[15px]
                border-solid border border-zinc-500 w-[137px] h-11 text-white"
                placeholder={"📍"}
                id="designation"
                name="designation"
                onChange={inputHandler}
                value={destination}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-end justify-end p-0 gap-2.5 w-full h-14 self-stretch">
          <Footer
            age={selectedAge}
            destination={destination}
            gender={selectedGender}
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;

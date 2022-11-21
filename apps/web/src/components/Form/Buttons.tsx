import { type } from "os";
import React from "react";


type ButtonProps={
    genderValue: string;
    selectedGenderValue:(newType: string)=> void;
}

const Buttons = ({genderValue, selectedGenderValue}: ButtonProps) => {

  return (
    <>
      <div className="flex flex-row items-start p-0 gap-2.5 w-36 h-11">
        <div className="w-11 h-10 relative">
          <button
            className={`
                  w-11 h-11 box-border rounded-xl absolute bg-neutral-800 top-0 left-0
                  border-solid  border 
                  text-white
                  font-normal text-base leading-5 pt-2.5 px-4 pb-3
                  ${
                   genderValue  === "F" ? "border-white" : "border-zinc-500"
                  }`}
            onClick={() => selectedGenderValue("F")}
          >
            F
          </button>
        </div>
        <div className="w-11 h-10 relative pl-2.5">
          <button
            className={`box-border 
                        rounded-xl
                        text-white
                        absolute
                        border-solid border 
                        font-medium 
                        text-base
                        top-0 left-0 w-11 h-11 pl-3.5 pr-3.5 pb-3 pt-2.5 bg-neutral-800
                         ${
                           genderValue === "M"
                             ? "border-white"
                             : "border-zinc-500"
                         }`}
            onClick={() => selectedGenderValue("M")}
          >
            M
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;

import React, { useState } from "react";
// import { ChangeEvent, ChangeEventHandler } from "react";


const WifiLoginForm = () => {
  const [value, setValue] = useState<number>(0);
  const [destination, setDestination] = useState<string>("📍");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const enteredName = event.target.value;
    setDestination(enteredName);
    console.log(enteredName);
  };

  return (
    <div className="flex flex-col items-center text-white h-screen bg-black">
      <div className="h-25 grid grid-cols-3 gap-4 mt-8 content-start... ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24"
        >
          <path
            fillRule="evenodd"
            d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="text-5xl text-left font-normal leading-none non-italic decoration-1 mt-12">
        <p className="text-5xl text-left font-normal leading-none non-italic decoration-1">
          Hello!
        </p>
        <p>
          from <strong className="font-bold">meway</strong>
        </p>
      </div>

      <div className="pt-14 ">
        <label className="mr-20">Age </label>
        <select className="w-20 h-10 text-white bg-[#212121] border rounded-md mx-2 mr-11">
          <option>&#129300;</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div className="mt-8">
        <label className="mr-12">Gender</label>
        <button className="bg-[#212121] border text-white font-inter w-10 h-10 rounded mx-3">
          F
        </button>
        <button className="bg-[#212121] border text-white font-inter w-10 h-10 rounded mx-3">
          M
        </button>
      </div>
      <div className="mt-5">
        <label className="mr-7 ml-7">Destination</label>

        <input
          type="text"
          id="designation"
          name="designation"
          value={destination}
          onChange={inputHandler}
          className="text-white box-border bg-[#212121] border rounded-xl h-11 w-36 mx-3"
        />
      </div>
      <div
        className="flex items-center font-serif font-light text-base non-italic leading-5 
        order-none grow-0 text-[#FFFFFF] flex-none  pt-14 mt-32"
      >
        <p>Fill in the details to connect to the internet.</p>
      </div>
    </div>
  );
};

export default WifiLoginForm;

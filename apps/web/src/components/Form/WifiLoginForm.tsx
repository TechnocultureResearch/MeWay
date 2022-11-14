import React, { useState } from "react";



const WifiLoginForm = () => {

  const [value, setValue] = useState<number>(0);
  const [destination, setDestination] = useState("");
  const [ageArray] = useState(new Array(100).fill(0));
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAge, setSelectedAge] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setDestination(enteredName);
    console.log(enteredName, value, selectedGender);
  };


  return (
    <div className="flex flex-col min-h-screen items-center text-white bg-black">
      <div className="md:flex w-full  max-w-5xl p-8 space-y-6 items-center justify-center flex-col h-72">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 stroke-2"
            >
              <path
                fillRule="evenodd"
                d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-5xl non-italic p-2 leading-none font-[100] font-inter mt-12 ">
              <p className="ml-2.5">Hello!</p>
              <p className="ml-2.5">
                from <strong className="font-bold">meway</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex w-full max-w-5xl p-8 space-y-6 items-center justify-center flex-col top-24">
        <div className="flex flex-col items-start justify-between mt-24 h-38">
          <div className="flex flex-row space-x-4 items-start justify-between gap-y-1 w-full max-w-5xl h-11">
            <label className="w-32 h-4 font-inter font-medium non-italic text-base py-2">
              Age
            </label>

            <div className="w-32 h-11 rounded-xl bg-[#212121] font-medium">
              <div
                onClick={() => setOpen(!open)}
                className={`bg-[#212121] w-full max-w-5xl h-11 border border-white
                text-white w-full rounded-xl flex items-center justify-between
              ${!selectedAge && "font-[#D9D9D9] "}`}
              >
                {selectedAge ? (
                  <div className="ml-2">{selectedAge}</div>
                ) : (
                  <div className="flex justify-center ml-2">
                    <a href="https://www.dictionary.com/e/wp-content/uploads/2018/03/Thinking_Face_Emoji-Emoji-Island.png"></a>
                    <img
                      height="30"
                      width="30"
                      src="https://www.dictionary.com/e/wp-content/uploads/2018/03/Thinking_Face_Emoji-Emoji-Island.png"
                    />
                  </div>
                )}

                <div className="rounded-r-lg">
                  <svg
                    className={`flex items-end justify-end w-12 h-11  bg-[#D9D9D9] text-[#000000] rounded-r-lg  ${
                      open && "rotate-150"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414
                      0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>

              <ul
                className={`bg-white text-black w-32 overflow-y-auto fixed z-30  ${
                  open ? "max-h-60" : "max-h-0"
                }`}
              >
                {ageArray.map((item, index) => {
                  return (
                    <div key={index}>
                      <li
                        className="text-center hover:bg-sky-600 hover:text-white  "
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

          <div className="flex flex-row space-x-4 items-start  justify-between mt-4 gap-y-1 w-full max-w-5xl h-11">
            <label className="w-32 h-4 font-inter font-medium non-italic text-base py-2">
              Gender
            </label>

            <div className="flex w-32 space-x-4 justify-items-start">
              <button
                onClick={() => setSelectedGender("F")}
                className={`border-[${
                  selectedGender === "F" ? "#7E7E7E " : "#212121"
                }] bg-[#212121] border text-center font-inter w-11 h-11 rounded-lg`}
              >
                F
              </button>

              <button
                onClick={() => setSelectedGender("M")}
                className={`border border-[${
                  selectedGender === "M" ? "#7E7E7E " : "#212121"
                }] bg-[#212121]  font-inter w-11 h-11 rounded-lg`}
              >
                M
              </button>
            </div>
          </div>

          <div className="flex flex-row flex-auto  items-start justify-between w-full mt-4 max-w-5xl h-11">
            <label className="w-32 h-4 font-inter font-medium non-italic text-base py-2">
              Destination
            </label>

            <input
              type="text"
              id="designation"
              name="designation"
              value={destination}
              placeholder={"📍"}
              onChange={inputHandler}
              autoComplete="off"
              className="px-2 w-32 h-11 font-inter font-medium box-border
               bg-[#212121] rounded-lg flex justify-end text-sm border-solid border border-[#FFFFFF] 
               font-[#D9D9D9]"
            />
          </div>
        </div>
      </div>
      <div
        className="flex w-72 max-w-4xl h-11
        font-inter font-thin text-base non-italic
        leading-5 order-none justify-between
        grow-0 font-[#FFFFFF] flex-none mt-20 mb-2.5"
        >
        {selectedAge && destination && selectedGender ? 
         (
          <div className="flex justify-end items-end ml-auto">
          <p className="">Connect</p>
          </div>
        
        ) : (
          <p>Fill in the details to connect to the internet.</p>
        )}
      </div>
    </div>
  );
};

export default WifiLoginForm;

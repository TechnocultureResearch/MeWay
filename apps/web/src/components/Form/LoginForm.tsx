import React, { useState } from "react";

const LoginForm = () => {
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
    <>
      <div className="bg-[#000000] sm:flex flex-col items-center p-0 pt-0 pr-0 pb-0 pl-0 h-screen relative">
        <div className="w-72 h-64 flex flex-col items-start p-0 gap-8  mx-8 mt-8">
          <div className="flex flex-row items-start w-72 h-28 p-0 gap-2.5">
            <div className="w-28 h-28 relative pt-4 pl-0 pb-4 pr-8">
              <svg
                width="81"
                height="82"
                viewBox="0 0 81 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46 5.8C46 4.26174 45.3942 2.78649 44.3159 1.69878C43.2375 0.611069 41.775 0 40.25 0C38.725 0 37.2625 0.611069 36.1841 1.69878C35.1058 2.78649 34.5 4.26174 34.5 5.8V11.6C34.5 13.1383 35.1058 14.6135 36.1841 15.7012C37.2625 16.7889 38.725 17.4 40.25 17.4C41.775 17.4 43.2375 16.7889 44.3159 15.7012C45.3942 14.6135 46 13.1383 46 11.6V5.8ZM40.25 23.2C41.775 23.2 43.2375 23.8111 44.3159 24.8988C45.3942 25.9865 46 27.4617 46 29V34.8H57.5C59.025 34.8 60.4875 35.4111 61.5659 36.4988C62.6442 37.5865 63.25 39.0617 63.25 40.6C63.25 42.1383 62.6442 43.6135 61.5659 44.7012C60.4875 45.7889 59.025 46.4 57.5 46.4H40.25C38.725 46.4 37.2625 45.7889 36.1841 44.7012C35.1058 43.6135 34.5 42.1383 34.5 40.6V29C34.5 27.4617 35.1058 25.9865 36.1841 24.8988C37.2625 23.8111 38.725 23.2 40.25 23.2ZM74.75 34.8C73.225 34.8 71.7625 35.4111 70.6841 36.4988C69.6058 37.5865 69 39.0617 69 40.6C69 42.1383 69.6058 43.6135 70.6841 44.7012C71.7625 45.7889 73.225 46.4 74.75 46.4C76.275 46.4 77.7375 45.7889 78.8159 44.7012C79.8942 43.6135 80.5 42.1383 80.5 40.6C80.5 39.0617 79.8942 37.5865 78.8159 36.4988C77.7375 35.4111 76.275 34.8 74.75 34.8ZM34.5 58C34.5 56.4617 35.1058 54.9865 36.1841 53.8988C37.2625 52.8111 38.725 52.2 40.25 52.2H46C47.525 52.2 48.9875 52.8111 50.0659 53.8988C51.1442 54.9865 51.75 56.4617 51.75 58C51.75 59.5383 51.1442 61.0135 50.0659 62.1012C48.9875 63.1889 47.525 63.8 46 63.8V75.4C46 76.9383 45.3942 78.4135 44.3159 79.5012C43.2375 80.5889 41.775 81.2 40.25 81.2C38.725 81.2 37.2625 80.5889 36.1841 79.5012C35.1058 78.4135 34.5 76.9383 34.5 75.4V58ZM23 46.4C24.525 46.4 25.9875 45.7889 27.0659 44.7012C28.1442 43.6135 28.75 42.1383 28.75 40.6C28.75 39.0617 28.1442 37.5865 27.0659 36.4988C25.9875 35.4111 24.525 34.8 23 34.8H5.75C4.22501 34.8 2.76247 35.4111 1.68414 36.4988C0.605802 37.5865 0 39.0617 0 40.6C0 42.1383 0.605802 43.6135 1.68414 44.7012C2.76247 45.7889 4.22501 46.4 5.75 46.4H23ZM80.5 58C80.5 59.5383 79.8942 61.0135 78.8159 62.1012C77.7375 63.1889 76.275 63.8 74.75 63.8H63.25C61.725 63.8 60.2625 63.1889 59.1841 62.1012C58.1058 61.0135 57.5 59.5383 57.5 58C57.5 56.4617 58.1058 54.9865 59.1841 53.8988C60.2625 52.8111 61.725 52.2 63.25 52.2H74.75C76.275 52.2 77.7375 52.8111 78.8159 53.8988C79.8942 54.9865 80.5 56.4617 80.5 58ZM74.75 81.2C76.275 81.2 77.7375 80.5889 78.8159 79.5012C79.8942 78.4135 80.5 76.9383 80.5 75.4C80.5 73.8617 79.8942 72.3865 78.8159 71.2988C77.7375 70.2111 76.275 69.6 74.75 69.6H57.5C55.975 69.6 54.5125 70.2111 53.4341 71.2988C52.3558 72.3865 51.75 73.8617 51.75 75.4C51.75 76.9383 52.3558 78.4135 53.4341 79.5012C54.5125 80.5889 55.975 81.2 57.5 81.2H74.75Z"
                  fill="white"
                />
              </svg>
              <svg
                width="81"
                height="82"
                viewBox="0 0 81 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute left-0 right-1 top-0.5 mt-[17px] bottom-0.5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 5.8C0 4.26174 0.605802 2.78649 1.68414 1.69878C2.76247 0.611069 4.22501 0 5.75 0H23C24.525 0 25.9875 0.611069 27.0659 1.69878C28.1442 2.78649 28.75 4.26174 28.75 5.8V23.2C28.75 24.7383 28.1442 26.2135 27.0659 27.3012C25.9875 28.3889 24.525 29 23 29H5.75C4.22501 29 2.76247 28.3889 1.68414 27.3012C0.605802 26.2135 0 24.7383 0 23.2V5.8ZM11.5 17.4V11.6H17.25V17.4H11.5ZM0 58C0 56.4617 0.605802 54.9865 1.68414 53.8988C2.76247 52.8111 4.22501 52.2 5.75 52.2H23C24.525 52.2 25.9875 52.8111 27.0659 53.8988C28.1442 54.9865 28.75 56.4617 28.75 58V75.4C28.75 76.9383 28.1442 78.4135 27.0659 79.5012C25.9875 80.5889 24.525 81.2 23 81.2H5.75C4.22501 81.2 2.76247 80.5889 1.68414 79.5012C0.605802 78.4135 0 76.9383 0 75.4V58ZM11.5 69.6V63.8H17.25V69.6H11.5ZM57.5 0C55.975 0 54.5125 0.611069 53.4341 1.69878C52.3558 2.78649 51.75 4.26174 51.75 5.8V23.2C51.75 24.7383 52.3558 26.2135 53.4341 27.3012C54.5125 28.3889 55.975 29 57.5 29H74.75C76.275 29 77.7375 28.3889 78.8159 27.3012C79.8942 26.2135 80.5 24.7383 80.5 23.2V5.8C80.5 4.26174 79.8942 2.78649 78.8159 1.69878C77.7375 0.611069 76.275 0 74.75 0H57.5ZM63.25 11.6V17.4H69V11.6H63.25Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row items-start w-72 p-0  h-[108px]">
            <div className="w-64 h-28 text-[45px] non-italic leading-[54px] text-[#FFFFFF] font-[100] font-inter tracking-normal">
              Hello!
              <p className="">
                {" "}
                from
                <strong className="p-2 font-[600]">meway</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="w-72 h-40 flex flex-col items-start p-0 gap-4 mt-[100px] ">
          <div className="w-72 h-40 flex flex-row items-center p-0 gap-9 relative">
            <label className="w-28 h-5 pr-9 pb-3 text-[#FFFFFF] font-normal leading-[19px] font-[16px] font-inter">
              Age
            </label>

            <div className="w-[137px] h-11 box-border relative">
              <div
                className={`rounded-xl absolute left-0 top-0 bg-[#212121]
                   w-[137px] h-11 border-solid border border-[#7E7E7E] text-[#D9D9D9]
                   ${!selectedAge && "border-[#7E7E7E]"}`}
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
                  className="w-[42px] h-[42px] rounded-r-lg absolute left-[93px] bg-[#D9D9D9] top-0"
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
                className={`bg-white text-black w-32 mt-[48px] overflow-y-auto fixed z-30  ${
                  open ? "max-h-60" : "max-h-0"
                }`}
              >
                {ageArray.map((item, index) => {
                  return (
                    <div key={index}>
                      <li
                        className="text-center hover:bg-sky-600 hover:text-white "
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

          <div className="w-72 h-40 flex flex-row items-center p-0 gap-9">
            <label className="w-28 h-5 pr-9 pb-3 text-[#FFFFFF] font-normal leading-[19px] font-[16px] font-inter ">
              Gender
            </label>

            <div className="flex flex-row items-start p-0 gap-2.5 w-36 h-11">
              <div className="w-11 h-10 relative">
                <button
                  className={`
                  w-11 h-11 box-border rounded-xl absolute bg-[#212121] top-0 left-0
                  border-solid  border 
                  text-[#FFFFFF]
                  font-normal font-[16px] leading-5 pt-2.5 px-4 pb-3
                  ${
                    selectedGender === "F"
                      ? "border-[#FFFFFF]"
                      : "border-[#7E7E7E]"
                  }`}
                  onClick={() => setSelectedGender("F")}
                >
                  F
                </button>
              </div>
              <div className="w-11 h-10 relative pl-2.5">
                <button
                  className={`box-border 
                        rounded-xl
                        text-[#FFFFFF]
                        absolute
                        border-solid border 
                        font-medium 
                        font-[16px]
                        top-0 left-0 w-11 h-11 pl-3.5 pr-3.5 pb-3 pt-2.5 bg-[#212121]
                         ${
                           selectedGender === "M"
                             ? "border-[#FFFFFF]"
                             : "border-[#7E7E7E]"
                         }`}
                  onClick={() => setSelectedGender("M")}
                >
                  M
                </button>
              </div>
            </div>
          </div>

          <div className="w-72 h-40 flex flex-row items-center p-0 gap-9">
            <label className="w-28 h-5 pb-3 text-[#FFFFFF] font-medium pr-9 leading-[19px] font-[16px] font-inter">
              Destination
            </label>

            <div className="relative w-[137px] h-11 ">
              <input
                type="text"
                className="absolute bg-[#212121] rounded-xl pl-[15px]
                border-solid border border-[#7E7E7E] w-[137px] h-11 text-white "
                placeholder={"📍"}
                id="designation"
                name="designation"
                onChange={inputHandler}
                value={destination}
              />
            </div>
          </div>
        </div>

        {selectedAge && destination && selectedGender ? (
          <div
            className=" flex flex-row justify-end items-end gap-[10px]
                   self-stretch h-[37px] mt-[100px]
                  ml-[32px]  mb-[39px] mr-[32px]"
          >
            <p className="text-[white] mt-[18px]">Connect →</p>
          </div>
        ) : (
          <div className="flex flex-row justify-end text-[#FFFFFF] items-end gap-2.8 w-72 mt-[100px] h-[51px] ml-[32px] mr-[32px] mb-[32px]">
            <span
              className="font-normal font-[16px] flex justify-center items-center text-[#FFFFFF] w-72 
                           pt-3 h-[51px]
                            font-[100] leading-[19px] "
            >
              Fill in the details to connect to the Internet.
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginForm;

import React from "react";

interface Props {
  age: number | undefined;
  destination: string;
  gender: string;
}

export const Footer: React.FC<Props> = ({ age, destination, gender }) => {
  return (
    <div>
      {age && destination && gender ? (
        <p className="font-inter font-normal font-medium text-base leading-[19px] text-white">
          Connect →
        </p>
      ) : (
        <span className="font-normal font-inter text-base text-white w-72 h-14 font-thin leading-[19px]">
          Fill in the details to connect to the Internet.
        </span>
      )}
    </div>
  );
};

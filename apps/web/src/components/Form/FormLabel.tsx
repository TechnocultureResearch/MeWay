import React from "react";

interface Props {
  text: string;
}

export const FormLabel: React.FC<Props> = ({ text }) => {
  return (
    <label className="w-28 h-5 text-white font-normal leading-[19px] text-base font-inter">
      {text}
    </label>
  );
};

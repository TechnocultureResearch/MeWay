import React from "react";

interface InputFieldProps {
  destination: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  destination,
  onChange,
}) => {
  return (
    <input
      type="text"
      className={`box-border absolute bg-neutral-800 rounded-xl pl-[15px]
      border border-solid border-zinc-500 w-[137px] h-11 text-white
      ${destination && "border-solid border border-white-500"}`}
      placeholder={"📍"}
      id="designation"
      name="designation"
      onChange={onChange}
      value={destination}
    />
  );
};

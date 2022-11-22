import React from "react";

interface Props {
  children?: React.ReactNode;
  gender?: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick, gender }) => {
  return (
    <button
      className={`
            w-11 h-11 box-border rounded-xl  bg-neutral-800 top-0 left-0
            border-solid  border
            text-white
            font-normal text-base leading-5 absolute
            ${gender}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  text: React.ReactNode;
  gender: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, gender }) => {
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
      {text}
    </button>
  );
};

export default Button;

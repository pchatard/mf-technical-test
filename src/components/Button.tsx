import { RefObject } from "react";

export type ButtonProps = {
  btnRef?: RefObject<HTMLButtonElement>;
  handleClick: () => void;
  text: string;
  kbd?: string;
};

function Button({ btnRef, handleClick, text, kbd }: ButtonProps) {
  return (
    <button
      ref={btnRef}
      className={
        "animate-[fadeIn_0.8s_ease-in-out_forwards] opacity-0 origin-bottom text-indigo-600 text-base border border-indigo-600 hover:border-indigo-800 focus:border-indigo-800 focus:outline-indigo-800 focus:outline-offset-0 px-4 py-2 rounded-md font-semibold hover:text-indigo-800 items-center " +
        (kbd ? "flex justify-between" : "text-center")
      }
      onClick={handleClick}
    >
      {text}
      {kbd && (
        <kbd className="hidden md:block ml-4 text-xs border border-indigo-600 px-2 py-2 rounded-sm">
          {kbd}
        </kbd>
      )}
    </button>
  );
}

export default Button;

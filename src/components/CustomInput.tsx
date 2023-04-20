import { ChangeEventHandler, RefObject } from "react";

export type CustomInputProps = {
  name: string;
  label: string;
  type: "text" | "date";
  value: string;
  onChange: (s: string) => void;
  isError?: boolean;
  isLoading: boolean;
  containerRef: RefObject<HTMLDivElement>;
};

function CustomInput({
  type,
  name,
  label,
  value,
  onChange,
  isError,
  isLoading,
  containerRef,
}: CustomInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return isLoading ? (
    <div id="loading"></div>
  ) : (
    <div ref={containerRef} className="flex flex-col w-full gap-2">
      <label
        key={name + "-label"}
        htmlFor={name}
        className="animate-[fadeIn_1s_ease-in-out_forwards] origin-bottom opacity-0 text-indigo-600 text-xl font-semibold"
      >
        {label}
      </label>
      <input
        key={name + "-input"}
        type={type}
        id={name}
        value={value}
        onChange={handleChange}
        autoFocus
        className={
          "py-4 pl-4 text-lg bg-opacity-30 bg-white rounded-md text-indigo-800 border-b-4 border-b-transparent hover:border-indigo-600 focus:outline-none focus:border-indigo-600 animate-[fadeIn_1s_ease-in-out_forwards] origin-bottom opacity-0 " +
          (isError
            ? "border-b-red-600 focus:border-b-red-600 hover:border-b-red-600 text-red-800"
            : "")
        }
      />
    </div>
  );
}

export default CustomInput;

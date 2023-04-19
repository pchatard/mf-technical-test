import { ChangeEventHandler } from "react";

export type CustomInputProps = {
  name: string;
  label: string;
  type: "text" | "date";
  value: string;
  onChange: (s: string) => void;
  isError?: boolean;
};

function CustomInput({
  type,
  name,
  label,
  value,
  onChange,
  isError,
}: CustomInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={handleChange}
        autoFocus
        className={isError ? "border border-red-400" : ""}
      />
    </div>
  );
}

export default CustomInput;

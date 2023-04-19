import { ChangeEventHandler } from "react";

export type TextInputProps = {
  name: string;
  label: string;
  value: string;
  setValue: (s: string) => void;
  isError?: boolean;
};

function TextInput({ name, label, value, setValue, isError }: TextInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        value={value}
        onChange={handleChange}
        autoFocus
        className={isError ? "border border-red-400" : ""}
      />
    </div>
  );
}

export default TextInput;

import { useState } from "react";
import { validateTextInput } from "../validateTextInput";
import { validateDateInput } from "../validateDateInput";

export function useInput(type: "text" | "date", label: string, name: string) {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  function onSubmit(): boolean {
    let success = true;
    if (type == "text" && validateTextInput(value)) {
      setIsError(!success);
    } else if (type == "date" && validateDateInput(value)) {
      setIsError(!success);
    } else {
      success = false;
      setIsError(!success);
    }
    return success;
  }

  const inputProps = {
    label,
    name,
    type,
    value,
    onChange: setValue,
    isError,
    onSubmit,
  };

  return inputProps;
}

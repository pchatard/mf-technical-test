import CustomInput from "./components/CustomInput";
import { useInput } from "./utils/hooks/useInput";
import { KeyboardEventHandler, useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const inputProps = [
    useInput("text", "First name", "firstName"),
    useInput("text", "Last name", "lastName"),
    useInput("date", "Birth date", "birthDate"),
  ];

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key == "Enter") {
      onNextStep();
    }
  };

  function onPreviousStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function onNextStep() {
    // Perform validation : onSubmit will update isError for the current state
    if (step < 2 && inputProps[step].onSubmit()) {
      // Increment if step not in error
      setStep(step + 1);
    } else if (step == 2 && inputProps[step].onSubmit()) {
      // Redirect to result page
      console.log("Redirection");
    }
  }

  return (
    <div onKeyDown={handleKeyDown}>
      {inputProps[step].value} {inputProps[step].isError}
      <CustomInput {...inputProps[step]} />
      <div>
        {step > 0 && <button onClick={onPreviousStep}>Previous</button>}
        <button onClick={onNextStep}>Next</button>
      </div>
    </div>
  );
}

export default App;

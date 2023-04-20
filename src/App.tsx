import CustomInput from "./components/CustomInput";
import { useInput } from "./utils/hooks/useInput";
import { KeyboardEventHandler, useRef, useState } from "react";

function App() {
  const nextButton = useRef<HTMLButtonElement>(null);
  const previousButton = useRef<HTMLButtonElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputProps = [
    useInput("text", "Quel est votre prénom ?", "firstName"),
    useInput("text", "Quel est votre nom de famille ?", "lastName"),
    useInput("date", "Quelle est votre date de naissance ?", "birthDate"),
  ];

  /**
   * Handler for previous and next buttons
   * @param e Event object
   */
  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key == "Enter" && (e.metaKey || e.ctrlKey)) {
      // Go to Previous step
      e.preventDefault();
      previousButton.current?.focus();
      onPreviousStep();
    } else if (e.key == "Enter") {
      // Go to next step
      e.preventDefault();
      nextButton.current?.focus();
      onNextStep();
    }
  };

  /**
   * Go to previous step
   */
  function onPreviousStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  /**
   * Add fadeOut animation to label, input and buttons container
   */
  function fadeOut() {
    const fadeOutAnimation = "animate-[fadeOut_.8s_ease-in-out_forwards]";
    nextButton.current?.parentElement?.classList.add(fadeOutAnimation);
    inputContainerRef.current?.classList.add(fadeOutAnimation);
  }

  /**
   * Go to next step by performing logic validation on inputs
   */
  function onNextStep() {
    // Perform validation : onSubmit will update isError for the current state
    const isSuccessValidation = inputProps[step].onSubmit();

    if (step < 2 && isSuccessValidation) {
      fadeOut();
      // Simulate loading
      setTimeout(() => {
        setIsLoading(true);
        // Increment if step not in error
        setStep(step + 1);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 500);
      return;
    } else if (step == 2 && isSuccessValidation) {
      fadeOut();
      // Redirect to result page
      console.log("Redirection");
      return;
    } else {
      // Error during validation, put focus back on element
      const inputElement: HTMLInputElement | null | undefined =
        inputContainerRef.current?.querySelector(`#${inputProps[step].name}`);
      inputElement?.focus();
    }
  }

  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      onKeyDown={handleKeyDown}
    >
      <div className="w-full px-4 md:px-0 md:w-1/2 flex flex-col justify-center items-center gap-4">
        <CustomInput
          isLoading={isLoading}
          {...inputProps[step]}
          containerRef={inputContainerRef}
        />
        {!isLoading && (
          <div className="flex justify-between w-full">
            {step > 0 && (
              <button
                ref={previousButton}
                className="animate-[fadeIn_0.8s_ease-in-out_forwards] opacity-0 origin-bottom text-indigo-600 text-base border border-indigo-600 hover:border-indigo-800 focus:border-indigo-800 focus:outline-indigo-800 focus:outline-offset-0 px-4 py-2 rounded-md font-semibold hover:text-indigo-800 flex justify-between items-center"
                onClick={onPreviousStep}
              >
                Previous
                <kbd className="hidden md:block ml-4 text-xs border border-indigo-600 px-2 py-2 rounded-sm">
                  {window.navigator.platform.includes("Mac") ? "CMD" : "CTRL"} +
                  Enter
                </kbd>
              </button>
            )}
            <button
              ref={nextButton}
              type="button"
              className="ml-auto animate-[fadeIn_1s_ease-in-out_.2s_forwards] opacity-0 origin-bottom text-indigo-600 text-base border border-indigo-600 hover:border-indigo-800 focus:border-indigo-800 focus:outline-indigo-800 focus:outline-offset-0 px-4 py-2 rounded-md font-semibold hover:text-indigo-800 flex justify-between items-center"
              onClick={onNextStep}
            >
              Continuer
              <kbd className="hidden md:block ml-4 text-xs border border-indigo-600 px-2 py-2 rounded-sm">
                Enter
              </kbd>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

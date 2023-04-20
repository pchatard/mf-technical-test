import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { useInput } from "../utils/hooks/useInput";
import { KeyboardEventHandler, useRef, useState } from "react";
import Button, { ButtonProps } from "../components/Button";

function Root() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const previousButtonProps: ButtonProps = {
    btnRef: useRef<HTMLButtonElement>(null),
    text: "Précédent",
    kbd: `${
      window.navigator.platform.includes("Mac") ? "CMD" : "CTRL"
    } + Enter`,
    handleClick: onPreviousStep,
  };
  const nextButtonProps: ButtonProps = {
    btnRef: useRef<HTMLButtonElement>(null),
    text: "Continuer",
    kbd: `Enter`,
    handleClick: onNextStep,
  };

  const inputContainerRef = useRef<HTMLDivElement>(null);

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
      previousButtonProps.btnRef?.current?.focus();
      onPreviousStep();
    } else if (e.key == "Enter") {
      // Go to next step
      e.preventDefault();
      nextButtonProps.btnRef?.current?.focus();
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
    nextButtonProps.btnRef?.current?.parentElement?.classList.add(
      fadeOutAnimation
    );
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
      const state = {
        firstName: inputProps[0].value,
        lastName: inputProps[1].value,
        birthDate: inputProps[2].value,
      };
      setTimeout(() => {
        navigate("/result", { state });
      }, 1000);
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
        {!isLoading && (
          <div className="animate-[fadeIn_0.8s_ease-in-out_forwards] text-indigo-600 self-start">
            {step + 1}/3
          </div>
        )}
        <CustomInput
          {...inputProps[step]}
          isLoading={isLoading}
          containerRef={inputContainerRef}
        />
        {!isLoading && (
          <div
            className={
              "flex w-full " + (step > 0 ? "justify-between" : "justify-end")
            }
          >
            {step > 0 && <Button {...previousButtonProps} />}
            <Button {...nextButtonProps} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Root;

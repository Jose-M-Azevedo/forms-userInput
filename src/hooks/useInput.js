import { useState } from "react";

export function useInput(defaultValue, validation) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const valueIsValid = validation(enteredValue);

  const [didEdit, setDidEdit] = useState(false);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}

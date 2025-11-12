import { useState } from "react";

export const useCounter = (InitialValue) => {
  const [counter, setCounter] = useState(InitialValue);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(InitialValue);
  };
  return {
    counter,
    handleIncrement,
    handleDecrement, export const 
    handleReset, 
  };
};

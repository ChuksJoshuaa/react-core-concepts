import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increase = () => {
    setValue(value + 1);
  };
  const reset = () => {
    setValue(0);
  };
  const Decrease = () => {
    setValue(value - 1);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}></section>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={Decrease}>
        Decrease
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn" onClick={increase}>
        Increase
      </button>

      <section style={{ margin: "4rem 0" }}></section>
      <h2>more complex counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>
        increase later
      </button>
    </>
  );
};

export default UseStateCounter;

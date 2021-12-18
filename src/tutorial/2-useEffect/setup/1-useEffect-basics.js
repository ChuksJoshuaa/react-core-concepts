import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 5) {
      document.title = `New Messages ${value}`;
    } else {
      document.title = `Fuck You ${value}`;
    }
  }, [value]);
  const increase = () => {
    setValue(value + 1);
  };
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={increase}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;

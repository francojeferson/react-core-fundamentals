import { useState, useEffect } from "react";

const UseEffectExamples = () => {
  // sem dependencias
  useEffect(() => {
    console.log("rodou UE1");
  });

  return (
    <div>
      <h2>useeffectexamples</h2>
    </div>
  );
};

export default UseEffectExamples;

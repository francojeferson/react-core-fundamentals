import React from "react";

const UseStateComponent = () => {
  let count = 0;

  const increment = () => {
    count += 1;
    console.log(count);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment()}>Incrementar</button>
    </div>
  );
};

export default UseStateComponent;

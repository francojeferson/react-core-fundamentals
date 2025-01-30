import { useState } from "react";

// useState = hooks

const UseStateComponent = () => {
  // cria uma variavel de consulta, e uma variavel de alteraçao, e inicia o hook
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default UseStateComponent;

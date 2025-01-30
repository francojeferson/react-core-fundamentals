import { useState, useEffect } from "react";

const UseEffectExamples = () => {
  // sem dependencias
  useEffect(() => {
    console.log("rodou UE1");
  });

  // com dependencias vazias / array dep. vazio
  useEffect(() => {
    console.log("rodou UE2");
  }, []);

  // usestate ativa a re-renderizaçao
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // com dependencias
  useEffect(() => {
    console.log("rodou UE3");
  }, [count2]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
      <button onClick={() => setCount2(count2 + 1)}>Aumentar contagem 2</button>
    </div>
  );
};

export default UseEffectExamples;

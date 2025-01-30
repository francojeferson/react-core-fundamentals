import { useState } from "react";

// useState = hooks

// sempre que for alterar valor de algo => useState
// se somente leitura => var, state

const UseStateComponent = () => {
  // cria uma variavel de consulta, e uma variavel de alteraçao, e inicia o hook
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
    console.log(count);
  };

  const [user, setUser] = useState({
    name: "Albert",
    age: 76,
    hobbies: ["sailing", "reading"],
  });

  const updateUserAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>

      <p>
        Nome: {user.name} e idade: {user.age}
      </p>

      <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
  );
};

export default UseStateComponent;

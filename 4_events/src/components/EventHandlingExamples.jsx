import { useState } from "react";

const EventHandlingExamples = () => {
  const handleClick = () => {
    alert("Testando");
  };

  const handleGreet = (name) => {
    alert(`Olá ${name}`);
  };

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`enviado! ${name}`);
  };

  return (
    <div>
      <button onClick={() => alert("oi")}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button>
      <br />
      <button onClick={() => handleGreet("Leonardo")}>Dizer Olá Leonardo</button>
      <button onClick={() => handleGreet("Ayrton")}>Dizer Olá Ayrton</button>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EventHandlingExamples;

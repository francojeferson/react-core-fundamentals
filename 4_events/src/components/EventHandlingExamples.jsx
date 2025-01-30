import { useState } from "react";

const EventHandlingExamples = () => {
  const handleClick = () => {
    alert("Testando");
  };

  const handleGreet = (name) => {
    alert(`Olá ${name}`);
  };

  return (
    <div>
      <button onClick={() => alert("oi")}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button>
      <br />
      <button onClick={() => handleGreet("Leonardo")}>Dizer Olá Leonardo</button>
      <button onClick={() => handleGreet("Ayrton")}>Dizer Olá Ayrton</button>
    </div>
  );
};

export default EventHandlingExamples;

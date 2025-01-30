import { useState } from "react";

const EventHandlingExamples = () => {
  const handleClick = () => {
    alert("Testando");
  };

  return (
    <div>
      <button onClick={() => alert("oi")}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button>
    </div>
  );
};

export default EventHandlingExamples;

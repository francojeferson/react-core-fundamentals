import React from "react";

const PropsExample = (props) => {
  return (
    <div>
      <h3>Olá {props.nome}</h3>
      <p>Eu tenho {props.idade} anos.</p>
    </div>
  );
};

export default PropsExample;

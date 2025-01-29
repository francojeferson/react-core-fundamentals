import React from "react";

const JsxExamples = () => {
  const userName = "Leonardo";

  const user = {
    name: "Ayrton",
    lastName: "Senna",
  };

  function getGreeting(name) {
    return `Olá ${name}`;
  }

  const isUserLoggedIn = false;

  return (
    <div>
      {/* BASICO */}
      <h2>Conteúdo que o usuário vai ver</h2>
      {/* Listando dados do usuário */}
      <p>O nome do usuário é: {userName}</p>

      <p>
        Usuário: {user.name} {user.lastName}
      </p>

      <p>{2 + 2}</p>

      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Jeff")}</p>

      {/* DIFERENCAS DO HTML */}
      <div className="alguma-coisa">Este cara</div>

      <div className="teste">ok</div>

      <button onClick={() => alert("teste")}>clique em mim</button>

      <input type="text" placeholder="Digite algo" />

      {/* RENDERIZACAO CONDICIONAL */}
      {isUserLoggedIn ? (
        <div>
          <p>Caso: está logado</p>
        </div>
      ) : (
        <div>
          <p>Caso: NAO está logado</p>
        </div>
      )}
    </div>
  );
};

export default JsxExamples;

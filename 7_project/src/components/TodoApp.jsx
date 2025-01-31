import { useState } from "react";

import "./TodoApp.css";

const TodoApp = () => {
  // lista de tarefas
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1 className="title">Lista de Tarefas</h1>
      {/* form pra adicionar tarefas */}

      {/* lista de tarefas */}
      {todos.length === 0 && <p className="empty">nao há tarefas.</p>}
    </div>
  );
};

export default TodoApp;

import { useState } from "react";

import "./TodoApp.css";

const TodoApp = () => {
  // lista de tarefas
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1 className="title">Lista de Tarefas</h1>
    </div>
  );
};

export default TodoApp;

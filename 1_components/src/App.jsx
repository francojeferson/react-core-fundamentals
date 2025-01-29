// Componente Pai
import "./App.css";

// 4:Importa o componente filho
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <>
      <h1>Hello World React</h1>
      {/* 5:Utiliza o componente importado no JSX */}
      <FunctionalComponent/>
    </>
  );
}

export default App;

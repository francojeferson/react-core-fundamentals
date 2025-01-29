// Componente Pai
import "./App.css";

// 4:Importa o componente filho
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";

function App() {
  return (
    <>
      <h1>Hello World React</h1>
      {/* 5:Utiliza o componente importado no JSX */}
      <FunctionalComponent />
      <ClassComponent/>
      <PropsExample nome="Jeff" idade={35}/>
    </>
  );
}

export default App;

import React from "react";

const StylesExamples = () => {
  // inline
  const inlineStyle = {
    color: "blue",
    fontSize: "20px",
  };

  return (
    <div>
      <h2 style={inlineStyle}>Estilos inline</h2>
    </div>
  );
};

export default StylesExamples;

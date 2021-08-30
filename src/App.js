import "./App.css";
import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import Options from "./components/Options";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState("p");
  const [inputValue, setinputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState("Yes");
  const [copiedCode, setCopiedCode] = useState(false);

  return (
    <div className="App">
      <Container>
        <Title />
        <Options />
      </Container>
    </div>
  );
}

export default App;

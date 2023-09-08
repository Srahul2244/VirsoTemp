import React from "react";
import "./App.css";
import Temperature from "./components/Temperature";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Temperature />
      </ChakraProvider>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Select,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";

const Temperature = () => {
  const [text, setText] = useState("");
  const [tempScale, setTempScale] = useState("celsius");
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");

  const HandleCelsius = () => {
    if (!text.match(/^\d*\.?\d*$/)) {
      setErr("Please enter a valid number");
      setRes("");
      return;
    }

    const temperature = parseFloat(text);
    if (tempScale === "fahrenheit") {
      const celsius = ((temperature - 32) * 5) / 9;
      setRes(`${text}°F is equal to ${celsius.toFixed(2)}°C`);
      setErr("");
    } else {
      setRes("");
      setErr("Please select a different conversion scale.");
    }
  };

  const HandleFahrenheit = () => {
    if (!text.match(/^\d*\.?\d*$/)) {
      setErr("Please enter a valid number");
      setRes("");
      return;
    }

    const temperature = parseFloat(text);
    if (tempScale === "celsius") {
      const fahrenheit = (temperature * 9) / 5 + 32;
      setRes(`${text}°C is equal to ${fahrenheit.toFixed(2)}°F`);
      setErr("");
    } else {
      setRes("");
      setErr("Please select a different conversion scale.");
    }
  };

  return (
    <Container
      style={{
        width: "400px",
        margin: "20px",
      }}
    >
      <Box p={4}>
        <Heading as="h2" size="md" mb={4}>
          Temperature Converter
        </Heading>
        <VStack spacing={4}>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter temperature"
          />

          <Select
            value={tempScale}
            onChange={(e) => setTempScale(e.target.value)}
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </Select>
          <Button colorScheme="blue" onClick={HandleCelsius}>
            Celsius
          </Button>
          <Button colorScheme="teal" onClick={HandleFahrenheit}>
            Fahrenheit
          </Button>
          {err && <Text color="red">{err}</Text>}
          {res && <Text>{res}</Text>}
        </VStack>
      </Box>
    </Container>
  );
};

export default Temperature;

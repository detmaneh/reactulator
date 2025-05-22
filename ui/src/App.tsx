import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from 'react-bootstrap/Stack';
import RowComponent from "./components/RowComponent/RowComponent";
import { CustomButtonProps } from "./util/types";
import { containerStyle,innerContainerStyle,rowStyleButtons,rowStyleDisplay,midContainerStyle,mainDiv } from './util/styles'

function App() {
  const [data, setData] = React.useState(0);
  const [operation, setOperation] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num1Lock, setNum1Lock] = useState(false);
  const [operationInProgress, setOperationInProgress] = useState(false);

  const equalClicked = async () => {
    let path = "/" + operation;
    try {
      const response = await fetch(path, {
        method: "POST",
        body: JSON.stringify({ num1: num1, num2: num2 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response}`);
      }
      const responseData = await response.json();
      console.log("Success: num1:"+num1+" num2:"+num2+  " = "+responseData.message);
      setData(responseData.message);
      setNum1(responseData.message);
    } catch (error) {
      console.error("Error:", error);
    }
    equalClearNums();
  };

  const equalClearNums = () => {
    setNum2(0);
    setNum1Lock(false)
  }

  const clearNums = () => {
    setOperationInProgress(false);
    setNum1(0);
    setNum2(0);
    setNum1Lock(false)
  }

  const clearClicked = () => {
    setData(0);
    clearNums();
  };
  const numberClicked = (e: any) => {
    var value = e.target.value;
    if ( data !== 0 || String(data) !== "0" || operationInProgress ) {
      var tempValue = "";
      if ( !(num1Lock && num2 === 0)) {
        tempValue += String(data);
      } 
      tempValue += String(value)
      value = Number(tempValue);
    }
    if (!num1Lock) {
      setNum1(value);
    } else {
      setNum2(value);
    }
    setData(value);
  };

  const changeOperation = (e: any) => {
    let op = e.target.title
    setOperation(op);
    console.log(op);
    if (!num1Lock) {
      setNum1Lock(true)
      setOperationInProgress(true);
    }
  };

  const row1: CustomButtonProps[] = [
    { value: "0", textValue: "0", type: "value", pos: 0, size: 2, onClick: numberClicked, isDoubleSize: true},
    { value: ".", textValue: ".", type: "dot", pos: 2, size: 1, onClick: numberClicked },
    { value: "=", textValue: "equal", type: "action", pos: 3, size: 1, onClick: equalClicked, isColored: true },
  ];

  const row2: CustomButtonProps[] = [
    { value: "1", textValue: "1", type: "value", pos: 0, size: 1, onClick: numberClicked },
    { value: "2", textValue: "2", type: "value", pos: 1, size: 1, onClick: numberClicked },
    { value: "3", textValue: "3", type: "value", pos: 2, size: 1, onClick: numberClicked },
    { value: "+", textValue: "sum", type: "actioncol", pos: 3, size: 1, onClick: changeOperation, isColored: true},
  ];

  const row3 = [
    { value: "4", textValue: "4", type: "value", pos: 0, size: 1, onClick: numberClicked },
    { value: "5", textValue: "5", type: "value", pos: 1, size: 1, onClick: numberClicked },
    { value: "6", textValue: "6", type: "value", pos: 2, size: 1, onClick: numberClicked },
    { value: "-", textValue: "sub", type: "actioncol", pos: 3, size: 1, onClick: changeOperation, isColored: true },
  ];

  const row4: CustomButtonProps[] = [
    { value: "7", textValue: "7", type: "value", pos: 0, size: 1, onClick: numberClicked },
    { value: "8", textValue: "8", type: "value", pos: 1, size: 1, onClick: numberClicked },
    { value: "9", textValue: "9", type: "value", pos: 2, size: 1, onClick: numberClicked },
    { value: "x", textValue: "mul", type: "actioncol", pos: 3, size: 1, onClick: changeOperation, isColored: true },
  ];

  const row5: CustomButtonProps[] = [
    { value: "AC", textValue: "clear", type: "actionrow", pos: 0, size: 1, onClick: clearClicked, isRedColored: true },
    { value: "+-", textValue: "sub", type: "actionrow", pos: 0, size: 1, onClick: changeOperation, isColored: true },
    { value: "%", textValue: "perc", type: "actionrow", pos: 0, size: 1, onClick: changeOperation, isColored: true },
    { value: "/", textValue: "div", type: "actioncol", pos: 0, size: 1, onClick: changeOperation, isColored: true },
  ];

  const mainContent = [row5, row4, row3, row2, row1];

  return (
    <div style={mainDiv}>
    <Container style={containerStyle}>
      <Container style={midContainerStyle}>
        <Row style={rowStyleDisplay}>{data}</Row>
        <Row style={rowStyleButtons}>
          <Stack style={innerContainerStyle}>
            {mainContent.map((arrayToUse) => (
              <RowComponent array={arrayToUse} />
            ))}
          </Stack>
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default App;
import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";

const operations = [
  '+', '-', '*', '/', '='
];

const calculate = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return firstOperand;
  }
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstOperand: 0,
      secondOperand: null,
      operation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
  }

  render() {
    const firstOperand = this.state.firstOperand;
    const secondOperand = this.state.secondOperand;
    const operation = this.state.operation;
    return (
      <div>
        <Screen firstOperand={firstOperand} secondOperand={secondOperand} operation={operation} />
        <Buttons operations={operations} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
import React from "react";
import Panel from "./Panel";
import Screen from "./Screen";
import './Calculator.css';

const operations = [
  ['^', '!', '+-', 'C', '()', '<=', '/'],
  ['asin', 'sin', '1/x', '7', '8', '9', '*'],
  ['acos', 'cos', 'sqrt', '4', '5', '6', '-'],
  ['atan', 'tan', 'ln', '1', '2', '3', '+'],
  ['lg', 'pi', 'e', '0', '%', ',', '='],
];


const calculate = (expression) => {
  try {
    const calcFunc = new Function(`return ${expression}`);
    return calcFunc();
  } catch (e) {
    return 'Error';
  }
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: null,
      result: '',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleButtonClick(e) {
    const operation = e.target.value;
    let result = this.state.result;
    switch (operation) {
      case '=':
        result = calculate(this.state.result);
        break;
      case 'C':
        result = '';
        break;
      case '<=':
        result = result.slice(0, -1);
        break;
      default:
        if (result === 'Error') {
          result = operation;
        } else {
          result += operation;
        }
    }
    this.setState({
      result
    });
  }

  handleChange(e) {
    this.setState({
      result: e.target.value
    })
  }

  render() {
    const result = this.state.result;
    return (
      <div className="calc">
        <Screen result={result} onChange={this.handleChange}/>
        <Panel operations={operations} onButtonClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default Calculator;


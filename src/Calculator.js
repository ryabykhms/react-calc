import React from "react";
import Panel from "./Panel";
import Screen from "./Screen";
import Calc from "./js-calc-parser/Calc";
import './Calculator.css';

const operations = [
  ['^', '!', '+-', 'C', '()', '<=', '/'],
  ['asin', 'sin', '1/x', '7', '8', '9', '*'],
  ['acos', 'cos', 'sqrt', '4', '5', '6', '-'],
  ['atan', 'tan', 'ln', '1', '2', '3', '+'],
  ['lg', 'pi', 'e', '0', '%', '.', '='],
];


const calculate = (expression) => {
  try {
    const calc = new Calc();
    const result = calc.calculate(expression);
    return result;
    // const calcFunc = new Function(`return ${expression}`);
    // return calcFunc();
  } catch (e) {
    return 'Error';
  }
};

const countParentheses = (str) => {
  const countOpen = str !== null ? str.split('(').length - 1 : 0;
  const countClose = str !== null ? str.split(')').length - 1 : 0;
  return {
    countOpen,
    countClose
  };
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: null,
      result: '',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleButtonClick(e) {
    const operation = e.target.value;
    let result = this.state.result;
    let history = this.state.history;
    switch (operation) {
      case '=':
        const countParentheses1 = countParentheses(this.state.result);
        const countMissed = countParentheses1.countOpen - countParentheses1.countClose;
        result = this.state.result;
        for(let i=0; i < countMissed; i++) {
          result += ')';
        }
        result = calculate(result);
        history = result === 'Error' ? null : result;
        break;
      case 'C':
        result = '';
        break;
      case '<=':
        result = result.slice(0, -1);
        break;
      case '()':
        const countParentheses2 = countParentheses(result);
        const lastChar = result.slice(-1);
        result = /\D/.test(lastChar) && lastChar !== ')' ? result + '(' :
          countParentheses2.countOpen > countParentheses2.countClose ?
          result + ')' :
          countParentheses2.countOpen === countParentheses2.countClose ? result + '(' : result;
        break;
      case '+-':
        if (result.charAt(0) === '-') {
          if (/^-\d+$/.test(result) === false) {
            result = result.slice(2, result.length-1);
          } else {
            result = result.slice(1);
          }
        } else if (result !== '') {
          if (/^\d+$/.test(result) === false) {
            result = '-(' + result + ')';
          } else {
            result = '-' + result + '';
          }
        }
        break;
      case '1/x':
        if (result.indexOf('1/(') === 0 && result.charAt(result.length-1) === ')') {
          result = result.substr(3, result.length-4);
        } else {
          result = '1/(' + result + ')';
        }
        break;
      case 'pi':
        result += 'PI';
        break;
      case 'e':
        result += 'E';
        break;
      case 'sin':
      case 'cos':
      case 'tan':
      case 'asin':
      case 'acos':
      case 'atan':
      case 'sqrt':
      case 'ln':
      case 'lg':
        result = result + operation + '(';
        break;
      default:
        if (result === 'Error') {
          result = operation;
        } else {
          result += operation;
        }
    }
    this.setState({
      result,
      history
    });
  }

  handleHistoryClick(e) {
    const history = e.target.innerHTML;
    if (history) {
      this.setState((prevState) => ({
        result: prevState.result + history
      }));
    }
  }

  handleChange(e) {
    this.setState({
      result: e.target.value
    })
  }

  render() {
    const result = this.state.result;
    const history = this.state.history;
    return (
      <div className="calc">
        <Screen result={result} history={history} onChange={this.handleChange} onHistoryClick={this.handleHistoryClick} />
        <Panel operations={operations} onButtonClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default Calculator;


const { Expression } = require('./Expression');

class BinaryExpression extends Expression {
  constructor(operation, expressionLeft, expressionRight) {
    super();
    this.expressionLeft = expressionLeft;
    this.expressionRight = expressionRight;
    this.operation = operation;
  }

  evaluate() {
    switch (this.operation) {
      case '-':
        return this.expressionLeft.evaluate() - this.expressionRight.evaluate();
      case '*':
        return this.expressionLeft.evaluate() * this.expressionRight.evaluate();
      case '/':
        return this.expressionLeft.evaluate() / this.expressionRight.evaluate();
      case '^':
        return Math.pow(this.expressionLeft.evaluate(), this.expressionRight.evaluate());
      case '+%':
        return this.expressionLeft.evaluate() + this.expressionLeft.evaluate() * this.expressionRight.evaluate() / 100;
      case '-%':
        return this.expressionLeft.evaluate() - this.expressionLeft.evaluate() * this.expressionRight.evaluate() / 100;
      case '*%':
        return this.expressionLeft.evaluate() * this.expressionLeft.evaluate() * this.expressionRight.evaluate() / 100;
      case '/%':
        return this.expressionLeft.evaluate() / this.expressionLeft.evaluate() * this.expressionRight.evaluate() / 100;
      case '+':
      default:
        return this.expressionLeft.evaluate() + this.expressionRight.evaluate();
    }
  }

  toString() {
    return '[' + this.expressionLeft + ' ' + this.operation + ' ' + this.expressionRight + ']';
  }
}

module.exports = { BinaryExpression };
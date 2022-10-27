import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    this.setState((state) => calculate(state, e.target.value));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="Calculator">
        <div className="container min-w-max grid grid-flow-row-dense grid-cols-4 grid-rows-6 px-72 pt-32">
          <div className="card col-span-4 border-solid border-2 h-12 bg-gray-400 py-2 pr-1">
            <span className="calcScreen">
              {total}
              {operation}
              {next}
            </span>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="AC">
              AC
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="+/-">
              +/-
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="%">
              %
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" onClick={this.clickHandler} value="÷">
              ÷
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="7">
              7
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="8">
              8
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="9">
              9
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" onClick={this.clickHandler} value="x">
              X
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="4">
              4
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="5">
              5
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="6">
              6
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" onClick={this.clickHandler} value="-">
              -
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="1">
              1
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="2">
              2
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="3">
              3
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" onClick={this.clickHandler} value="+">
              +
            </button>
          </div>
          <div className="col-span-2 border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value="0">
              0
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" onClick={this.clickHandler} value=".">
              .
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" onClick={this.clickHandler} value="=">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

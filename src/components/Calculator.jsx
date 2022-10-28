import React from 'react';
import calculate from '../logic/calculate';

const characters = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3];
const symbols = ['÷', 'x', '-', '+', '='];

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
      <div className="Calculator h-screen py-44 px-48">
        <div className="container flex flex-col h-full">
          <div className="bg-gray-400 w-full text-white text-right h-10 flex py-2 pr-1">
            <span className="calcScreen">
              {total}
              {operation}
              {next}
            </span>
          </div>
          <div className="flex w-full">
            <div className="bg-gray-100 grid grid-cols-3 w-full">
              {characters.map((button) => (
                <button
                  type="button"
                  className="bg-gray-100 border px-2 py-2 hover:font-extrabold"
                  value={button}
                  key={button}
                  onClick={this.clickHandler}
                >
                  {button}
                </button>
              ))}
              <button
                type="button"
                className="col col-span-2 hover:font-extrabold border bg-gray-100 py-2"
                onClick={this.clickHandler}
                value={0}
              >
                0
              </button>
              <button
                type="button"
                className="border hover:font-extrabold bg-gray-100 py-2 px-2"
                onClick={this.clickHandler}
                value="."
              >
                .
              </button>
            </div>
            <div className="w-3/12 flex flex-col">
              {symbols.map((sign) => (
                <button
                  type="button"
                  className="border hover:font-extrabold bg-orange-400 py-2"
                  key={sign}
                  value={sign}
                  onClick={this.clickHandler}
                >
                  {sign}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

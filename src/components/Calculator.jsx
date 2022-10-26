import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="Calculator">
        <div className="container grid grid-flow-row-dense grid-cols-4 grid-rows-6 px-72 pt-32">
          <div className="col-span-4 border-solid border-2 h-12 bg-gray-400">
            0
          </div>
          <div className="border-solid border-2 bg-gray-100">AC</div>
          <div className="border-solid border-2 bg-gray-100">+/-</div>
          <div className="border-solid border-2 bg-gray-100">%</div>
          <div className="border-solid border-2 bg-orange-400">÷</div>
          <div className="border-solid border-2 bg-gray-100">7</div>
          <div className="border-solid border-2 bg-gray-100">8</div>
          <div className="border-solid border-2 bg-gray-100">9</div>
          <div className="border-solid border-2 bg-orange-400">x</div>
          <div className="border-solid border-2 bg-gray-100">4</div>
          <div className="border-solid border-2 bg-gray-100">5</div>
          <div className="border-solid border-2 bg-gray-100">6</div>
          <div className="border-solid border-2 bg-orange-400">-</div>
          <div className="border-solid border-2 bg-gray-100">1</div>
          <div className="border-solid border-2 bg-gray-100">2</div>
          <div className="border-solid border-2 bg-gray-100">3</div>
          <div className="border-solid border-2 bg-orange-400">+</div>
          <div className="col-span-2 border-solid border-2 bg-gray-100">0</div>
          <div className="border-solid border-2 bg-gray-100">.</div>
          <div className="border-solid border-2 bg-orange-400">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;

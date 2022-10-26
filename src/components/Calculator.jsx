import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="Calculator">
        <div className="container grid grid-flow-row-dense grid-cols-4 grid-rows-6 px-72 pt-32">
          <div className="card col-span-4 border-solid border-2 h-12 bg-gray-400 py-2">
            0
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">AC</div>
          <div className="border-solid border-2 bg-gray-100 py-2">+/-</div>
          <div className="border-solid border-2 bg-gray-100 py-2">%</div>
          <div className="border-solid border-2 bg-orange-400 py-2">÷</div>
          <div className="border-solid border-2 bg-gray-100 py-2">7</div>
          <div className="border-solid border-2 bg-gray-100 py-2">8</div>
          <div className="border-solid border-2 bg-gray-100 py-2">9</div>
          <div className="border-solid border-2 bg-orange-400 py-2">x</div>
          <div className="border-solid border-2 bg-gray-100 py-2">4</div>
          <div className="border-solid border-2 bg-gray-100 py-2">5</div>
          <div className="border-solid border-2 bg-gray-100 py-2">6</div>
          <div className="border-solid border-2 bg-orange-400 py-2">-</div>
          <div className="border-solid border-2 bg-gray-100 py-2">1</div>
          <div className="border-solid border-2 bg-gray-100 py-2">2</div>
          <div className="border-solid border-2 bg-gray-100 py-2">3</div>
          <div className="border-solid border-2 bg-orange-400 py-2">+</div>
          <div className="col-span-2 border-solid border-2 bg-gray-100 py-2">0</div>
          <div className="border-solid border-2 bg-gray-100 py-2">.</div>
          <div className="border-solid border-2 bg-orange-400 py-2">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;

import React, { useState } from 'react';
import Calculate from '../logic/calculate';

const characters = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3];
const symbols = ['÷', 'x', '-', '+', '='];

const Calculator = () => {
  const [data, setdata] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const { total, next, operation } = data;

  const clickHandler = (e) => {
    setdata((data) => Calculate(data, e.target.value));
  };

  return (
    <div className="Calculator h-screen pt-32 px-8 lg:pt-36 lg:px-72 md:pt-44 md:px-16">
      <div className="container flex flex-col h-screen">
        <div className="bg-gray-400 w-full text-white text-right h-10 flex py-2 pr-1">
          <span className="calcScreen mr-2 ml-auto">
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
                onClick={clickHandler}
              >
                {button}
              </button>
            ))}
            <button
              type="button"
              className="col col-span-2 hover:font-extrabold border bg-gray-100 py-2"
              onClick={clickHandler}
              value={0}
            >
              0
            </button>
            <button
              type="button"
              className="border hover:font-extrabold bg-gray-100 py-2 px-2"
              onClick={clickHandler}
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
                onClick={clickHandler}
              >
                {sign}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import numbers from '../images/numbers.png';

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
    <div className="Calculator h-screen pt-32 px-12 lg:pt-36 lg:px-12 md:pt-44 md:px-12 flex flex-row gap-32 bg-stone-900 rounded-b-large">
      <div className="w-3/12 text-2xl hover:font-black font-extrabold text-emerald-300 gap-20">
        <h1> Lets do some math!</h1>
        <img src={numbers} alt="magic numbers" />
      </div>
      <div className="container flex flex-col w-9/12 pl=8">
        <div className="bg-gray-400 w-full text-white text-right h-10 flex py-2 pr-1 hover:border-4 ">
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
                className="bg-gray-100 border border-2 px-2 py-2 font-black text-emerald-300 hover:border-4 hover:border-emerald-300"
                value={button}
                key={button}
                onClick={clickHandler}
              >
                {button}
              </button>
            ))}
            <button
              type="button"
              className="col col-span-2 font-black text-emerald-300 border border-2 bg-gray-100 py-2 hover:border-4 hover:border-emerald-300"
              onClick={clickHandler}
              value={0}
            >
              0
            </button>
            <button
              type="button"
              className="font-black text-emerald-300 bg-gray-100 py-2 px-2 border-2 hover:border-4 hover:border-emerald-300"
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
                className="border border-2 text-xl font-black bg-emerald-300 py-2 hover:border-4"
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

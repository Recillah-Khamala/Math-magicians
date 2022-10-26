import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.PureComponent {
  // convert to button fields
  // give operations a different class name
  // Add event handlers
  render() {
    return (
      <div className="Calculator">
        <div className="container grid grid-flow-row-dense grid-cols-4 grid-rows-6 px-72 pt-32">
          <div className="card col-span-4 border-solid border-2 h-12 bg-gray-400 py-2 pr-1">
            0
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" value={AC}>
              AC
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" value='+/-'>
              +/-
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type="button" value='%'>
              %
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" className="operator" value="÷">
              ÷
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='7'>
              7
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='8'>
              8
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='9'>
              9
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" className="operator">
              X
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='4'>
              4
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='5'>
              5
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='6'>
              6
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" className="operator">
              -
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='1'>
              1
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='2'>
              2
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='3'>
              3
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" className="operator">
              +
            </button>
          </div>
          <div className="col-span-2 border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='0'>
              0 
            </button>
          </div>
          <div className="border-solid border-2 bg-gray-100 py-2">
            <button type='button' value='.'>
              .
            </button>
          </div>
          <div className="border-solid border-2 bg-orange-400 py-2">
            <button type="button" className="operator">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

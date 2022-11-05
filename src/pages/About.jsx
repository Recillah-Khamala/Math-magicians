import React, { useState } from 'react';

const Quote = () => {
  const [array, setArray] = useState({
    id: 16,
    author: 'Galileo',
    quote: 'Mathematics is the language with which God wrote the universe.',
  });

  const [clicked, setClicked] = useState(false);

  const getQuote = async () => {
    const mathQuote = await fetch(
      'https://random-math-quote-api.herokuapp.com/'
    );
    const rest = await mathQuote.json();
    setArray(rest);
  };

  const { quote, author } = arr;

  return(
    <div className="w-full pt-20 relative h-screen bg-gradient-to-r from-gray-300 to-gray-500 text-black">
      <div className="mt-28 w-4/12 mx-auto px-8 py-4 text-center shadow-sm shadow-gray-100 bg-white rounded-lg">
        <blockquote>{quote}</blockquote>
        <p className="italic font-thin text-right">
          --
          {author}
        </p>
        <button
          type="button"
          className="px-12 py-1 rounded-lg bg-red-300"
          onClick={() => getQuote()}
          onDoubleClick={() => setClicked(!clicked)}
        >
          {clicked ? 'shuffled' : 'shuffle'}
        </button>
      </div>
    </div>
  )
};

export default Quote;

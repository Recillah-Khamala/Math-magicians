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
      'https://random-math-quote-api.herokuapp.com/',
    );
    const rest = await mathQuote.json();
    setArray(rest);
  };

  const { quote, author } = array;

  return (
    <div className="w-full pt-20 relative h-screen bg-stone-900 text-black">
      <div className="bg-emerald-300 text-2xl font-lg my-44 mx-56 rounded-sm py-4 px-4 w-9/12 gap-8rounded-lg">
        <blockquote>{quote}</blockquote>
        <p className="italic font-thin text-right">
          --
          {author}
        </p>
        <button
          type="button"
          className="px-12 py-1 rounded-lg bg-emerald-300"
          onClick={() => getQuote()}
          onDoubleClick={() => setClicked(!clicked)}
        >
          {clicked ? 'shuffled' : 'shuffle'}
        </button>
      </div>
    </div>
  );
};

export default Quote;

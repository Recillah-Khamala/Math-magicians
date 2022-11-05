import React from 'react';
import math from '../images/math.png';

const Home = () => (
  <section className="w-full pt-32 h-screen relative bg-stone-900 rounded-b-large ">
    <h1 className="text-4xl mx-10 text-emerald-300 text-3xl hover:font-black font-bold">
      Welcome to Our Page!
    </h1>
    <div className="w-full flex flex-row gap-32">
      <img src={math} alt="math-magic" className="w-3/12 pl-20" />
      <div className="bg-emerald-300 text-xl font-lg my-8 mx-20 rounded-sm py-4 px-4 w-9/12 gap-8">
        <p>
          Did you know numeric values ​​on calculators move from bottom to top,
          and not from top to bottom, as on phones - calculators come from
          mechanical counting machines, where the number is traditionally
          located from bottom to top.
        </p>
        <p>
          Changing the phone over time, they used to run with a special rotating
          disk for a very long time, and when the time came for digital buttons
          or push-buttons, today it was replaced in digital objects, making the
          arrangement of numbers similar Placed as expected, similar to the disc
          on the phone - from top to bottom also in digital calculator, with
          zero at the end.
        </p>
      </div>
    </div>
  </section>
);

export default Home;

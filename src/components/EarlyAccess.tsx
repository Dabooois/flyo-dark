import React from 'react';
import Button from './Button';

const EarlyAccess = () => {
  return (
    <section className='container relative '>
      <div className='card-bg p-8 flex items-center flex-col shadow-lg rounded-xl'>
        <h4 className='text-2xl font-bold mb-8'>Get early access today</h4>
        <p className='text-center text-[1.3rem] text-slate-300 leading-8'>
          It ony takes a munute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <input
          type='text'
          name='search'
          placeholder='email@example.com'
          className='placeholder:italic bg-white border border-slate-400 placeholder:text-slate-400 block w-[75%] mx-auto p-4 rounded-full my-8 text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 sm:text-sm'
          id='search'
        />
        <Button additionalClass='w-[75%]'>Get Started For Free</Button>
      </div>
    </section>
  );
};

export default EarlyAccess;
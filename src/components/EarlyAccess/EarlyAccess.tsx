import React from 'react';
import Button from '../Button/Button';

const EarlyAccess = () => {
  return (
    <section className='container relative '>
      <div className='flex flex-col  gap-16 py-16 shadow-lg bg-card-color rounded-xl lg:max-w-[80rem] lg:mx-auto'>
        <h4 className='text-2xl text-center font-bold mx-8 lg:text-[3rem]'>
          Get early access today
        </h4>
        <p className='text-center text-[1.3rem] lg:text-[1.4rem] mx-8 lg:mx-16 text-slate-300 leading-8'>
          It ony takes a munute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className='px-8 lg:px-16 lg:grid grid-cols-3 gap-10 items-center'>
          <input
            type='text'
            name='search'
            placeholder='email@example.com'
            className='form-input col-span-2'
            id='search'
          />
          <Button className='mt-8 lg:mt-0 py-6 w-full'>
            Get Started For Free
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EarlyAccess;

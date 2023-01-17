import React from 'react';
import StayProductiveImage from '../assets/images/illustration-stay-productive.png';
import IconArrow from '../assets/images/icon-arrow.svg';

const StayProductive = () => {
  return (
    <div className='container relative mb-[12rem]'>
      <div className='shrink-0 mb-[6rem] '>
        <img
          src={StayProductiveImage}
          alt='stay productive'
          className='h-auto w-full mx-auto'
        />
      </div>
      <h2 className='text-[1.8rem] font-semibold mb-6'>
        Stay Productive, wherever you are
      </h2>
      <p className='text-[1.30rem] font-[400]  leading-[2.5rem]'>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>

      <p className='my-6 text-[1.30rem] font-[400]  leading-[2.5rem]'>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <button className=' flex flex-row items-center primary-color text-lg font-[400]  border-bottom  leading-10  '>
        See how Flyo works
        <img src={IconArrow} className='ml-3' alt='icon arrow' />
      </button>
    </div>
  );
};

export default StayProductive;

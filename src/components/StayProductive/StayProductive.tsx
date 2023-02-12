import React from 'react';
import StayProductiveImage from '../../assets/images/illustration-stay-productive.png';
import IconArrow from '../../assets/images/icon-arrow.svg';

const StayProductive = () => {
  return (
    <section className='container  mb-[12rem] lg:mb-spaceBottom flex flex-col lg:flex-row  justify-center lg:space-x-10'>
      <div className='shrink-0 mb-[6rem] lg:mb-0 '>
        <img
          src={StayProductiveImage}
          alt='stay productive'
          className='h-auto w-full mx-auto'
        />
      </div>
      <div className='flex flex-col  justify-center gap-6'>
        <h2 className='text-[1.8rem] lg:text-[4rem] font-semibold'>
          Stay Productive, wherever you are
        </h2>
        <p className='text-[1.30rem]  leading-10'>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>

        <p className='text-[1.30rem] leading-10'>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <a
          href='#'
          className='text-underline  flex items-center justify-start gap-4 mr-auto  text-lg leading-10 '
        >
          <span>See how Flyo works</span>
          <img src={IconArrow} alt='icon arrow' className='block' />
        </a>

        {/* <button className=' border-2  border-b-[#65e2d9]    '></button> */}
      </div>
    </section>
  );
};

export default StayProductive;

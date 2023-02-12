import React from 'react';
import BannerImage from '../assets/images/illustration-intro.png';
import BannerBackground from '../assets/images/bg-curvy-mobile.svg';
import { Button } from './Button/Button.styles';

const Banner = () => {
  return (
    <section className='background-color'>
      <div className='container' style={{ padding: 0 }}>
        <div
          className='relative flex flex-col items-center justify-center background-image'
          id='hero-stack'
        >
          <img
            src={BannerImage}
            className='w-[80%]  h-auto mx-8 mt-8  background-banner'
            alt='banner image'
          />
          <h1 className='mx-8 mt-8 text-[2.2rem] font-bold text-center'>
            All your files in one secure location, accessible anywhere.
          </h1>
        </div>
        <div className=' mb-[12rem] text-center background-body '>
          <p className='p-4 mb-8 text-center text-[1.2rem] leading-normal text-slate-300'>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>

          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from 'react';

import Quote from '../assets/images/bg-quotes.png';
import { TestimonialsData } from '../constants/data.json';
const Testimonials = () => {
  return (
    <section
      className='container max-w-screen-md relative mb-[12rem] lg:mb-spaceBottom'
      id='testimonials'
    >
      <div className='px-0'>
        <img
          src={Quote}
          alt='quote'
          className='h-10 lg:h-14 self-start md:absolute mt-[-2.5rem] ml-4 lg:ml-[-1rem] z-[-2rem]'
        />
        <div className='flex flex-col lg:flex-row lg:gap-16 gap-8'>
          {TestimonialsData.map(({ description, image, name, role }, index) => {
            return (
              <article
                className='flex flex-col p-10 gap-6 bg-card-color mx-4 lg:mx-0  rounded-xl shadow-lg z-20'
                key={index}
              >
                <p className='font-[400] text-slate-300 text-lg lg:text-[1.4rem] leading-8 lg:leading-10'>
                  {description}
                </p>
                <aside className='flex gap-6'>
                  <img
                    src={image}
                    alt={name}
                    className='w-12 h-12 rounded-full'
                  />
                  <div>
                    <p className='font-bold'>{name}</p>
                    <p className='text-slate-400'>{role}</p>
                  </div>
                </aside>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

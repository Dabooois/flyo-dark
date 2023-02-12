import React from 'react';

export interface ICard {
  title: string;
  paragraph: string;
  icon: string;
}

const Card = ({ title, paragraph, icon }: ICard) => {
  return (
    <div className='flex flex-col items-center justify-center p-2 gap-8 '>
      <img src={icon} alt={title} className='h-28 w-auto mx-auto' />

      <h2 className='font-bold text-[1.6rem]'>{title}</h2>
      <p className='text-[1.2rem] md:text-[1.3rem] text-slate-300 text-center'>
        {paragraph}
      </p>
    </div>
  );
};

export default Card;

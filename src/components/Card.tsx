import React from 'react';

export interface ICard {
	title: string;
	paragraph: string;
	icon: string;
}

const Card = ({ title, paragraph, icon }: ICard) => {
	return (
		<div className='grid grid-cols-1  items-center mb-[5rem]'>
            <div className='mb-[3rem]'>
				<img src={icon} alt={title} className='h-28 w-auto mx-auto' />
			</div>
			<h2 className='font-bold text-[1.6rem] text-center mb-2 '>{title}</h2>
			<p className='text-md text-[1.2rem] text-slate-300 text-center'>{paragraph}</p>
		</div>
	);
};

export default Card;

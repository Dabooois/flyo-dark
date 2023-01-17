import React from 'react';
import BannerImage from '../assets/images/illustration-intro.png';
import BannerBackground from '../assets/images/bg-curvy-mobile.svg';
const Banner = () => {
	return (
		<React.Fragment>
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
			<div className='mx-8 mt-8 mb-[12rem] text-center'>
				<p className='m-4 text-center text-[1.4rem] leading-normal text-slate-300'>
					Fylo stores all your most important files in one secure
					location. Access them wherever you need, share and
					collaborate with friends family, and co-workers.
				</p>

				<button className='px-[8rem] py-[1.5rem] rounded-full btn outline-none m-8 text-xl font-semibold'>
					Get Started
				</button>
			</div>
		</React.Fragment>
	);
};

export default Banner;

import React from 'react';
import Profile1 from '../assets/images/profile-1.jpg';
import Profile2 from '../assets/images/profile-2.jpg';
import Profile3 from '../assets/images/profile-3.jpg';
import Quote from '../assets/images/bg-quotes.png';

const Testimonials = () => {
  const data = [
    {
      description:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has  become a well-oiled collaboration machine.',
      image: Profile1,
      name: 'Satish Patel',
      role: 'Founder & CEO, Huddle',
    },
    {
      description:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has  become a well-oiled collaboration machine.',
      image: Profile2,
      name: 'Bruce McKenzie',
      role: 'Founder & CEO, Huddle',
    },
    {
      description:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has  become a well-oiled collaboration machine.',
      image: Profile3,
      name: 'Iva Boyd',
      role: 'Founder & CEO, Huddle',
    },
  ];
  return (
    <section className='container relative mb-[12rem]' id='testimonials'>
      <img src={Quote} alt='quote' className='h-[2rem] w-auto  ml-8' />
      {data.map(({ description, image, name, role }, index) => {
        return (
          <article
            className=' shadow-lg flex flex-col gap-9 mx-8 p-8 card-bg mb-8 rounded-xl '
            key={index}
          >
            <p className='font-[400] text-slate-300 text-[1rem] leading-8'>
              {description}
            </p>
            <aside className='flex gap-6'>
              <img src={image} alt={name} className='w-12 h-12 rounded-full' />
              <div>
                <p className='font-bold'>{name}</p>
                <p className='text-slate-400'>{role}</p>
              </div>
            </aside>
          </article>
        );
      })}
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { ServiceData } from '../constants/service.json';
import Card from './Card';
const Services = () => {
  return (
    <section className='container mb-[20rem]'>
      <div className='grid sm:grid-rows-1 md:grid-cols-2 mx-auto lg:max-w-[80rem] gap-28'>
        {ServiceData.map(({ title, paragraph, icon }, id) => {
          return (
            <Card title={title} paragraph={paragraph} icon={icon} key={id} />
          );
        })}
      </div>
    </section>
  );
};

export default Services;

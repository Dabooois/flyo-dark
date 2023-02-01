import React, { ReactChild } from 'react';

interface IButton {
  children: JSX.Element | string;
  additionalClass?: string;
}

const Button = (props: IButton) => {
  const { children, additionalClass } = props;
  return (
    <button
      className={`block w-[70%] py-[1.5rem] mx-auto rounded-full btn outline-none text-xl font-semibold ${additionalClass} `}
    >
      {children}
    </button>
  );
};

export default Button;

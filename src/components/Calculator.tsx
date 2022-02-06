import React, { MouseEventHandler } from 'react';
import { ButtonPanel } from './ButtonPanel';
import { Display } from './Display';

export const Calculator = () => {
  const buttonHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event.currentTarget.id);
  };
  return (
    <div>
      <Display />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  );
};

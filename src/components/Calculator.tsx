import React, { MouseEventHandler, useState } from 'react';
import { calculate, State } from '../logic/calculate';
import { ButtonPanel } from './ButtonPanel';
import { Display } from './Display';

export const Calculator = () => {
  const [state, setState] = useState<State>({
    current: '0',
    operand: 0,
    operator: null,
    isNextClear: false,
  });
  const buttonHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event.currentTarget.id);

    const nextState = calculate(event.currentTarget.id, state);
    setState(nextState);
  };
  return (
    <div>
      <Display value={state.current} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  );
};

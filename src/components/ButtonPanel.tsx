import React, { MouseEventHandler } from 'react';
import { ButtonAtom } from './ButtonAtom';

type Props = {
  buttonHandler: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonPanel: React.FC<Props> = ({ buttonHandler }) => {
  return (
    <div>
      <div>
        <ButtonAtom id={'7'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'8'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'9'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'AC'} buttonHandler={buttonHandler} />
      </div>
      <div>
        <ButtonAtom id={'4'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'5'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'6'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'-'} buttonHandler={buttonHandler} />
      </div>
      <div>
        <ButtonAtom id={'1'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'2'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'3'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'+'} buttonHandler={buttonHandler} />
      </div>
      <div>
        <ButtonAtom id={'0'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'.'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'D'} buttonHandler={buttonHandler} />
        <ButtonAtom id={'='} buttonHandler={buttonHandler} />
      </div>
    </div>
  );
};

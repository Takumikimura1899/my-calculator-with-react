import React, { MouseEventHandler } from 'react';

type Props = {
  id: string;
  buttonHandler?: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonAtom: React.FC<Props> = ({ id }) => {
  const buttonHandlerOnClick: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    console.log('buttonHandlerOnClick', event.currentTarget.id);
  };
  return (
    <button onClick={buttonHandlerOnClick} id={id}>
      {id}
    </button>
  );
};

import React, { MouseEventHandler } from 'react';

type Props = {
  id: string;
  buttonHandler?: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonAtom: React.FC<Props> = ({ id, buttonHandler }) => {
  return (
    <button onClick={buttonHandler} id={id}>
      {id}
    </button>
  );
};

import React, { MouseEventHandler } from 'react';

type Props = {
  buttonHandler: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonPanel: React.FC<Props> = ({ buttonHandler }) => {
  return (
    <div>
      <div>
        <button id={'7'} onClick={buttonHandler}>
          7
        </button>
        <button>8</button>
        <button>9</button>
        <button>AC</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div>
        <button>0</button>
        <button>.</button>
        <button>D</button>
        <button>=</button>
      </div>
    </div>
  );
};

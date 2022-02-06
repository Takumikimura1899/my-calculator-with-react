import React from 'react';

type Props = {
  value: string;
};

export const Display: React.FC<Props> = ({ value }) => {
  return <div>{value}</div>;
};

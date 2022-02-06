export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

const isNumberButton = (button: string) => {
  const NumArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return NumArray.includes(button);
};

const handleNumberButton = (button: string, state: State): State => {
  if (state.current === '0') {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }

  return {
    ...state,
    current: state.current + button,
  };
};

export const calculate = (button: string, state: State): State => {
  // 数値かどうか
  if (isNumberButton(button)) {
    return handleNumberButton(button, state);
  }
  // オペレーターかどうか
  // if (isOperatorButton(button)) {
  // }
  // // .かどうか
  // if (isDotButton(button)) {
  // }
  // // 削除ボタンかどうか
  // if (isDeleteButton(button)) {
  // }
  // // ACかどうか
  // if (isAllClearButton(button)) {
  // }
  // // = かどうか
  // if (isEqualButton(button)) {
  // }
  return state;
};

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

const isOperatorButton = (button: string) => {
  return button === '+' || button === '-';
};

const isDotButton = (button: string) => {
  return button === '.';
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

const operate = (state: State): number => {
  const current = parseFloat(state.current);
  if (state.operator === '+') {
    return state.operand + current;
  }
  if (state.operator === '-') {
    return state.operand - current;
  }
  return current;
};

const handleOperatorButton = (button: string, state: State): State => {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true,
    };
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: button,
    isNextClear: true,
  };
};

const handleDotButton = (state: State): State => {
  if (state.current.indexOf('.') !== -1) {
    return state;
  }
  return {
    ...state,
    current: `${state.current}.`,
  };
};

export const calculate = (button: string, state: State): State => {
  // 数値かどうか
  if (isNumberButton(button)) {
    return handleNumberButton(button, state);
  }
  // オペレーターかどうか
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state);
  }
  // // .かどうか
  if (isDotButton(button)) {
    return handleDotButton(state);
  }
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

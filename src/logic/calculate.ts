export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

const isNumberButton = (button: string) => {
  const NumArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return NumArray.includes(button);
};

const isOperatorButton = (button: string) => {
  return button === '+' || button === '-';
};

const isDotButton = (button: string) => {
  return button === '.';
};

const isDeleteButton = (button: string) => {
  return button === 'D';
};

const isAllClearButton = (button: string) => {
  return button === 'AC';
};

const isEqualButton = (button: string) => {
  return button === '=';
};

const handleNumberButton = (button: string, state: State): State => {
  if (state.isNextClear) {
    return {
      ...state,
      current: button,
      isNextClear: false,
    };
  }
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

const handleDeleteButton = (state: State): State => {
  if (state.current.length === 1) {
    return {
      ...state,
      current: '0',
    };
  }
  return {
    ...state,
    current: state.current.substring(0, state.current.length - 1),
  };
};

const handleAllClearButton = (): State => {
  return {
    current: '0',
    operand: 0,
    operator: null,
    isNextClear: false,
  };
};

const handleEqualButton = (state: State): State => {
  if (state.operator === null) {
    return state;
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: 0,
    operator: null,
    isNextClear: true,
  };
};

export const calculate = (button: string, state: State): State => {
  // ??????????????????
  if (isNumberButton(button)) {
    return handleNumberButton(button, state);
  }
  // ??????????????????????????????
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state);
  }
  // // .????????????
  if (isDotButton(button)) {
    return handleDotButton(state);
  }
  // // ???????????????????????????
  if (isDeleteButton(button)) {
    return handleDeleteButton(state);
  }
  // // AC????????????
  if (isAllClearButton(button)) {
    return handleAllClearButton();
  }
  // // = ????????????
  if (isEqualButton(button)) {
    return handleEqualButton(state);
  }
  return state;
};

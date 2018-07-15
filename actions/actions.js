export const ADD_TODO = 'ADD_TODO';
export const INPUT_NUMBER = 'INPUT_NUMBER';
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const CLEAR = 'CLEAR';

let nextTodoId = 0;

export function addTodo(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}

export const onNumClick = (number) => ({
    type: INPUT_NUMBER,
    number,
});

export const onPlusClick = () => ({
    type: PLUS,
});

export const onMinusClick = () => ({
    type: MINUS,
});

export const onClearClick = () => ({
    type: CLEAR,
    resultValue: 0,
});
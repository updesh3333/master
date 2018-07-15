import { combineReducers } from 'redux'
import { ADD_TODO, INPUT_NUMBER, PLUS, MINUS, CLEAR } from '../actions/actions'

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
};

function todo(state, action) {
   switch (action.type) {
      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }
      default:
         return state
   }
}
function todoReducers(state = [], action) {
   switch (action.type) {
        case ADD_TODO :
            return [
                ...state,
                todo(undefined, action)
            ]
        default:
            return state
   }
}

function calReducers(state = initialAppState, action) {
   switch (action.type) {
        case INPUT_NUMBER : 
            return {
              ...state,
              inputValue: state.inputValue * 10 + action.number,
              showingResult: false,
            };
        case PLUS : 
            return {
              ...state,
              inputValue: 0,
              resultValue: state.resultValue + state.inputValue,
              showingResult: true,
            };
        case MINUS : 
            return {
              ...state,
              inputValue: 0,
              resultValue: state.resultValue - state.inputValue,
              showingResult: true,
            };
        case CLEAR :
            return {
              ...state,
              resultValue: action.resultValue,
              showingResult: true,
            };
        default:
            return state
   }
}
const appReducer = combineReducers({
   todos : todoReducers,
   calculatorState : calReducers
})
export default appReducer
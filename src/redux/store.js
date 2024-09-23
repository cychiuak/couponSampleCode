import { createStore } from 'redux';

const initialState = {
    accessToken: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACCESS_TOKEN':
        return { ...state, accessToken: action.payload };
      default:
        return state;
    }
  };
  
  export const store = createStore(reducer);
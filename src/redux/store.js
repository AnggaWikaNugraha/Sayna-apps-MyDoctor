import {createStore} from 'redux';

const intitialState = {
  loading: false,
  name: 'angga',
  address: 'langensari',
};

const reducer = (state = intitialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type) {
    return {
      ...state,
      name: 'angga wika',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;

import {createStore} from 'redux';

const intitialState = {
  loading: false,
};

const reducer = (state = intitialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;

import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import reducer from './reducers';

export const store = createStore(reducer, applyMiddleware(thunk));

const initStore = () => store;

export const wrapper = createWrapper(initStore, { debug: false });

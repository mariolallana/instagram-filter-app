import { createStore, combineReducers } from 'redux';
import yourReducer from './reducers/yourReducer';

const rootReducer = combineReducers({
  // aquí puedes añadir más reductores según lo necesites
  yourFeature: yourReducer,
});

const store = createStore(rootReducer);

export default store;

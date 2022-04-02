import {createStore, combineReducers} from 'redux';
import newsReducer from './reducers/news.reducer';

const reducers = combineReducers({
  news: newsReducer,
});

const store = createStore(reducers);

export default store;

import {NewsItem} from '../../types';

const newsReducer = (state: NewsItem[] = [], action: any) => {
  const {payload, type} = action;

  switch (type) {
    case 'GetAllNews':
      return state;
    case 'AddNews':
      state.push(payload);
      return [...state];

    default:
      return state;
      break;
  }
};

export default newsReducer;

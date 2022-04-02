import {NewsItem} from '../../types';

const getNews = () => {
  return {
    type: 'GetAllNews',
    payload: null,
  };
};

const addNews = (item: NewsItem) => {
  return {
    type: 'AddNews',
    payload: item,
  };
};

export {addNews, getNews};

import {useEffect, useState} from 'react';
import getNewList from '../services/api/getNewsList';
import {NewsItem} from '../types';

const useGetNews = () => {
  const [data, setData] = useState<NewsItem[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    getNewList()
      .then(res => {
        setIsLoading(true);
        setData(res.data.articles);
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return {data, isLoading};
};

export default useGetNews;

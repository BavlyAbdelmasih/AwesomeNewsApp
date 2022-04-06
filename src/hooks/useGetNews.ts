import {useCallback, useEffect, useState} from 'react';
import getNewList from '../services/api/getNewsList';
import {NewsItem} from '../types';
import {handleApiErrors} from '../utilities/handleApiErrors';

const useGetNews = () => {
  const [data, setData] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('us');

  const fetchNews = useCallback(
    async (
      onSucess: (data: NewsItem[]) => void,
      onError: (error: any) => void,
      onFinish: () => void,
    ) => {
      try {
        const response = await getNewList(category);
        onSucess(response.data.articles);
      } catch (error) {
        onError(error);
        handleApiErrors(error);
      } finally {
        onFinish();
      }
    },
    [data, refreshing, category],
  );
  useEffect(() => {
    fetchNews(
      data => {
        setData(data);
        setIsLoading(true);
      },
      err => {
        console.log(err);
      },
      () => {
        setIsLoading(false);
      },
    );

    return () => {
      setData([]);
    };
  }, [category]);

  const onRefresh = () => {
    fetchNews(
      data => {
        setData(data);
        setRefreshing(true);
      },
      err => {
        console.log(err);
      },
      () => {
        setRefreshing(false);
      },
    );
  };

  return {data, isLoading, refreshing, onRefresh, setCategory, category};
};

export default useGetNews;

import {useCallback, useEffect, useState} from 'react';
import getNewList from '../services/api/getNewsList';
import {NewsItem} from '../types';

const useGetNews = () => {
  const [data, setData] = useState<NewsItem[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const fetchData = useCallback(
    async (
      onSucess: (data: NewsItem[]) => void,
      onError: (error: any) => void,
      onFinish: () => void,
    ) => {
      try {
        const response = await getNewList();
        onSucess(response.data.articles);
      } catch (error) {
        onError(error);
      } finally {
        onFinish();
      }
    },
    [data, refreshing],
  );
  useEffect(() => {
    fetchData(
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
      setData(undefined);
    };
  }, []);

  const onRefresh = () => {
    fetchData(
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

  return {data, isLoading, refreshing, onRefresh};
};

export default useGetNews;

import {View, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import NewsListItem from '../../components/NewsListItem';

import useGetNews from '../../hooks/useGetNews';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';

const News = () => {
  const {data, isLoading, refreshing, onRefresh} = useGetNews();
  {
    return (
      <View>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            keyExtractor={item => `${Math.random()}${item.source.id}`}
            data={data}
            ListHeaderComponent={() => {
              return <SearchBar />;
            }}
            renderItem={NewsListItem}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    );
  }
};

export default News;

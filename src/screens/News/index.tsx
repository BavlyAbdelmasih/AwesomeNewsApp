import {View, FlatList, RefreshControl} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import NewsListItem from '../../components/NewsListItem';

import useGetNews from '../../hooks/useGetNews';
import SearchBar from '../../components/SearchBar';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../Theming/ThemeContextProvider';
import {NewsItem} from '../../types';
import EmptyList from '../../components/EmptyList';
import {countries} from '../../constants/constants';
import CategoryItem from '../../components/CategoryItem';

const News = ({route}: any) => {
  const {data, isLoading, refreshing, onRefresh, setCategory, category} =
    useGetNews();
  const [filteredData, setFilteredData] = useState<NewsItem[]>([]);
  const navigator = useNavigation();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    setFilteredData(data);
    return () => {
      setFilteredData([]);
    };
  }, [data]);

  //searching function
  const searchFilterFunction = (value: string) => {
    if (value) {
      const newData = data?.filter(item => {
        return item.title
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim());
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  {
    return (
      <View
        style={[
          styles.containerStyle,
          {backgroundColor: themeContext.theme.backgroundColor},
        ]}>
        <SearchBar
          onInputChange={searchFilterFunction}
          qvalue={route?.params?.value}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={countries}
          style={{marginHorizontal: 10, paddingBottom: 30}}
          renderItem={element => {
            return (
              <CategoryItem
                name={element.item}
                selectedCategory={category}
                onPress={() => setCategory(element.item)}
              />
            );
          }}
        />

        <FlatList
          keyExtractor={item => `${Math.random()}${item.source.id}`}
          ListEmptyComponent={<EmptyList loading={isLoading} />}
          data={filteredData}
          renderItem={item => {
            return (
              <NewsListItem
                item={item.item}
                onClick={() => {
                  navigator.navigate('Details', {item});
                }}
              />
            );
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    );
  }
};

export default News;

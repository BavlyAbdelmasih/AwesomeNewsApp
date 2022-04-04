import {View, FlatList, RefreshControl, Button} from 'react-native';
import React, {useState, useEffect, useContext, ReactNode} from 'react';
import NewsListItem from '../../components/NewsListItem';

import useGetNews from '../../hooks/useGetNews';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../Theming/ThemeContextProvider';
import {NewsItem} from '../../types';
import EmptyList from '../../components/EmptyList';
import {countries} from '../../constants/constants';
import CategoryItem from '../../components/CategoryItem';
import {ScrollView} from 'react-native-gesture-handler';

const News = ({route}: any) => {
  const {data, isLoading, refreshing, onRefresh, setCategory, category} =
    useGetNews();
  const [filteredData, setFilteredData] = useState<NewsItem[]>([]);
  const navigator = useNavigation();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    setFilteredData(data);
    console.log(category);
  }, [data]);

  //searching function
  const searchFilterFunction = (value: string) => {
    console.log(value);
    if (value) {
      const newData = data?.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingBottom: 10,
            marginHorizontal: 10,
          }}>
          {countries.map((element, index) => {
            return (
              <CategoryItem
                key={index}
                name={element}
                selectedCategory={category}
                onPress={() => setCategory(element)}
              />
            );
          })}
        </ScrollView>

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

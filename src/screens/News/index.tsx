import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import NewsListItem from '../../components/NewsListItem';
import {NewsItem} from '../../types';
import getNewList from '../../services/api/getNewsList';
const dummyNewsItem: NewsItem = {
  source: {
    id: 'engadget',
    name: 'Engadget',
  },
  author: 'Kris Holt',
  title: 'Here’s why your iOS auto-updates often arrive late',
  description:
    "Setting up an iPhone to automatically install the latest version of iOS doesn't mean you'll get the update right away. Apple typically takes a few weeks to roll out auto-updates to everyone. Craig Federighi , who oversees iOS in his role as senior vice p…",
  url: 'https://www.engadget.com/apple-ios-auto-update-roll-out-craig-federighi-114547796.html',
  urlToImage:
    'https://s.yimg.com/os/creatr-uploaded-images/2022-03/489e27a0-b01c-11ec-8f4a-cfa9c6a4e02a',

  publishedAt: new Date('2022-03-30T11:45:47Z'),
  content:
    "Setting up an iPhone to automatically install the latest version of iOS doesn't mean you'll get the update right away. Apple typically takes a few weeks to roll out auto-updates to everyone. Crai… [+1151 chars]",
};

const dummyarticlesList: NewsItem[] = [
  dummyNewsItem,
  dummyNewsItem,
  dummyNewsItem,
  dummyNewsItem,
];
const News = () => {
  return (
    <View>
      <FlatList
        keyExtractor={item => `${Math.random()}${item.source.id}`}
        data={dummyarticlesList}
        renderItem={NewsListItem}
      />
    </View>
  );
};

export default News;

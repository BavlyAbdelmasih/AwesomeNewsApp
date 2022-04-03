export type NewsItem = {
  id: string;
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type ApiResponse = {
  data: {status: string; totalResults: number; articles: NewsItem[]};
};

export type ThemeColors = {
  backgroundColor: string;
  textColor: string;
  tabBarBackground: string;
  primaryColor: string;
  secondaryColor: string;
  secondaryTextColor: string;
};

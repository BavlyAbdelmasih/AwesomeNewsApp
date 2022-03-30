import {ApiClient} from '.';
import API_ROUTES from '../routes';

const API_KEY = '1eacfde0796c40fea7d95f3f5755e580';
const CATEGORY = 'Apple';
const params = {q: CATEGORY, apiKey: API_KEY};

const getNewList = () =>
  ApiClient.get(API_ROUTES.URLS.articles, {
    params: params,
  });
export default getNewList;

import axios from 'axios';
import API_ROUTES from '../routes';

export const ApiClient = axios.create({
  baseURL: API_ROUTES.BASE_URL,
  timeout: 3000,
});

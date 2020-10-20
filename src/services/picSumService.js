import { picSumApi } from './apis';
import axios from 'axios';

export const getImages = (page, perPage) => picSumApi.get(`/v2/list?page=${page}&limit=${perPage}`);

export const getImagesByUrl = url => axios.get(url); 
import { picSumApi } from './apis';

export const getImages = perPage => picSumApi.get(`/v2/list?page=1&limit=${perPage}`);
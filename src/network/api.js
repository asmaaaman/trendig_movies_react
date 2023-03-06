import axios from "axios";

export const api = axios.create({ baseURL: "https://api.themoviedb.org/3" });
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
export const getMedia = async (page) => {
  const response = await api.get(
    `trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );

  return response;
};

export const searchMedia = async (page, data) => {
  const response = await api.get(
    `search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${data}&page=${page}`
  );
  return response;
};

export const getMediaItemDetails = async (id, media_type) => {
  const response = await api.get(
    `${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response;
};

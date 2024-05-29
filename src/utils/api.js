import axios from "axios";

const instance = axios.create({
  baseURL: `https://club.metsenat.uz/api/v1`,
});

export const api = ({ url, ...props }) => {
  console.log(props);
  return instance({
    url: url,
    ...props,
  });
};

import axios from "axios";

export const api = axios.create({
  baseURL: "https://demo7671310.mockable.io/api",
  timeout: 10000,
});

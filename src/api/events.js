import axios from "axios";
import config from "../config/apiConfig";

const axiosInstanse = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (page = 1, pageSize = 12) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosInstanse.get(
      `/events?page=${page}&pageSize=${pageSize}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

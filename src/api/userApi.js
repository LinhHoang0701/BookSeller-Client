import axiosClient from "./axiosClient";

export const userApi = {
  getProfile: () => {
    const url = "/user";
    return axiosClient.get(url);
  },
  updateProfile: (body) => {
    const url = "/user";
    return axiosClient.put(url, { profile: body });
  },
  getAll: () => {
    const url = "/user/search";
    return axiosClient.get(url);
  },
  searchUser: (search) => {
    const url = `/user/search?search=${search}`;
    return axiosClient.get(url);
  },
};

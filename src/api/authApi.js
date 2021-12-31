import axiosClient from "./axiosClient";

export const loginApi = {
  login: (data) => {
    console.log(data);
    const url = "/auth/login";
    return axiosClient.post(url, {
      ...data,
    });
  },
};

export const registerApi = {
  register: (data) => {
    const url = "/auth/register";
    return axiosClient.post(url, {
      ...data,
    });
  },
};

export const resetPasswordApi = {
  reset: (body) => {
    const url = "/auth/reset";
    return axiosClient.post(url, {
      ...body,
    });
  },
};

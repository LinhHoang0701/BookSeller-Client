import axiosClient from "./axiosClient";

export const productApi = {
  getListProduct: (filter) => {
    const url = "/product/list";
    return axiosClient.post(url, filter);
  },
  getProductBySlug: (slug) => {
    const url = `/product/item/${slug}`;
    return axiosClient.get(url);
  },
  searchProduct: (name) => {
    const url = `/product/list/search/${name}`;
    return axiosClient.get(url);
  },
  addProduct: (body) => {
    const url = `/product/add`;
    return axiosClient.post(url, body);
  },
  editProduct: ({ values, id }) => {
    const url = `/product/${id}`;
    return axiosClient.put(url, { product: values });
  },
  deleteProduct: (id) => {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
};

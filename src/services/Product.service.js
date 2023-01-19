import { axiosInstance as axios } from "@axios";

class ProductService {
  fetchProducts(limit = 8) {
    return new Promise(async (resolve, reject) => {
      return axios
        .get(`/products?limit=${limit}`)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  fetchProductById(id) {
    return new Promise(async (resolve, reject) => {
      return axios
        .get(`/products/${id}`)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  fetchAllCategories() {
    return new Promise(async (resolve, reject) => {
      return axios
        .get(`/products/categories`)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

const instance = new ProductService();
export default instance;

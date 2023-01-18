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
  fetchProductById(id) {}
}

const instance = new ProductService();
export default instance;

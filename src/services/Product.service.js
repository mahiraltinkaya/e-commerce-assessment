import { axiosInstance as axios } from "@axios";

class ProductService {
  fetchProducts() {
    return new Promise(async (resolve, reject) => {
      return axios
        .get("/products")
        .then((result) => {
          console.log(result);
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
  fetchProductById(id) {}
}

const instance = new ProductService();
export default instance;

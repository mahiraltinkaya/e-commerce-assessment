import { axiosInstance as axios } from "@axios";

class ProductService {
  fetchProducts(obj) {
    return new Promise(async (resolve, reject) => {
      let url = `/products?limit=${obj.limit}`;

      if (obj.sort !== "default") url += `&sort=${obj.sort}`;

      return axios
        .get(url)
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
  fetchProductsByCategory(obj) {
    return new Promise(async (resolve, reject) => {
      let url = `/products/category/${encodeURI(obj.category)}`;

      if (obj.sort !== "default") url += `?sort=${obj.sort}`;

      return axios
        .get(url)
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

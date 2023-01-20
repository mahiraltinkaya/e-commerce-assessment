import { axiosInstance as axios } from "@axios";

class UserService {
  login(obj) {
    return new Promise(async (resolve, reject) => {
      return axios
        .post("/auth/login", obj)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  register(obj) {
    return new Promise(async (resolve, reject) => {
      return axios
        .post("/users", obj)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  update() {}
  delete() {}
}

const instance = new UserService();
export default instance;

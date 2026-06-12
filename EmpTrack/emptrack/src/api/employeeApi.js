import axios from "axios";

const employeeApi = axios.create({
  baseURL: "https://trainingapi.zerone-consulting.net/api.publish"
});

employeeApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default employeeApi;

import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.ezfrontend.com/",
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    const messageError =
      error?.response?.data?.message[0]?.messages[0]?.message;
    console.log(error);
    return Promise.reject(messageError);
  }
);
export default axiosClient;

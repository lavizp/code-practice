import axios from "axios";
const clearBrowserStorage = {
  removeUserRef() {
    sessionStorage.clear();
    localStorage.clear();
  },
};
export { clearBrowserStorage };
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

import axios from "axios";
const instance = axios.create({
  // baseURL: "http://localhost:5001/my-eshoop/us-central1/api",
  baseURL: "https://us-central1-my-eshoop.cloudfunctions.net/api",
});
export default instance;

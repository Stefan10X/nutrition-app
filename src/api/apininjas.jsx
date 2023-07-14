/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const KEY = "h/QJ97ZVXZLWxLF624GVOA==qcw7p0XbzCAf6eNr";

export default axios.create({
  baseURL: "https://api.api-ninjas.com/v1/",
  headers: {
    "X-Api-Key": KEY,
  },
});

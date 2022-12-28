import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0742c9cc252224f478b0a7382dd4b843",
    language: "ko-KR",
  },
});

export default instance;

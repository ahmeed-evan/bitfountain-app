import axios from "axios";

axios.defaults.baseURL = "http://163.47.115.230:30000/api";
axios.defaults.headers.common['Authorization'] = localStorage.getItem("access_token")
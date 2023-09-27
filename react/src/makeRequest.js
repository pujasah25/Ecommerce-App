import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL; //=> 1/2
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken; // 2

// first code
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});

// 1. publice request, without login (for login we can use this)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// 2. after login only
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})





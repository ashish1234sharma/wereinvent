// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080'; // Replace with your API base URL

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     // Add any other common headers here
//   },
// });

// // Function to make a GET request
// export const get = async (url:string, params = {}) => {
//   try {
//     const response = await api.get(url, { params });
//     return response.data;
//   } catch (error:any) {
//     throw error.response.data;
//   }
// };

// // Function to make a POST request
// export const post = async (url:string, data = {}) => {
//   try {
//     const response = await api.post(url, data);
//     return response.data;
//   } catch (error:any) {
//     throw error.response.data;
//   }
// };

// // Function to make a PUT request
// export const put = async (url:string, data = {}) => {
//   try {
//     const response = await api.put(url, data);
//     return response.data;
//   } catch (error:any) {
//     throw error.response.data;
//   }
// };

// // Function to make a DELETE request
// export const del = async (url:string) => {
//   try {
//     const response = await api.delete(url);
//     return response.data;
//   } catch (error:any) {
//     throw error.response.data;
//   }
// };

// // You can define additional functions as needed for different HTTP methods

// export default {
//   get,
//   post,
//   put,
//   del,
// };

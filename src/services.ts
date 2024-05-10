// const BASE_URL = 'https://reqres.in/api/';

// const handleResponse = async (response: Response) => {
//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.error);
//   }
//   return response.json();
// };

// export const login = async (email: string, password: string): Promise<any> => {
//   const response = await fetch(`${BASE_URL}/login`, {
//     method: 'POST',
//     // headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email, password })
//   });
//   return handleResponse(response);
// };

// export const Register = async (data:any): Promise<any> => {
//     const response = await fetch(`${BASE_URL}/register`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ data })
//     });
//     return handleResponse(response);
//   };

import axios from 'axios';

const BASE_URL = 'https://reqres.in/api/';

const handleResponse = (response:any) => {
  if (!response.data.success) {
    throw new Error(response.data.error);
  }
  return response.data;
};

export const login = async (email:any, password:any) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return handleResponse(response);
  } catch (error:any) {
    throw new Error(error.response.data.error);
  }
};

export const Register = async (data:any) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`,  data );
    return handleResponse(response);
  } catch (error:any) {
    throw new Error(error.response.data.error);
  }
};

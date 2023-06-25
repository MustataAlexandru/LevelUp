import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 402) {
      console.log('Unauthorized request:', error.response.data);
      // Clear the token and refresh the current page
      localStorage.removeItem('token');
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

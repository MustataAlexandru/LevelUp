import customAxios from '../utils/customAxios';
const setAuthToken = (token) => {
	if (token) customAxios.defaults.headers.common['x-auth-token'] = token;
	else delete customAxios.defaults.headers.common['x-auth-token'];
};

export default setAuthToken;

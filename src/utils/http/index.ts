import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios;

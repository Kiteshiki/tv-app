import axios from 'axios';

axios.defaults.baseURL = 'https://lab-gcp.ifeelsmart.net/demo/v1/data';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'lab-gcp.ifeelsmart.net';

export default axios;

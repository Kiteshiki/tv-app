import axios from 'axios';

if (axios.defaults.proxy) {
    axios.defaults.proxy.host = 'https://lab-gcp.ifeelsmart.net/demo/v1/data';
}
axios.defaults.headers.contentType = 'application/json';

export default axios;

import qs from 'qs'
import axios from 'axios'
import resetMessage from '@/utils/resetMessage'
import { Loading } from 'element-ui'
const service = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? '/api' : '',
    timeout: 5000,
    withCredentials: true,
})
service.interceptors.request.use(config => {
    console.log(config)
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error)
})
service.interceptors.response.use(config => {
    var res = config.data;
    console.log(res)
    if (res.status == -1) {
        resetMessage({
            message: res.msg,
            type: 'error',
            duration: 2000,
        })
        return;
    }
    return res;
}, error => {
    console.log(error)
    return Promise.reject(error)
})

function http(config) {
    if (config.method.toLowerCase() === 'post' && !config.headers) {
        config.data = qs.stringify(config.data);
    } else {
        config.params = config.data;
    }
    return service(config);
}
export default http
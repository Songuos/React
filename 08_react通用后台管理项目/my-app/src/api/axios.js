import axios from 'axios'

const baseUrl = '/api'

//axios二次封装的核心逻辑
class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    interception(instance) {
        instance.interceptors.request.use(function (config) {
            //在发送请求之前做什么
            return config;
        }, function (error) {
            //对请求错误做什么
            return Promise.reject(error);
        });

        //添加响应拦截器
        instance.interceptors.response.use(function (response) {
            //2xx以内的状态码都会触发该函数
            //对响应数据做点什么
            return response;
        }, function (error) {
            //超出2xx范围的状态码都会触发该函数
            //对响应错误做点什么
            return Promise.reject(error);
        })
    }

    request(options) {
        options = { ... this.getInsideConfig(), ...options }
        //创建axios实例
        const instance = axios.create()
        //实例拦截器的绑定
        this.interception(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)
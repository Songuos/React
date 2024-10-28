import http from './axios'

export const getData = () => {
    return http.request({
        url: '/home/getData',
        method: 'get',
        params: {}
    })
}

export const getUser = () => {
    return http.request({
        url: '/user/getUser',
        method: 'get',
        params: {}
    })
}
import request from '@/axios/request'

export function getUserInfo(token){
    return request ({
        url:'user/info',
        method: 'get',
        params: {token}
    })
}
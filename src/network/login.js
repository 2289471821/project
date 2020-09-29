import { request } from './request'

export function login(phone, pwd) {
  return request({
    url: '/login-check.php',
    // method: 'post',
    // data: {
    //   phone,
    //   pwd
    // }
    params: {
      phone,
      pwd
    }
  })
}
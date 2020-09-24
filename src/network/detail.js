import { request } from './request'

export function getDetaildata(type, id) {
  return request({
    url: '/detail.php',
    params: {
      type,
      id
    }
  })
}
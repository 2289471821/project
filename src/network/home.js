import { request } from './request'

export function getSwiperdata() {
  return request({
    url: '/swiper.php'
  })
}
import { request } from './request'

export function getSwiperdata() {
  return request({
    url: '/swiper.php'
  })
}

export function getPhonedata() {
  return request({
    url: '/home-phone.php'
  })
}

export function getTvdata() {
  return request({
    url: '/home-tv.php'
  })
}

export function getNotebookdata() {
  return request({
    url: '/home-computer.php'
  })
}

export function getDevicedata() {
  return request({
    url: '/home-device.php'
  })
}

export function getSmartdata() {
  return request({
    url: '/home-intelligent.php'
  })
}

export function getOtherdata() {
  return request({
    url: '/home-other.php'
  })
}
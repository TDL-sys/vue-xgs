import axios from "axios"

export function request(config) {
  const instanc = axios.create({
    baseURL: "/api",  //处理跨域
    timeout: 5000
  })
  return instanc(config)

}
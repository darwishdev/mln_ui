import axios from 'axios'

const api = axios.create({ baseURL: 'http://127.0.0.1:9090/retail.v1.MlnRetail/' })


export { axios, api }
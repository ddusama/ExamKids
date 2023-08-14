import axios from "axios";


const API_GATEWAY_CONFIG = "https://delli-api-a5ogw1ti.uc.gateway.dev"

export default axios.create({
    baseURL: API_GATEWAY_CONFIG,
    timeout: 1000000
});

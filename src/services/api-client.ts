import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: '1046a7b0a3af40c398a69756153b59de'
    }
})
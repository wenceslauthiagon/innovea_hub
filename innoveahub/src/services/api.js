import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/articles',
})

export default {
    getNews() {
        return api.get()
    }
}
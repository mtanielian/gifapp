import axios from "axios";

const api = axios.create({
  baseURL : 'https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q='
})


export default api
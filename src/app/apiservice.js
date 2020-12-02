import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
});

class ApiService {
  constructor(apiurl) {
    this.apiurl = apiurl;
  }

  post(url, objeto) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.post(requestUrl, objeto);
  }

  get(url) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.get(requestUrl);
  }

  put(url, obj) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.put(requestUrl, obj);
  }

  delete(url) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.delete(requestUrl);
  }
}

export default ApiService;

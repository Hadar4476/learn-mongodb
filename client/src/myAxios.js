import axios from 'axios';

const URL = 'http://localhost:3005';

const instance = axios.create({
  baseURL: URL
});

export default instance;

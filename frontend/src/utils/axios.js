// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: "https://azure-backend04.azurewebsites.net/api", // Backend API base URL
});

export default instance;
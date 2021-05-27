const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" },
});

module.exports = instance;

'use strict';
let axios = require('axios');
let httpUrl = "https://api.apiopen.top/getJoke"
// let options1 = {page: 1, count: 10, type: "text"}
// let options2 = {page: 1, count: 10, type: "image"}
// let options3 = {page: 1, count: 10, type: "video"}

exports.main = async (event, context) => {
  let result = await axios.get(httpUrl, {params: event})
  return result.data;
}
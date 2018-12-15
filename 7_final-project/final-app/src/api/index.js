import axios from 'axios';

const urlPrefix = 'https://api.hnpwa.com/v0/';

function getNewsList() {
  return axios.get(`${urlPrefix}news/1.json`);
}

export {
  getNewsList,
}
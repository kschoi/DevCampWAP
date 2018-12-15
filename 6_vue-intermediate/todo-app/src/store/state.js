import storage from "./../utils/storage.js"

export default {  
  items: storage.fetchData() || []
}
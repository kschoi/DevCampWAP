export default {
  fetchData(){
    var arr = [];
    if (localStorage.length > 0) {        
      for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index) !== 'loglevel:webpack-dev-server') {
          var item = localStorage.key(index);
          arr.push(item);
        }
      }
    }
    return arr;
  }
}
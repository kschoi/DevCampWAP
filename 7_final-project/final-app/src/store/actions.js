import { getNewsList } from '../api/index.js';

export default {
  GET_NEWS_LIST(context){
    getNewsList()
      .then(({data})=>{
        context.commit('SET_NEWS', data);
      })
      .catch(error => console.log(error))
  },
  actionA(context){

  }
}

// // 뮤테이션
// this.$store.commit();
// // 액션
// this.$store.dispatch('GET_NEWS_LIST');
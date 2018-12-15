<template>
  <div>
    <ul>
      <li v-for="newsItem in this.$store.state.newsList">
        {{ newsItem.title }}, by {{ newsItem.user }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getNewsList } from '../api/index.js';

export default {
  created() {
    this.$store.dispatch('GET_NEWS_LIST');
    // getNewsList()
    //   .then(response => 
    //     this.newsList = response.data);
  }
}
</script>

<style>

</style>

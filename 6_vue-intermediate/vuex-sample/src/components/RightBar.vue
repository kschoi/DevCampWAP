<template>
  <div>
    <h1>right bar</h1>
    <!-- {{ this.$store.state.num }} -->
    {{ num }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['num']), // 헬퍼 함수            
            // mapState(['num','num2','num3'..]) // 헬퍼 함수

}
</script>

<style>

</style>

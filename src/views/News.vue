<template>
  <div class="ui container">
    <News class="news" :preview="false" :articleNumber="10" title="alda news!" />
  </div>
</template>

<script>
// @ is an alias to /src
import News from '@/components/News.vue'

export default {
  name: 'Home',
  components: {
    News,
  },
}
</script>

<style scoped>
  .news {
    margin: 50px 0;
    top: 8vh;
    width: 100%;
    background-color: white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
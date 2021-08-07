<template>
  <div id="news">
    <News :preview="false" :articleNumber="10" title="alda news!" />
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
  #news {
    top: 8vh;
    padding-top: 75px;
    width: 100%;
    background-color: white;
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
<template>
  <div class="ui container">
    <div class="titles">
      <h2 class="title">NEWS</h2>
      <h1 class="subtitle">Here you will find all our lastest news and articles.</h1>
    </div>
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

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
}

.title {
  font-size: 70px;
  letter-spacing: 5px;
}

.subtitle {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 40px;
  text-align: center;
}


.pre-title {
  letter-spacing: 2px;
}

.title, .subtitle, .pre-title {
  line-height: 150%;
}

</style>
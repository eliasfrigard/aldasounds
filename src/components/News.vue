<template>
  <div class="ui container">
    <div v-if="preview" @mouseover="hooverEnter" @mouseleave="hooverLeave" data-aos="fade-up">
      <div id="more-news-header" class="header" v-if="header" @click="moreNews">
        <h3>More News</h3>
      </div>
      <div id="news-header" class="header" v-else>
        <h3>{{ title }}</h3>
      </div>
    </div>

    <div class="articles" @click="onClick">
      <NewsArticle v-for="article in articles" :key="article.id" :title="article.title" :body="article.body" data-aos="fade-up" />
    </div>
  </div>
</template>

<script>
import NewsArticle from '@/components/NewsArticle.vue'

export default {
  name: 'News',
  props: ['preview', 'articleNumber', 'title'],
  data() {
    return {
      header: false,
      articles: [],
      isPreview: this.preivew,
      currentArticle: this.articleNumber
    }
  },
  async created () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.articles = json.slice(0, this.articleNumber))
  },
  methods: {
    hooverEnter() {
      this.header = true
    },
    hooverLeave() {
      this.header = false
    },
    onClick() {
      window.location.href = '/';
    },
    moreNews() {
      window.location.href = '/news'
    },
    nextPreviews() {     
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.articles = json.slice(this.currentArticle, this.currentArticle + this.articleNumber))

      this.currentArticle += this.articleNumber
    },
    previousPreviews() {
      if (this.currentArticle <= this.articleNumber) return

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.articles = json.slice(this.currentArticle - this.articleNumber, this.currentArticle))

      this.currentArticle -= this.articleNumber
    }
  },
  components: {
    NewsArticle,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #more-news-header {
    background-color: #ec3c01;
  }

  .navi {
    display: flex;
    justify-content: center;
  }

  .navi button {
    margin: 10px;
  }

  hr {
    opacity: 0.3;
  }
</style>

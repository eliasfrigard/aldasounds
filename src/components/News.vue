<template>
  <div class="ui container">
    <div v-if="preview" @mouseover="hooverEnter" @mouseleave="hooverLeave" data-aos="fade-in">
      <div class="titles" v-if="preview" data-aos="fade-in">
        <h2 class="title">LATEST NEWS</h2>
        <div id="more-news-header" class="header" v-if="preview" @click="moreNews">
            <h3>read More News</h3>
        </div>
      </div>
    </div>

    <div class="articles">
      <NewsArticle v-for="article in articles" :key="article.id" :title="article.title" :body="article.body" :author="article.author" :image="article.image" :date="article.date" :id="article.id" data-aos="fade-in" />
    </div>
  </div>
</template>

<script>
import NewsArticle from '@/components/NewsArticle.vue'
import news from '/news.json'

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
    this.articles = [...news]
  },
  methods: {
    hooverEnter() {
      this.header = true
    },
    hooverLeave() {
      this.header = false
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
    background-color: rgb(4, 46, 66);
    margin: 50px 0;
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

  .title {
    font-size: 70px;
    letter-spacing: 5px;
    line-height: 125%;
    color: rgb(4, 46, 66);
  }


  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 45px;
    }

    #more-news-header {
      margin: 25px 0 0px 0;
    }
  }
</style>

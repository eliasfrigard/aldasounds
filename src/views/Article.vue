<template>
  <div class="article">
    <div class="ui container content">
      <h1 class="article-title">{{article.title}}</h1>
      <img class="article-image" :src="article.image" alt="" srcset="" @error="noImage">
      <p class="article-author"><!-- {{article.author}} --></p>
      <p class="article-date">{{computedDate}}</p>
      <a :href="article.link" id="article-link">{{article.link}}</a>
      <p class="article-body">{{article.body}}</p>
    </div>
  </div>  
</template>

<script>
import moment from 'moment'
import news from '/news.json'

export default {
  name: "Article",
  data() {
    return {
      id: this.$route.params.id,
      article: {},
      title: '',
      image: '',
      author: '',
      date: '',
      body: '',
    }
  },
  methods: {
    noImage() {
      document.querySelector('.article-author').style.marginTop = '0px'
    }
  },
  computed: {
    computedDate() {
      const date = moment(this.article.date).format('Do')
      const month = moment(this.article.date).format('MMMM')
      const year = moment(this.article.date).format('YYYY')

      return `${date} ${month} ${year}`
    }
  },
  created() {  
    const paramID = parseInt(this.$route.params.id)

    news.forEach(newsArticle => {
      if (newsArticle.id === paramID) this.article = newsArticle
    })
  }
}
</script>

<style scoped>
#article-link {
  margin: 20px 0;
}

.article {
  min-height: 100vh;
  background-color: white;
}

.content {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.article-title {
  font-family: 'Bad Script', cursive;
  font-size: 60px;
  margin: 60px 0 50px 0;
  letter-spacing: 3px;
  text-align: center;
  line-height: 150%;
}

.article-img {
  height: 650px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 5px;
}

.article-image {
  max-height: 1000px;
  border-radius: 5px;
}

.article-date {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 17px;
  margin-bottom: 20px;
  opacity: 0.8;
}

.article-author {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 30px;
  margin: 45px 0 20px 0;
}

.article-body {
  font-size: 16px;
  line-height: 185%;
  letter-spacing: 1px;
  word-spacing: 2px;
  margin: 10px 0 100px 0;
  max-width: 1000px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .article-image {
    max-width: 100%;
  }

  .article-title {
    margin-top: 40px;
    font-size: 40px;
    line-height: 150%;
  }
}
</style>
<template>
  <div class="ui container">
    <div
      v-if="preview"
      @mouseover="hooverEnter"
      @mouseleave="hooverLeave"
      data-aos="fade-in"
    >
      <div class="titles" v-if="preview" data-aos="fade-in">
        <h2 class="title">LATEST NEWS</h2>
      </div>
    </div>

    <div class="articles">
      <NewsArticle
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :body="article.body"
        :author="article.author"
        :image="article.image"
        :date="article.date"
        :id="article.id"
        data-aos="fade-in"
      />
    </div>
    <div id="more-news-header" class="header" v-if="preview" @click="moreNews">
      <h3>see More News</h3>
    </div>
  </div>
</template>

<script>
import NewsArticle from '@/components/NewsArticle.vue';
import news from '/news.json';
import moment from 'moment';

export default {
  name: 'News',
  props: ['preview', 'articleNumber', 'title'],
  data() {
    return {
      header: false,
      articles: [],
      isPreview: this.preivew,
      currentArticle: this.articleNumber,
    };
  },
  async created() {
    this.articles = [...news.slice(0)];

    // Sort previous dates decending.
    this.articles.sort((a, b) => {
      if (moment(a.date).isAfter(b.date)) return -1;
      else return 1;
    });

    this.articles = this.articles.slice(0, this.articleNumber);
  },
  methods: {
    hooverEnter() {
      this.header = true;
    },
    hooverLeave() {
      this.header = false;
    },
    moreNews() {
      window.location.href = process.env.VUE_APP_BASEURL + '/news';
    },
    nextPreviews() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(
          (json) =>
            (this.articles = json.slice(
              this.currentArticle,
              this.currentArticle + this.articleNumber
            ))
        );

      this.currentArticle += this.articleNumber;
    },
    previousPreviews() {
      if (this.currentArticle <= this.articleNumber) return;

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(
          (json) =>
            (this.articles = json.slice(
              this.currentArticle - this.articleNumber,
              this.currentArticle
            ))
        );

      this.currentArticle -= this.articleNumber;
    },
  },
  components: {
    NewsArticle,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#more-news-header {
  background-color: var(--main-color);
  margin: 100px 0;
}

#more-news-header:hover {
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

.title {
  font-size: 70px;
  letter-spacing: 5px;
  line-height: 125%;
  color: var(--main-color);
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

<template>
  <div class="news-article" @mouseover="onHover" @click="onClick">
    <div class="image-wrapper">
      <div class="news-image" v-bind:style="{ 'background-image': 'url(' + image + ')' }">      
        <span>Read More</span>
      </div>
    </div>
    <div class="news-content">
      <h3 class="news-title">{{title}}</h3>
      <p class="news-text">{{body}}</p>
      <div class="news-meta">
        <p class="news-date">{{day}} {{month}} {{year}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'News',
  props: {
    id: Number,
    title: String,
    body: String,
    author: String,
    date: String,
    image: String,
  },
  methods: {
    onHover() {
      const image = document.querySelector('.news-image')

      image.classList.toggle('zoom-image')
    },
    onClick() {
      this.$router.push(`/news/${this.id}`)
    }
  },
  computed: {
    day() {
      return moment(this.date).format('DD')
    },
    month() {
      return moment(this.date).format('MMMM')
    },
    year() {
      return moment(this.date).format('YYYY')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news-meta {
    width: 100%;
    /* display: flex;
    justify-content: space-between; */
    text-align: left;
  }

  .news-article:hover .news-image,
  .news-article:focus .news-image {
    transform: scale(1.15);
  }

  .image-wrapper {
    display: inline-block;
    overflow:hidden;
    height: 100%;
    width: 35%;
    border-radius: 3px;
/*     -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.1); */
  }

  .news-article {
    width: 100%;
    height: 275px;
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .news-image::before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52, 73, 94, 0.5);
  }

  .news-article:hover .news-image:before,
  .news-article:focus .news-image:before {
    display: block; 
  }

  span {
    color: white;
    font-family: sans-serif;
    position: absolute;
    opacity: 0;
    transition: all .3s;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .news-article:hover span,
  .news-article:focus span {
    opacity: 1;
  }

  .news-content {
    height: 100%;
    width: 62%;
    padding: 25px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }

  .news-image {
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 3px;
    transition: all .3s;
    display:flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    font-size: 18px;
    overflow: hidden;
  }

  .news-title {
    font-size: 24px;
    font-family: 'Bad Script', cursive;
    letter-spacing: 4px;
    line-height: 200%;
  }

  .news-author, .news-date {
    margin: 0px;
    font-size: 15px;
    text-transform: uppercase;
    opacity: 0.8;
  }

  .news-text, .news-author, .news-date {
    letter-spacing: 1.3px;
  }

  .news-text {
    font-size: 16px;
    line-height: 185%;

  }

  @media screen and (max-width: 768px) {
    .news-article {
      flex-direction: column;
      height: auto;
      text-align: center;
    }

    .news-meta {
      text-align: center;
    }

    .news-title {
      margin: 20px 0;
      width: 100%;
      text-align: center;
    }

    .news-content {
      width: 100%;
      padding: 25px 0px;
    }

    .image-wrapper {
      height: 250px;
      width: 100%;
    }

    .news-image {
      height: 100%;
      width: 100%;
    }
  }
</style>

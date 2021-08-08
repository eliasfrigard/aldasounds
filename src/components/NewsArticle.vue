<template>
  <div class="news-article" @mouseover="onHover">
    <div class="image-wrapper">
      <div class="news-image">      
        <span>Read More</span>
      </div>
    </div>
    <div class="news-content">
      <h3 class="news-title">{{title}}</h3>
      <p class="news-text">{{body}}</p>
      <div class="news-meta">
        <p class="news-author">Author goes here.</p>
        <p class="news-date">23rd MAY 2020</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: {
    title: String,
    body: String
  },
  methods: {
    onHover() {
      const image = document.querySelector('.news-image')

      image.classList.toggle('zoom-image')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news-meta {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
  }

  .news-article {
    width: 100%;
    height: 275px;
    margin: 30px 0 30px 0;
    display: flex;
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
    width: 65%;
    padding: 25px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }

  .news-image {
    height: 100%;
    background-image: url("/P1110937-sized.webp");
    background-size: cover;
    background-repeat: no-repeat;
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
  }
</style>

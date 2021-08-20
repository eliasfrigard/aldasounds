/* HTML Template */
<template>
  <div class="ui inverted vertical footer segment" id="footer">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div id="sitemap" class="four wide column">
          <h4 class="ui inverted header">This Site</h4>
          <div class="ui hidden divider"></div>
          <div class="ui inverted link list">
            <a href="#" class="item">Home</a>
            <a href="#/about" class="item">Story</a>
            <a href="#/news" class="item">News</a>
            <a href="#/live" class="item">Live</a>
            <a href="#/contact" class="item">Contact</a>
          </div>
        </div>
        <div id="downloads" class="five wide column">
          <h4 class="ui inverted header">Downloads</h4>
          <div class="ui hidden divider"></div>
          <div class="ui inverted link list">
<!--             <a href="#contact-container" class="item">Download Presskit</a>
            <a href="https://github.com/eliasfrigard/devsite" target="_blank" class="item">Download Technical Rider</a> -->
            <a href="/music/ALDA Music.zip" class="item" v-if="!mobile" download="ALDA Music">Download Full Audio Samples</a>
            <a href="/music/ALDA Music.zip" class="item" v-else download="ALDA Music">Download Audio Sample</a>
            <a href="/originals/ALDA Images.zip" class="item" v-if="!mobile" download="ALDA Images">Download Full Resolution Images</a>
            <a href="/originals/ALDA Images.zip" class="item" v-else download="ALDA Images">Download Images</a>         
            <br>
          </div>
        </div>

        <div class="four wide column social-media">
          <h4 class="ui inverted header" v-if="!mobile">Social Media</h4>
          <div class="ui hidden divider" v-if="!mobile"></div>
            <div class="social">
              <a href="https://www.facebook.com/aldasounds" target="_blank">
                <i class="fab fa-facebook-square fa-lg"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC1CSzPlVfH7RYlWo-ulYDaw" target="_blank">
                <i class="fab fa-youtube fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/aldasounds/" target="_blank">
                <i class="fab fa-instagram fa-lg"></i>
              </a>
              <a href="" target="_blank">
                <i class="fab fa-spotify fa-lg"></i>
              </a>
            </div><br>
          <div class="available-on">
            <a href="http://">
              <img src="/amazonwhite.png" alt="" srcset="" class="available-img">
            </a>
            <a href="http://">
              <img src="/itunessmall.png" alt="" srcset="" class="available-img">
            </a>
          </div>
          <p>Copyright © 2021 Elias Frigård</p>
        </div>
      </div>
    </div>
  </div>
</template>

/* Script */
<script>
  export default {
    name: 'Footer',
    computed: {
      mobile() {
        return screen.width < 992
      }
    }
  }
</script>

<style scoped>
  .available-img {
    max-height: 30px;
    margin: 0 20px 20px 0;
    opacity: 0.6;

  }

  #footer {
    padding: 80px;
    background-color: rgb(4, 46, 66);
    bottom:0;
  }
  
  a {
    margin-top: 15px;
    letter-spacing: 1px;
  }

  p {
    font-size: 14px;
    text-align: left;
    letter-spacing: 1px;
  }

  .header {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    text-align: left;
  }
  
  #buttons button {
    margin-right: 10px;
  }

  .social {
    width: 100%;
    display:flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }

  .social a, .social i {
    margin: 0;
    padding: 0;
  }

  .social i {
    margin-right: 25px;
    font-size: 25px;
    color: rgba(230, 230, 230, 0.6);
    opacity: 0.6;
  }

  .social i:hover, .available-img:hover {
    opacity: 1;
  }

  .social .fa-facebook-square:hover {
    color: rgb(49, 92, 177);
  }

  .social .fa-youtube:hover {
    color: rgb(255, 0, 0);
  }

  .social .fa-instagram:hover {
    color: rgb(251, 173, 80)
  }
  
  .social .fa-spotify:hover {
    color: rgb(30, 215, 96);
  }

  .social a {
    display:flex;
    align-items: center;
    font-size: 18px;
  }

  @media screen and (max-width: 992px) {
  #footer {
    display:flex;
    padding: 40px;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
  }
}
</style>
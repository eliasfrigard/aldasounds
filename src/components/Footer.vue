/* HTML Template */
<template>
  <div class="ui inverted vertical footer segment" id="footer">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="four wide column">
          <h4 class="ui inverted header">This Site</h4>
          <div class="ui hidden divider"></div>
          <div class="ui inverted link list">
            <a href="#" class="item">Home</a>
            <a href="#about-container" class="item">Story</a>
            <a href="#projects-container" class="item">News</a>
            <a href="#education-container" class="item">Music</a>
            <a href="#contact-container" class="item">Live</a>
            <a href="#contact-container" class="item">Contact</a>
          </div>
        </div>
        <div class="five wide column">
          <h4 class="ui inverted header">Downloads</h4>
          <div class="ui hidden divider"></div>
          <div class="ui inverted link list">
            <a href="#contact-container" class="item">Download Presskit</a>
            <a href="https://github.com/eliasfrigard/devsite" target="_blank" class="item">Download Technical Rider</a>
            <a href="#" class="item">Download Full Audio Sample</a>
            <a href="#" class="item">Download Full Resolution Images</a>
         
          <br>

          </div>
        </div>

        <div class="four wide column">
          <h4 class="ui inverted header">Social Media</h4>

          <div class="ui hidden divider"></div>
          
          <div id="buttons">
            <button class="ui circular facebook icon button">
              <i class="facebook icon"></i>
            </button>
            <button class="ui circular twitter icon button">
              <i class="twitter icon"></i>
            </button>
            <button class="ui circular linkedin icon button">
              <i class="linkedin icon"></i>
            </button>
            <button class="ui circular google plus icon button">
              <i class="google plus icon"></i>
            </button>
          </div><br>
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
    data() {
      return {

      }
    }
  }
</script>

/* Style */
<style scoped>
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
</style>
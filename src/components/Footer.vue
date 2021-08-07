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
            <a href="#about-container" class="item">About</a>
            <a href="#projects-container" class="item">Projects</a>
            <a href="#education-container" class="item">Education</a>
            <a href="#contact-container" class="item">Contact</a>
          </div>
        </div>
        <div class="four wide column">
          <h4 class="ui inverted header">Services</h4>
          <div class="ui hidden divider"></div>
          <div class="ui inverted link list">
            <a href="#contact-container" class="item">Download Presskit</a>
            <a href="https://github.com/eliasfrigard/devsite" target="_blank" class="item">Visit Repository</a>
            <a href="#" class="item">Download Resumé</a>
            <a href="#" class="item">Download Diploma</a>

          </div>
        </div>
        <div class="six wide column">
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

          <p>Copyright 2021 © Elias Frigård</p>
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
  }

  p {
    font-size: 14px;
    text-align: left;
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
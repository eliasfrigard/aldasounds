<template>
  <div class="home" @scroll="onScroll">
    <div id="splash"></div>

    <div id="firstContent">
      <News :preview="true" :articleNumber="3" title="LATEST NEWS" />
      <div class="ui hidden divider"></div>
      <Concerts :onlyUpcoming="true" />
    </div>

    <div class="image-divider"></div>

    <div id="secondContent">
      <div class="ui container">
        <div id="album-header" class="header" data-aos="fade-in">
          <h3>NEW ALBUM OUT NOW!</h3>
        </div>
        <img src="../assets/albumcover.jpg" alt="" class="image" data-aos="fade-in">

        <div class="ui form" data-aos="fade-in">
          <div class="two fields">
            <div class="field">
              <label>Shipping Destination:</label>
              <select class="ui fluid search dropdown" name="card[expire-month]">
                <option value="1">Europe</option>
                <option value="2">North America</option>
              </select>
            </div>
            <div class="field">
              <label>Quantity:</label>
              <select class="ui fluid search dropdown" name="card[expire-month]">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
        <div id="buy-header" class="header" @click="purchaseAlbum" data-aos="fade-in">
          <h3>BUY FOR 19,99€ + SHIPPING!</h3>
        </div>
        <p data-aos="fade-in" class="destination-info">If your destination is not on the list, contact us and we can make an arrangement for you!</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import News from '@/components/News.vue'
import Concerts from '@/components/Concerts.vue'

export default {
  name: 'Home',
  components: {
    News,
    Concerts
  },
  methods: {
    onScroll() {
      const splash = document.querySelector('#splash')
      const splashHeight = splash.offsetHeight
      const firstContent = document.querySelector('#firstContent')
      const secondContent = document.querySelector('#secondContent')

      const scrollPercentage = Number.parseFloat(window.scrollY / splashHeight).toFixed(2)

      if (scrollPercentage < 0) {
        return
      } else if (scrollPercentage > 1.2) {
        splash.style.opacity = 1
        splash.style.backgroundImage = "url(/P1110937.jpg)"
        splash.style.backgroundPosition = "center top"
        splash.style.top = '8vh'

        firstContent.style.backgroundColor = 'white'
        secondContent.style.backgroundColor = 'white'
      } else {
        splash.style.opacity = 1 - scrollPercentage * 1.15
        splash.style.top = `${scrollPercentage * 2 + 8}vh`
        splash.style.backgroundImage = "url(/P1110881.jpg)"
        splash.style.backgroundPosition = "center center"

        firstContent.style.backgroundColor = ''
        secondContent.style.backgroundColor = ''
      }
    },

    purchaseAlbum() {
      window.location.href = 'https://buy.stripe.com/cN28xn2aqcv7fxSbIJ'
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  mounted() {
    const footer = document.querySelector('#footer')
    footer.style.top = '100vh'
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)

    const footer = document.querySelector('#footer')
    footer.style.top = '0'
  }
}
</script>

<style scoped> 
  .footer {
    top: 100vh;
  }

  .destination-info {
    text-align: center;
    margin-top: 20px;
    opacity: 0.8;
  }

/*   .header {
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1px;
    background-color: #042e42;
    color: rgb(230, 230, 230);
    padding: 15px 20px;
    width: 100%;
    border-radius: 2px;
    transition: all .3s;
    cursor: pointer;
  } */

  #buy-header {
    background-color: #ec3c01;
    margin: 30px 0;
  }

  #splash {
    opacity: 1;
    height: 92vh;
    width: 100%;
    position: fixed;
    overflow: hidden;
    background-image: url("/P1110881.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: white;
    transform: scale(1.05)
  }

  .image-divider {
    top: 100vh;
    position:relative;
    height: 60vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  #firstContent, #secondContent {
    padding: 50px 0 50px 0;
    top: 100vh;
    width: 100%;
    position:relative;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .header, .image {
    -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
  }

  #firstContent {
    -webkit-box-shadow: 0px 20px 19px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 20px 19px 0px rgba(0,0,0,0.6);
    box-shadow: 0px 20px 19px 0px rgba(0,0,0,0.6);
  }

  #secondContent {
    -webkit-box-shadow: 0px 10px 19px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 10px 19px 0px rgba(0,0,0,0.6);
    box-shadow: 0px 10px 19px 0px rgba(0,0,0,0.6);

    -webkit-box-shadow: 0px -10px 19px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px -10px 19px 0px rgba(0,0,0,0.6);
    box-shadow: 0px -10px 19px 0px rgba(0,0,0,0.6);
  }

  .image {
    width: 100%;
    margin: 50px 0 50px 0;
  }

  #news {
    display:flex;
    justify-content: center;
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    #splash {
      background-image: url("../assets/P1110937.jpg");
    }
  }
</style>
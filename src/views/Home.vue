<template>
  <div class="home" @scroll="onScroll">
    <!-- Splash image on front page. -->
    <div id="splash"></div>

    <div id="firstContent">
      <div class="ui container">
        <!-- Album Content Titles -->
        <div class="titles">
          <!-- <p class="pre-title">Nine Worlds out now!</p> -->
          <h2 class="title">NINE WORLDS</h2>
          <!-- <h1 class="subtitle" v-if="!mobile">Nine Worlds</h1> -->
        </div>

        <!-- Album Description -->
        <div class="splash-wrapper">
          <blockquote class="splash-message">
            ALDA’s contemporary instrumental music is full of energetic grooves, majestic harmonies,
            improvisation and satisfying melodies. Based on traditional Nordic types of tunes such as polskas,
            schottisches and waltzes, they have created a mind-blowing piece of art for five-string violin,
            soprano saxophone and piano that transcends borders and genres. Hearing them perform will make you
            smile and dance, bring tears to your eyes and might even make you go a bit crazy. Immerse yourself
            in the furiously groovy world of ALDA!
          </blockquote>
        </div>

        <!-- Album Images -->
        <div class="album-img">
          <img src="../assets/albumfront-sized.webp" alt="" class="image" />
          <img src="../assets/albumback-sized.webp" alt="" class="image" />
        </div>

        <!-- Album Quotes -->
        <Quotes />

        <!-- Stripe payment form for album. -->
        <!-- <Stripe /> -->

        <!-- Additional Listening Resources. -->
        <!-- <div class="listen-on">
          <a href="https://amzn.to/3DIpUQU" target="_blank">
            <img src="/amazonmusic.webp" class="listen-on-img" alt="" srcset="" />
          </a>
          <a href="https://aldasounds.bandcamp.com/releases" target="_blank">
            <img src="/bandcamp.webp" class="listen-on-img" id="listen-on-bandcamp" alt="" srcset="" />
          </a>
          <a href="https://apple.co/2WRzMXZ" target="_blank">
            <img src="/itunes.webp" class="listen-on-img" alt="" srcset="" />
          </a>
        </div> -->
      </div>
    </div>

    <div class="image-divider"></div>

    <div id="secondContent">
      <!-- News Previews. -->
      <!-- <News :preview="true" :articleNumber="3" title="LATEST NEWS" /> -->

      <!-- Dividers -->
      <!-- <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div> -->

      <!-- Upcoming Concert Previews -->
      <Concerts :onlyUpcoming="true" />
    </div>
  </div>
</template>

<script>
// import News from '@/components/News.vue'
import Concerts from '@/components/Concerts.vue'
// import Stripe from '@/components/Stripe.vue'
import Quotes from '@/components/Quotes.vue'

export default {
  name: 'Home',
  components: {
    // News,
    Concerts,
    // Stripe
    Quotes,
  },
  computed: {
    mobile() {
      return screen.width < 992
    },
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

        if (this.mobile) {
          splash.style.backgroundImage = 'url(/P1110768-sized.webp)'
          splash.style.backgroundPosition = 'center right'
        } else {
          splash.style.backgroundImage = 'url(/P1110937-sized.webp)'
          splash.style.backgroundPosition = 'center top'
        }

        splash.style.top = '8vh'

        firstContent.style.backgroundColor = 'white'
        secondContent.style.backgroundColor = 'white'
      } else {
        splash.style.opacity = 1 - scrollPercentage * 1.15
        splash.style.top = `${scrollPercentage * 2 + 8}vh`

        if (this.mobile) {
          splash.style.backgroundImage = 'url(/P1110768-sized.webp)'
          splash.style.backgroundPosition = 'center right'
        } else {
          splash.style.backgroundImage = 'url(/P1110881-sized.webp)'
          splash.style.backgroundPosition = 'center center'
        }

        firstContent.style.backgroundColor = ''
        secondContent.style.backgroundColor = ''
      }
    },
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
  },
}
</script>

<style scoped>
.splash-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-message {
  font-size: 16px;
  line-height: 200%;
  letter-spacing: 1px;
  word-spacing: 2px;
  text-align: center;
  max-width: 900px;
  margin-bottom: 15px;
}

.quotes {
  display: flex;
}

.quote {
  width: 43%;
  margin: 55px 0 35px 0;
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.5px;
  word-spacing: 2px;
}

.quote-text {
  font-size: 21px;
  line-height: 200%;
  letter-spacing: 1px;
  font-family: 'Bad Script', cursive;
}

.album-img {
  display: flex;
  justify-content: space-between;
}

.album-img img {
  max-width: 49%;
}

.footer {
  top: 100vh;
}

.destination-info {
  text-align: center;
  margin-top: 20px;
  opacity: 0.8;
}

#buy-header {
  background-color: #ec3c01;
  margin: 30px 0;
  text-transform: capitalize;
}

#splash {
  opacity: 1;
  height: 92vh;
  width: 100%;
  position: fixed;
  overflow: hidden;
  background-image: url('/P1110881-sized.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
  transform: scale(1.05);
}

.image-divider {
  top: 100vh;
  position: relative;
  height: 70vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#firstContent,
#secondContent {
  padding: 100px 0 100px 0;
  top: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.header,
.image {
  -webkit-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.2);
}

#firstContent {
  -webkit-box-shadow: 0px 20px 19px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 20px 19px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 20px 19px 0px rgba(0, 0, 0, 0.6);
}

#secondContent {
  -webkit-box-shadow: 0px 10px 19px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 10px 19px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 10px 19px 0px rgba(0, 0, 0, 0.6);

  -webkit-box-shadow: 0px -10px 19px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px -10px 19px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px -10px 19px 0px rgba(0, 0, 0, 0.6);
}

.image {
  width: 100%;
  margin: 50px 0 30px 0;
}

#news {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
}

.title {
  font-size: 70px;
  letter-spacing: 5px;
}

.subtitle {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 40px;
  text-align: center;
}

.pre-title {
  letter-spacing: 2px;
}

.title,
.subtitle,
.pre-title {
  line-height: 125%;
}

.listen-on {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 0 0;
}

.listen-on-img {
  max-height: 30px;
  margin: 0 20px;
  image-rendering: optimizeQuality;
}

#listen-on-bandcamp {
  max-height: 20px;
}

.listen-on-img:hover {
  opacity: 1;
}

@media screen and (max-width: 768px) {
  .quotes {
    flex-direction: column;
    width: 100%;
  }

  .quote {
    margin: 0;
  }

  .quote-text {
    font-size: 22px;
  }

  #splash {
    background-image: url('/P1110768-sized.webp');
    background-position: center right;
  }

  #firstContent,
  #secondContent {
    padding: 50px 0;
  }
  #firstContent {
    padding-top: 0;
  }

  .quote {
    margin-bottom: 50px;
  }

  .home {
    height: auto;
  }

  .album-img {
    flex-direction: column;
  }

  .album-img img {
    max-width: none;
    margin: 7px 0;
  }

  .image-divider {
    height: 500px;
  }

  .titles {
    margin: 30px;
  }

  .title {
    font-size: 40px;
  }

  .album-form {
    margin-top: 20px;
  }

  #firstContent,
  #secondContent {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .listen-on {
    flex-direction: column;
    margin: 50px 0 0 0;
  }

  .listen-on-img {
    margin: 20px;
    opacity: 1;
  }
}
</style>

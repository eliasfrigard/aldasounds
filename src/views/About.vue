<template>
  <div class="about">
    <div class="image"></div>
    <div class="band">
      <div class="titles" data-aos="fade-in">
        <p class="pre-title">WE ARE</p>
        <h2 class="title">ALDA</h2>
        <h1 class="subtitle">Welcome to our home on the web.</h1>
      </div>
      <div class="bio ui container">
        <div class="band-image" data-aos="fade-up"></div>
        <div class="band-info" data-aos="fade-in">
          <h2 class="slogan">Furious Nordic groove, divine harmonies and top-notch melodies.</h2>
          <p>{{firstParagraph}}</p>
          <p>{{secondParagraph}}</p>
          <p>{{thirdParagraph}}</p>
        </div>
      </div>

      <div class="musicians ui container">
        <h2 class="title" id="band-members-title" data-aos="fade in">BAND MEMBERS</h2>
        <div class="musician">
          <div class="musician-img elias" data-aos="fade-right"></div>
          <div class="musician-info" data-aos="fade-left">
            <h3 class="musician-name">Elias Frigård</h3>
            <p class="musician-instrument">Soprano- & Baritone Saxophone</p>
            <p class="musician-text">Quisque a lobortis elit, non iaculis nisl. Quisque sem arcu, mollis sed nisl quis, mollis dictum orci. Nulla sagittis ac urna ut semper. Nam at dolor odio. Maecenas id metus sit amet eros egestas sollicitudin et pulvinar mauris. Nulla eu ullamcorper nunc. Pellentesque ut tortor dui.</p>
            
            <div class="musician-meta">
              <div class="musician-contact">
                <p>+46(0)70-6691374</p>
                <a href="mailto:elias@aldasounds.com">elias@aldasounds.com</a>
              </div>
              <a href="http://eliasfrigard.com" target="_blank">www.eliasfrigard.com</a>
            </div>
          </div>
        </div>
        <hr v-if="!mobile">
        <div class="musician musician-veera">
          <div class="musician-info" data-aos="fade-right">
            <h3 class="musician-name">Veera Kuisma</h3>
            <p class="musician-instrument">5-string Violin</p>
            <p class="musician-text">Quisque a lobortis elit, non iaculis nisl. Quisque sem arcu, mollis sed nisl quis, mollis dictum orci. Nulla sagittis ac urna ut semper. Nam at dolor odio. Maecenas id metus sit amet eros egestas sollicitudin et pulvinar mauris. Nulla eu ullamcorper nunc. Pellentesque ut tortor dui.</p>
            <div class="musician-meta">
              <div class="musician-contact">
                <p>+358(0)45-1107182</p>
                <a href="mailto:elias@aldasounds.com">veera@aldasounds.com</a>
              </div>
              <a href="http://eliasfrigard.com" target="_blank">www.veerakuisma.com</a>
            </div>
          </div>
          <div class="musician-img veera" data-aos="fade-left"></div>
        </div>
        <hr v-if="!mobile">
        <div class="musician">
          <div class="musician-img timo" data-aos="fade-right"></div>
          <div class="musician-info" data-aos="fade-left">
            <h3 class="musician-name">Timo Alakotila</h3>
            <p class="musician-instrument">Piano & Harmonium</p>
            <p class="musician-text">Timo Alakotila is one of Finland’s busiest, most versatile and most in-demand musicians, as composer, arranger, pianist and harmonium player in folk, classical, jazz and pop fields. His career began in 1982 in Kaustinen, Finland as harmonium player and founding member of the fiddle group JPP, who quickly established themselves as the best and most innovative fiddle music group in Finland.</p>
            <div class="musician-meta">
              <div class="musician-contact">
                <p>+358(0)50-5116112</p>
                <a href="mailto:timoalakotila@gmail.com">timoalakotila@gmail.com</a>
              </div>
              <a href="http://timoalakotila.com" target="_blank">www.timoalakotila.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import text from '/band-text.json'

export default {
  name: 'About',
  data() {
    return {
      firstParagraph: text[0].firstParagraph,
      secondParagraph: text[0].secondParagraph,
      thirdParagraph: text[0].thirdParagraph
    }
  },
  computed: {
    mobile() {
      return screen.width < 992
    }
  },
  mounted() {
    const footer = document.querySelector('#footer')
    footer.style.top = '100vh'
  },
  unmounted() {
    const footer = document.querySelector('#footer')
    footer.style.top = '0'
  }
}
</script>

<style scoped>
* {
  word-wrap: break-word;
}

.image {
  height: 92vh;
  width: 100%;
  max-width: 100vw;
  background-image: url("/P1110768-sized.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  position: fixed
}

.title {
  font-size: 70px;
  letter-spacing: 5px;
}

.subtitle {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 40px;
}


.pre-title {
  letter-spacing: 2px;
}

.title, .subtitle, .pre-title {
  line-height: 125%;
  max-width: 100%;
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
}

#band-members-title {
  margin: 100px 0;
}

.band {
  padding: 50px 0 50px 0;
  top: 100vh;
  width: 100%;
  background-color: white;
  position:relative;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.bio {
  display:flex;
  flex-direction: column;
}

.band-image, .band-info {
  width: 100%;
  margin: 25px 0;
}

.band-image {
  height: 700px;
  background-image: url("/P1110933-cropped-sized.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 4px;
}

.band-info p, .more-info p, .musician-text {
  font-size: 16px;
  line-height: 185%;
  letter-spacing: 1px;
  word-spacing: 2px;
}

.slogan {
  text-align: center;
  font-family: 'Bad Script', cursive;
  letter-spacing: 5px;
  margin-bottom:40px;
  text-transform: uppercase;
}

.band-image, .musician-img {
  -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
}

.about-us {
  width: 100%;
  height: 100vh;
}

.decorator {
  margin: 100px 0;
}

.musicians {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.musician {
  height: 500px;
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.musician-img {
  height: 500px;
  width: 50%;
  margin: 0 25px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
}

.elias {
  background-image: url("/eliasalt.webp");
}

.veera {
  background-image: url("/veera-sized.webp");
}

.timo {
  background-image: url("/timo-sized.webp");
}


.musician-info {
  width: 50%;
  margin: 0 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.musician-name {
  font-size: 40px;
  font-family: 'Bad Script', cursive;
  letter-spacing: 5px;
}

.musician-instrument {
    font-family: 'Bad Script', cursive;
    font-size: 18px;
    letter-spacing: 3px;
    opacity: 0.8;

}

.musician-meta {
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 10px;
  color: #2c3e50;
  letter-spacing: 1px;
}

.members-title {
  font-size: 50px;
  letter-spacing: 3px;
}

hr {
  width: 100%;
  opacity: 0.2;
}

@media screen and (max-width: 992px) {
  .about {
    height: auto;
  }

  #band-members-title {
    margin: 25px 0;
  }

  .musicians {
    width: 100%;
    overflow:hidden;
  }

  .musician-info {
    margin: 0;
  }

  .band-image {
    width: auto;
    height: 450px;
    margin:0;
  }

  .image {
    width: 100%;
  }

/*   .bio {
    text-align: justify;
  } */

  .slogan {
    line-height: 200%;
    font-size: 18px;
    margin: 10px 0;
  }

  .musician {
    flex-direction: column;
    height: auto;
    margin: 50px 0 0 0;
  }
  
  .musician-meta {
    flex-direction: column;
    height: 92px;
  }

  .musician-info, .musician-img {
    width: 100%;
  }

  .musician-img {
    margin: 0 0 50px 0;
  }

  .musician-veera {
    flex-direction: column-reverse;
  }

  .band-info {
    width: auto;
  }
}
</style>

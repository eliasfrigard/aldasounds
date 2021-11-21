<template>
  <div class="about">
    <div class="image"></div>
    <div class="band">
      <div class="titles" data-aos="fade-in">
        <p class="pre-title">WE ARE</p>
        <h2 class="title" id="band-title">ALDA</h2>
        <h1 class="subtitle">Welcome to our home on the web!</h1>
      </div>
      <div class="bio ui container">
        <div class="band-image" data-aos="fade-in"></div>
        <div class="band-info" data-aos="fade-in">
          <h2 class="slogan">Furious Nordic groove, divine harmonies and top-notch melodies.</h2>
          <p>{{firstParagraph}}</p>
          <p>{{secondParagraph}}</p>
          <p>{{thirdParagraph}}</p>
        </div>
      </div>

      <div class="ui container quotes">
        <div class="ui container quote">
          <p class="quote-text">"The sheer energy, close-woven intricacy of harmony, and consummate musicianship from these three performers makes for some of the most joyous music to come out of the nordic countries in recent years…an absolute delight to listen to!"</p>
          <p class="quote-name">- Natalie Haas, Musician (US)</p>
          <a class="quote-link" href="https://www.nataliehaas.com/home" target="_blank">www.nataliehaas.com</a>
        </div>

        <div class="ui container quote">
          <p class="quote-text">"Aldan valoisa debyyttialbumi pistää tanssijalan vipattamaan, mutta skandinaavishenkisen pelimannipoljennon sekaan mahtuu myös hauskoja rytmisiä jekkuja. Taitava soittajatrio on löytänyt erinomaisen tasapainon."</p>
          <p class="quote-name">- Tove Djupsjöbacka, Journalist (FI)</p>
          <a class="quote-link" href="https://kansanmusiikki-lehti.fi/" target="_blank">www.kansanmusiikki-lehti.fi/</a>
        </div>
      </div>

      <div class="musicians ui container">
        <h2 class="title" id="band-members-title" data-aos="fade in">BAND MEMBERS</h2>
        <div class="musician" v-for="(musician, index) in musicians" :key="musician.name" data-aos="fade in">
          <div class="musician-img-left" :style="{ backgroundImage: 'url(' + musician.image + ')' }" v-if="index % 2 === 0 || mobile" />
          <div class="musician-info">
            <h3 class="musician-name">{{musician.name}}</h3>
            <p class="musician-instrument">{{musician.instrument}}</p>            
            <p class="musician-text">{{musician.description}}</p>
            <div class="musician-meta">
              <div class="musician-contact">
                <p>{{musician.phone}}</p>
                <a :href="'mailto:' + musician.email">{{musician.email}}</a>
              </div>
              <a :href="musician.website" target="_blank">{{musician.website}}</a>
            </div>
          </div>
          <div class="musician-img-right" :style="{ backgroundImage: 'url(' + musician.image + ')' }" v-if="index % 2 === 1 && !mobile" />
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
      thirdParagraph: text[0].thirdParagraph,
      musicians: [
        {
          name: 'Elias Frigård',
          instrument: 'Soprano- & Baritone Saxophone',
          description: 'Elias Frigård is a contemporary saxophone player with roots in traditional and modern folk music as well as jazz and improvisation. He was raised in Gävle, Sweden around the traditional violin music of regions Gästrikland and Hälsingland. In 2017 he moved to Helsinki, Finland and has since then ended up playing music with some of Finland’s most prominent musicians. Elias studied at the Royal College of Music in Stockholm and Sibelius-Academy in Helsinki for some of the best folk and jazz musicians in the world.',
          phone: '+46(0)70-6691374',
          email: 'elias@aldasounds.com',
          website: 'www.eliasfrigard.com',
          image: '/eliasalt.webp'
        },
        {
          name: 'Veera Kuisma',
          instrument: '5-string Violin',
          description: 'Veera Kuisma is from the new generation of Finnish folk fiddlers. She is currently a master student at the Sibelius-Academy in Helsinki, Finland and has previously studied at Berklee College of Music in Boston, US with a full scholarship. She enjoys playing groovy Nordic tunes and composes music inspired by Celtic, American, and Nordic folk traditions. Veera identifies herself as a group musician, playing with others is the best thing she knows!',
          phone: '+358(0)45-1107182',
          email: 'veera@aldasounds.com',
          website: '',
          image: '/veera-sized.webp'
        },
        {
          name: 'Timo Alakotila',
          instrument: 'Piano & Harmonium',
          description: 'Timo Alakotila is one of Finland’s busiest, most versatile and most in-demand musicians, as composer, arranger, pianist and harmonium player in folk, classical, jazz and pop fields. His career began in 1982 in Kaustinen, Finland as harmonium player and founding member of the fiddle group JPP, who quickly established themselves as the best and most innovative fiddle music group in Finland.',
          phone: '+358(0)50-5116112',
          email: 'timoalakotila@gmail.com',
          website: 'www.timoalakotila.com',
          image: '/timo-sized.webp'
        }
      ]
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

.quotes {
  display: flex;
}

.quote {
  width: 43%;
  margin: 55px 0 35px 0;
  text-align: center;
  font-size: 16px;
  letter-spacing: .5px;
  word-spacing: 2px;

}

.quote-text {
  font-size: 21px;
  line-height: 200%;
  letter-spacing: 1px;
  font-family: 'Bad Script', cursive;
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
  margin: 100px 0 70px 0;
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
  line-height: 200%;
  letter-spacing: 1px;
  word-spacing: 2px;
}

.band-info p {
  text-align:justify;
}

.slogan {
  text-align: center;
  font-family: 'Bad Script', cursive;
  letter-spacing: 5px;
  margin:10px 0 50px;
  text-transform: uppercase;
}

.musician-img {
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

.musician-img-left, .musician-img-right {
  height: 500px;
  width: 50%;
  margin: 0 25px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
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
  .quotes {
    flex-direction: column;
    width: 100%;
  }


  .quote-text {
    font-size: 22px;
  }

  .about {
    height: auto;
  }

  #band-members-title {
    margin: 40px 0 30px 0;
  }

  .musicians {
    width: 100%;
    overflow:hidden;
  }

  .musician-info {
    margin: 0;
    text-align: center;
  }

  .band-image {
    width: auto;
    height: 450px;
    margin:0;
  }

  .image {
    width: 100%;
    background-image: url("/P1110937-mobile-sized.webp");
    background-position: center center;
  }

  .band-image {
    background-image: url("/P1110881-sized.webp");
    height: 300px;
  }

  .band-info p {
    text-align:center;
  }

  .bio {
    text-align: justify;
  }

  .slogan {
    line-height: 200%;
    font-size: 20px;
    margin: 35px 0;
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

  .musician-info, .musician-img-left, .musician-img-right {
    width: 100%;
  }

  .musician-img-left, .musician-img-right {
    margin: 0 0 50px 0;
  }

  .band-info {
    width: auto;
  }
  
  .subtitle {
    font-size: 21px;
  }

  .title, .subtitle, .pre-title {
    line-height: 100%;
  }

  .title {
    font-size: 40px;
  }

  #band-title {
    font-size: 90px;
  }
}
</style>

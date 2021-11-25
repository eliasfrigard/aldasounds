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

      <Quotes />

      <svg id="mythology-svg-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#042e42" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,202.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div class="mythology">
        <div class="ui container">
          <div data-aos="fade-in" data-tooltip="Yggdrasil, the giant world tree that holds together the Nine Worlds of Norse mythology." class="" data-position="top center">
            <img id="yggdrasil" src="/yggdrasil.png" alt="" srcset="">
          </div>
          <div class="titles" data-aos="fade-in">
            <h2 class="title" id="mythology-title">MYTHOLOGY OF ALDA</h2>
          </div>
          <p data-aos="fade-in">An old Northern story shares a tale of the mermaid Alda. With melancholy in her beautiful voice, she sang to the fishermen who one after one lost their minds. All except one, Brandur. Despite his daily fishing trips, the young, poor, and hard-working fisherman did not give in to Alda’s alluring voice. Every morning when the sun was still sleeping, Brandur flew along the gloomy bay with fire dancing in his boat. Fire attracted the fish, but also Alda, who day by day came closer to his boat. One day the moment came when he saw a glimpse of her green eyes and wild hair, and at that very moment he jumped from his boat and vanished into the dark water. On silent nights, Alda’s singing may still be heard in the Breiðafjörður bay (ref. Norður & Co).</p>
<!--           <p>Deeply rooted in the rich musical traditions of Finland and Sweden the trio ALDA creates music that share the magical and captivating voice of this mythological creature. ALDA’s contemporary instrumental music is full of energetic grooves, majestic harmonies, improvisation and satisfying melodies. Based on traditional Nordic types of tunes such as polskas, schottisches and waltzes, they have created a mind-blowing piece of art for five-string violin, soprano saxophone and piano that transcends borders and genres. Hearing them perform will make you smile and dance, bring tears to your eyes and might even make you go a bit crazy. Immerse yourself in the furiously groovy world of ALDA!</p>
 -->        </div>
      </div>
      <svg id="mythology-svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#042e42" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,170.7C480,181,600,203,720,192C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

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
              <a :href="'https://' + musician.website" target="_blank">{{musician.website}}</a>
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
import Quotes from '@/components/Quotes.vue'


export default {
  name: 'About',
  components: {
    Quotes,
  },
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

.mythology{
  padding: 100px 0;
  width: 100%;
  background-color: var(--main-color);
}

#mythology-title {
  color:rgba(255, 255, 255, 0.3);
}

.mythology ::selection {
  background-color: white;
  color: var(--main-color);
}

#mythology-svg-bottom {
  transform: rotate(180deg);
  margin-top: -50px;
}

.mythology, .mythology div {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mythology p {
  text-align: center;
  color: white;
  font-size: 16px;
  font-size: 16px;
  line-height: 200%;
  letter-spacing: 1px;
  word-spacing: 2px;
}

#yggdrasil {
  width: 250px;
  height: 250px;
  margin-bottom: 50px;
  opacity: 0.3;
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
  margin: 75px 0;
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
  #mythology-svg-bottom {
    transform: rotate(180deg);
    margin-top: -1px;
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

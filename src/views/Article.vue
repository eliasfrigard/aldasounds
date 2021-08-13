<template>
  <div class="article">
    <div class="ui container content">
      <h1 class="article-title">{{article.title}}</h1>
      <img class="article-image" :src="article.image" alt="" srcset="" @error="noImage">
      <p class="article-author">{{article.author}}</p>
      <p class="article-date">{{computedDate}}</p>
      <p class="article-body">{{article.body}}</p>
    </div>
  </div>  
</template>

<script>
import moment from 'moment'
import news from '/news.json'

export default {
  name: "Article",
  data() {
    return {
      id: this.$route.params.id,
      article: {},
      title: 'New album out now!',
      image: 'P1110937-sized.webp',
      author: 'Veera Kuisma',
      date: '2012-04-23T18:25:43.511Z',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat odio id nulla sollicitudin accumsan. Maecenas lorem dolor, consequat in blandit eget, tempor et massa. Praesent accumsan pellentesque efficitur. Nulla facilisi. Cras fringilla dolor ut dui congue, sollicitudin varius diam facilisis. Fusce porta enim sit amet nisl vulputate, et egestas lacus porttitor. Maecenas mi purus, pellentesque accumsan accumsan sed, egestas eget nisl. Nulla imperdiet ac urna eu interdum. Maecenas euismod erat non commodo consequat.Curabitur sit amet mi sed velit consequat pulvinar. Duis accumsan leo nec turpis dignissim fermentum. Donec aliquam diam est, vel mattis sapien maximus id. Aenean massa diam, commodo sit amet nibh sit amet, posuere bibendum augue. Fusce eget malesuada eros, ac sollicitudin ipsum. Fusce sollicitudin facilisis massa, ac cursus arcu iaculis ullamcorper. Pellentesque sodales, elit a aliquet dignissim, felis odio convallis erat, non porttitor eros purus at arcu.Proin vehicula nibh at pharetra commodo. Aenean lacinia mi ut euismod sagittis. Etiam tincidunt consequat nisl nec feugiat. Vestibulum molestie pharetra ultrices. Sed dapibus neque faucibus pretium porta. Nunc tincidunt nulla ut mauris efficitur placerat. Donec non sem congue, tincidunt ligula non, gravida orci. Phasellus ac semper mauris. Sed placerat tincidunt nulla, nec iaculis augue rutrum sit amet. Cras congue volutpat leo, ut lacinia arcu blandit vitae. Aliquam sit amet varius magna. Phasellus pellentesque lorem ac gravida viverra. Cras iaculis ultricies velit sed ullamcorper. In aliquam enim sit amet aliquet hendrerit. Etiam luctus elit nec odio dictum molestie.In varius placerat tincidunt. Aenean maximus pellentesque mauris eu cursus. Curabitur auctor vehicula enim, in tristique mauris auctor sit amet. Morbi quam nisi, vulputate a ultricies ac, pharetra placerat enim. Vestibulum ultrices magna ligula, nec blandit nulla consectetur tempus. Sed at augue elementum, placerat diam a, posuere tortor. Duis efficitur sem lacus, eget accumsan nisi dictum vulputate. Nam nec lacinia dolor, a gravida orci. Integer venenatis sed arcu vel aliquam.Donec malesuada nisi quis nisl vestibulum, id dignissim quam efficitur. Morbi sed consectetur magna. Nunc in pharetra nibh. Praesent a mi pharetra, scelerisque massa eu, tempor mauris. In hac habitasse platea dictumst. Nullam elementum massa id justo tempor consequat. Mauris commodo fringilla diam eget lobortis. Sed scelerisque tristique vulputate. Quisque tellus massa, gravida in imperdiet nec, egestas et augue. Nam eget nulla nulla. Nulla purus augue, molestie sed elit vel, pharetra dapibus nunc. Donec rhoncus hendrerit nisl eu mattis.',
    }
  },
  methods: {
    noImage() {
      document.querySelector('.article-author').style.marginTop = '0px'
    }
  },
  computed: {
    computedDate() {
      const date = moment(this.article.date).format('Do')
      const month = moment(this.article.date).format('MMMM')
      const year = moment(this.article.date).format('YYYY')

      return `${date} ${month} ${year}`
    }
  },
  created() {  
    const paramID = parseInt(this.$route.params.id)

    news.forEach(newsArticle => {
      if (newsArticle.id === paramID) this.article = newsArticle
    })
  }
}
</script>

<style scoped>
.article {
  min-height: 100vh;
  background-color: white;
}

.content {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.article-title {
  font-family: 'Bad Script', cursive;
  font-size: 60px;
  margin: 60px 0 50px 0;
  letter-spacing: 3px;
  text-align: center;
  line-height: 150%;
}

.article-img {
  height: 650px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 5px;
}

.article-image {
  max-height: 1000px;
  border-radius: 5px;
}

.article-date {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 17px;
  margin-bottom: 20px;
  opacity: 0.8;
}

.article-author {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 30px;
  margin: 45px 0 20px 0;
}

.article-body {
  font-size: 16px;
  line-height: 185%;
  letter-spacing: 1px;
  word-spacing: 2px;
  margin: 10px 0 100px 0;
  max-width: 1000px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .article-image {
    max-width: 100%;
  }

  .article-title {
    margin-top: 40px;
    font-size: 40px;
    line-height: 150%;
  }
}
</style>
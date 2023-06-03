<template>
  <div class="ui container quotes">
    <div class="ui container quote" v-for="quote in quotesArray" :key="quote.id">
      <p class="quote-text">"{{ quote.text }}"</p>
      <p class="quote-name">- {{ quote.author }}, {{ quote.author_title }} ({{ quote.country }})</p>
      <a class="quote-link" :href="'https://' + quote.link" target="_blank">{{ quote.link }}</a>
    </div>
  </div>
</template>

<script>
import quotes from '/quotes.json'

export default {
  name: 'Quotes',
  data() {
    return {
      quotesArray: [],
    }
  },
  async created() {
    quotes.forEach((quote) => {
      this.quotesArray.push(quote)
    })
  },
}
</script>

<style scoped>
.quotes {
  display: flex;
  flex-wrap: wrap;
}

.quote {
  width: 43%;
  margin: 30px 0;
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

@media screen and (max-width: 992px) {
  .quotes {
    flex-direction: column;
    width: 100%;
  }

  .quote-text {
    font-size: 22px;
  }
}
</style>

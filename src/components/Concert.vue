<template>
  <div class="concert">
    <div class="date">
      <p class="day">{{day}}</p>
      <p class="month">{{month}}</p>
      <p class="year">{{year}}</p>
    </div>
    <div class="location">
      <p>{{ location }}, {{ countryUpperCase }} <i :class="flagClass"></i></p>
    </div>
    <div class="description">
      <p>{{description}}</p>
    </div>
    <div class="link" @click="onClick">
      <button>GO TO EVENT</button>
    </div>
  </div>
    <hr v-if="divider">
</template>

<script>
import moment from 'moment'

export default {
  name: 'Concerts',
  props: ['date', 'location', 'country', 'link', 'description', 'divider'],
  data() {
    return {

    }
  },
  computed: {
    countryUpperCase() {
      return this.country.toUpperCase()
    },
    flagClass() {
      console.log(this.country);
      return this.country.toLowerCase() + ' flag'
    },
    day() {
      return moment(this.date).format('DD')
    },
    month() {
      return moment(this.date).format('MMMM')
    },
    year() {
      return moment(this.date).format('YYYY')
    }
  },
  async created () {

  },
  methods: {
    onClick() {
      window.location.href = this.link
    }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  hr {
    width: 95%;
    opacity: 0.15;
  }

  .concert {
    margin: 15px 0 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .link button {
    font-size: 14px;
    letter-spacing: 1.5px;
    font-family: myriad-pro, sans-serif;
    height: 45px;
    width: 150px;
    border: none;
    background-color: #ec3c01;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  }

  .link button:hover {
    background-color: rgb(4, 46, 66);
  }

  .location p {
    font-family: 'Bad Script', cursive;
    font-size: 20px;
    letter-spacing: 2.4px;
  }

  .description {
    max-width: 400px;
  }

  .location {
    max-width: 300px;
  }

  .description p {
    font-size: 16px;
    letter-spacing: 1.3px;
  }

  .date {
    width: 125px;
    display: flex;
    flex-direction: column;
  }

  .date p {
    text-shadow: 0px 5px 6px rgba(41, 41, 41, 0.2);
  }

  .day, .month, .year {
    margin: 0;
    padding: 0;
    line-height: 100%;
  }

  .day {
    text-align: center;
    line-height: 85%;
    margin:0;
    font-size:50px;
  }

  .month {
    margin: 0;
    text-align: center;
    font-size: 24px;
    line-height: 110%;
  }

  .year {
    margin: 0;
    text-align: center;
    font-size: 18px;
  }
</style>

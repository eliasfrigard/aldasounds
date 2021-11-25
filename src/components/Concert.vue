<template>
  <div class="ui container">
    <div class="concert" data-aos="fade-left">
      <div class="date">
        <p class="day">{{day}}</p>
        <p class="month">{{month}}</p>
        <p class="year">{{year}}</p>
      </div>
      <div class="location">
        <p>{{ location }}, {{ country.toUpperCase() }} <i :class="flagClass"></i></p>
      </div>
      <div class="description">
        <p class="mobile-location">{{ location }}, {{ country.toUpperCase() }} <i :class="flagClass"></i></p>
        <p>{{description}}</p>
      </div>
      <div class="links" @click="onClick">
        <button class="stream-link" v-if="streamLink !== undefined">LIVE STREAM</button>
        <button class="stream-link hidden" v-else>LIVE STREAM</button>
        <button class="event-link" v-if="link !== ''">GO TO EVENT</button>
        <button id="event-link-disabled" v-else>GO TO EVENT</button>
      </div>
    </div>
    <div class="mobile-links" @click="onClick">
      <button class="event-link" v-if="link !== ''">GO TO EVENT</button>
      <button id="event-link-disabled" v-else>GO TO EVENT</button>
      <button class="stream-link" v-if="streamLink !== undefined">LIVE STREAM</button>
    </div>
    <hr class="divider" v-if="divider">
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Concerts',
  props: ['date', 'location', 'country', 'link', 'streamLink', 'description', 'divider'],
  computed: {
    flagClass() {
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
  methods: {
    onClick() {
      if (this.link === '') return

      window.open(this.link, '_blank').focus();
    }
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
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .links button, .mobile-links button {
    font-size: 14px;
    letter-spacing: 1.5px;
    font-family: myriad-pro, sans-serif;
    height: 45px;
    width: 150px;
    border: none;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    margin: 0 10px;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  }

  .mobile-links, .mobile-location {
    display: none;
  }

  .stream-link, .event-link:hover {
    background-color: var(--main-color);
  }

  .event-link, #event-link-disabled {
    background-color: #ec3c01;
  }

  #event-link-disabled {
    cursor: default;
    opacity: 0.3;
  }

  .hidden {
    opacity: 0;
  }

  .location p, .mobile-location {
    font-family: 'Bad Script', cursive;
    font-size: 20px;
    letter-spacing: 2.4px;
  }

  .description {
    width: 250px;
    text-align: center;
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

  @media screen and (max-width: 992px) {
    .mobile-links button {
      width: 100%;
      margin: 5px 0;
    }

    .location {
      display: none;
    }
    

    .mobile-location {
      display: block;
    }

    .mobile-links {
      margin: 35px 0;
      display: block;
    }

    .links {
      display: none;
    }

    .divider {
      margin: 15px 0;
    }

    .hidden {
      display:none;
    }
  }
</style>

<template>
  <div class="ui container concerts">
    <div class="upcoming">
      <div class="titles" data-aos="fade-in">
        <h2 class="title">UPCOMING CONCERTS</h2>
      </div>
      <div id="more-concerts-header" class="header" v-if="onlyUpcoming" @click="moreNews">
          <h3>see all concerts</h3>
      </div>
      <Concert class="concert-main" v-for="concert in upcomingConcerts.slice(0, limit)" :key="concert.id" :date="concert.date" :location="concert.location" :country="concert.country" :link="concert.link" :streamLink="concert.streamLink" :description="concert.description" :divider="concert.divider" />
    </div>
    <div class="previous" v-show="!onlyUpcoming" data-aos="fade-in">
      <div class="ui hidden divider"></div>
      <div class="titles" data-aos="fade-in">
        <h2 class="title">PREVIOUS SHOWS</h2>
      </div>
      <Concert class="concert-main" v-for="concert in previousConcerts" :key="concert.id" :date="concert.date" :location="concert.location" :country="concert.country" :link="concert.link" :description="concert.description" :divider="concert.divider" />
    </div>
  </div>
</template>

<script>
import Concert from '@/components/Concert.vue'
import concerts from '/concerts.json'

import moment from 'moment'

export default {
  name: 'Concerts',
  props: {
    onlyUpcoming: {
      type: Boolean,
      default: false
    },
    limit: Number,
  },
  components: {
    Concert,
  },
  data() {
    return {
      upcomingConcerts: [],
      previousConcerts: [],
    }
  },
  async created () {
    // Fetch data from API.

    // Filter upcoming concerts.
    concerts.forEach(concert => {
      if (moment(concert.date).isAfter(new Date())) {
        this.upcomingConcerts.push(concert)
      }
    })

    // Filter past concerts.
    concerts.forEach(concert => {
      if (moment(concert.date).isBefore(new Date())) {
        this.previousConcerts.push(concert)
      }
    })

    // Sort upcoming dates ascending.
    this.upcomingConcerts.sort((a, b) => {
      if (moment(a.date).isBefore(b.date)) return -1 
      else return 1
    })

    // Sort previous dates decending.
    this.previousConcerts.sort((a, b) => {
      if (moment(a.date).isAfter(b.date)) return -1 
      else return 1
    })

    // Emit upcoming concert.
    if (this.upcomingConcerts.length > 0) {
      this.$emit('next-concert', this.upcomingConcerts[0])
    }

    // Add visual dividers.
    this.upcomingConcerts.forEach((concert, index) => {
      if (index + 1 === this.upcomingConcerts.length) {
        concert.divider = false
      } else {
        concert.divider = true
      }
    })

    this.previousConcerts.forEach((concert, index) => {
      if (index + 1 === this.previousConcerts.length) {
        concert.divider = false
      } else {
        concert.divider = true
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .concerts {
    overflow:hidden;
  }

  .upcoming, .previous {
    margin: 50px 0 50px 0;
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 70px;
    letter-spacing: 5px;
    line-height: 125%;
    color: rgb(4, 46, 66);
  }


  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  #more-concerts-header {
    margin: 50px 0;
  }

  #more-concerts-header:hover {
    background-color: #ec3c01;
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 45px;
    }

    #more-concerts-header {
      margin: 0 0 40px 0;
    }
  }
</style>

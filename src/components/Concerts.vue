<template>
  <div class="ui container">
    <div class="upcoming">
      <div class="header">
        <h3>Upcoming Live Performances</h3>
      </div>
      <Concert v-for="concert in upcomingConcerts.slice(0, limit)" :key="concert.id" :date="concert.date" :location="concert.location" :country="concert.country" :link="concert.link" :description="concert.description" :divider="concert.divider" data-aos="fade-up" />
    </div>
    <div class="previous" v-show="!onlyUpcoming">
      <div class="header">
        <h3>Past Shows</h3>
      </div>
      <Concert v-for="concert in previousConcerts" :key="concert.id" :date="concert.date" :location="concert.location" :country="concert.country" :link="concert.link" :description="concert.description" :divider="concert.divider" data-aos="fade-up" />
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
  .upcoming, .previous {
    margin: 50px 0 50px 0;
    display:flex;
    flex-direction: column;
    align-items: center;
  }
</style>

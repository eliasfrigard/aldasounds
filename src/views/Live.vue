<template>
  <div class="live">
    <Timer :date="upcomingConcert.date"/>
    <Concerts @next-concert="setUpcoming"/>
  </div>
</template>

<script>
  import Concerts from '@/components/Concerts.vue'
  import Timer from '@/components/Timer.vue'

  export default {
    name: 'Music',
    components: {
      Concerts,
      Timer,
    },
    data() {
      return {
        upcomingConcert: {}
      }
    },
    methods: {
      setUpcoming(concert) {
        this.upcomingConcert = concert
      }
    },
  }
</script>

<style scoped>

</style>
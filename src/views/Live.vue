<template>
  <div class="live">
    <Timer :date="upcomingConcert.date"/>
    <Concerts @next-concert="setUpcoming"/>
    <div class="image" data-aos="fade-up"></div>
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
  .image {
    height:85vh;
    width: 100%;
    background-image: url("/P1110954-2-sized.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 2s ease;
  }

  .image:hover {
    background-image: url("/P1110954-sized.webp");
    transition: all 2.5s ease;
  }

  @keyframes fade {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
</style>
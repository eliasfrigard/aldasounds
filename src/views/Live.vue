<template>
  <div class="live">
<!--     <Timer :date="upcomingConcert.date"/>
 -->    <Concerts @next-concert="setUpcoming" id="concerts" />
    <div class="image" data-aos="fade-up"></div>
  </div>
</template>

<script>
  import Concerts from '@/components/Concerts.vue'
/*   import Timer from '@/components/Timer.vue'
 */
  export default {
    name: 'Music',
    components: {
      Concerts,
/*       Timer,
 */    },
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
    content:url("/P1110954-2-sized.webp") url("/P1110954-sized.webp");
  }

  .image:hover {
    background-image: url("/P1110954-sized.webp");
    transition: all 2.5s ease;
  }

  #concerts {
    margin-top: 75px;
  }

  @media screen and (max-width: 992px) {
    .image {
      background-position: bottom right
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
</style>
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
  }

  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  .image:hover {
    background-image: url("/P1110954-sized.webp");
    transition: all 2.5s ease;
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